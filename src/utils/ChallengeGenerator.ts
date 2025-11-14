import type { Challenge } from '../types/game';

export class ChallengeGenerator {
  private static variableNames = ['power', 'energy', 'mana', 'wisdom', 'strength', 'spell', 'rune', 'essence', 'force', 'aura'];
  private static strings = ['victory', 'warrior', 'ancient code', 'mystic rune', 'eternal flame', 'thunder strike', 'shadow blade'];
  private static numbers = [7, 13, 42, 100, 777, 256, 512];
  
  // Track recently used patterns to avoid repetition
  private static recentPatterns: string[] = [];
  private static maxRecentPatterns = 5;

  static generateChallenge(level: number): Challenge {
    const difficulty = Math.min(10, Math.floor(level / 2) + 1);
    
    let challenge: Challenge;
    let attempts = 0;
    
    // Generate challenges until we get one that hasn't been used recently
    do {
      if (difficulty <= 2) {
        challenge = this.generatePrintChallenge();
      } else if (difficulty <= 4) {
        challenge = this.generateVariableChallenge();
      } else if (difficulty <= 6) {
        challenge = this.generateConditionalChallenge();
      } else if (difficulty <= 8) {
        challenge = this.generateLoopChallenge();
      } else {
        challenge = this.generateComplexLogicChallenge(level);
      }
      attempts++;
    } while (this.recentPatterns.includes(challenge.display) && attempts < 10);
    
    // Track this pattern
    this.recentPatterns.push(challenge.display);
    if (this.recentPatterns.length > this.maxRecentPatterns) {
      this.recentPatterns.shift();
    }
    
    return challenge;
  }

  private static generatePrintChallenge(): Challenge {
  return {
    display: `# Cast your first spell\nprint(___)`,
    solution: `"anything"`, // just a placeholder
    validate: (input: string) => {
      const trimmed = input.trim();

      // Match anything like: print("something") or print('something')
      // Allow spaces and punctuation inside
      return /^print\s*\(\s*(['"]).+\1\s*\)$/.test(trimmed);
    },
    hint: 'Put any words inside quotation marks, like print("Hello world!")',
    difficulty: 1
  };
}


  private static generateVariableChallenge(): Challenge {
    const varName = this.variableNames[Math.floor(Math.random() * this.variableNames.length)];
    const value = Math.floor(Math.random() * 100) + 10;
    const operations = [
      { op: '+', hint: 'Addition unites energies, combining their strengths.' },
      { op: '-', hint: 'Subtraction removes essence, weakening the total.' },
      { op: '*', hint: 'Multiplication amplifies power, growing exponentially.' },
      { op: '//', hint: 'Division splits the whole, creating smaller portions.' },
      { op: '%', hint: 'Modulo reveals the remainder, what is left after division.' }
    ];
    const { op, hint } = operations[Math.floor(Math.random() * operations.length)];
    const operand = Math.floor(Math.random() * 10) + 1;
    
    return {
      display: `# Store and transform energy\n${varName} = ${value}\nresult = ${varName} ___ ${operand}\nprint(result)`,
      solution: op,
      validate: (input: string) => input.trim() === op,
      hint,
      difficulty: 2
    };
  }

  private static generateConditionalChallenge(): Challenge {
    const varName = this.variableNames[Math.floor(Math.random() * this.variableNames.length)];
    const threshold = Math.floor(Math.random() * 50) + 25;
    const comparisons = ['>', '<', '>=', '<=', '=='];
    const comparison = comparisons[Math.floor(Math.random() * comparisons.length)];
    
    return {
      display: `# The gate of logic\n${varName} = ${threshold + 10}\nif ${varName} ___ ${threshold}:\n    print("Gate opens")`,
      solution: comparison,
      validate: (input: string) => comparisons.includes(input.trim()),
      hint: 'Logic gates test truth. Greater than (>), less than (<), or equal (==) - choose the path that opens.',
      difficulty: 3
    };
  }

  private static generateLoopChallenge(): Challenge {
    const iterations = Math.floor(Math.random() * 5) + 3;
    const loopVar = ['i', 'n', 'x'][Math.floor(Math.random() * 3)];
    const patterns = [
      {
        display: `# The cycle of power\n___ ${loopVar} in range(${iterations}):\n    print("Cycle", ${loopVar})`,
        solution: 'for',
        hint: 'When you know how many times to repeat, use the "for" loop - a known cycle.'
      },
      {
        display: `# Repeat until truth fades\ncount = 0\n___ count < ${iterations}:\n    print(count)\n    count += 1`,
        solution: 'while',
        hint: 'When repeating based on a condition, use "while" - the cycle that tests truth each time.'
      }
    ];
    
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    
    return {
      display: pattern.display,
      solution: pattern.solution,
      validate: (input: string) => input.trim() === pattern.solution,
      hint: pattern.hint,
      difficulty: 4
    };
  }

  private static generateComplexLogicChallenge(level: number): Challenge {
    const challenges = [
      {
        display: `# Nested power requires nested logic\nfor i in range(3):\n    ___ j in range(2):\n        print(i, j)`,
        solution: 'for',
        hint: 'Loops within loops - the inner cycle mirrors the outer. Both need the same invocation.'
      },
      {
        display: `# Test multiple truths\npower = ${50 + level * 5}\nif power > 50 ___ power < 100:\n    print("Balanced")`,
        solution: 'and',
        hint: 'When both conditions must be true, unite them with "and" - the conjunction of truth.'
      },
      {
        display: `# Define your own spell\n___ cast_spell(name):\n    print("Casting", name)\n\ncast_spell("Fireball")`,
        solution: 'def',
        hint: 'To create your own spells, use "def" - define the function of your creation.'
      },
      {
        display: `# Store multiple essences\nessences = [1, 2, 3, 4, 5]\ntotal = 0\nfor e in essences:\n    total ___ e\nprint(total)`,
        solution: '+=',
        hint: 'To accumulate power, add to itself. The += operator grows the container with each addition.'
      },
      {
        display: `# Access the array of power\nrunes = ["alpha", "beta", "gamma"]\nprint(runes___)`,
        solution: '[0]',
        hint: 'Arrays begin at zero. The first element awaits at position [0], the ancient starting point.'
      }
    ];
    
    const challenge = challenges[Math.floor(Math.random() * challenges.length)];
    
    return {
      display: challenge.display,
      solution: challenge.solution,
      validate: (input: string) => {
        const normalized = input.trim();
        return normalized === challenge.solution || 
               (challenge.solution.includes('[') && normalized.replace(/\s/g, '') === challenge.solution.replace(/\s/g, ''));
      },
      hint: challenge.hint,
      difficulty: 5
    };
  }
}