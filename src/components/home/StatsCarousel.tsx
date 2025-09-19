import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  color: string;
}

interface StatsCarouselProps {
  stats: Stat[];
}

const StatsCarousel: React.FC<StatsCarouselProps> = ({ stats }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [stats.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + stats.length) % stats.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stats.length);
  };

  const currentStat = stats[currentIndex];
  const IconComponent = currentStat.icon;

  return (
    <div className="relative">
      <div className="flex items-center justify-between">
        <button
          onClick={goToPrevious}
          className="p-2 text-gray-400 hover:text-purple-900 transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="text-center flex-1">
          <div className="flex justify-center mb-3">
            <IconComponent className={`h-8 w-8 ${currentStat.color}`} />
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-1">
            {currentStat.value}
          </div>
          <div className="text-sm text-gray-600 leading-tight">
            {currentStat.label}
          </div>
        </div>

        <button
          onClick={goToNext}
          className="p-2 text-gray-400 hover:text-purple-900 transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {stats.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-purple-900' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsCarousel;