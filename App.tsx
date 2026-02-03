
import React, { useState, useEffect } from 'react';
import { TrendingUp, Clock, Globe, Zap, ArrowRight, BarChart3, ShieldCheck } from 'lucide-react';
import { AI_PILLARS } from './constants';
import { PillarCard } from './components/PillarCard';
import { LeadershipRadar } from './components/LeadershipRadar';
import { AILeadershipGraphic } from './components/AILeadershipGraphic';
import { getAIInsights } from './services/geminiService';
import { AIPrediction } from './types';

const App: React.FC = () => {
  const [activeYear, setActiveYear] = useState<'2026' | '2030'>('2026');
  const [insights, setInsights] = useState<AIPrediction | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      setLoading(true);
      const data = await getAIInsights(AI_PILLARS);
      setInsights(data);
      setLoading(false);
    };
    fetchInsights();
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[30%] left-[50%] w-[30%] h-[30%] bg-cyan-500/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-16">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase">
                Geopolitical Report
              </span>
              <span className="text-slate-500 text-xs">•</span>
              <span className="text-slate-500 text-xs font-mono">v1.0.4-beta</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-50 mb-6 leading-tight">
              AI Leadership <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-red-400">
                Horizon 2026 - 2030
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
              An analytical projection of global AI dominance. Tracking 7 critical pillars that define the next generation of technological hegemony.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-slate-900/80 border border-slate-800 p-1.5 rounded-2xl flex items-center shadow-xl backdrop-blur-md">
              <button 
                onClick={() => setActiveYear('2026')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-bold text-sm ${
                  activeYear === '2026' 
                    ? 'bg-slate-800 text-white shadow-lg' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <Clock size={16} />
                2026 CURRENT
              </button>
              <button 
                onClick={() => setActiveYear('2030')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-bold text-sm ${
                  activeYear === '2030' 
                    ? 'bg-red-500/10 text-red-400 border border-red-500/20 shadow-lg' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <TrendingUp size={16} />
                2030 PROJECTED
              </button>
            </div>
            <p className="text-[10px] text-slate-500 font-mono text-center md:text-right uppercase tracking-widest">
              Selected Era: {activeYear} Perspective
            </p>
          </div>
        </header>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 p-6 rounded-2xl">
            <div className="p-3 bg-blue-500/10 text-blue-400 w-fit rounded-xl mb-4">
              <Globe size={24} />
            </div>
            <h3 className="font-bold text-slate-100 mb-2">Global Fragmentation</h3>
            <p className="text-sm text-slate-400">AI leadership is moving from a unipolar American-led era to a bipolar competition with deep industrial integration.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 p-6 rounded-2xl">
            <div className="p-3 bg-red-500/10 text-red-400 w-fit rounded-xl mb-4">
              <Zap size={24} />
            </div>
            <h3 className="font-bold text-slate-100 mb-2">Energy Hegemony</h3>
            <p className="text-sm text-slate-400">Energy production is the ultimate bottleneck. China's early lead in renewables defines the 2030 ceiling.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-900 to-slate-800/50 border border-slate-800 p-6 rounded-2xl">
            <div className="p-3 bg-cyan-500/10 text-cyan-400 w-fit rounded-xl mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-bold text-slate-100 mb-2">Stability & Risk</h3>
            <p className="text-sm text-slate-400">Risk management shifts from ethical theory to practical execution as AI permeates the physical world.</p>
          </div>
        </div>

        {/* AI Leadership Graphic - Main Visual */}
        <div className="mb-16">
          <AILeadershipGraphic />
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {AI_PILLARS.map(pillar => (
            <PillarCard key={pillar.id} pillar={pillar} activeYear={activeYear} />
          ))}
          
          {/* Legend / Info Card */}
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-black text-blue-300 mb-2">Data Legend</h3>
              <p className="text-sm text-blue-200/60 mb-6 italic leading-relaxed">
                Scores represent a normalized index of infrastructure, output, and strategic implementation capability.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-500" />
                <span className="text-xs text-slate-300">USA Dominance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500" />
                <span className="text-xs text-slate-300">China Dominance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-purple-500" />
                <span className="text-xs text-slate-300">Tied / Transitional</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visualization Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          <LeadershipRadar />
          
          <div className="flex flex-col justify-center">
            <div className="bg-slate-900/40 border border-slate-800/50 p-8 rounded-3xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-yellow-500/10 text-yellow-500 rounded-lg">
                  <BarChart3 size={20} />
                </div>
                <h2 className="text-2xl font-black text-slate-50 uppercase tracking-tighter">AI Strat-Brain Analysis</h2>
              </div>
              
              {loading ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-slate-800 rounded w-full" />
                  <div className="h-4 bg-slate-800 rounded w-3/4" />
                  <div className="h-4 bg-slate-800 rounded w-5/6" />
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="prose prose-invert prose-sm">
                    <p className="text-slate-300 text-lg font-medium italic leading-relaxed border-l-4 border-cyan-500 pl-6 mb-8">
                      {insights?.summary}
                    </p>
                    <div className="p-6 bg-slate-800/40 rounded-2xl border border-slate-700/50">
                      <h4 className="text-cyan-400 font-black uppercase text-xs tracking-widest mb-2 flex items-center gap-2">
                        Strategic Takeaway <ArrowRight size={12} />
                      </h4>
                      <p className="text-slate-400 font-mono text-sm leading-relaxed">
                        {insights?.strategicTakeaway}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-red-500 rounded-lg flex items-center justify-center font-black text-white italic">
              AIH
            </div>
            <div>
              <p className="text-sm font-bold text-slate-300">AI Leadership Horizon</p>
              <p className="text-[10px] text-slate-600 font-mono">Geopolitical Strategy Unit © 2024</p>
            </div>
          </div>
          
          <div className="flex gap-8 text-[11px] font-mono text-slate-500 uppercase tracking-widest">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Documentation</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Methodology</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">Raw Data</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
