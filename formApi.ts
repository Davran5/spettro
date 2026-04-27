export const FORM_ENDPOINT = '/api/form-submit.php';

type PartnerInterest = 'roadMarking' | 'decorative' | 'industrial' | 'distributor';

const interestMapping: Record<PartnerInterest, string> = {
  roadMarking: 'Road Marking',
  decorative: 'Decorative Coatings',
  industrial: 'Industrial Coatings',
  distributor: 'Become Distributor'
};

interface SubmitFormPayload {
  formType: 'partner' | 'contact';
  name: string;
  email: string;
  phone?: string;
  interest?: PartnerInterest | '';
  message: string;
}

export async function submitForm(payload: SubmitFormPayload) {
  const body = {
    ...payload,
    interest: payload.interest ? interestMapping[payload.interest as PartnerInterest] || payload.interest : ''
  };

  const response = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}
