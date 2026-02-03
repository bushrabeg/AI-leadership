
import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { AI_PILLARS } from '../constants';

export const LeadershipRadar: React.FC = () => {
  const chartData = AI_PILLARS.map(p => ({
    pillar: p.name,
    '2026': p.status2026.score,
    '2030': p.status2030.score,
  }));

  return (
    <div className="w-full h-[400px] md:h-[500px] mt-8 bg-slate-900/20 rounded-2xl border border-slate-800/50 p-6 flex flex-col items-center">
      <h2 className="text-xl font-bold text-slate-100 mb-2">Aggregated Strength Pulse</h2>
      <p className="text-sm text-slate-500 mb-8">Overlay of relative dominance across 7 dimensions</p>
      
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="pillar" tick={{ fill: '#94a3b8', fontSize: 12 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#475569', fontSize: 10 }} />
          <Radar
            name="2026 Projection"
            dataKey="2026"
            stroke="#3b82f6"
            fill="#3b82f6"
            fillOpacity={0.3}
          />
          <Radar
            name="2030 Near Scenario"
            dataKey="2030"
            stroke="#ef4444"
            fill="#ef4444"
            fillOpacity={0.3}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
