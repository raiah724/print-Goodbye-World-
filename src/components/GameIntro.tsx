import { motion } from 'motion/react';
import { Sparkles, Code, Zap } from 'lucide-react';
import { Button } from './ui/button';

interface GameIntroProps {
  onComplete: () => void;
}

export function GameIntro({ onComplete }: GameIntroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-4xl w-full text-center"
      >
        {/* Title with glow effect */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="relative mb-8"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute inset-0 blur-3xl bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500"
          />
          
          <div className="relative">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Sparkles className="w-12 h-12 text-amber-400" />
              <Code className="w-16 h-16 text-purple-400" />
              <Zap className="w-12 h-12 text-amber-400" />
            </div>
            <h1 className="text-amber-400 mb-4">Ancient Coding Warriors</h1>
            <p className="text-purple-300">A Mythic Coding Conquest</p>
          </div>
        </motion.div>

        {/* Story text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4 mb-12"
        >
          <div className="bg-slate-800/60 backdrop-blur-xl border border-purple-500/30 rounded-lg p-8 text-left">
            <p className="text-slate-300 mb-4">
              In an age where code shapes reality and syntax holds power, ancient temples 
              stand as monuments to the first programmers—warriors who wielded logic as their blade 
              and algorithms as their shield.
            </p>
            <p className="text-slate-300 mb-4">
              You are the newest initiate, entering the Temple of Code. Within these digital halls, 
              mystical creatures born from bugs, loops, and broken logic await. Each beast can only 
              be defeated through the mastery of programming fundamentals.
            </p>
            <p className="text-purple-300 italic">
              Your journey begins with a single spell. Complete it, and the path forward shall reveal itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-800/40 backdrop-blur-xl border border-amber-500/30 rounded-lg p-6">
              <Sparkles className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <h3 className="text-amber-300 mb-2">Battle with Code</h3>
              <p className="text-slate-400">
                Complete coding challenges under time pressure to damage mythical enemies
              </p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl border border-purple-500/30 rounded-lg p-6">
              <Code className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-purple-300 mb-2">Evolving Difficulty</h3>
              <p className="text-slate-400">
                Each level brings new challenges that test deeper programming concepts
              </p>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl border border-blue-500/30 rounded-lg p-6">
              <Zap className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-blue-300 mb-2">Learn & Conquer</h3>
              <p className="text-slate-400">
                Access the Arsenal library when defeated to master fundamental concepts
              </p>
            </div>
          </div>
        </motion.div>

        {/* Start button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Button
            onClick={onComplete}
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-900 px-12 py-6"
          >
            Begin Your Journey
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}