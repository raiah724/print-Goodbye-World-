import { BookOpen, Variable, GitBranch, FunctionSquare, Circle, Braces, Key, ArrowLeftRight, Sparkles, Code2 } from 'lucide-react';
import type { ArsenalCategory } from '../types/game';

export const EXPANDED_ARSENAL: ArsenalCategory[] = [
  {
    id: 'foundations',
    title: 'Foundations of Code',
    icon: BookOpen,
    lessons: [
      {
        title: 'What is Programming?',
        description: 'Programming is giving instructions to a computer in a language it understands.',
        examples: [
          '# Programs are sequences of instructions',
          'print("Hello")  # This tells the computer to display text',
          'x = 5  # This stores a value for later use'
        ],
        explanation: 'Every program is a list of commands executed in order. The computer follows your instructions exactly as written. Think of it like a recipe: each step must be clear and precise.'
      },
      {
        title: 'Syntax: The Grammar of Code',
        description: 'Syntax is the set of rules that defines how code must be written.',
        examples: [
          'print("Hello")  # Correct syntax',
          'print "Hello"   # Syntax error in Python 3',
          'prnt("Hello")   # Typo causes error'
        ],
        explanation: 'Just as human languages have grammar rules, programming languages have syntax rules. A single typo or missing character can break your code. The computer is very literal.'
      },
      {
        title: 'Comments: Notes to Yourself',
        description: 'Comments are notes in your code that the computer ignores. They help humans understand the code.',
        examples: [
          '# This is a single-line comment',
          'x = 10  # Comments can go after code too',
          '"""This is a multi-line comment',
          'used for longer explanations"""'
        ],
        explanation: 'Comments are essential for explaining WHY you wrote code a certain way. They help you and others understand your thinking when revisiting code later.'
      }
    ]
  },
  
  {
    id: 'variables',
    title: 'Variables & Data Storage',
    icon: Variable,
    lessons: [
      {
        title: 'What Are Variables?',
        description: 'Variables are named containers that store data you want to use later.',
        examples: [
          'health = 100  # Stores a number',
          'name = "Warrior"  # Stores text',
          'is_alive = True  # Stores true/false'
        ],
        explanation: 'Think of variables as labeled boxes. You put something in the box and give it a name so you can find it later. The value can change, but the name stays the same.'
      },
      {
        title: 'Variable Names',
        description: 'Variable names should be descriptive and follow naming rules.',
        examples: [
          'player_health = 100  # Good: clear meaning',
          'x = 100  # Bad: unclear what x represents',
          'max_power_level = 9000  # Good: descriptive',
          '2fast = 50  # ERROR: cannot start with number'
        ],
        explanation: 'Use lowercase with underscores (snake_case in Python). Names should describe what the variable holds. Avoid single letters except in loops (i, j) or math (x, y).'
      },
      {
        title: 'Assignment Operator',
        description: 'The equals sign (=) assigns values to variables.',
        examples: [
          'power = 50  # Assigns 50 to power',
          'power = power + 10  # Updates power to 60',
          'power += 10  # Shorthand for above'
        ],
        explanation: 'Assignment goes right-to-left: the value on the right is stored in the variable on the left. You can reassign variables to new values at any time.'
      }
    ]
  },
  
  {
    id: 'data-types',
    title: 'Data Types',
    icon: Braces,
    lessons: [
      {
        title: 'Integers',
        description: 'Whole numbers without decimal points.',
        examples: [
          'health = 100',
          'damage = -25  # Can be negative',
          'level = 5'
        ],
        explanation: 'Integers are used for counting, indexing, and whole number calculations. They can be positive, negative, or zero.'
      },
      {
        title: 'Floats (Decimals)',
        description: 'Numbers with decimal points.',
        examples: [
          'speed = 3.14',
          'multiplier = 1.5',
          'temperature = -2.7'
        ],
        explanation: 'Floats represent real numbers with fractional parts. Use them for precise measurements, percentages, and scientific calculations.'
      },
      {
        title: 'Strings (Text)',
        description: 'Sequences of characters enclosed in quotes.',
        examples: [
          'name = "Warrior"  # Double quotes',
          'title = \'Champion\'  # Single quotes',
          'message = "It\'s working!"  # Escape quote'
        ],
        explanation: 'Strings hold text data. Use quotes (single or double) to define them. Use backslash (\\) to escape special characters.'
      },
      {
        title: 'Booleans (True/False)',
        description: 'Represents truth values: True or False.',
        examples: [
          'is_alive = True',
          'has_sword = False',
          'can_fly = False'
        ],
        explanation: 'Booleans are used for conditions and logic. Only two possible values: True or False (capitalized in Python). Essential for decision-making.'
      },
      {
        title: 'Type Conversion',
        description: 'Converting between different data types.',
        examples: [
          'int("42")  # String to integer',
          'str(42)    # Integer to string',
          'float(5)   # Integer to float'
        ],
        explanation: 'Sometimes you need to convert data from one type to another. Use int(), str(), float(), and bool() to convert types explicitly.'
      }
    ]
  },
  
  {
    id: 'operators',
    title: 'Operators',
    icon: ArrowLeftRight,
    lessons: [
      {
        title: 'Arithmetic Operators',
        description: 'Mathematical operations on numbers.',
        examples: [
          '10 + 5   # Addition = 15',
          '10 - 5   # Subtraction = 5',
          '10 * 5   # Multiplication = 50',
          '10 / 5   # Division = 2.0',
          '10 // 3  # Integer division = 3',
          '10 % 3   # Modulus (remainder) = 1',
          '2 ** 3   # Exponentiation = 8'
        ],
        explanation: 'Arithmetic operators perform math. Note: / always returns a float, // returns an integer, % gives the remainder.'
      },
      {
        title: 'Comparison Operators',
        description: 'Compare values and return True or False.',
        examples: [
          '10 > 5    # Greater than = True',
          '10 < 5    # Less than = False',
          '10 >= 10  # Greater or equal = True',
          '10 <= 5   # Less or equal = False',
          '10 == 10  # Equal = True',
          '10 != 5   # Not equal = True'
        ],
        explanation: 'Comparison operators compare two values and return a boolean. Use == for equality (not =). These are essential for conditionals.'
      },
      {
        title: 'Logical Operators',
        description: 'Combine boolean values with and, or, not.',
        examples: [
          'True and False  # Both must be True = False',
          'True or False   # At least one True = True',
          'not True        # Inverts the value = False',
          '(10 > 5) and (3 < 7)  # Both true = True'
        ],
        explanation: 'Logical operators combine conditions. "and" requires all to be True, "or" requires at least one True, "not" inverts the value.'
      },
      {
        title: 'Operator Precedence',
        description: 'The order in which operations are performed.',
        examples: [
          '2 + 3 * 4     # Multiply first = 14',
          '(2 + 3) * 4   # Parentheses first = 20',
          '10 > 5 and 3 < 7  # Comparisons, then and'
        ],
        explanation: 'Operations follow PEMDAS: Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. Use parentheses to make order explicit.'
      }
    ]
  },
  
  {
    id: 'conditionals',
    title: 'Conditional Logic',
    icon: GitBranch,
    lessons: [
      {
        title: 'If Statements',
        description: 'Execute code only if a condition is True.',
        examples: [
          'if health > 0:',
          '    print("Alive")',
          '',
          'if damage >= 50:',
          '    print("Critical hit!")'
        ],
        explanation: 'If statements check a condition. If True, the indented code runs. If False, it\'s skipped. Indentation is crucial in Python.'
      },
      {
        title: 'If-Else',
        description: 'Provide an alternative path when the condition is False.',
        examples: [
          'if health > 0:',
          '    print("Fighting")',
          'else:',
          '    print("Defeated")'
        ],
        explanation: 'Else provides a fallback when the if condition is False. One path or the other will execute, but never both.'
      },
      {
        title: 'Elif (Else If)',
        description: 'Check multiple conditions in sequence.',
        examples: [
          'if score >= 90:',
          '    grade = "A"',
          'elif score >= 80:',
          '    grade = "B"',
          'elif score >= 70:',
          '    grade = "C"',
          'else:',
          '    grade = "F"'
        ],
        explanation: 'Elif checks additional conditions. The first True condition executes, then the rest are skipped. Else is optional and catches everything else.'
      },
      {
        title: 'Nested Conditionals',
        description: 'If statements inside other if statements.',
        examples: [
          'if has_key:',
          '    if door_locked:',
          '        print("Unlocking door")',
          '    else:',
          '        print("Door already open")',
          'else:',
          '    print("Need key")'
        ],
        explanation: 'Nesting creates multiple levels of decision-making. Each level adds an indent. Useful for complex logic but avoid nesting too deeply.'
      },
      {
        title: 'Truthiness',
        description: 'Values that are treated as True or False in conditions.',
        examples: [
          'if 0:  # False: zero is falsy',
          'if "":  # False: empty string is falsy',
          'if None:  # False: None is falsy',
          'if "text":  # True: non-empty string is truthy',
          'if 42:  # True: non-zero number is truthy'
        ],
        explanation: 'In conditions, values can be "truthy" or "falsy". 0, None, empty strings/lists are falsy. Everything else is truthy.'
      }
    ]
  },
  
  {
    id: 'loops',
    title: 'Loops & Iteration',
    icon: Circle,
    lessons: [
      {
        title: 'For Loops',
        description: 'Repeat code for each item in a sequence.',
        examples: [
          'for i in range(5):',
          '    print(i)  # Prints 0, 1, 2, 3, 4',
          '',
          'for weapon in ["sword", "axe", "bow"]:',
          '    print(weapon)'
        ],
        explanation: 'For loops iterate over sequences. range(n) creates numbers 0 to n-1. The loop variable (i, weapon) takes each value in turn.'
      },
      {
        title: 'While Loops',
        description: 'Repeat code while a condition is True.',
        examples: [
          'count = 0',
          'while count < 5:',
          '    print(count)',
          '    count += 1  # IMPORTANT: must update!'
        ],
        explanation: 'While loops check the condition before each iteration. If True, run the loop body. If False, exit. ALWAYS ensure the condition eventually becomes False!'
      },
      {
        title: 'Break and Continue',
        description: 'Control loop flow with break and continue.',
        examples: [
          'for i in range(10):',
          '    if i == 5:',
          '        break  # Exit loop immediately',
          '',
          'for i in range(10):',
          '    if i % 2 == 0:',
          '        continue  # Skip to next iteration',
          '    print(i)  # Only odd numbers print'
        ],
        explanation: 'Break exits the loop entirely. Continue skips the rest of the current iteration and goes to the next one. Both are powerful control tools.'
      },
      {
        title: 'Loop Patterns',
        description: 'Common patterns used with loops.',
        examples: [
          '# Counting pattern',
          'count = 0',
          'for item in items:',
          '    count += 1',
          '',
          '# Accumulation pattern',
          'total = 0',
          'for num in numbers:',
          '    total += num',
          '',
          '# Search pattern',
          'for item in items:',
          '    if item == target:',
          '        found = True',
          '        break'
        ],
        explanation: 'These patterns solve common problems: counting items, summing values, searching for specific items. Master these and you can solve many problems.'
      }
    ]
  },
  
  {
    id: 'functions',
    title: 'Functions',
    icon: FunctionSquare,
    lessons: [
      {
        title: 'What Are Functions?',
        description: 'Functions are reusable blocks of code with a name.',
        examples: [
          'def greet():',
          '    print("Hello, warrior!")',
          '',
          'greet()  # Calls the function'
        ],
        explanation: 'Functions let you write code once and use it many times. Define with "def", call by using the name with parentheses. Think of them as custom commands.'
      },
      {
        title: 'Parameters',
        description: 'Functions can accept input values called parameters.',
        examples: [
          'def greet(name):',
          '    print(f"Hello, {name}!")',
          '',
          'greet("Warrior")  # Pass argument "Warrior"'
        ],
        explanation: 'Parameters are variables in the function definition. Arguments are the actual values you pass when calling. They let functions work with different data.'
      },
      {
        title: 'Multiple Parameters',
        description: 'Functions can accept multiple inputs.',
        examples: [
          'def calculate_damage(base, multiplier):',
          '    return base * multiplier',
          '',
          'damage = calculate_damage(50, 2)  # 100'
        ],
        explanation: 'Separate parameters with commas. Order matters: the first argument goes to the first parameter, second to second, etc.'
      },
      {
        title: 'Return Values',
        description: 'Functions can send back a result using return.',
        examples: [
          'def add(a, b):',
          '    return a + b',
          '',
          'result = add(5, 3)  # result is 8'
        ],
        explanation: 'Return sends a value back to whoever called the function. After return executes, the function exits immediately. Without return, functions return None.'
      },
      {
        title: 'Default Parameters',
        description: 'Parameters can have default values.',
        examples: [
          'def power_up(base, bonus=10):',
          '    return base + bonus',
          '',
          'power_up(50)     # Uses default: 60',
          'power_up(50, 20) # Overrides default: 70'
        ],
        explanation: 'Default parameters are optional when calling. If not provided, the default is used. Default parameters must come after required ones.'
      },
      {
        title: 'Scope',
        description: 'Variables have limited visibility based on where they are defined.',
        examples: [
          'x = 10  # Global scope',
          '',
          'def my_function():',
          '    y = 5  # Local scope',
          '    print(x)  # Can access global',
          '',
          'my_function()',
          'print(y)  # ERROR: y not accessible here'
        ],
        explanation: 'Variables defined inside functions are local—only accessible inside that function. Global variables are accessible everywhere. Avoid modifying globals from inside functions.'
      }
    ]
  },
  
  {
    id: 'logic-patterns',
    title: 'Logic Patterns',
    icon: Sparkles,
    lessons: [
      {
        title: 'Guard Clauses',
        description: 'Check for invalid conditions early and exit.',
        examples: [
          'def divide(a, b):',
          '    if b == 0:',
          '        return "Error: division by zero"',
          '    return a / b'
        ],
        explanation: 'Guard clauses check for edge cases first. If something is wrong, return early. This keeps the main logic clean and unindented.'
      },
      {
        title: 'Flag Variables',
        description: 'Use boolean variables to track state.',
        examples: [
          'found = False',
          'for item in items:',
          '    if item == target:',
          '        found = True',
          '        break',
          '',
          'if found:',
          '    print("Item located!")'
        ],
        explanation: 'Flags remember whether something has happened. Start as False, set to True when the condition is met. Check the flag after the loop.'
      },
      {
        title: 'Accumulator Pattern',
        description: 'Build up a value through iteration.',
        examples: [
          'total = 0',
          'for number in [1, 2, 3, 4, 5]:',
          '    total += number',
          'print(total)  # 15'
        ],
        explanation: 'Start with an initial value (often 0). Add to it in each loop iteration. After the loop, you have the accumulated result.'
      },
      {
        title: 'Max/Min Pattern',
        description: 'Find the largest or smallest value.',
        examples: [
          'numbers = [3, 7, 2, 9, 1]',
          'max_num = numbers[0]',
          'for num in numbers:',
          '    if num > max_num:',
          '        max_num = num'
        ],
        explanation: 'Start with the first value. Compare each item to the current max. If larger, update. After the loop, you have the maximum.'
      }
    ]
  },
  
  {
    id: 'problem-solving',
    title: 'Problem-Solving',
    icon: Key,
    lessons: [
      {
        title: 'Reading Problems',
        description: 'Understand what the problem is asking before coding.',
        examples: [
          '# Bad: Jump into coding immediately',
          '# Good: Read carefully, identify:',
          '# 1. What are the inputs?',
          '# 2. What is the expected output?',
          '# 3. What are the steps to transform input to output?'
        ],
        explanation: 'Always read the problem twice. Identify inputs, outputs, and constraints. Sketch the logic in plain English before writing code.'
      },
      {
        title: 'Breaking Down Problems',
        description: 'Divide complex problems into smaller pieces.',
        examples: [
          '# Complex: "Find the average of positive numbers"',
          '# Break down:',
          '# 1. Filter out positive numbers',
          '# 2. Sum the positive numbers',
          '# 3. Count how many positive numbers',
          '# 4. Divide sum by count'
        ],
        explanation: 'Big problems are overwhelming. Break them into small, solvable steps. Solve each step separately, then combine them.'
      },
      {
        title: 'Debugging Strategies',
        description: 'Techniques for finding and fixing errors.',
        examples: [
          '# Print debugging',
          'print(f"Value of x: {x}")',
          '',
          '# Check assumptions',
          'print(f"Type: {type(variable)}")',
          '',
          '# Test small parts',
          '# Run functions with known inputs',
          '# Verify they return expected outputs'
        ],
        explanation: 'When code doesn\'t work: print variable values, check types, test small pieces. Read error messages carefully—they tell you what\'s wrong.'
      },
      {
        title: 'Testing Your Code',
        description: 'Verify your solution works correctly.',
        examples: [
          '# Test edge cases:',
          '# - Empty input',
          '# - Single item',
          '# - Large numbers',
          '# - Negative numbers',
          '# - Boundary values'
        ],
        explanation: 'Don\'t just test the happy path. Try edge cases: empty inputs, single items, extremes. Good code handles all cases, not just the expected ones.'
      }
    ]
  },
  
  {
    id: 'best-practices',
    title: 'Best Practices',
    icon: Code2,
    lessons: [
      {
        title: 'Naming Conventions',
        description: 'Write clear, descriptive names.',
        examples: [
          '# Good names',
          'player_health = 100',
          'calculate_damage()',
          'is_game_over',
          '',
          '# Bad names',
          'ph = 100',
          'calc()',
          'flag'
        ],
        explanation: 'Names should describe purpose. Use full words, not abbreviations. Boolean variables often start with "is_" or "has_". Functions often start with verbs.'
      },
      {
        title: 'Keep Functions Small',
        description: 'Each function should do one thing well.',
        examples: [
          '# Bad: Function does too much',
          'def game_loop():',
          '    # handles input, logic, rendering...',
          '',
          '# Good: Separate functions',
          'def handle_input():',
          '    ...',
          'def update_game_state():',
          '    ...',
          'def render():',
          '    ...'
        ],
        explanation: 'Functions should have a single responsibility. If a function is long or does multiple things, break it into smaller functions.'
      },
      {
        title: 'Avoid Magic Numbers',
        description: 'Use named constants instead of bare numbers.',
        examples: [
          '# Bad',
          'if speed > 100:',
          '',
          '# Good',
          'MAX_SPEED = 100',
          'if speed > MAX_SPEED:'
        ],
        explanation: 'Magic numbers are unexplained values in code. Use named constants with UPPERCASE names. This makes code self-documenting and easier to change.'
      },
      {
        title: 'DRY: Don\'t Repeat Yourself',
        description: 'Avoid duplicating code—use functions.',
        examples: [
          '# Bad: Repeated code',
          'print("=" * 20)',
          'print("Section 1")',
          'print("=" * 20)',
          '',
          '# Good: Function',
          'def print_section(title):',
          '    print("=" * 20)',
          '    print(title)',
          '    print("=" * 20)',
          '',
          'print_section("Section 1")'
        ],
        explanation: 'If you copy-paste code, you should probably use a function. Functions make code easier to maintain—fix once instead of everywhere.'
      }
    ]
  }
];
