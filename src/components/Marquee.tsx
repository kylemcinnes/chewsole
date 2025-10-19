'use client';

import { useEffect, useState } from 'react';

interface Slogan {
  id: string;
  text: string;
  active: boolean;
  weight: number;
}

export function Marquee() {
  const [slogans, setSlogans] = useState<Slogan[]>([]);
  
  useEffect(() => {
    fetch('/api/slogans')
      .then((res) => res.json())
      .then((data) => setSlogans(data))
      .catch(console.error);
  }, []);
  
  // Duplicate slogans for seamless loop
  const displaySlogans = [...slogans, ...slogans, ...slogans];
  
  return (
    <div className="bg-accent text-accent-foreground py-3 overflow-hidden relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {displaySlogans.map((slogan, idx) => (
          <span
            key={`${slogan.id}-${idx}`}
            className="mx-8 text-sm md:text-base font-medium"
          >
            {slogan.text}
          </span>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

