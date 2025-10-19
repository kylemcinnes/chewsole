'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface FlavorCarouselProps {
  flavors: string[];
  selectedFlavor: string;
  onSelectFlavor: (flavor: string) => void;
}

const flavorColors: Record<string, string> = {
  'Ocean Mint': 'from-cyan-500/20 to-teal-500/20',
  'Bubble Reef': 'from-blue-500/20 to-purple-500/20',
  'Lemon Tread': 'from-yellow-500/20 to-amber-500/20',
  'Tropical Toe': 'from-orange-500/20 to-pink-500/20',
  'Midnight Asphalt': 'from-gray-700/20 to-gray-900/20',
};

export function FlavorCarousel({ flavors, selectedFlavor, onSelectFlavor }: FlavorCarouselProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {flavors.map((flavor) => {
        const isSelected = flavor === selectedFlavor;
        const gradient = flavorColors[flavor] || 'from-accent/20 to-accent/10';
        
        return (
          <motion.div
            key={flavor}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card
              onClick={() => onSelectFlavor(flavor)}
              className={`p-6 cursor-pointer transition-all ${
                isSelected
                  ? 'border-accent border-2 border-glow'
                  : 'border-border hover:border-accent/50'
              }`}
            >
              <div className={`h-24 rounded-lg bg-gradient-to-br ${gradient} mb-4 flex items-center justify-center`}>
                <motion.div
                  animate={isSelected ? { rotate: 360 } : {}}
                  transition={{ duration: 0.5 }}
                  className={`w-12 h-12 rounded-full ${
                    isSelected ? 'bg-accent' : 'bg-card'
                  } border-2 border-accent/30`}
                />
              </div>
              <h3 className={`text-center font-semibold ${isSelected ? 'text-accent' : 'text-foreground'}`}>
                {flavor}
              </h3>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

