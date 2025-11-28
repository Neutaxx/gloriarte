export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  color: string; // Tailwind class for background
  textColor: string;
}

export interface FloatingItem {
  id: number;
  type: 'image' | 'icon';
  src?: string; // For images
  iconName?: string; // For Lucide icons
  top: string;
  left?: string;
  right?: string;
  size: string;
  delay: string;
  rotation: string;
}
