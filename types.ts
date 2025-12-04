import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
    icon: LucideIcon;
    title: string;
    description: string;
    features: string[];
}

export interface Review {
    name: string;
    location: string;
    text: string;
    rating: number;
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface PricingPlan {
    name: string;
    price: string;
    priceSuffix?: string;
    description: string;
    features: string[];
    isPopular?: boolean;
}

export interface BlogPost {
    category: string;
    title: string;
    excerpt: string;
    imageUrl: string;
}