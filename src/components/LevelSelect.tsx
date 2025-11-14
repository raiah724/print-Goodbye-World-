import { motion } from 'motion/react';
import { Lock, Star, Skull, Map } from 'lucide-react';
import { getTotalChapters, getLevelsByChapter } from '../data/static-levels';
import { Button } from './ui/button';

interface LevelSelectProps {
  currentLevel: number;
  onSelectLevel: (level: number) => void;
  onBackToLanguage: () => void;
}

export function LevelSelect({ currentLevel, onSelectLevel, onBackToLanguage }: LevelSelectProps) {
  const totalChapters = getTotalChapters();
  const currentChapter = Math.ceil(currentLevel / 10);

  const getChapterTitle = (chapter: number): string => {
    const titles = [
      'Chapter I: The Awakening - Basic Incantations',
      'Chapter II: The Branching Path - Conditional Logic',
      'Chapter III: The Return - Value Mastery',
      'Chapter IV: The Composition - Function Harmony'
    ];
    return titles[chapter - 1] || `Chapter ${chapter}: Advanced Trials`;
  };

  const getChapterDescription = (chapter: number): string => {
    const descriptions = [
      'Learn the fundamental spells of function invocation. Master the art of calling upon ancient powers.',
      'Navigate the forking paths of logic. Decisions shape destiny in the halls of conditionals.',
      'Harness the power of return. Functions yield their secrets and gift their essence.',
      'Combine forces. Functions call upon each other, creating symphonies of logic.'
    ];
    return descriptions[chapter - 1] || 'The trials intensify...';
  };

  return (
    <div className="min-h-screen p-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-12"
        >
          <Map className="w-16 h-16 text-amber-400 mx-auto mb-4" />
          <h1 className="text-amber-400 mb-2">The Path of Warriors</h1>
          <p className="text-purple-300">Choose your trial, face your destiny</p>
          
          <Button
            onClick={onBackToLanguage}
            variant="ghost"
            className="mt-4 text-purple-300 hover:text-purple-200"
          >
            ← Change Warrior Class
          </Button>
        </motion.div>

        {/* Chapters */}
        <div className="space-y-12">
          {Array.from({ length: totalChapters }, (_, i) => i + 1).map((chapter) => {
            const chapterLevels = getLevelsByChapter(chapter);
            const isUnlocked = currentLevel >= (chapter - 1) * 10 + 1;
            const isCurrentChapter = chapter === currentChapter;

            return (
              <motion.div
                key={chapter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: chapter * 0.1 }}
                className={`relative ${!isUnlocked ? 'opacity-50' : ''}`}
              >
                {/* Chapter Header */}
                <div className={`mb-6 p-6 rounded-lg border-2 ${
                  isCurrentChapter 
                    ? 'bg-amber-500/10 border-amber-500/50' 
                    : 'bg-slate-800/50 border-purple-500/30'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className={`text-2xl ${isCurrentChapter ? 'text-amber-400' : 'text-purple-300'}`}>
                      {getChapterTitle(chapter)}
                    </h2>
                    {!isUnlocked && <Lock className="w-6 h-6 text-slate-500" />}
                  </div>
                  <p className="text-slate-400 italic">{getChapterDescription(chapter)}</p>
                </div>

                {/* Level Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                  {chapterLevels.map((levelData) => {
                    const isLevelUnlocked = levelData.level <= currentLevel;
                    const isCompleted = levelData.level < currentLevel;
                    const isBoss = levelData.level % 10 === 0;

                    return (
                      <motion.button
                        key={levelData.level}
                        whileHover={isLevelUnlocked ? { scale: 1.05 } : {}}
                        whileTap={isLevelUnlocked ? { scale: 0.95 } : {}}
                        onClick={() => isLevelUnlocked && onSelectLevel(levelData.level)}
                        disabled={!isLevelUnlocked}
                        className={`relative p-6 rounded-lg border-2 transition-all ${
                          isBoss 
                            ? 'col-span-2 sm:col-span-5 bg-gradient-to-r from-red-900/30 to-purple-900/30 border-red-500/50' 
                            : isCompleted
                            ? 'bg-green-500/10 border-green-500/30'
                            : isLevelUnlocked
                            ? 'bg-slate-800/80 border-purple-500/50 hover:border-amber-400/50'
                            : 'bg-slate-900/50 border-slate-700/30 cursor-not-allowed'
                        }`}
                      >
                        {/* Level number */}
                        <div className="text-center">
                          {isLevelUnlocked ? (
                            <>
                              {isBoss && <Skull className="w-8 h-8 text-red-400 mx-auto mb-2" />}
                              <div className={`text-2xl mb-1 ${
                                isBoss ? 'text-red-400' : isCompleted ? 'text-green-400' : 'text-amber-400'
                              }`}>
                                {levelData.level}
                              </div>
                              <div className="text-xs text-slate-400 mb-2">
                                {isBoss ? 'CHAPTER BOSS' : levelData.concept}
                              </div>
                              <div className="text-sm text-slate-500">
                                {levelData.enemyName}
                              </div>
                              {isCompleted && (
                                <Star className="w-5 h-5 text-green-400 mx-auto mt-2" />
                              )}
                            </>
                          ) : (
                            <>
                              <Lock className="w-6 h-6 text-slate-600 mx-auto mb-2" />
                              <div className="text-xl text-slate-600">{levelData.level}</div>
                            </>
                          )}
                        </div>

                        {/* Boss indicator */}
                        {isBoss && isLevelUnlocked && (
                          <div className="absolute inset-0 rounded-lg border-2 border-red-500/30 animate-pulse pointer-events-none" />
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-slate-800/80 border border-purple-500/30 rounded-lg px-8 py-4">
            <p className="text-purple-300 mb-2">Your Progress</p>
            <div className="text-3xl text-amber-400">
              Level {currentLevel} / 40
            </div>
            <div className="mt-3 h-2 w-64 bg-slate-900 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(currentLevel / 40) * 100}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-gradient-to-r from-purple-500 to-amber-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
