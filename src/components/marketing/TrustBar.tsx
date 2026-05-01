'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/motion/Reveal';

const LOGOS = [
  { name: 'Policlínicas', icon: '🏥' },
  { name: 'Odontologia', icon: '🦷' },
  { name: 'Oftalmologia', icon: '👁️' },
  { name: 'Centros de Imagem', icon: '🔬' },
  { name: 'Hospitais', icon: '🏢' },
  { name: 'Laboratórios', icon: '🧪' },
  { name: 'Fisioterapia', icon: '🧘' },
  { name: 'Clínicas Populares', icon: '⚕️' },
];

export function TrustBar() {
  // Duplicamos a lista para criar o efeito infinito sem saltos
  const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="py-16 border-y border-brand-neutral-border bg-brand-neutral-surface-alt relative overflow-hidden">
      <div className="max-w-page-xl mx-auto px-6 lg:px-8 mb-12">
        <Reveal variant="fade" delay={100}>
          <p className="text-center text-xs font-bold text-brand-neutral-light uppercase tracking-[0.3em]">
            A IA que já atende no interior de Minas
          </p>
        </Reveal>
      </div>

      {/* Container do Carrossel */}
      <div className="relative flex overflow-hidden">
        {/* Gradientes de fade nas laterais para um visual premium */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-neutral-surface-alt to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-brand-neutral-surface-alt to-transparent z-10" />

        <motion.div
          className="flex gap-6 pr-6"
          animate={{
            x: ['0%', '-33.33%'], // Move um terço (uma lista completa) para a esquerda
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30, // Velocidade suave
              ease: 'linear',
            },
          }}
        >
          {duplicatedLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-4 px-6 py-4 bg-white/60 backdrop-blur-sm border border-white/80 shadow-soft rounded-2xl whitespace-nowrap group hover:border-brand-cyan-200 transition-all duration-300"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-300 grayscale-[0.5] group-hover:grayscale-0">
                {logo.icon}
              </span>
              <span className="font-semibold text-brand-teal-800 tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

