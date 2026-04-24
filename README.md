# Débora Dias — Psicóloga · Landing Page

Landing page profissional para a psicóloga Débora Dias.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (bundler)
- **Tailwind CSS v3** (estilos via utilitários)
- **Framer Motion** (animações baseadas em scroll)
- **React Icons** (ícones)
- **react-helmet-async** (SEO)

## Estrutura

```
src/
├── assets/            # logo.svg e imagens
├── components/
│   ├── ui/            # Button, SectionTitle, DecorativeFloral
│   └── sections/      # Header, Hero, About, Benefits, Method, CtaFinal, Footer
├── constants/         # content.ts — todos os textos da página
├── hooks/             # useScrollAnimation
├── styles/            # globals.css
└── types/             # index.ts
```

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Pronto para **Netlify** (`netlify.toml`) e **Vercel** (`vercel.json`).

## Personalização

- **Textos**: edite `src/constants/content.ts`
- **Cores/fontes**: edite `tailwind.config.ts`
- **Logo**: substitua `src/assets/logo.svg`
- **Foto**: substitua o placeholder em `Hero.tsx` e `About.tsx` por um `<img>` real
