import type { ReactNode } from "react";

export interface NavBarProps {
    brand:string;
    items: string[]
}

export interface SectionProps {
    title: string;
    description: string;
    imageSrc: string;
    sectionName:string;
    directionClass?: string; 
    bgClass?: string;
    btnText?: string;
    icon?: ReactNode;
    className?: string;
    titleClass?:string;
    descClass?:string;
}

export interface ShadowCircleProps {
    className?: string;
}

export interface TrustedByProps {
    desc:string;
    companies:string[];
}

export interface CardProps {
    img: string,
    name: string,
    desc: string,
}

export interface SliderProps {
    sectionName: string;
    title: string;
    cards: CardProps[];
}

export interface list {
    title: string;
    items: string[]
}

export interface FooterProps {
    lists: list[];
    Copyright: string;
    className?:string;
}