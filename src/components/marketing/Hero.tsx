import Link from 'next/link';
import { ShieldCheck, MessageSquare, Play } from 'lucide-react';
import { Reveal } from '@/components/motion/Reveal';
// import { DeviceMockup } from '@/components/marketing/DeviceMockup';
import { Button } from '@/components/ui/button';
import { SITE } from '@/lib/site';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-10 lg:pt-16 pb-8 lg:pb-12"
      style={{ background: 'var(--gradient-hero-glow)' }}
    >
      {/* Texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-page-xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <div className="text-center z-10 w-full">
            <Reveal immediate variant="up" delay={200} duration={1.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan-400/10 border border-brand-cyan-400/20 text-brand-cyan-400 text-xs font-medium mb-6 uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan-400"></span>
                </span>
                Para Centros Médicos do Interior
              </div>
            </Reveal>

            <Reveal immediate variant="up" delay={300} duration={1.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-teal-800 leading-[1.1] mb-6 tracking-tight">
                A primeira IA conversacional construída <br className="hidden sm:block" />
                para o <span className="bg-gradient-to-r from-brand-cyan-500 to-brand-teal-600 bg-clip-text text-transparent">Centro Médico.</span>
              </h1>
            </Reveal>

            <Reveal immediate variant="up" delay={420} duration={1.1}>
              <p className="max-w-[720px] mx-auto text-lg leading-relaxed text-brand-neutral-muted lg:text-xl mb-10">
                Agende todos os médicos e atenda pacientes em áudio e texto, <br className="hidden md:block" /> 24h por dia, sem pagar licenças extras por profissional.
              </p>
            </Reveal>

            <Reveal immediate variant="up" delay={640} duration={1.1}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="xl" className="w-full sm:w-auto shadow-cta-accent group" asChild>
                  <Link href="/contato">
                    <MessageSquare className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Agendar demonstração
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm" asChild>
                  <Link href="#como-funciona">
                    <Play className="w-5 h-5 mr-2 fill-current" />
                    Ver tour
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal immediate variant="up" delay={800} duration={1.1}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-neutral-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-cyan-600" />
                  <span>30 dias de garantia</span>
                </div>
                <div className="h-4 w-px bg-brand-neutral-border hidden sm:block" />
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan-400" />
                  <span>suporte humano em 10 min</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
