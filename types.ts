
export interface Product {
  id: string;
  name: string;
  type: string;
  subhead: string;
  description: string;
  image: string;
  specs: readonly string[];
  gallery?: readonly string[];
  dataSheet?: readonly {
    label: string;
    value: string;
  }[];
}

export interface ColorSwatch {
  id: string;
  name: string;
  hex: string;
  overlayColor: string;
}

export interface SectionProps {
  id?: string;
}
