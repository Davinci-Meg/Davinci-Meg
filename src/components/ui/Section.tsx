'use client';

import React from 'react';


interface SectionProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export function Section({ children, className = '', id }: SectionProps) {
    return (
        <section
            id={id}
            className={`py-24 ${className}`}
        >
            {children}
        </section>
    );
}
