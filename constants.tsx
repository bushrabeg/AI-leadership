
import React from 'react';
import { Cpu, Zap, Bot, Microscope, GraduationCap, ShieldAlert, Share2 } from 'lucide-react';
import { LeadershipPillar } from './types';

export const AI_PILLARS: LeadershipPillar[] = [
  {
    id: 'compute',
    name: 'Compute',
    description: 'Hardware, Chips, and Processing Power',
    status2026: {
      leader: 'USA',
      context: 'Ahead in cutting-edge silicon and architectural design.',
      score: 85
    },
    status2030: {
      leader: 'China',
      context: 'China catching up or potentially passing through localization.',
      score: 82
    },
    gapGuess: 'Gap is narrowing (2-5x efficiency gain predicted).',
    icon: 'cpu'
  },
  {
    id: 'energy',
    name: 'Energy',
    description: 'Power Supply for AI Data Centers',
    status2026: {
      leader: 'China',
      context: 'Currently ahead in infrastructure and grid expansion.',
      score: 75
    },
    status2030: {
      leader: 'China',
      context: 'Clear leader in clean and sustainable energy production.',
      score: 95
    },
    gapGuess: '2-3x more production capacity compared to peers.',
    icon: 'zap'
  },
  {
    id: 'robotics',
    name: 'Robotics & Adv. Manufacturing',
    description: 'Physical AI and Automated Systems',
    status2026: {
      leader: 'China',
      context: 'Significant lead in manufacturing volume and automation.',
      score: 80
    },
    status2030: {
      leader: 'China',
      context: 'Dominant ecosystem from supply chain to end product.',
      score: 98
    },
    gapGuess: '10-20x higher deployment scale predicted.',
    icon: 'bot'
  },
  {
    id: 'industrial',
    name: 'Industrial-Scientific Base',
    description: 'R&D Infrastructure and Foundation Layers',
    status2026: {
      leader: 'Both',
      context: 'USA leads in quality/innovation; China leads in volume.',
      score: 70
    },
    status2030: {
      leader: 'China',
      context: 'China passes as volume converts into structural superiority.',
      score: 88
    },
    gapGuess: 'Superior coordination in industrial application.',
    icon: 'microscope'
  },
  {
    id: 'talent',
    name: 'Talent',
    description: 'Human Capital and Educational Output',
    status2026: {
      leader: 'Both',
      context: 'USA has elite experts; China has massive researcher count.',
      score: 75
    },
    status2030: {
      leader: 'China',
      context: 'China leads as local talent matures and quantity meets quality.',
      score: 90
    },
    gapGuess: 'Massive volume conversion and talent retention.',
    icon: 'graduation-cap'
  },
  {
    id: 'risk',
    name: 'Risk Management',
    description: 'Safety, Ethics, and Governance',
    status2026: {
      leader: 'USA',
      context: 'Ahead in global standards and theoretical safety.',
      score: 80
    },
    status2030: {
      leader: 'Both',
      context: 'USA maintains legitimacy; China excels in practical application.',
      score: 75
    },
    gapGuess: 'Convergence of global standards and practical safety.',
    icon: 'shield-alert'
  },
  {
    id: 'diffusion',
    name: 'Diffusion / Adoption',
    description: 'Open Source and Social Integration',
    status2026: {
      leader: 'China',
      context: 'China approaching fast with rapid integration.',
      score: 65
    },
    status2030: {
      leader: 'China',
      context: 'Global leader in cost-effective and open AI deployment.',
      score: 92
    },
    gapGuess: 'Domination through cheap/open-source accessibility.',
    icon: 'share2'
  }
];

export const getIcon = (name: string, size = 20) => {
  switch (name) {
    case 'cpu': return <Cpu size={size} />;
    case 'zap': return <Zap size={size} />;
    case 'bot': return <Bot size={size} />;
    case 'microscope': return <Microscope size={size} />;
    case 'graduation-cap': return <GraduationCap size={size} />;
    case 'shield-alert': return <ShieldAlert size={size} />;
    case 'share2': return <Share2 size={size} />;
    default: return null;
  }
};
