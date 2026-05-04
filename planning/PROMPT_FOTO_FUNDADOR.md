# Prompt — Edição da foto do fundador para Gemini Nano Banana

> Base: foto sua de terno no casamento, levemente de perfil.
> Destino: imagem do fundador no `/quem-somos` e seções de "founder voice".
> Voz da marca: **Cimed + Flow + Nubank** — acessível, brasileiro, anti-corporativês.
>
> A escolha foi: foto **lifestyle**, NÃO institucional Bradesco. Vamos manter o
> seu rosto e a presença de terno (passa seriedade), mas reposicionar tudo ao
> redor.

---

## Prompt 1 — Versão "Fundador acessível" (recomendada para home + /quem-somos)

```
Edit this photo to keep the man's face, hair, skin tone, and build exactly as
they are — preserve identity 1:1. Change everything else around him to make
this a professional founder portrait suited for a Brazilian healthtech startup
landing page. Specific changes:

1. Background: replace entirely with a soft, slightly out-of-focus modern office
   environment — warm neutral tones (cream, soft beige, hint of muted teal),
   suggesting a daylit workspace. NOT a wedding venue. NOT a hotel. NO
   decorative flowers, NO formal event lighting.

2. Lighting: shift to natural daylight from a large window, slightly from the
   side, soft and flattering. Remove any harsh event lighting, flash, or
   warm yellow glow from the original.

3. Wardrobe: keep the dark suit jacket, but remove the tie if present, and
   leave the shirt collar unbuttoned at the top button. Open collar, no tie.
   This shifts the look from "wedding formal" to "founder approachable" —
   like a Brazilian SaaS founder photo (think Karla Felmanas / Cimed style,
   not Bradesco executive style). If a boutonnière (flower on lapel) is
   present, remove it cleanly.

4. Posture and expression: keep the slight side angle (3/4 profile) and his
   natural facial expression, but if he is smiling broadly for the wedding
   photo, soften it to a confident, calm half-smile that reads "trustworthy
   technical founder" — not "groom celebrating".

5. Color grading: clean, slightly desaturated, high-fidelity. Tones close to
   editorial photography for tech magazines (Inc., Fast Company Brasil).
   Skin tone realistic, no over-smoothing, no plastic look. Preserve subtle
   natural skin texture.

6. Resolution and framing: output in high resolution, framed from mid-chest
   up, with a slight margin of breathing room around the head and shoulders.
   Suitable for use as a 3:4 portrait on a website hero or about page.

7. Quality: photorealistic, sharp on the face, slightly soft on the
   background. NO illustration style, NO cartoon, NO heavy stylization. NO
   AI-glossy skin. Match the look of a real DSLR portrait taken by a
   Brazilian photographer for a startup founder profile.

Do NOT add glasses, beards, mustaches, hats, or accessories that weren't in
the original. Do NOT change the man's age, body type, or ethnicity. Preserve
identity at all costs.
```

---

## Prompt 2 — Versão "Em campo" (alternativa para case studies / /quem-somos secundária)

Use depois que tiver a versão 1, se quiser uma segunda imagem com vibe diferente.

```
Take the same person from the previous portrait and place him in a different
context: standing in front of a small medical clinic or modern healthcare
office in a Brazilian interior city. Wardrobe: same dark blazer, no tie,
open collar, OR change to a clean dark polo shirt with a subtle tech-startup
look. Background: a warm, lived-in clinic reception area, slightly out of
focus — NOT a hospital, NOT a luxury private clinic, just a real,
approachable Brazilian medical practice. Daylight from window. Same
photorealistic editorial style, same identity preservation. Frame from waist
up, with the clinic environment recognizable but not dominant.
```

---

## Como usar

1. Abre o **Gemini** (gemini.google.com) ou **Google AI Studio** (aistudio.google.com)
2. Procura o modelo **"Nano Banana"** (Gemini 2.5 Flash Image) — é o melhor
   para preservar identidade em edições de retrato
3. **Anexa sua foto do casamento** (a versão original, sem filtros)
4. **Cola o Prompt 1** no campo de texto
5. Gera. Se sair algo ruim, ajusta o prompt em pontos específicos (ex: "make
   the background more clearly an office, less like a hotel lobby")
6. Salva o output em `assets/founder-erick.jpg` (no repo `servarx-site` quando criarmos)

## Dicas se sair errado

| Problema comum | Como corrigir |
|---|---|
| Rosto mudou demais | Adicione "preserve facial identity exactly, photo identity should be recognizable as the same person" |
| Background ainda parece de festa | Aumente intensidade: "background must be a quiet daylit office, no event decorations whatsoever, no tables with flowers" |
| Imagem ficou cartoon | "photorealistic only, NO illustration, NO AI-art style, treat as real photograph editing" |
| Pele plastificada | "preserve natural skin texture, do not smooth the skin" |
| Cores corporativas demais | "natural editorial color grading, not corporate stock photography" |

## O que faremos com a foto pronta

- **Home**: pequena (avatar circular ou rectangular) na seção "founder
  message" / depoimento de abertura
- **/quem-somos**: principal, em destaque (versão Prompt 1)
- **Footer**: opcional, em pequena ao lado de "Erick Henrique, fundador" +
  link LinkedIn
- **Email signature** (futuro): mesma versão Prompt 1, recortada
- **OG image** (preview no WhatsApp/social): composição maior com seu rosto
  + frase + logo
