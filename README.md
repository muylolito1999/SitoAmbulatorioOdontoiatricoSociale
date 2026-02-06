# Ambulatorio Odontoiatrico Solidale OdV — Bologna

Sito web dell'Ambulatorio Odontoiatrico Solidale OdV di Bologna: cure dentali gratuite per persone in difficoltà.

## Requisiti

- [Bun](https://bun.sh/) (latest)

## Sviluppo

```bash
# Installa le dipendenze
bun install

# Avvia il server di sviluppo
bun dev

# Build di produzione
bun run build

# Anteprima del build
bun run preview
```

## Pannello Admin

Accedi a `/admin` per modificare i contenuti del sito.

- Codice di accesso: impostato tramite variabile d'ambiente `VITE_ADMIN_PASSCODE` (default: `admin2024`)
- I contenuti sono salvati in localStorage
- Puoi esportare/importare i contenuti come JSON

## Deploy su Vercel

1. Collega il repository a Vercel
2. Build command: `bun run build`
3. Output directory: `dist`
4. Aggiungi la variabile d'ambiente `VITE_ADMIN_PASSCODE`

## Stack Tecnologico

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4
- React Router v7
