import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getImageUrl(keyword: string, width: number = 800, height: number = 600): string {
  const encodedKeyword = encodeURIComponent(keyword);
  return `https://images.unsplash.com/photo-${Math.random().toString(36).substring(2, 15)}?w=${width}&h=${height}&fit=crop&q=80`;
}

export function getFallbackImage(category: string): string {
  const fallbackImages = {
    'Photography': '/assets/ai/camera.jpg',
    'Drones': '/assets/ai/drone.jpg',
    'Power Tools': '/assets/ai/power-tools.jpg',
    'Musical Equipment': '/assets/ai/music.jpg',
    'Lighting': '/assets/ai/lighting.jpg',
    'AV Equipment': '/assets/ai/av-equipment.jpg',
    'Action Cameras': '/assets/ai/action-camera.jpg',
    'Woodworking': '/assets/ai/woodworking.jpg',
    'Generators': '/assets/ai/generator.jpg',
  };
  
  return fallbackImages[category as keyof typeof fallbackImages] || '/assets/ai/equipment.jpg';
}

export function calculateDays(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function calculateTotalPrice(pricePerDay: number, days: number): number {
  return pricePerDay * days;
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password: string): boolean {
  return password.length >= 8;
}

export function getRatingStars(rating: number): string[] {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('full');
  }
  
  if (hasHalfStar) {
    stars.push('half');
  }
  
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push('empty');
  }
  
  return stars;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
