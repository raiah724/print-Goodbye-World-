import { type LucideIcon } from 'lucide-react';
import { Code2, Shield, Zap, Hammer, Sparkles, Gem } from 'lucide-react';

export interface WarriorLanguage {
  id: string;
  name: string;
  role: string;
  title: string;
  description: string;
  philosophy: string;
  icon: LucideIcon;
  color: string;
  accentColor: string;
  symbolism: string;
}

export const WARRIOR_LANGUAGES: WarriorLanguage[] = [
  {
    id: 'python',
    name: 'Python',
    role: 'Serpent Sage',
    title: 'The Wise Serpent of Readability',
    description: 'Masters of clarity and intuition, the Serpent Sages wield spells written in flowing, readable incantations. Their philosophy: "Simple is better than complex, explicit is better than implicit."',
    philosophy: 'The Serpent coils around problems with elegant solutions, favoring wisdom over brute force.',
    icon: Code2,
    color: 'from-blue-500 to-yellow-500',
    accentColor: 'blue-400',
    symbolism: 'Serpents shed their skin to evolve—Python code evolves through refactoring and clarity.'
  },
  {
    id: 'java',
    name: 'Java',
    role: 'Iron Guardian',
    title: 'The Stalwart Protector of Order',
    description: 'Disciplined warriors bound by strict structure and unwavering type contracts. Every action is deliberate, every declaration explicit. Guardians build fortresses that stand eternal.',
    philosophy: 'Structure brings strength. Order prevents chaos. The Guardian stands firm in the face of ambiguity.',
    icon: Shield,
    color: 'from-red-600 to-orange-600',
    accentColor: 'red-400',
    symbolism: 'Iron armor forged through discipline—Java enforces structure through its rigid type system.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    role: 'Trickster Rogue',
    title: 'The Quick-Witted Shapeshifter',
    description: 'Unpredictable and adaptable, the Trickster bends reality with dynamic types and asynchronous sorcery. What appears one moment transforms the next. They are everywhere and nowhere.',
    philosophy: 'Adaptability is survival. Change is constant. The Rogue thrives in chaos and ambiguity.',
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    accentColor: 'yellow-400',
    symbolism: 'Lightning strikes where least expected—JavaScript runs in browsers, servers, and beyond.'
  },
  {
    id: 'c',
    name: 'C',
    role: 'Primitive Bladesmith',
    title: 'The Ancient Forgemaster',
    description: 'The oldest warrior, wielding raw memory and direct hardware control. Their blade is unadorned but deadly. They speak the ancient tongue closest to the machine itself.',
    philosophy: 'Power through precision. Control through understanding. The Bladesmith forges from first principles.',
    icon: Hammer,
    color: 'from-gray-600 to-slate-500',
    accentColor: 'gray-400',
    symbolism: 'The forge shapes raw metal—C shapes raw memory into functional programs.'
  },
  {
    id: 'cpp',
    name: 'C++',
    role: 'Arcane Warlock',
    title: 'The Master of Layered Incantations',
    description: 'Wielders of both ancient and modern magic, combining low-level power with high-level abstraction. Their spells are complex, multi-layered, and devastatingly powerful when mastered.',
    philosophy: 'Complexity serves power. Abstraction enables mastery. The Warlock commands all layers of reality.',
    icon: Sparkles,
    color: 'from-purple-600 to-indigo-600',
    accentColor: 'purple-400',
    symbolism: 'Arcane circles within circles—C++ offers templates, classes, and low-level control simultaneously.'
  },
  {
    id: 'ruby',
    name: 'Ruby',
    role: 'Elegant Duelist',
    title: 'The Artist of Expressive Combat',
    description: 'Graceful warriors who value beauty and expressiveness. Their code reads like poetry, their logic flows like dance. Every solution is crafted with charm and simplicity.',
    philosophy: 'Beauty in simplicity. Joy in expression. The Duelist makes programming feel like art.',
    icon: Gem,
    color: 'from-red-500 to-pink-500',
    accentColor: 'red-400',
    symbolism: 'A polished gem reflects light beautifully—Ruby code shines through elegant expressiveness.'
  }
];

export function getWarriorLanguage(id: string): WarriorLanguage | undefined {
  return WARRIOR_LANGUAGES.find(lang => lang.id === id);
}
