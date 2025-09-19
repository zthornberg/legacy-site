import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface GlassMenuPanelProps {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  'data-testid'?: string;
}

const GlassMenuPanel: React.FC<GlassMenuPanelProps> = ({ 
  children, 
  isOpen, 
  className,
  onMouseEnter,
  onMouseLeave,
  'data-testid': testId
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ 
            duration: 0.18,
            ease: [0.22, 1, 0.36, 1] 
          }}
          className={cn(
            'bg-white/95 backdrop-blur-xl border border-white/40 shadow-glass rounded-2xl ring-1 ring-black/5 py-2 absolute top-full left-0 mt-2 z-70',
            className
          )}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          data-testid={testId}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlassMenuPanel;