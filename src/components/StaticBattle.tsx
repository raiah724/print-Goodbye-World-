import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Skull, Zap, Clock, Shield, Flame, Sparkles } from 'lucide-react';
import { CodeEditor } from './CodeEditor';
import { getLevel } from '../data/static-levels';
import { getWarriorLanguage } from '../data/warrior-languages';
import type { StaticChallenge } from '../data/static-levels';

interface StaticBattleProps {
  level: number;
  languageId: string;
  onWin: (damage: number, timeRemaining: number) => void;
  onLose: () => void;
}

export function StaticBattle({ level, languageId, onWin, onLose }: StaticBattleProps) {
  const challenge = getLevel(level);
  const warrior = getWarriorLanguage(languageId);
  
  const [code, setCode] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [enemyHealth, setEnemyHealth] = useState(challenge?.enemyHealth || 100);
  const [maxEnemyHealth] = useState(challenge?.enemyHealth || 100);
  const [showHint, setShowHint] = useState(false);
  const [battleLog, setBattleLog] = useState<string[]>([]);
  const [isAttacking, setIsAttacking] = useState(false);
  const [showTimerExtension, setShowTimerExtension] = useState(false);

  if (!challenge || !warrior) {
    return <div className="text-center text-red-400 p-8">Error: Level or warrior not found</div>;
  }

  // Timer countdown
  useEffect(() => {
    if (timeRemaining <= 0) {
      onLose();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        const next = prev - 1;
        // Show hint at exactly 10 seconds
        if (next === 10) {
          setShowHint(true);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, onLose]);

  // Calculate damage based on time tiers
  const calculateDamage = (timeLeft: number): number => {
    const baseDamage = 100 * Math.ceil(level / 10); // Scales with chapter
    
    // Tier 1: Above 30 seconds - MAXIMUM DAMAGE
    if (timeLeft > 30) {
      return baseDamage * 3;
    }
    // Tier 2: 10-30 seconds - MODERATE DAMAGE
    else if (timeLeft >= 10) {
      return baseDamage * 1.5;
    }
    // Tier 3: 3-9 seconds - LOW DAMAGE
    else if (timeLeft >= 3) {
      return baseDamage * 0.8;
    }
    // Tier 4: 0-2 seconds - ADRENALINE SURGE (MAXIMUM DAMAGE)
    else {
      return baseDamage * 3;
    }
  };

  const handleCodeSubmit = () => {
    const trimmedCode = code.trim();
    const trimmedSolution = challenge.solution.trim();
    
    // Flexible validation for syntax answers
    const isCorrect = 
      trimmedCode.toLowerCase() === trimmedSolution.toLowerCase() ||
      trimmedCode === trimmedSolution;
    
    if (isCorrect) {
      setIsAttacking(true);
      const damage = calculateDamage(timeRemaining);
      const newHealth = Math.max(0, enemyHealth - damage);
      
      setEnemyHealth(newHealth);
      
      // Determine damage tier for feedback
      const isAdrenalineSurge = timeRemaining <= 2;
      const isMaxDamage = timeRemaining > 30;
      const isModerateDamage = timeRemaining >= 10 && timeRemaining <= 30;
      
      if (isAdrenalineSurge) {
        setBattleLog(prev => [...prev, `🔥 ADRENALINE SURGE! Dealt ${Math.round(damage)} devastating damage!`]);
        
        // Grant time extension for very high levels (Chapter 4+)
        if (level >= 31 && newHealth > 0) {
          setTimeRemaining(prev => prev + 10);
          setShowTimerExtension(true);
          setTimeout(() => setShowTimerExtension(false), 2000);
          setBattleLog(prev => [...prev, `⚡ +10 seconds granted for clutch performance!`]);
        }
      } else if (isMaxDamage) {
        setBattleLog(prev => [...prev, `⭐ SWIFT EXECUTION! Dealt ${Math.round(damage)} maximum damage!`]);
      } else if (isModerateDamage) {
        setBattleLog(prev => [...prev, `⚔️ Dealt ${Math.round(damage)} moderate damage.`]);
      } else {
        setBattleLog(prev => [...prev, `💢 Dealt ${Math.round(damage)} minor damage...`]);
      }
      
      setTimeout(() => {
        setIsAttacking(false);
        
        if (newHealth <= 0) {
          onWin(damage, timeRemaining);
        } else {
          // Reset for next attempt
          setCode('');
          setShowHint(false);
        }
      }, 1000);
    } else {
      setBattleLog(prev => [...prev, `❌ Incorrect! The runes reject "${trimmedCode}". Try again!`]);
      // Don't clear code immediately so player can see what they typed wrong
      setTimeout(() => setCode(''), 800);
    }
  };

  const timerColor = 
    timeRemaining <= 2 ? 'text-red-500' :
    timeRemaining <= 10 ? 'text-orange-500' :
    timeRemaining <= 30 ? 'text-yellow-500' :
    'text-green-500';

  const isBoss = level % 10 === 0;

  return (
    <div className="min-h-screen p-8 relative z-10">
      {/* Level indicator */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <warrior.icon className={`w-8 h-8 text-${warrior.accentColor}`} />
          <h2 className="text-amber-400">Level {level} - {challenge.concept}</h2>
        </div>
        <p className="text-purple-300">{warrior.role} faces the {challenge.enemyName}</p>
        {isBoss && (
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="mt-2 text-red-400 flex items-center justify-center gap-2"
          >
            <Skull className="w-5 h-5" />
            <span>CHAPTER BOSS</span>
            <Skull className="w-5 h-5" />
          </motion.div>
        )}
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Enemy side */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-6"
        >
          {/* Enemy display */}
          <div className={`bg-slate-800/80 backdrop-blur-xl border-2 ${
            isBoss ? 'border-red-500/70' : 'border-red-500/50'
          } rounded-lg p-8 relative overflow-hidden`}>
            <motion.div
              animate={{
                scale: isAttacking ? 0.95 : 1,
                filter: isAttacking ? 'brightness(0.7)' : 'brightness(1)',
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className={`${isBoss ? 'text-red-300 text-2xl' : 'text-red-400'}`}>
                    {challenge.enemyName}
                  </h3>
                  <p className="text-slate-400">
                    {isBoss ? 'Chapter Guardian' : `Level ${level} Adversary`}
                  </p>
                </div>
                <Shield className="w-8 h-8 text-slate-500" />
              </div>

              {/* Enemy health bar */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-400">Health</span>
                  <span className="text-red-400">{Math.round(enemyHealth)} / {maxEnemyHealth}</span>
                </div>
                <div className="h-6 bg-slate-900 rounded-full overflow-hidden border border-red-500/30">
                  <motion.div
                    initial={{ width: '100%' }}
                    animate={{ width: `${(enemyHealth / maxEnemyHealth) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className={`h-full ${
                      isBoss 
                        ? 'bg-gradient-to-r from-red-600 via-orange-500 to-red-600' 
                        : 'bg-gradient-to-r from-red-600 to-red-400'
                    }`}
                  />
                </div>
              </div>

              {/* Enemy visual */}
              <div className="mt-8 flex justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: isBoss ? 2 : 3,
                    repeat: Infinity,
                  }}
                  className={`${
                    isBoss ? 'w-56 h-56' : 'w-48 h-48'
                  } rounded-full bg-gradient-to-br from-red-900/50 to-purple-900/50 border-4 ${
                    isBoss ? 'border-red-500/70' : 'border-red-500/50'
                  } flex items-center justify-center relative`}
                >
                  <Skull className={`${isBoss ? 'w-28 h-28' : 'w-24 h-24'} text-red-400`} />
                  
                  {/* Glowing effect */}
                  <div className="absolute inset-0 rounded-full bg-red-500/20 blur-xl animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Battle log */}
          <div className="bg-slate-800/60 backdrop-blur-xl border border-purple-500/30 rounded-lg p-4 max-h-32 overflow-y-auto">
            <AnimatePresence>
              {battleLog.slice(-3).map((log, idx) => (
                <motion.div
                  key={idx + battleLog.length}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-slate-300 mb-1 text-sm"
                >
                  {log}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Player side */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-6"
        >
          {/* Timer and stats */}
          <div className="bg-slate-800/80 backdrop-blur-xl border-2 border-amber-500/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Clock className={`w-8 h-8 ${timerColor}`} />
                <div>
                  <p className="text-slate-400">Time Remaining</p>
                  <p className={`text-2xl ${timerColor}`}>{timeRemaining}s</p>
                </div>
              </div>
              {timeRemaining <= 2 && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 0.5 }}
                  className="flex items-center gap-2 text-red-500"
                >
                  <Flame className="w-6 h-6" />
                  <span>SURGE!</span>
                </motion.div>
              )}
            </div>

            {/* Timer bar */}
            <div className="h-4 bg-slate-900 rounded-full overflow-hidden border border-amber-500/30">
              <motion.div
                animate={{ 
                  width: `${(timeRemaining / 60) * 100}%`,
                  backgroundColor: 
                    timeRemaining <= 2 ? '#ef4444' : 
                    timeRemaining <= 10 ? '#f59e0b' : 
                    timeRemaining <= 30 ? '#eab308' :
                    '#10b981'
                }}
                className="h-full"
              />
            </div>

            {/* Damage tier indicator */}
            <div className="mt-4 text-center text-sm">
              {timeRemaining > 30 && (
                <p className="text-green-400">⭐ Max Damage Tier (Quick Strike)</p>
              )}
              {timeRemaining >= 10 && timeRemaining <= 30 && (
                <p className="text-yellow-400">⚔️ Moderate Damage Tier</p>
              )}
              {timeRemaining >= 3 && timeRemaining < 10 && (
                <p className="text-orange-400">💢 Low Damage Tier</p>
              )}
              {timeRemaining <= 2 && (
                <p className="text-red-400 animate-pulse">🔥 ADRENALINE SURGE - MAX DAMAGE!</p>
              )}
            </div>

            {showTimerExtension && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-3 bg-purple-500/20 border border-purple-500/50 rounded text-center"
              >
                <Zap className="w-6 h-6 text-purple-400 inline-block mr-2" />
                <span className="text-purple-300">+10s Time Extension!</span>
              </motion.div>
            )}
          </div>

          {/* Challenge panel */}
          <div className="bg-slate-800/80 backdrop-blur-xl border-2 border-purple-500/50 rounded-lg p-6 relative overflow-hidden">
            {/* Mystical background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(168,85,247,0.3)_20px,rgba(168,85,247,0.3)_21px)]" />
            </div>

            <div className="relative z-10">
              <h3 className="text-purple-300 mb-4">Complete the Code Incantation</h3>
              
              <div className="mb-4 bg-slate-900/70 rounded p-4 border border-purple-500/30">
                <pre className="text-slate-300 whitespace-pre-wrap font-mono text-sm">
                  {challenge.display}
                </pre>
              </div>

              <CodeEditor
                value={code}
                onChange={setCode}
                placeholder="Type your answer here..."
                disabled={isAttacking}
                onSubmit={handleCodeSubmit}
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleCodeSubmit}
                disabled={!code.trim() || isAttacking}
                className={`w-full mt-4 bg-gradient-to-r ${warrior.color} text-white py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
              >
                <Zap className="w-5 h-5" />
                Cast {warrior.role} Spell
              </motion.button>

              <p className="text-slate-500 text-center mt-2 text-xs">Press Ctrl/Cmd + Enter to cast</p>

              {/* Hint system - appears at 10 seconds */}
              <AnimatePresence>
                {showHint && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 bg-amber-500/10 border border-amber-500/50 rounded overflow-hidden"
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-amber-400 mt-1 animate-pulse" />
                      <div>
                        <p className="text-amber-400 mb-1">The {warrior.role} Whispers:</p>
                        <p className="text-amber-300/90 italic text-sm">{challenge.hint}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Attack effect overlay */}
      <AnimatePresence>
        {isAttacking && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 pointer-events-none"
          >
            <motion.div
              initial={{ scale: 0, x: '50%', y: '50%' }}
              animate={{ scale: 3, x: '-50%', y: '50%' }}
              transition={{ duration: 0.8 }}
              className="absolute top-1/2 left-1/2 w-32 h-32 bg-amber-500/30 rounded-full blur-3xl"
            />
            
            {/* Lightning strikes */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  scaleY: 0,
                  originY: 0,
                  left: `${50 + (Math.random() - 0.5) * 40}%`,
                  top: '0%'
                }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scaleY: [0, 1, 1],
                  height: '100%'
                }}
                transition={{ 
                  duration: 0.5,
                  delay: i * 0.1,
                  times: [0, 0.5, 1]
                }}
                className="absolute w-1 bg-gradient-to-b from-amber-400 to-transparent"
                style={{
                  boxShadow: '0 0 20px rgba(251, 191, 36, 0.8)'
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}