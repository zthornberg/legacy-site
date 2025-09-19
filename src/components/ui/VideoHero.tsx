import React from 'react';
import { motion } from 'framer-motion';

interface VideoHeroProps {
  children: React.ReactNode;
  className?: string;
}

const VideoHero: React.FC<VideoHeroProps> = ({ children, className }) => {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
        >
          <source src="/media/hero.webm" type="video/webm" />
          <source src="/media/hero.mp4" type="video/mp4" />
        </video>
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink/80 via-ink/60 to-ink/40" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
};

export default VideoHero;