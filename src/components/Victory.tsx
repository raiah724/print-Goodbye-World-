import { motion } from 'motion/react';
import { Trophy, Zap, Target, TrendingUp, Flame, Map } from 'lucide-react';
import { Button } from './ui/button';

interface VictoryProps {
  level: number;
  stats: {
    wins: number;
    adrenalineSurges: number;
    totalDamage: number;
  };
  onNextLevel: () => void;
  onBackToMap?: () => void;
}

export function Victory({ level, stats, onNextLevel, onBackToMap }: VictoryProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="max-w-2xl w-full"
      >
        <div className="bg-slate-800/80 backdrop-blur-xl border-2 border-amber-500/70 rounded-lg p-12 relative overflow-hidden">
          {/* Victory glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-purple-500/20 animate-pulse" />
          
          <div className="relative z-10">
            {/* Victory icon */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="text-center mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <Trophy className="w-24 h-24 text-amber-400 mx-auto mb-4" />
              </motion.div>
              <h1 className="text-amber-400 mb-2">Victory!</h1>
              <p className="text-purple-300">Level {level} Conquered</p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div className="bg-slate-900/50 border border-purple-500/30 rounded-lg p-6 text-center">
                <Target className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-slate-400 mb-1">Total Victories</p>
                <p className="text-purple-300">{stats.wins}</p>
              </div>

              <div className="bg-slate-900/50 border border-amber-500/30 rounded-lg p-6 text-center">
                <TrendingUp className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <p className="text-slate-400 mb-1">Total Damage</p>
                <p className="text-amber-300">{stats.totalDamage.toLocaleString()}</p>
              </div>

              {stats.adrenalineSurges > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: 'spring' }}
                  className="col-span-2 bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/50 rounded-lg p-6 text-center"
                >
                  <Flame className="w-10 h-10 text-red-400 mx-auto mb-2" />
                  <p className="text-slate-300 mb-1">Adrenaline Surges</p>
                  <p className="text-red-400">{stats.adrenalineSurges}</p>
                  <p className="text-slate-400 mt-2">
                    You've achieved victory in the final seconds {stats.adrenalineSurges} time(s)!
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Flavor text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 mb-8 text-center"
            >
              <p className="text-purple-300 italic">
                {level === 1 && "The first step on a long journey. Your code grows stronger."}
                {level > 1 && level < 5 && "Your syntax sharpens. The enemies will grow more cunning."}
                {level >= 5 && level < 10 && "A true warrior emerges. Logic bends to your will."}
                {level >= 10 && "Ancient master of code. Few reach this summit."}
              </p>
            </motion.div>

            {/* Next level button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="space-y-3"
            >
              <Button
                onClick={onNextLevel}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-900 py-6 flex items-center justify-center gap-3"
              >
                <Zap className="w-6 h-6" />
                Proceed to Level {level + 1}
                <Zap className="w-6 h-6" />
              </Button>
              
              {onBackToMap && (
                <Button
                  onClick={onBackToMap}
                  variant="outline"
                  className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
                >
                  <Map className="w-4 h-4 mr-2" />
                  Return to Level Map
                </Button>
              )}
            </motion.div>

            {/* Warning for higher levels */}
            {level >= 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="mt-4 text-center"
              >
                <p className="text-slate-500">
                  {level >= 8 && "⚠️ High-level enemies require multiple strikes. Adrenaline Surges now grant +10s."}
                  {level >= 5 && level < 8 && "⚠️ Enemy health increases significantly from here."}
                  {level >= 3 && level < 5 && "⚠️ Challenges will now test logical thinking."}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}