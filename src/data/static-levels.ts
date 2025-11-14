import type { Challenge } from '../types/game';

export interface StaticChallenge extends Challenge {
  chapter: number;
  level: number;
  concept: string;
  enemyName: string;
  enemyHealth: number;
}

// CHAPTER 1: Basic Syntax Fundamentals (Levels 1-10)

export const STATIC_LEVELS: StaticChallenge[] = [
  // LEVEL 1
  {
    chapter: 1,
    level: 1,
    concept: 'Function Call Syntax',
    enemyName: 'Syntax Sprite',
    enemyHealth: 150,
    display: '# The Serpent Sage teaches: "Functions are invoked with parentheses."\n# Which is the correct way to CALL a function?\n\nA) greet\nB) greet()\nC) greet[]\nD) call greet',
    solution: 'B',
    hint: 'The Serpent whispers: "Parentheses awaken the spell. Empty or filled, they signal invocation."',
    difficulty: 1
  },
  
  // LEVEL 2
  {
    chapter: 1,
    level: 2,
    concept: 'String Syntax',
    enemyName: 'Echo Wisp',
    enemyHealth: 150,
    display: '# Iron Guardian declares: "Text must be wrapped in quotes."\n# Which correctly defines a string?\n\nA) Hello\nB) "Hello"\nC) (Hello)\nD) Hello()',
    solution: 'B',
    hint: 'The Guardian reminds: "Quotes contain words. Speech is enclosed, not bare."',
    difficulty: 1
  },
  
  // LEVEL 3
  {
    chapter: 1,
    level: 3,
    concept: 'Arithmetic Operators',
    enemyName: 'Void Phantom',
    enemyHealth: 180,
    display: '# Primitive Bladesmith forges: "Addition combines values."\n# Which operator adds two numbers?\n\nA) -\nB) *\nC) +\nD) /',
    solution: 'C',
    hint: 'The Bladesmith hammers: "The plus sign joins numbers, as metal joins in the forge."',
    difficulty: 1
  },
  
  // LEVEL 4
  {
    chapter: 1,
    level: 4,
    concept: 'Assignment Operator',
    enemyName: 'Glitch Fiend',
    enemyHealth: 250,
    display: '# Trickster Rogue grins: "Variables store values."\n# Which operator assigns a value to a variable?\n\nA) ==\nB) =\nC) :\nD) ->',
    solution: 'B',
    hint: 'The Rogue winks: "A single equals gives. Double equals compares. Know the difference."',
    difficulty: 1
  },
  
  // LEVEL 5
  {
    chapter: 1,
    level: 5,
    concept: 'Boolean True',
    enemyName: 'Binary Beast',
    enemyHealth: 280,
    display: '# Arcane Warlock intones: "Truth is a keyword, capitalized and absolute."\n# What keyword represents truth?\n\nA) true\nB) TRUE\nC) True\nD) 1',
    solution: 'C',
    hint: 'The Warlock\'s eyes glow: "In Python, truth begins with capital. True stands tall."',
    difficulty: 1
  },
  
  // LEVEL 6
  {
    chapter: 1,
    level: 6,
    concept: 'Boolean False',
    enemyName: 'Type Chimera',
    enemyHealth: 300,
    display: '# Elegant Duelist flourishes: "Falsehood is equally important."\n# What keyword represents false?\n\nA) false\nB) FALSE  \nC) False\nD) 0',
    solution: 'C',
    hint: 'The Duelist dances: "Like its twin True, False begins with grace—a capital letter."',
    difficulty: 1
  },
  
  // LEVEL 7
  {
    chapter: 1,
    level: 7,
    concept: 'Multiplication Operator',
    enemyName: 'Recursion Shadow',
    enemyHealth: 320,
    display: '# Serpent Sage reveals: "Multiplication repeats addition."\n# Which operator multiplies two numbers?\n\nA) x\nB) *\nC) ×\nD) mult',
    solution: 'B',
    hint: 'The Serpent coils: "The asterisk, the star—it multiplies values across the void."',
    difficulty: 2
  },
  
  // LEVEL 8
  {
    chapter: 1,
    level: 8,
    concept: 'Comparison Greater Than',
    enemyName: 'Chain Wraith',
    enemyHealth: 350,
    display: '# Iron Guardian commands: "Comparisons test magnitude."\n# Which operator checks if left is GREATER than right?\n\nA) <\nB) >\nC) >=\nD) =>',
    solution: 'B',
    hint: 'The Guardian stands firm: "The mouth opens toward the greater. The arrow points to lesser."',
    difficulty: 2
  },
  
  // LEVEL 9
  {
    chapter: 1,
    level: 9,
    concept: 'Comparison Less Than',
    enemyName: 'Logic Shade',
    enemyHealth: 380,
    display: '# Trickster Rogue challenges: "The opposite of greater."\n# Which operator checks if left is LESS than right?\n\nA) <\nB) >\nC) <=\nD) =<',
    solution: 'A',
    hint: 'The Rogue smirks: "The mouth opens to the greater side. Point it left, value is lesser."',
    difficulty: 2
  },
  
  // LEVEL 10 - CHAPTER BOSS
  {
    chapter: 1,
    level: 10,
    concept: 'Division Operator',
    enemyName: 'Syntax Overlord',
    enemyHealth: 500,
    display: '# Arcane Warlock warns: "Division splits the whole."\n# Which operator divides two numbers?\n\nA) /\nB) \\\nC) ÷\nD) div',
    solution: 'A',
    hint: 'The Warlock\'s staff glows: "The forward slash cuts through, dividing the value in twain."',
    difficulty: 2
  },
  
  // CHAPTER 2: Comparison and Equality (Levels 11-20)
  
  // LEVEL 11
  {
    chapter: 2,
    level: 11,
    concept: 'Equality Operator',
    enemyName: 'Decision Imp',
    enemyHealth: 550,
    display: '# Serpent Sage teaches: "Equality requires two equals signs."\n# Which operator checks if two values are EQUAL?\n\nA) =\nB) ==\nC) ===\nD) !=',
    solution: 'B',
    hint: 'The Serpent hisses softly: "Double the symbol, test the truth. Single assigns, double compares."',
    difficulty: 2
  },
  
  // LEVEL 12
  {
    chapter: 2,
    level: 12,
    concept: 'Not Equal Operator',
    enemyName: 'Fork Demon',
    enemyHealth: 600,
    display: '# Iron Guardian instructs: "Inequality is marked with exclamation."\n# Which operator checks if two values are NOT equal?\n\nA) !=\nB) <>\nC) /=\nD) !==',
    solution: 'A',
    hint: 'The Guardian shields: "Exclamation negates. Combined with equals, it tests inequality."',
    difficulty: 2
  },
  
  // LEVEL 13
  {
    chapter: 2,
    level: 13,
    concept: 'Greater or Equal',
    enemyName: 'Mirror Wraith',
    enemyHealth: 650,
    display: '# Elegant Duelist observes: "Sometimes equality joins comparison."\n# Which checks if left is GREATER than OR EQUAL to right?\n\nA) =>\nB) >==\nC) >=\nD) >|=',
    solution: 'C',
    hint: 'The Duelist reflects: "Greater than or equal: the symbols combine naturally, no space between."',
    difficulty: 2
  },
  
  // LEVEL 14
  {
    chapter: 2,
    level: 14,
    concept: 'Less or Equal',
    enemyName: 'Branch Horror',
    enemyHealth: 700,
    display: '# Trickster Rogue laughs: "The mirror of greater-or-equal."\n# Which checks if left is LESS than OR EQUAL to right?\n\nA) <=\nB) =<\nC) <==\nD) <|=',
    solution: 'A',
    hint: 'The Rogue counts fingers: "Less, then equal. The order matters in this realm."',
    difficulty: 2
  },
  
  // LEVEL 15
  {
    chapter: 2,
    level: 15,
    concept: 'If Statement Syntax',
    enemyName: 'Truth Djinn',
    enemyHealth: 750,
    display: '# Arcane Warlock questions: "Conditionals require proper punctuation."\n# What comes after an if condition in Python?\n\nA) ;\nB) :\nC) then\nD) {}',
    solution: 'B',
    hint: 'The Warlock\'s eyes pierce: "The colon signals what follows. A gateway to indented truth."',
    difficulty: 3
  },
  
  // LEVEL 16
  {
    chapter: 2,
    level: 16,
    concept: 'Logical AND',
    enemyName: 'Inverse Specter',
    enemyHealth: 800,
    display: '# Primitive Bladesmith reverses the blade: "Both conditions must hold."\n# Which operator requires BOTH conditions to be True?\n\nA) &&\nB) and\nC) &\nD) AND',
    solution: 'B',
    hint: 'The Bladesmith flips the metal: "Python speaks plain English. The word \'and\' binds truths together."',
    difficulty: 3
  },
  
  // LEVEL 17
  {
    chapter: 2,
    level: 17,
    concept: 'Logical OR',
    enemyName: 'Choice Phantom',
    enemyHealth: 850,
    display: '# Serpent Sage offers wisdom: "One truth suffices."\n# Which operator requires AT LEAST ONE condition to be True?\n\nA) ||\nB) or\nC) |\nD) OR',
    solution: 'B',
    hint: 'The Serpent coils around both: "The word \'or\' offers choice. Either path leads to truth."',
    difficulty: 3
  },
  
  // LEVEL 18
  {
    chapter: 2,
    level: 18,
    concept: 'Logical NOT',
    enemyName: 'Layer Beast',
    enemyHealth: 900,
    display: '# Iron Guardian builds fortifications: "Negation inverts truth."\n# Which operator inverts a boolean value?\n\nA) !\nB) not\nC) ~\nD) NOT',
    solution: 'B',
    hint: 'The Guardian nods: "Python\'s negation is spelled out. The word \'not\' reverses destiny."',
    difficulty: 3
  },
  
  // LEVEL 19
  {
    chapter: 2,
    level: 19,
    concept: 'Else Keyword',
    enemyName: 'Logic Leviathan',
    enemyHealth: 950,
    display: '# Trickster Rogue grins wickedly: "When if fails, what catches?"\n# What keyword handles all other cases?\n\nA) otherwise\nB) else\nC) default\nD) catch',
    solution: 'B',
    hint: 'The Rogue reveals: "Else embraces what remains. When if rejects, else accepts."',
    difficulty: 3
  },
  
  // LEVEL 20 - CHAPTER BOSS
  {
    chapter: 2,
    level: 20,
    concept: 'Elif Keyword',
    enemyName: 'Conditional Colossus',
    enemyHealth: 1200,
    display: '# Arcane Warlock summons the trial: "Multiple conditions, sequential testing."\n# What keyword tests additional conditions after if fails?\n\nA) elseif\nB) else if\nC) elif\nD) elsif',
    solution: 'C',
    hint: 'The Warlock\'s incantation echoes: "Python compresses \'else if\' into one word: elif."',
    difficulty: 3
  },
  
  // CHAPTER 3: Return and Function Syntax (Levels 21-30)
  
  // LEVEL 21
  {
    chapter: 3,
    level: 21,
    concept: 'Return Keyword',
    enemyName: 'Echo Sentinel',
    enemyHealth: 1300,
    display: '# Elegant Duelist demonstrates: "Functions give back results."\n# What keyword sends a value back from a function?\n\nA) give\nB) return\nC) send\nD) output',
    solution: 'B',
    hint: 'The Duelist spins: "Return carries the gift back to the caller."',
    difficulty: 3
  },
  
  // LEVEL 22
  {
    chapter: 3,
    level: 22,
    concept: 'Function Definition',
    enemyName: 'Verdict Wraith',
    enemyHealth: 1400,
    display: '# Serpent Sage reveals: "Functions are defined with a keyword."\n# What keyword DEFINES a new function in Python?\n\nA) function\nB) func\nC) def\nD) define',
    solution: 'C',
    hint: 'The Serpent uncoils: "Python abbreviates: \'def\' declares a function\'s birth."',
    difficulty: 3
  },
  
  // LEVEL 23
  {
    chapter: 3,
    level: 23,
    concept: 'Modulo Operator',
    enemyName: 'Value Vampire',
    enemyHealth: 1500,
    display: '# Iron Guardian assigns: "Modulo finds the remainder."\n# Which operator gives the REMAINDER of division?\n\nA) %\nB) mod\nC) //\nD) rem',
    solution: 'A',
    hint: 'The Guardian calculates: "The percent sign yields what remains after division."',
    difficulty: 4
  },
  
  // LEVEL 24
  {
    chapter: 3,
    level: 24,
    concept: 'Exponentiation',
    enemyName: 'Path Demon',
    enemyHealth: 1600,
    display: '# Trickster Rogue presents paths: "Power raises to power."\n# Which operator raises a number to a power?\n\nA) ^\nB) **\nC) pow\nD) ^^\n',
    solution: 'B',
    hint: 'The Rogue counts: "Double asterisks elevate. Two stars grant exponential power."',
    difficulty: 4
  },
  
  // LEVEL 25
  {
    chapter: 3,
    level: 25,
    concept: 'Integer Division',
    enemyName: 'Truth Golem',
    enemyHealth: 1700,
    display: '# Arcane Warlock crystallizes: "Division can discard fractions."\n# Which operator divides and ROUNDS DOWN to integer?\n\nA) /\nB) //\nC) div\nD) \\\n',
    solution: 'B',
    hint: 'The Warlock focuses: "Double slash floors the result. No decimals survive."',
    difficulty: 4
  },
  
  // LEVEL 26
  {
    chapter: 3,
    level: 26,
    concept: 'In Operator',
    enemyName: 'Chain Revenant',
    enemyHealth: 1800,
    display: '# Primitive Bladesmith forges connections: "Membership is tested."\n# Which operator checks if a value EXISTS IN a collection?\n\nA) in\nB) exists\nC) has\nD) contains',
    solution: 'A',
    hint: 'The Bladesmith hammers: "The word \'in\' asks: does this belong here?"',
    difficulty: 4
  },
  
  // LEVEL 27
  {
    chapter: 3,
    level: 27,
    concept: 'Not In Operator',
    enemyName: 'Labyrinth Fiend',
    enemyHealth: 1900,
    display: '# Serpent Sage navigates: "Absence is also worth testing."\n# Which checks if a value DOES NOT exist in a collection?\n\nA) !in\nB) not in\nC) not_in\nD) notin',
    solution: 'B',
    hint: 'The Serpent slithers through: "Two words: \'not in\'. Together they test absence."',
    difficulty: 4
  },
  
  // LEVEL 28
  {
    chapter: 3,
    level: 28,
    concept: 'Pass Statement',
    enemyName: 'Ternary Terror',
    enemyHealth: 2000,
    display: '# Elegant Duelist demonstrates elegance: "Sometimes we need a placeholder."\n# What keyword creates an empty block that does nothing?\n\nA) skip\nB) empty\nC) pass\nD) void',
    solution: 'C',
    hint: 'The Duelist gracefully steps: "Pass allows the code to continue, doing nothing yet valid."',
    difficulty: 4
  },
  
  // LEVEL 29
  {
    chapter: 3,
    level: 29,
    concept: 'Break Statement',
    enemyName: 'Complexity Djinn',
    enemyHealth: 2100,
    display: '# Iron Guardian fortifies: "Loops can be escaped."\n# What keyword EXITS a loop immediately?\n\nA) exit\nB) stop\nC) break\nD) end',
    solution: 'C',
    hint: 'The Guardian calculates: "Break shatters the loop\'s hold, freeing execution."',
    difficulty: 4
  },
  
  // LEVEL 30 - CHAPTER BOSS
  {
    chapter: 3,
    level: 30,
    concept: 'Continue Statement',
    enemyName: 'Return Archon',
    enemyHealth: 2500,
    display: '# Arcane Warlock channels ultimate magic: "Skip to the next iteration."\n# What keyword SKIPS the rest of current loop iteration?\n\nA) skip\nB) next\nC) continue\nD) pass',
    solution: 'C',
    hint: 'The Warlock traces symbols: "Continue jumps to the loop\'s next cycle, ignoring what remains."',
    difficulty: 5
  },
  
  // CHAPTER 4: Advanced Syntax (Levels 31-40)
  
  // LEVEL 31
  {
    chapter: 4,
    level: 31,
    concept: 'For Loop Syntax',
    enemyName: 'Recursion Wisp',
    enemyHealth: 2700,
    display: '# Trickster Rogue plays: "Iteration requires structure."\n# What keyword starts a for loop in Python?\n\nA) for\nB) foreach\nC) loop\nD) iterate',
    solution: 'A',
    hint: 'The Rogue winks: "Python keeps it simple: \'for\' begins the journey through items."',
    difficulty: 5
  },
  
  // LEVEL 32
  {
    chapter: 4,
    level: 32,
    concept: 'While Loop Syntax',
    enemyName: 'Delegation Shade',
    enemyHealth: 2900,
    display: '# Primitive Bladesmith delegates: "Conditional repetition exists."\n# What keyword creates a loop that runs WHILE condition is true?\n\nA) while\nB) until\nC) repeat\nD) loop',
    solution: 'A',
    hint: 'The Bladesmith measures: "While the condition holds, the loop persists."',
    difficulty: 5
  },
  
  // LEVEL 33
  {
    chapter: 4,
    level: 33,
    concept: 'Is Operator',
    enemyName: 'Parameter Phantom',
    enemyHealth: 3100,
    display: '# Serpent Sage explains: "Identity differs from equality."\n# Which operator tests if two variables are the SAME OBJECT?\n\nA) ==\nB) is\nC) same\nD) ===',
    solution: 'B',
    hint: 'The Serpent calculates: "\'is\' tests identity, not just value. Are they the same thing?"',
    difficulty: 5
  },
  
  // LEVEL 34
  {
    chapter: 4,
    level: 34,
    concept: 'Is Not Operator',
    enemyName: 'Composition Beast',
    enemyHealth: 3300,
    display: '# Elegant Duelist choreographs: "Negating identity."\n# Which tests if two variables are NOT the same object?\n\nA) !=\nB) isnot\nC) is not\nD) !is',
    solution: 'C',
    hint: 'The Duelist spins: "Two words: \'is not\'. Testing that objects differ in identity."',
    difficulty: 5
  },
  
  // LEVEL 35
  {
    chapter: 4,
    level: 35,
    concept: 'None Keyword',
    enemyName: 'Validation Demon',
    enemyHealth: 3500,
    display: '# Iron Guardian validates: "Absence has a name."\n# What keyword represents the absence of a value?\n\nA) null\nB) None\nC) nil\nD) nothing',
    solution: 'B',
    hint: 'The Guardian blocks: "None stands for nothingness, capitalized like True and False."',
    difficulty: 5
  },
  
  // LEVEL 36
  {
    chapter: 4,
    level: 36,
    concept: 'Range Function',
    enemyName: 'Default Wraith',
    enemyHealth: 3700,
    display: '# Arcane Warlock sets defaults: "Sequences of numbers are generated."\n# What function creates a sequence of numbers for loops?\n\nA) sequence()\nB) range()\nC) numbers()\nD) series()',
    solution: 'B',
    hint: 'The Warlock empowers: "range() spans from start to end, creating numeric sequences."',
    difficulty: 5
  },
  
  // LEVEL 37
  {
    chapter: 4,
    level: 37,
    concept: 'Len Function',
    enemyName: 'Accumulation Horror',
    enemyHealth: 3900,
    display: '# Trickster Rogue accumulates: "Collections have size."\n# What function returns the LENGTH of a collection?\n\nA) size()\nB) count()\nC) len()\nD) length()',
    solution: 'C',
    hint: 'The Rogue collects: "Python abbreviates: len() measures the count of items."',
    difficulty: 6
  },
  
  // LEVEL 38
  {
    chapter: 4,
    level: 38,
    concept: 'Print Function',
    enemyName: 'Efficiency Specter',
    enemyHealth: 4100,
    display: '# Primitive Bladesmith optimizes: "Output to console is fundamental."\n# What function displays output to the console?\n\nA) console()\nB) print()\nC) output()\nD) display()',
    solution: 'B',
    hint: 'The Bladesmith strikes: "print() speaks to the terminal, showing what you command."',
    difficulty: 6
  },
  
  // LEVEL 39
  {
    chapter: 4,
    level: 39,
    concept: 'Import Statement',
    enemyName: 'State Djinn',
    enemyHealth: 4300,
    display: '# Serpent Sage marks: "External code is brought in."\n# What keyword brings external modules into your code?\n\nA) include\nB) require\nC) import\nD) use',
    solution: 'C',
    hint: 'The Serpent marks the path: "import opens the library, bringing tools to your hands."',
    difficulty: 6
  },
  
  // LEVEL 40 - FINAL BOSS
  {
    chapter: 4,
    level: 40,
    concept: 'Lambda Keyword',
    enemyName: 'Pipeline Colossus',
    enemyHealth: 5000,
    display: '# Arcane Warlock summons the final guardian: "Anonymous functions exist."\n# What keyword creates a small, unnamed function?\n\nA) function\nB) lambda\nC) anonymous\nD) func',
    solution: 'B',
    hint: 'The Warlock illuminates: "Lambda births quick functions without names, elegant and brief."',
    difficulty: 6
  }
];

export function getLevelsByChapter(chapter: number): StaticChallenge[] {
  return STATIC_LEVELS.filter(level => level.chapter === chapter);
}

export function getLevel(levelNumber: number): StaticChallenge | undefined {
  return STATIC_LEVELS.find(level => level.level === levelNumber);
}

export function getTotalChapters(): number {
  return Math.max(...STATIC_LEVELS.map(l => l.chapter));
}
