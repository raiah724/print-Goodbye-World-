import { Bug, Repeat, GitBranch, Braces, Binary, Skull, Flame, Zap, Ghost, Eye } from 'lucide-react';
import type { Enemy } from '../types/game';

export class EnemyGenerator {
  private static enemies = [
    {
      name: 'Syntax Fiend',
      icon: Bug,
      descriptions: [
        'It feasts on missing semicolons and unmatched brackets',
        'Born from forgotten quotation marks',
        'A creature of misplaced commas and chaos'
      ]
    },
    {
      name: 'Loop Serpent',
      icon: Repeat,
      descriptions: [
        'It circles endlessly, waiting for the break',
        'Infinite cycles are its domain',
        'The eternal coil of iteration'
      ]
    },
    {
      name: 'Recursion Sphinx',
      icon: GitBranch,
      descriptions: [
        'It calls itself, infinitely questioning',
        'A riddle that solves itself through itself',
        'The guardian of self-referential mysteries'
      ]
    },
    {
      name: 'Boolean Wraith',
      icon: Ghost,
      descriptions: [
        'True or false, it exists in both states',
        'A phantom of logic gates',
        'Neither true nor false until observed'
      ]
    },
    {
      name: 'Array Demon',
      icon: Braces,
      descriptions: [
        'Keeper of indexed secrets',
        'It guards the elements in order',
        'Zero-based and unforgiving'
      ]
    },
    {
      name: 'Binary Beast',
      icon: Binary,
      descriptions: [
        'Speaks only in ones and zeros',
        'The ancient language of machines',
        'Pure data given dark form'
      ]
    },
    {
      name: 'Exception Tyrant',
      icon: Flame,
      descriptions: [
        'Throws errors at the unprepared',
        'Born from unhandled mistakes',
        'The punisher of careless code'
      ]
    },
    {
      name: 'Memory Leech',
      icon: Zap,
      descriptions: [
        'It drains resources and never frees them',
        'Consumes RAM without mercy',
        'The accumulator of forgotten references'
      ]
    },
    {
      name: 'Null Specter',
      icon: Eye,
      descriptions: [
        'It exists as nothing, yet crashes everything',
        'The void that breaks reference chains',
        'Absence made manifest'
      ]
    },
    {
      name: 'Deadlock Sentinel',
      icon: Skull,
      descriptions: [
        'Two processes waiting forever',
        'The eternal stalemate',
        'Guardian of frozen threads'
      ]
    }
  ];

  static generateEnemy(level: number): Enemy {
    const enemyTemplate = this.enemies[Math.floor(Math.random() * this.enemies.length)];
    const description = enemyTemplate.descriptions[Math.floor(Math.random() * enemyTemplate.descriptions.length)];
    
    // Health scales with level - higher levels have much more health
    const baseHealth = 300;
    const healthMultiplier = Math.pow(1.5, level - 1);
    const maxHealth = Math.floor(baseHealth * healthMultiplier);
    
    return {
      name: enemyTemplate.name,
      maxHealth,
      icon: enemyTemplate.icon,
      description
    };
  }
}
