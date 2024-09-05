"use client";

import React from "react";

interface CircleProgressProps {
    value: number; // Valor a mostrar en el círculo
    size?: number; // Tamaño del SVG (opcional)
    radius?: number; // Radio del círculo (opcional)
}

export default function Circleprogress({ value, size = 50, radius = 10 }: CircleProgressProps) {
    const circumference = 2 * Math.PI * radius;

    return (
        <div className="flex items-center justify-center">
            <div className="font-semibold text-black ">
                {value}%
            </div>
            <svg
                className="rotate-[-90deg]"
                width={size}
                height={size}
            >
                <circle
                    className="text-gray-200"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <circle
                    className="text-black-200"
                    strokeWidth="3"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - (value / 100) * circumference}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
        </div>
    );
}
