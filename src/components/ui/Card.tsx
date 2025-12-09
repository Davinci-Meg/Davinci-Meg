import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
    return (
        <div
            className={`swiss-card ${hover ? 'hover:shadow-lg' : ''} ${className}`}
        >
            {children}
        </div>
    );
}
