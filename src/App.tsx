import { useState } from 'react';
import { GameIntro } from './components/GameIntro';
import { WarriorSelection } from './components/WarriorSelection';
import { LevelSelect } from './components/LevelSelect';
import { StaticBattle } from './components/StaticBattle';
import { ExpandedArsenal } from './components/ExpandedArsenal';
import { Victory } from './components/Victory';
import type { WarriorLanguage } from './data/warrior-languages';

export type GameState = 'intro' | 'warrior-select' | 'level-select' | 'battle' | 'arsenal' | 'victory';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [selectedWarrior, setSelectedWarrior] = useState<WarriorLanguage | null>(null);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [selectedBattleLevel, setSelectedBattleLevel] = useState(1);
  const [playerStats, setPlayerStats] = useState({
    wins: 0,
    adrenalineSurges: 0,
    totalDamage: 0
  });

  const handleIntroComplete = () => {
    setGameState('warrior-select');
  };

  const handleWarriorSelect = (warrior: WarriorLanguage) => {
    setSelectedWarrior(warrior);
    setGameState('level-select');
  };

  const handleLevelSelect = (level: number) => {
    setSelectedBattleLevel(level);
    setGameState('battle');
  };

  const handleBackToLanguage = () => {
    setGameState('warrior-select');
  };

  const handleBattleWon = (damage: number, timeRemaining: number) => {
    const isAdrenalineSurge = timeRemaining <= 2;
    
    setPlayerStats(prev => ({
      ...prev,
      wins: prev.wins + 1,
      totalDamage: prev.totalDamage + damage,
      adrenalineSurges: prev.adrenalineSurges + (isAdrenalineSurge ? 1 : 0)
    }));
    
    // Unlock next level if completed current level
    if (selectedBattleLevel === currentLevel) {
      setCurrentLevel(prev => prev + 1);
    }
    
    setGameState('victory');
  };

  const handleBattleLost = () => {
    setGameState('arsenal');
  };

  const handleRetryFromArsenal = () => {
    setGameState('battle');
  };

  const handleNextLevel = () => {
    // Increment to next level
    setSelectedBattleLevel(prev => prev + 1);
    setGameState('battle');
  };

  const handleBackToLevelSelect = () => {
    setGameState('level-select');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Ambient background effects */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDelay: '1s' }} 
        />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-amber-500 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDelay: '2s' }} 
        />
      </div>

      {/* Mystical runes overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_50px,rgba(168,85,247,0.3)_50px,rgba(168,85,247,0.3)_51px)]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,transparent,transparent_50px,rgba(251,191,36,0.3)_50px,rgba(251,191,36,0.3)_51px)]" />
      </div>

      {gameState === 'intro' && (
        <GameIntro onComplete={handleIntroComplete} />
      )}

      {gameState === 'warrior-select' && (
        <WarriorSelection onSelectWarrior={handleWarriorSelect} />
      )}

      {gameState === 'level-select' && (
        <LevelSelect
          currentLevel={currentLevel}
          onSelectLevel={handleLevelSelect}
          onBackToLanguage={handleBackToLanguage}
        />
      )}

      {gameState === 'battle' && selectedWarrior && (
        <StaticBattle
          level={selectedBattleLevel}
          languageId={selectedWarrior.id}
          onWin={handleBattleWon}
          onLose={handleBattleLost}
        />
      )}

      {gameState === 'arsenal' && selectedWarrior && (
        <ExpandedArsenal
          level={selectedBattleLevel}
          languageId={selectedWarrior.id}
          onRetry={handleRetryFromArsenal}
        />
      )}

      {gameState === 'victory' && (
        <Victory
          level={selectedBattleLevel}
          stats={playerStats}
          onNextLevel={handleNextLevel}
          onBackToMap={handleBackToLevelSelect}
        />
      )}
    </div>
  );
}
