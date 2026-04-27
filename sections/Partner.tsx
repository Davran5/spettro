import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../components/Button';
import { GlassCard } from '../components/GlassCard';
import { SectionProps } from '../types';
import { useLanguage } from '../LanguageContext';
import { getLocalizedBrochurePath } from '../routing';
import { submitForm } from '../formApi';
import { CONTACT } from '../constants';

type InterestType = 'roadMarking' | 'decorative' | 'industrial' | 'distributor';

export const Partner: React.FC<SectionProps> = ({ id }) => {
    const { t, language } = useLanguage();
    const brochurePath = getLocalizedBrochurePath(language);

    // Initialize interest as empty string to force selection
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        interest: '' as InterestType | '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);
    const [attemptedSubmit, setAttemptedSubmit] = useState(false);

    const formText = t.partner.form;

    const renderContactLinks = (isMobile: boolean) => (
        <div className={`flex flex-col ${isMobile ? 'gap-3 mt-2' : 'gap-4'}`}>
            <a
                href={CONTACT.phoneHref}
                className={`flex items-center gap-4 text-white transition-colors hover:text-spettro-orange ${isMobile ? 'justify-center' : ''}`}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className={`font-mono ${isMobile ? 'text-lg' : 'text-xl xl:text-2xl'} leading-none`}>{CONTACT.phoneDisplay}</span>
            </a>
            <a
                href={CONTACT.emailHref}
                className={`flex items-center gap-4 text-gray-200 transition-colors hover:text-spettro-orange ${isMobile ? 'justify-center' : ''}`}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className={`font-mono ${isMobile ? 'text-base' : 'text-lg xl:text-xl'} break-all leading-none`}>{CONTACT.email}</span>
            </a>
        </div>
    );

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setAttemptedSubmit(true);

        // Validate all fields
        if (!formData.interest || !formData.name || !formData.phone || !formData.email || !formData.message) {
            return;
        }

        setStatus('submitting');

        try {
            await submitForm({
                formType: 'partner',
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                interest: formData.interest,
                message: formData.message
            });

            setStatus('success');
            setFormData({ ...formData, name: '', phone: '', email: '', message: '', interest: '' });
            setAttemptedSubmit(false);

            // Reset success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);

        } catch (error) {
            console.error("Submission Error", error);
            setStatus('error');
        }
    };

    const interestOptions = [
        { id: 'roadMarking', label: formText?.interests?.roadMarking || 'Road Marking' },
        { id: 'decorative', label: formText?.interests?.decorative || 'Decorative Coatings' },
        { id: 'industrial', label: formText?.interests?.industrial || 'Industrial Coatings' },
        { id: 'distributor', label: formText?.interests?.distributor || 'Become Distributor' }
    ];

    // Helper to render form content (reused for Desktop Embed and Mobile Modal)
    const renderFormContent = (isMobile: boolean, showHeader: boolean = true) => {
        // Styling helpers for validation
        const hasError = (value: string) => attemptedSubmit && !value;

        // COMPACT MODE FOR MOBILE
        const paddingClass = isMobile ? "p-3" : "p-3";
        const gapClass = isMobile ? "gap-4" : "gap-6";
        const gridGapClass = isMobile ? "gap-3" : "gap-6";
        const labelMargin = isMobile ? "mb-1.5" : "mb-2";
        const textSize = isMobile ? "text-sm" : "text-base";

        const inputBaseClass = `w-full bg-black border ${paddingClass} text-white outline-none transition-all duration-300 font-sans placeholder-gray-600 focus:bg-black ${textSize}`;
        const normalClass = "border-white/20 focus:border-spettro-orange";
        const errorClass = "border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]";
        const labelBaseClass = `block text-xs font-mono uppercase tracking-[0.2em] ${labelMargin} transition-colors`;

        return (
            <>
                {status === 'success' ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center animate-fade-in">
                        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h3 className="font-display text-2xl text-white mb-2">Application Received</h3>
                        <p className="text-gray-400">Our team will contact you shortly.</p>
                        <Button className="mt-8" onClick={() => setStatus('idle')}>Send Another</Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className={`flex flex-col ${gapClass}`}>

                        {/* Header (Optional based on layout) */}
                        {showHeader && (
                            <div className="mb-2">
                                <h3 className={`font-display uppercase tracking-wider mb-1 text-white ${isMobile ? "text-xl" : "text-2xl"}`}>{formText?.header || 'Start Application'}</h3>
                                <p className={`text-gray-400 ${isMobile ? "text-xs" : "text-sm"}`}>{formText?.subHeader || 'Select your area of interest below.'}</p>
                            </div>
                        )}

                        {/* Interest Selection - Mobile Dropdown vs Desktop Grid */}
                        {isMobile ? (
                            <div className="group">
                                <label className={`${labelBaseClass} ${hasError(formData.interest) ? 'text-red-500' : 'text-spettro-orange group-focus-within:text-white'}`}>
                                    I am interested in:
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.interest}
                                        onChange={(e) => setFormData({ ...formData, interest: e.target.value as InterestType })}
                                        className={`${inputBaseClass} appearance-none cursor-pointer ${hasError(formData.interest) ? errorClass : normalClass}`}
                                    >
                                        <option value="" disabled className="text-gray-500">Select a topic...</option>
                                        {interestOptions.map((opt) => (
                                            <option key={opt.id} value={opt.id} className="bg-black text-white py-2">{opt.label}</option>
                                        ))}
                                    </select>
                                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-white/50">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 transition-all duration-300 rounded ${hasError(formData.interest) ? 'p-2 border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : ''}`}>
                                {interestOptions.map((opt) => (
                                    <button
                                        key={opt.id}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, interest: opt.id as InterestType })}
                                        className={`
                                    relative overflow-hidden p-3 rounded border text-center transition-all duration-300
                                    ${formData.interest === opt.id
                                                ? 'border-spettro-orange bg-spettro-orange/10 text-white'
                                                : 'border-white/10 hover:border-white/30 text-gray-400 hover:text-white bg-white/[0.05]'
                                            }
                                `}
                                    >
                                        {formData.interest === opt.id && (
                                            <div className="absolute top-0 right-0 w-2 h-2 bg-spettro-orange shadow-[0_0_8px_#ff5722]"></div>
                                        )}
                                        <span className="text-xs font-bold uppercase tracking-wider block leading-tight">
                                            {opt.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Inputs */}
                        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridGapClass}`}>
                            <div className="group">
                                <label className={`${labelBaseClass} ${hasError(formData.name) ? 'text-red-500' : 'text-spettro-orange group-focus-within:text-white'}`}>{formText?.nameLabel || 'Full Name'}</label>
                                <input
                                    type="text"
                                    className={`${inputBaseClass} ${hasError(formData.name) ? errorClass : normalClass}`}
                                    placeholder={formText?.nameLabel}
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="group">
                                <label className={`${labelBaseClass} ${hasError(formData.phone) ? 'text-red-500' : 'text-spettro-orange group-focus-within:text-white'}`}>{formText?.phoneLabel || 'Phone Number'}</label>
                                <input
                                    type="tel"
                                    className={`${inputBaseClass} ${hasError(formData.phone) ? errorClass : normalClass}`}
                                    placeholder="+998 ..."
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className={`${labelBaseClass} ${hasError(formData.email) ? 'text-red-500' : 'text-spettro-orange group-focus-within:text-white'}`}>{formText?.emailLabel || 'Email Address'}</label>
                            <input
                                type="email"
                                className={`${inputBaseClass} ${hasError(formData.email) ? errorClass : normalClass}`}
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="group">
                            <label className={`${labelBaseClass} ${hasError(formData.message) ? 'text-red-500' : 'text-spettro-orange group-focus-within:text-white'}`}>{formText?.messageLabel || 'Project Details / Message'}</label>
                            <textarea
                                rows={isMobile ? 2 : 3}
                                className={`${inputBaseClass} resize-none ${hasError(formData.message) ? errorClass : normalClass}`}
                                placeholder="..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        {/* Submit */}
                        <div className="mt-2">
                            <Button type="submit" className={`w-full ${isMobile ? "py-3 text-sm" : ""}`} disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : (formText?.submit || 'Submit Request')}
                            </Button>
                        </div>

                        {!isMobile && (
                            <p className="text-center text-xs text-gray-500 uppercase tracking-wider">
                                {formText?.note || 'We typically respond within 24 hours.'}
                            </p>
                        )}
                    </form>
                )}
            </>
        );
    };

    return (
        <section id={id} className="relative py-20 md:py-32 bg-transparent text-white overflow-hidden">

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-24 items-start">

                    {/* Text Content (Left) */}
                    <div className="order-1 flex flex-col justify-center h-full pt-0 lg:pt-10">
                        <span className="text-spettro-orange font-mono text-sm tracking-[0.3em] uppercase mb-4 block animate-pulse font-bold">
                            {t.partner.tag}
                        </span>
                        <h2 className="font-display text-5xl md:text-7xl font-bold mb-4 md:mb-8 leading-tight">
                            {t.partner.title}
                        </h2>
                        <p className="text-xl text-gray-200 font-light mb-6 lg:mb-10 leading-relaxed border-l-2 border-white/20 pl-6">
                            {t.partner.description}
                        </p>

                        {/* Mobile: Start Application Button */}
                        <div className="lg:hidden mt-8 w-full flex flex-col gap-4">
                            <Button onClick={() => setIsMobileFormOpen(true)} className="w-full">
                                {formText?.header || 'Start Application'}
                            </Button>
                            <Button
                                onClick={() => window.location.href = brochurePath}
                                className="w-full font-bold"
                            >
                                {t.partner.brochureButton}
                            </Button>
                            {renderContactLinks(true)}
                        </div>

                        {/* Desktop: Contact Info (Hidden on Mobile) */}
                        <div className="hidden lg:block mt-8">
                            <div className="mb-8">
                                <Button
                                    onClick={() => window.location.href = brochurePath}
                                    className="px-8 font-bold"
                                >
                                    {t.partner.brochureButton}
                                </Button>
                            </div>
                            {renderContactLinks(false)}
                        </div>
                    </div>

                    {/* Embedded Form (Right - Desktop Only) */}
                    <div className="order-2 w-full hidden lg:block">
                        <GlassCard className="p-8 md:p-10 border-white/10 bg-[#050505]/95 backdrop-blur-xl" style={{ boxShadow: '0 0 60px rgba(0,0,0,0.9)' }}>
                            {renderFormContent(false, true)}
                        </GlassCard>

                        {/* Decorative background blurs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 border border-spettro-orange/10 rounded-full z-0 hidden lg:block animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Mobile Modal Form Popup */}
            {isMobileFormOpen && createPortal(
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-fade-in"
                        onClick={() => setIsMobileFormOpen(false)}
                    />

                    {/* Modal Card */}
                    <div className="relative w-full max-w-lg z-10 animate-scale-in">
                        <GlassCard className="!p-0 border-white/10 bg-[#101010] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">

                            {/* Fixed Header */}
                            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-white/5 shrink-0">
                                <h3 className="font-display text-xl uppercase tracking-wider text-white">
                                    {formText?.header || 'Start Application'}
                                </h3>
                                <button
                                    onClick={() => setIsMobileFormOpen(false)}
                                    className="p-2 -mr-2 text-gray-400 hover:text-white bg-transparent hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                </button>
                            </div>

                            {/* Scrollable Content */}
                            <div className="p-6 overflow-y-auto custom-scrollbar">
                                <p className="text-sm text-gray-400 mb-6">
                                    {formText?.subHeader || 'Select your area of interest below.'}
                                </p>

                                {/* Render form WITHOUT header since we have a fixed one */}
                                {renderFormContent(true, false)}
                            </div>

                        </GlassCard>
                    </div>
                </div>,
                document.body
            )}

        </section>
    );
};
