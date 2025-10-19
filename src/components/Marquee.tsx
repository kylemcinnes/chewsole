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
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    fetch('/api/slogans')
      .then((res) => res.json())
      .then((data) => {
        // Ensure data is an array
        if (Array.isArray(data)) {
          setSlogans(data);
        } else {
          console.error('Slogans API did not return an array:', data);
          setSlogans([]);
        }
      })
      .catch((error) => {
        console.error('Failed to fetch slogans:', error);
        setSlogans([]);
      });
  }, []);
  
  // Don't render until mounted to prevent SSR issues
  if (!mounted) {
    return <div className="bg-accent text-accent-foreground py-3 h-12" />;
  }
  
  // Fallback slogans if API fails
  const fallbackSlogans: Slogan[] = [
    { id: 'fallback-1', text: 'Save the planet! Chew flip-flops!', active: true, weight: 1 },
    { id: 'fallback-2', text: 'From beach to chew.', active: true, weight: 1 },
    { id: 'fallback-3', text: 'The planet\'s first gum with real sole.', active: true, weight: 1 },
  ];
  
  const activeSlogans = slogans.length > 0 ? slogans : fallbackSlogans;
  
  // Duplicate slogans for seamless loop - ensure it's an array
  const displaySlogans = [...activeSlogans, ...activeSlogans, ...activeSlogans];
  
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

