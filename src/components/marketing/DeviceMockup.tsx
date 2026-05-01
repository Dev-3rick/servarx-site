import React from 'react';
import { cn } from '@/lib/cn';

interface DeviceMockupProps {
  className?: string;
  type?: 'hero' | 'feature';
}

export function DeviceMockup({ 
  className, 
  type = 'hero'
}: DeviceMockupProps) {
  return (
    <div className={cn("relative w-full aspect-square flex items-center justify-center [perspective:2000px] py-20", className)}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Desktop Device */}
      <div className="relative z-10 w-[85%] animate-float shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] rounded-[2rem] p-2 bg-gradient-to-b from-brand-neutral-light/20 to-brand-neutral-light/5 backdrop-blur-xl border border-white/20 [transform:rotateY(-20deg)_rotateX(10deg)] hover:[transform:rotateY(-15deg)_rotateX(5deg)] transition-all duration-700 ease-out">
        <div className="relative bg-brand-teal-900 rounded-[1.5rem] overflow-hidden border border-black/40 shadow-2xl">
          {/* Screen Content Mock (Matching the screenshot provided) */}
          <div className="aspect-[16/10] bg-white relative overflow-hidden flex">
            {/* Sidebar Mock */}
            <div className="w-[22%] h-full bg-[#032e35] p-3 space-y-3">
               <div className="flex items-center gap-2 mb-6">
                 <div className="w-6 h-6 rounded bg-brand-cyan-400 flex items-center justify-center text-[10px] text-brand-teal-900 font-bold">SX</div>
                 <div className="w-16 h-3 rounded bg-white/20" />
               </div>
               {[...Array(6)].map((_, i) => (
                 <div key={i} className={`w-full h-2.5 rounded-full flex items-center gap-2 px-2 ${i === 0 ? 'bg-brand-cyan-400/40' : 'bg-white/5'}`}>
                    <div className="w-2 h-2 rounded-full bg-white/20" />
                    <div className="flex-1 h-1 rounded-full bg-white/10" />
                 </div>
               ))}
            </div>
            
            {/* Main Content Mock */}
            <div className="flex-1 h-full bg-[#f8fafc] p-6 overflow-hidden">
               <div className="flex justify-between items-center mb-8">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-brand-teal-800">Boa tarde, Dra. Carolina!</h3>
                    <p className="text-[10px] text-brand-neutral-muted">Veja o desempenho da sua clínica hoje. Sofia AI está cuidando de 24 atendimentos.</p>
                  </div>
                  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-[9px] font-bold text-green-700 uppercase">Sistema Online</span>
                  </div>
               </div>
               
               <div className="grid grid-cols-4 gap-4 mb-8">
                  {/* Novos Contatos */}
                  <div className="h-24 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-neutral-border/50 p-4">
                     <div className="flex justify-between items-start mb-1">
                       <div className="w-6 h-6 rounded-lg bg-brand-cyan-400/10 flex items-center justify-center">
                         <div className="w-3 h-3 rounded-full border-2 border-brand-cyan-400" />
                       </div>
                       <span className="text-[8px] text-green-500 font-bold">+20%</span>
                     </div>
                     <div className="text-[8px] text-brand-neutral-muted uppercase font-bold mb-1">Novos Contatos</div>
                     <div className="text-2xl font-bold text-brand-teal-800 leading-none">12</div>
                     <div className="text-[8px] text-brand-neutral-muted mt-1">Pacientes via WhatsApp</div>
                  </div>
                  {/* Agendamentos */}
                  <div className="h-24 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-neutral-border/50 p-4">
                     <div className="flex justify-between items-start mb-1">
                       <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                         <div className="w-3 h-3 rounded bg-green-500/40" />
                       </div>
                       <span className="text-[8px] text-green-500 font-bold">+12%</span>
                     </div>
                     <div className="text-[8px] text-brand-neutral-muted uppercase font-bold mb-1">Agendamentos</div>
                     <div className="text-2xl font-bold text-brand-teal-800 leading-none">08</div>
                     <div className="text-[8px] text-brand-neutral-muted mt-1">Nas últimas 24h</div>
                  </div>
                  {/* Agenda de Hoje */}
                  <div className="h-24 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-neutral-border/50 p-4">
                     <div className="flex justify-between items-start mb-1">
                       <div className="w-6 h-6 rounded-lg bg-orange-500/10 flex items-center justify-center">
                         <div className="w-3 h-0.5 rounded bg-orange-500/40" />
                       </div>
                     </div>
                     <div className="text-[8px] text-brand-neutral-muted uppercase font-bold mb-1">Agenda de Hoje</div>
                     <div className="text-2xl font-bold text-brand-teal-800 leading-none">15</div>
                     <div className="text-[8px] text-brand-neutral-muted mt-1">Consultas marcadas</div>
                  </div>
                  {/* Conversas Ativas */}
                  <div className="h-24 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-neutral-border/50 p-4">
                     <div className="flex justify-between items-start mb-1">
                       <div className="w-6 h-6 rounded-lg bg-purple-500/10 flex items-center justify-center">
                         <div className="w-3 h-3 rounded-full border border-purple-500/40" />
                       </div>
                     </div>
                     <div className="text-[8px] text-brand-neutral-muted uppercase font-bold mb-1">Conversas Ativas</div>
                     <div className="text-2xl font-bold text-brand-teal-800 leading-none">24</div>
                     <div className="text-[8px] text-brand-neutral-muted mt-1">Atendimentos por Sofia</div>
                  </div>
               </div>
               
               <div className="grid grid-cols-2 gap-6">
                  <div className="h-48 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-neutral-border/50 p-5">
                    <div className="w-32 h-4 rounded bg-brand-teal-800/5 mb-6" />
                    <div className="space-y-4">
                       {[...Array(3)].map((_, i) => (
                         <div key={i} className="flex gap-3">
                           <div className="w-8 h-8 rounded-full bg-brand-neutral-bg" />
                           <div className="flex-1 space-y-2 py-1">
                             <div className="w-full h-2 rounded bg-brand-neutral-bg" />
                             <div className="w-3/4 h-1.5 rounded bg-brand-neutral-bg" />
                           </div>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="h-48 rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-brand-neutral-border/50 p-5">
                    <div className="w-32 h-4 rounded bg-brand-teal-800/5 mb-6" />
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-brand-neutral-bg" />
                        <div className="flex-1 space-y-2 py-1">
                          <div className="w-full h-2 rounded bg-brand-neutral-bg" />
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
          </div>
          
          {/* Glass Overlay Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-cyan-400/5 to-white/5 pointer-events-none" />
        </div>
      </div>

      {/* Floating Elements for 3D Depth */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan-400/20 blur-3xl animate-pulse" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-teal-400/10 blur-3xl" />
      
      {/* Mobile Frame - Floating Overlay */}
      <div className="absolute -right-4 -bottom-10 w-[220px] z-20 hidden md:block animate-fade-up [animation-delay:1200ms] [transform:rotateY(10deg)_rotateX(5deg)] shadow-2xl">
        <div className="relative rounded-[40px] border-[6px] border-brand-teal-800 bg-brand-teal-900 p-2 overflow-hidden">
          {/* Mobile Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-brand-teal-800 rounded-b-2xl z-30" />
          
          <div className="aspect-[9/19] rounded-[32px] bg-[#f8fafc] relative overflow-hidden border border-brand-teal-700/50 p-4">
             <div className="w-full h-4 rounded bg-brand-teal-800/5 mb-4" />
             <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-16 rounded-xl bg-white border border-brand-neutral-border/50 shadow-sm p-3">
                     <div className="w-6 h-6 rounded-lg bg-brand-neutral-bg mb-2" />
                     <div className="w-full h-2 rounded bg-brand-neutral-bg" />
                  </div>
                ))}
             </div>
          </div>
          {/* Home Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-brand-teal-800/20 rounded-full" />
        </div>
      </div>
    </div>
  );
}
