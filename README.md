# Marinaldo Melo Contabilidade — Site V3

Site institucional em página única. React + TypeScript + Vite + Tailwind CSS v4. Sem backend — apenas frontend estático.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos finais ficam em `dist/`, prontos para publicar em qualquer hospedagem estática (Vercel, Netlify, Hostinger, etc).

## Antes de publicar

- **Domínio**: `index.html`, `public/robots.txt` e `public/sitemap.xml` já usam `https://marinaldomelocontabilidade.com.br/` como domínio definitivo.
- **WhatsApp**: número configurado em `src/lib/whatsapp.ts`.
- **Fotos**: as fotos originais (em alta resolução) ficam em `src/assets/images/`. As versões otimizadas em WebP usadas no site foram geradas a partir delas.
