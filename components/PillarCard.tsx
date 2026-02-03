
import React from 'react';
import { LeadershipPillar, Country } from '../types';
import { getIcon } from '../constants';

interface PillarCardProps {
  pillar: LeadershipPillar;
  activeYear: '2026' | '2030';
}

const CountryBadge: React.FC<{ country: Country }> = ({ country }) => {
  const colors = {
    USA: 'bg-blue-600/20 text-blue-400 border-blue-500/50',
    China: 'bg-red-600/20 text-red-400 border-red-500/50',
    Both: 'bg-purple-600/20 text-purple-400 border-purple-500/50',
    Neutral: 'bg-slate-600/20 text-slate-400 border-slate-500/50'
  };

  return (
    <span className={`px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider ${colors[country]}`}>
      {country === 'Both' ? 'Mixed' : country}
    </span>
  );
};

export const PillarCard: React.FC<PillarCardProps> = ({ pillar, activeYear }) => {
  const currentData = activeYear === '2026' ? pillar.status2026 : pillar.status2030;
  
  return (
    <div className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-all duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        {getIcon(pillar.icon, 64)}
      </div>
      
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
          {getIcon(pillar.icon, 20)}
        </div>
        <div>
          <h3 className="font-bold text-slate-100">{pillar.name}</h3>
          <p className="text-[11px] text-slate-500 uppercase tracking-tighter">{pillar.description}</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Leadership {activeYear}</span>
          <CountryBadge country={currentData.leader} />
        </div>
        
        <p className="text-sm text-slate-300 line-clamp-2 italic leading-relaxed">
          "{currentData.context}"
        </p>

        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-[10px] font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-600 bg-cyan-200">
                Dominance Index
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-cyan-600">
                {currentData.score}%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-1.5 mb-4 text-xs flex rounded bg-slate-800">
            <div 
              style={{ width: `${currentData.score}%` }} 
              className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center transition-all duration-1000 ${
                currentData.leader === 'USA' ? 'bg-blue-500' : currentData.leader === 'China' ? 'bg-red-500' : 'bg-cyan-500'
              }`}
            ></div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800/50">
          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Gap Projection</span>
          <p className="text-xs text-slate-400">{pillar.gapGuess}</p>
        </div>
      </div>
    </div>
  );
};
