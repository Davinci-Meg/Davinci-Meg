'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
    const { ref, isVisible } = useScrollAnimation();

    return (
        <section
            id={id}
            ref={ref as React.RefObject<HTMLElement>}
            className={`fade-in-section ${isVisible ? 'is-visible' : ''} py-24 ${className}`}
        >
            {children}
        </section>
    );
}
