export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  text: string;
  rating: number;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  message: string;
}
