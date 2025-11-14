import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { EXPANDED_ARSENAL } from '../data/expanded-arsenal';
import { getWarriorLanguage } from '../data/warrior-languages';
import type { ArsenalCategory } from '../types/game';

interface ExpandedArsenalProps {
  level: number;
  languageId: string;
  onRetry: () => void;
}

export function ExpandedArsenal({ level, languageId, onRetry }: ExpandedArsenalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<number>(0);
  
  const warrior = getWarriorLanguage(languageId);
  const currentCategory = EXPANDED_ARSENAL.find(cat => cat.id === selectedCategory);

  return (
    <div className="min-h-screen p-8 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.8 }}
          >
            <BookOpen className="w-20 h-20 text-amber-400 mx-auto mb-4" />
          </motion.div>
          <h1 className="text-amber-400 mb-2">The Sacred Arsenal</h1>
          <p className="text-purple-300">Ancient Codex of Programming Wisdom</p>
          {warrior && (
            <p className="text-slate-400 mt-2">
              Studied by the {warrior.role} • {warrior.name} Archives
            </p>
          )}
          <p className="text-red-400 mt-4 italic">
            "You have fallen at Level {level}, but knowledge is the path to victory."
          </p>
        </div>

        {/* Main content */}
        {!selectedCategory ? (
          // Category grid
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {EXPANDED_ARSENAL.map((category, idx) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className="bg-slate-800/80 backdrop-blur-xl border-2 border-purple-500/50 rounded-lg p-8 text-left hover:border-purple-400 transition-all relative overflow-hidden group"
                >
                  {/* Glowing effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-500/0 group-hover:from-purple-500/10 group-hover:to-transparent transition-all" />
                  
                  <category.icon className="w-12 h-12 text-purple-400 mb-4 relative z-10" />
                  <h3 className="text-purple-300 mb-2 relative z-10 text-xl">{category.title}</h3>
                  <p className="text-slate-400 relative z-10 text-sm mb-3">
                    {category.lessons.length} comprehensive lessons
                  </p>
                  
                  <div className="flex items-center text-purple-400 text-sm relative z-10">
                    <span>Study this knowledge</span>
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </div>
                </motion.button>
              ))}
            </div>
            
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6 text-center">
              <p className="text-purple-300 mb-2">
                💡 <strong>Warrior's Wisdom:</strong> The Arsenal contains everything you need to master programming fundamentals.
              </p>
              <p className="text-purple-200/80 text-sm">
                Study patterns and concepts, not just syntax. Every challenge in battle tests understanding, not memorization.
              </p>
            </div>
          </>
        ) : (
          // Lesson view
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <Button
              onClick={() => setSelectedCategory(null)}
              variant="ghost"
              className="text-purple-300 hover:text-purple-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Arsenal Categories
            </Button>

            {currentCategory && (
              <>
                <div className="bg-slate-800/80 backdrop-blur-xl border-2 border-amber-500/50 rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <currentCategory.icon className="w-10 h-10 text-amber-400" />
                    <h2 className="text-amber-400 text-2xl">{currentCategory.title}</h2>
                  </div>

                  {/* Lesson tabs */}
                  <div className="flex gap-2 mb-6 flex-wrap">
                    {currentCategory.lessons.map((lesson, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedLesson(idx)}
                        className={`px-4 py-2 rounded transition-all ${ selectedLesson === idx
                            ? 'bg-purple-600 text-white shadow-lg scale-105'
                            : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                        }`}
                      >
                        {lesson.title}
                      </button>
                    ))}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedLesson}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      {/* Lesson content */}
                      <div className="bg-slate-900/50 rounded-lg p-6 border border-purple-500/30">
                        <h3 className="text-purple-300 mb-3 text-xl">
                          {currentCategory.lessons[selectedLesson].title}
                        </h3>
                        <p className="text-slate-300 mb-4 leading-relaxed">
                          {currentCategory.lessons[selectedLesson].description}
                        </p>
                        <div className="bg-amber-500/10 border border-amber-500/30 rounded p-4">
                          <p className="text-amber-200 italic text-sm">
                            <strong>Core Insight:</strong> {currentCategory.lessons[selectedLesson].explanation}
                          </p>
                        </div>
                      </div>

                      {/* Examples */}
                      <div>
                        <h4 className="text-purple-400 mb-3 text-lg">Sacred Code Examples</h4>
                        <div className="space-y-3">
                          {currentCategory.lessons[selectedLesson].examples.map((example, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="bg-slate-900/70 border border-purple-500/30 rounded p-4 font-mono text-amber-300"
                            >
                              <pre className="whitespace-pre-wrap text-sm overflow-x-auto">{example}</pre>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Warrior wisdom */}
                      {warrior && (
                        <div className={`bg-gradient-to-r ${warrior.color} bg-opacity-10 border-2 border-${warrior.accentColor}/30 rounded-lg p-5`}>
                          <div className="flex items-start gap-3">
                            <warrior.icon className={`w-6 h-6 text-${warrior.accentColor} mt-1`} />
                            <div>
                              <p className={`text-${warrior.accentColor} mb-2`}>
                                <strong>The {warrior.role} Reflects:</strong>
                              </p>
                              <p className="text-purple-200/90 italic text-sm">
                                "{warrior.philosophy}"
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </>
            )}
          </motion.div>
        )}

        {/* Return to battle button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <Button
            onClick={onRetry}
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-900 px-8 py-6 text-lg"
          >
            Return to Battle (Level {level})
          </Button>
          <p className="text-purple-300/70 mt-4 text-sm italic">
            "Armed with knowledge, face your challenge anew"
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
