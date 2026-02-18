
import React, { useState } from 'react';
import {
  Cpu,
  Zap,
  Bot,
  Microscope,
  GraduationCap,
  ShieldAlert,
  Share2,
  ArrowRight,
  TrendingUp,
  ChevronRight,
  Flag
} from 'lucide-react';

interface LeadershipElement {
  id: string;
  name: string;
  nameTR: string;
  icon: React.ReactNode;
  status2026: {
    leader: 'USA' | 'China' | 'Both';
    description: string;
    usaScore: number;
    chinaScore: number;
  };
  status2030: {
    leader: 'USA' | 'China' | 'Both';
    description: string;
    usaScore: number;
    chinaScore: number;
  };
  gapEstimate: string;
  trend: 'usa_losing' | 'china_losing' | 'converging' | 'china_extending';
}

const elements: LeadershipElement[] = [
  {
    id: 'compute',
    name: 'Compute',
    nameTR: 'Hesaplama Gücü',
    icon: <Cpu size={24} />,
    status2026: { leader: 'USA', description: 'ABD önde', usaScore: 75, chinaScore: 55 },
    status2030: { leader: 'Both', description: 'Çin yakalıyor/geçebilir', usaScore: 65, chinaScore: 70 },
    gapEstimate: 'Gap daralıyor (2-5x)',
    trend: 'usa_losing'
  },
  {
    id: 'energy',
    name: 'Energy',
    nameTR: 'Enerji',
    icon: <Zap size={24} />,
    status2026: { leader: 'China', description: 'Çin önde', usaScore: 45, chinaScore: 70 },
    status2030: { leader: 'China', description: 'Çin net önde', usaScore: 40, chinaScore: 90 },
    gapEstimate: '2-3 kat üretim',
    trend: 'china_extending'
  },
  {
    id: 'robotics',
    name: 'Robotics & Adv. Manufacturing',
    nameTR: 'Robotik & İleri İmalat',
    icon: <Bot size={24} />,
    status2026: { leader: 'China', description: 'Çin büyük önde', usaScore: 30, chinaScore: 80 },
    status2030: { leader: 'China', description: 'Çin domine', usaScore: 20, chinaScore: 95 },
    gapEstimate: '10-20 kat deployment',
    trend: 'china_extending'
  },
  {
    id: 'industrial',
    name: 'Industrial-Scientific Base',
    nameTR: 'Endüstriyel-Bilimsel Temel',
    icon: <Microscope size={24} />,
    status2026: { leader: 'Both', description: 'ABD kaliteli, Çin hacim', usaScore: 65, chinaScore: 65 },
    status2030: { leader: 'China', description: 'Çin geçiyor', usaScore: 55, chinaScore: 80 },
    gapEstimate: 'Çin koordinasyon',
    trend: 'usa_losing'
  },
  {
    id: 'talent',
    name: 'Talent',
    nameTR: 'Yetenek',
    icon: <GraduationCap size={24} />,
    status2026: { leader: 'Both', description: 'ABD elite, Çin miktar', usaScore: 70, chinaScore: 60 },
    status2030: { leader: 'China', description: 'Çin önde', usaScore: 55, chinaScore: 80 },
    gapEstimate: 'Çin hacim + dönüş',
    trend: 'usa_losing'
  },
  {
    id: 'risk',
    name: 'Risk Management',
    nameTR: 'Risk Yönetimi',
    icon: <ShieldAlert size={24} />,
    status2026: { leader: 'USA', description: 'ABD önde', usaScore: 80, chinaScore: 50 },
    status2030: { leader: 'Both', description: 'ABD meşruiyet, Çin pratik', usaScore: 70, chinaScore: 70 },
    gapEstimate: 'Yakınlaşma',
    trend: 'converging'
  },
  {
    id: 'diffusion',
    name: 'Diffusion / Adoption',
    nameTR: 'Yayılma / Diffusion',
    icon: <Share2 size={24} />,
    status2026: { leader: 'Both', description: 'Çin yaklaşıyor', usaScore: 60, chinaScore: 55 },
    status2030: { leader: 'China', description: 'Çin globalde önde', usaScore: 45, chinaScore: 90 },
    gapEstimate: 'Çin ucuz/open-source',
    trend: 'china_extending'
  }
];

const LeaderBadge: React.FC<{ leader: 'USA' | 'China' | 'Both'; size?: 'sm' | 'lg' }> = ({ leader, size = 'sm' }) => {
  const baseClass = size === 'lg' ? 'px-4 py-2 text-sm font-black' : 'px-2 py-1 text-[10px] font-bold';

  if (leader === 'USA') {
    return (
      <span className={`${baseClass} rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase tracking-wider flex items-center gap-1`}>
        <span className="text-lg">🇺🇸</span> USA
      </span>
    );
  }
  if (leader === 'China') {
    return (
      <span className={`${baseClass} rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 uppercase tracking-wider flex items-center gap-1`}>
        <span className="text-lg">🇨🇳</span> ÇİN
      </span>
    );
  }
  return (
    <span className={`${baseClass} rounded-lg bg-purple-500/20 text-purple-400 border border-purple-500/30 uppercase tracking-wider`}>
      ⚖️ YAKIN
    </span>
  );
};

const TrendArrow: React.FC<{ trend: LeadershipElement['trend'] }> = ({ trend }) => {
  const configs = {
    usa_losing: { color: 'text-red-400', icon: '📉', label: 'ABD kaybediyor' },
    china_losing: { color: 'text-blue-400', icon: '📈', label: 'Çin kaybediyor' },
    converging: { color: 'text-purple-400', icon: '🤝', label: 'Yakınsama' },
    china_extending: { color: 'text-red-500', icon: '🚀', label: 'Çin açılıyor' }
  };
  const config = configs[trend];

  return (
    <div className={`flex items-center gap-1 ${config.color} text-xs font-semibold`}>
      <span>{config.icon}</span>
      <span>{config.label}</span>
    </div>
  );
};

const ComparisonBar: React.FC<{ usaScore: number; chinaScore: number; year: string }> = ({ usaScore, chinaScore, year }) => {
  const total = usaScore + chinaScore;
  const usaPercent = (usaScore / total) * 100;
  const chinaPercent = (chinaScore / total) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between text-[10px] text-slate-500 mb-1">
        <span>USA {usaScore}%</span>
        <span className="text-slate-600">{year}</span>
        <span>ÇİN {chinaScore}%</span>
      </div>
      <div className="h-3 flex rounded-full overflow-hidden bg-slate-800">
        <div
          className="bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-1000"
          style={{ width: `${usaPercent}%` }}
        />
        <div
          className="bg-gradient-to-r from-red-400 to-red-600 transition-all duration-1000"
          style={{ width: `${chinaPercent}%` }}
        />
      </div>
    </div>
  );
};

export const AILeadershipGraphic: React.FC = () => {
  const [activeElement, setActiveElement] = useState<string | null>(null);

  // Calculate overall scores
  const totals2026 = elements.reduce((acc, el) => ({
    usa: acc.usa + el.status2026.usaScore,
    china: acc.china + el.status2026.chinaScore
  }), { usa: 0, china: 0 });

  const totals2030 = elements.reduce((acc, el) => ({
    usa: acc.usa + el.status2030.usaScore,
    china: acc.china + el.status2030.chinaScore
  }), { usa: 0, china: 0 });

  const usaWins2026 = elements.filter(e => e.status2026.leader === 'USA').length;
  const chinaWins2026 = elements.filter(e => e.status2026.leader === 'China').length;
  const usaWins2030 = elements.filter(e => e.status2030.leader === 'USA').length;
  const chinaWins2030 = elements.filter(e => e.status2030.leader === 'China').length;

  return (
    <div className="w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-3xl border border-slate-800 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-red-900/30 p-8 border-b border-slate-800">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Flag className="text-blue-400" size={28} />
          <h2 className="text-3xl md:text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-200 to-red-400">
            AI LİDERLİK HARİTASI
          </h2>
          <Flag className="text-red-400" size={28} />
        </div>
        <p className="text-center text-slate-400 text-sm max-w-2xl mx-auto">
          2026-2030 Projeksiyonu: 7 kritik element üzerinden ABD ve Çin'in yapay zeka üstünlük mücadelesi
        </p>

        {/* Overall Score Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
          <div className="bg-slate-900/60 rounded-2xl p-6 border border-slate-700/50">
            <div className="flex items-center justify-between mb-4">
              <span className="text-blue-400 font-bold text-lg">2026</span>
              <span className="text-xs text-slate-500 uppercase">Mevcut Durum</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400">{usaWins2026}</div>
                <div className="text-xs text-slate-500">🇺🇸 Lider</div>
              </div>
              <div className="flex-1 h-8 bg-slate-800 rounded-full flex overflow-hidden">
                <div className="bg-blue-500 flex items-center justify-center text-white text-xs font-bold"
                     style={{ width: `${(totals2026.usa / (totals2026.usa + totals2026.china)) * 100}%` }}>
                  {Math.round((totals2026.usa / (totals2026.usa + totals2026.china)) * 100)}%
                </div>
                <div className="bg-red-500 flex items-center justify-center text-white text-xs font-bold"
                     style={{ width: `${(totals2026.china / (totals2026.usa + totals2026.china)) * 100}%` }}>
                  {Math.round((totals2026.china / (totals2026.usa + totals2026.china)) * 100)}%
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-red-400">{chinaWins2026}</div>
                <div className="text-xs text-slate-500">🇨🇳 Lider</div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/60 rounded-2xl p-6 border border-red-500/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-red-400 font-bold text-lg">2030</span>
              <span className="text-xs text-slate-500 uppercase">Projeksiyon</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-center">
                <div className="text-3xl font-black text-blue-400">{usaWins2030}</div>
                <div className="text-xs text-slate-500">🇺🇸 Lider</div>
              </div>
              <div className="flex-1 h-8 bg-slate-800 rounded-full flex overflow-hidden">
                <div className="bg-blue-500 flex items-center justify-center text-white text-xs font-bold"
                     style={{ width: `${(totals2030.usa / (totals2030.usa + totals2030.china)) * 100}%` }}>
                  {Math.round((totals2030.usa / (totals2030.usa + totals2030.china)) * 100)}%
                </div>
                <div className="bg-red-500 flex items-center justify-center text-white text-xs font-bold"
                     style={{ width: `${(totals2030.china / (totals2030.usa + totals2030.china)) * 100}%` }}>
                  {Math.round((totals2030.china / (totals2030.usa + totals2030.china)) * 100)}%
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-red-400">{chinaWins2030}</div>
                <div className="text-xs text-slate-500">🇨🇳 Lider</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Element Cards */}
      <div className="p-6 md:p-8">
        <div className="space-y-4">
          {elements.map((element, index) => (
            <div
              key={element.id}
              className={`bg-slate-900/50 rounded-2xl border transition-all duration-300 overflow-hidden ${
                activeElement === element.id
                  ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
              onClick={() => setActiveElement(activeElement === element.id ? null : element.id)}
            >
              {/* Element Header */}
              <div className="p-5 cursor-pointer">
                <div className="flex items-center gap-4">
                  {/* Index Number */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 font-black text-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-slate-800 text-slate-300">
                    {element.icon}
                  </div>

                  {/* Name & Description */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-slate-100 text-lg">{element.name}</h3>
                    <p className="text-xs text-slate-500">{element.nameTR}</p>
                  </div>

                  {/* 2026 Leader */}
                  <div className="hidden md:flex flex-col items-center gap-1">
                    <span className="text-[10px] text-slate-600 uppercase">2026</span>
                    <LeaderBadge leader={element.status2026.leader} />
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block">
                    <ArrowRight className="text-slate-600" size={20} />
                  </div>

                  {/* 2030 Leader */}
                  <div className="hidden md:flex flex-col items-center gap-1">
                    <span className="text-[10px] text-slate-600 uppercase">2030</span>
                    <LeaderBadge leader={element.status2030.leader} />
                  </div>

                  {/* Trend */}
                  <div className="hidden lg:block">
                    <TrendArrow trend={element.trend} />
                  </div>

                  {/* Expand Icon */}
                  <ChevronRight
                    className={`text-slate-500 transition-transform ${activeElement === element.id ? 'rotate-90' : ''}`}
                    size={20}
                  />
                </div>

                {/* Mobile view badges */}
                <div className="flex md:hidden items-center justify-between mt-4 pt-4 border-t border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500">2026:</span>
                    <LeaderBadge leader={element.status2026.leader} />
                  </div>
                  <ArrowRight className="text-slate-600" size={16} />
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500">2030:</span>
                    <LeaderBadge leader={element.status2030.leader} />
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {activeElement === element.id && (
                <div className="px-5 pb-5 border-t border-slate-800/50 pt-4 bg-slate-950/50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* 2026 Status */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span className="font-bold text-slate-300">2026 Durumu</span>
                      </div>
                      <ComparisonBar
                        usaScore={element.status2026.usaScore}
                        chinaScore={element.status2026.chinaScore}
                        year="2026"
                      />
                      <p className="text-sm text-slate-400 italic">"{element.status2026.description}"</p>
                    </div>

                    {/* 2030 Projection */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="font-bold text-slate-300">2030 Projeksiyonu</span>
                      </div>
                      <ComparisonBar
                        usaScore={element.status2030.usaScore}
                        chinaScore={element.status2030.chinaScore}
                        year="2030"
                      />
                      <p className="text-sm text-slate-400 italic">"{element.status2030.description}"</p>
                    </div>
                  </div>

                  {/* Gap Estimate */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="text-cyan-400" size={16} />
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Fark Tahmini</span>
                    </div>
                    <p className="text-slate-300 font-semibold">{element.gapEstimate}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Summary */}
      <div className="bg-gradient-to-r from-red-900/20 via-purple-900/30 to-blue-900/20 p-8 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-black text-center text-slate-200 mb-6">
            📊 GENEL DEĞERLENDİRME
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-900/60 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🏭</div>
              <h4 className="font-bold text-red-400 mb-1">Üretim & Enerji</h4>
              <p className="text-xs text-slate-400">Çin 2030'da mutlak hakimiyet</p>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="font-bold text-purple-400 mb-1">Temel Araştırma</h4>
              <p className="text-xs text-slate-400">ABD kalite, Çin hacim avantajı</p>
            </div>
            <div className="bg-slate-900/60 rounded-xl p-4 text-center">
              <div className="text-2xl mb-2">⚖️</div>
              <h4 className="font-bold text-blue-400 mb-1">Risk & Etik</h4>
              <p className="text-xs text-slate-400">ABD meşruiyet lideri kalıyor</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
            <p className="text-sm text-slate-300 text-center leading-relaxed">
              <span className="text-cyan-400 font-bold">Sonuç:</span> 2026'dan 2030'a geçişte Çin, 7 kritik elementin 5'inde liderliği ele geçiriyor.
              ABD sadece Risk Yönetimi'nde avantajını koruyor. Hesaplama gücü kritik dönüm noktası olacak.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
