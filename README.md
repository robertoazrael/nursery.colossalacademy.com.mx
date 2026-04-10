# nursery.colossalacademy.com.mx

Sitio migrado de un export estático de Figma a Astro + Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Estructura

- `src/pages/index.astro` sirve la versión en español (`/`).
- `src/pages/en.astro` sirve la versión en inglés (`/en`).
- `src/components/LandingPage.astro` compone la landing reutilizable para ambos idiomas.
- `src/data/site.ts` centraliza el contenido editable y las variantes por idioma.
- `public/images/` contiene los assets visuales reutilizados del export original.
