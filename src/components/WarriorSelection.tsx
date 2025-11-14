import { motion } from 'motion/react';
import { WARRIOR_LANGUAGES } from '../data/warrior-languages';
import type { WarriorLanguage } from '../data/warrior-languages';

interface WarriorSelectionProps {
  onSelectWarrior: (warrior: WarriorLanguage) => void;
}

export function WarriorSelection({ onSelectWarrior }: WarriorSelectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-6xl mb-4 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
            Ancient Coding Warriors
          </h1>
          <p className="text-2xl text-purple-300 mb-2">
            Choose Your Warrior Class
          </p>
          <p className="text-lg text-purple-400 max-w-3xl mx-auto">
            Each warrior represents a programming language with unique philosophy and style. 
            Master the fundamentals through combat trials that test logic, not syntax.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WARRIOR_LANGUAGES.map((warrior, index) => {
            const Icon = warrior.icon;
            
            return (
              <motion.button
                key={warrior.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => onSelectWarrior(warrior)}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border-2 border-purple-500/30 hover:border-amber-400/50 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 text-left"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${warrior.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-full bg-gradient-to-br ${warrior.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-amber-300 group-hover:text-amber-200 transition-colors">
                        {warrior.name}
                      </h3>
                      <p className="text-sm text-purple-400">
                        {warrior.role}
                      </p>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <p className="text-lg text-purple-300 mb-3 italic">
                    {warrior.title}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm text-purple-200/80 leading-relaxed mb-4">
                    {warrior.description}
                  </p>
                  
                  {/* Philosophy */}
                  <div className="border-t border-purple-500/30 pt-4 mt-4">
                    <p className="text-xs text-purple-300/70 italic">
                      "{warrior.philosophy}"
                    </p>
                  </div>
                  
                  {/* Symbolism */}
                  <div className="mt-4 bg-slate-900/50 rounded p-3 border border-purple-500/20">
                    <p className="text-xs text-slate-400">
                      <span className="text-amber-400">⚡</span> {warrior.symbolism}
                    </p>
                  </div>
                  
                  {/* Decorative runes */}
                  <div className="mt-6 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1.5 h-1.5 rounded-full bg-amber-400/30 group-hover:bg-amber-400 transition-colors"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <div className="absolute inset-0 rounded-lg border-2 border-amber-400/50 animate-pulse" />
                </div>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-purple-300/70 italic text-lg">
            All paths lead to mastery through understanding, not memorization.
          </p>
          <p className="text-purple-400/60 mt-2 text-sm">
            40 handcrafted levels • 4 chapters • Logic-focused challenges
          </p>
        </motion.div>
      </div>
    </div>
  );
}
