
export type Country = 'USA' | 'China' | 'Both' | 'Neutral';

export interface LeadershipPillar {
  id: string;
  name: string;
  description: string;
  status2026: {
    leader: Country;
    context: string;
    score: number; // 0-100 relative dominance
  };
  status2030: {
    leader: Country;
    context: string;
    score: number; // 0-100 relative dominance
  };
  gapGuess: string;
  icon: string;
}

export interface AIPrediction {
  summary: string;
  strategicTakeaway: string;
}
