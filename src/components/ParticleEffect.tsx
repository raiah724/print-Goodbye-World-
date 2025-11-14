import { motion } from 'motion/react';

interface ParticleEffectProps {
  count?: number;
  color?: string;
}

export function ParticleEffect({ count = 20, color = '#fbbf24' }: ParticleEffectProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: '50%',
            y: '50%',
            opacity: 1,
            scale: 0,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: 0,
            scale: Math.random() * 2 + 1,
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            ease: 'easeOut',
            delay: Math.random() * 0.5,
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}`,
          }}
        />
      ))}
    </div>
  );
}
