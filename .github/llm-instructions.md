# Istruzioni per l'Assistente AI sul progetto BOB Prompt Library

## Panoramica
La **BOB Prompt Library** è un'applicazione web full-stack per gestire, organizzare e sincronizzare prompt per AI. È costruita con React, Vite, Supabase e Tailwind CSS. Il progetto segue un'architettura modulare e scalabile, ottimizzata per desktop e mobile.

## Componenti Chiave
- **Frontend**: Costruito con React e stilizzato con Tailwind CSS. L'entry point è `src/main.jsx`.
- **Backend**: Supabase gestisce l'autenticazione e le operazioni sul database. La configurazione si trova in `src/lib/supabase.js`.
- **Build Tool**: Vite è usato per lo sviluppo e le build di produzione. La configurazione è in `vite.config.js`.
- **Stile**: Tailwind CSS è configurato in `tailwind.config.js`.

## Workflow di Sviluppo
### Sviluppo Locale
1. Installa le dipendenze:
   ```bash
   npm install
   ```
2. Avvia il server di sviluppo:
   ```bash
   npm run dev
   ```
   L'applicazione sarà disponibile su `http://localhost:5173`.

### Testing
- Attualmente, non è configurato un framework di test. Aggiungi test se necessario.

## Convenzioni del Progetto
- **Struttura dei Componenti**: Tutti i componenti React si trovano in `src/components/`. Ogni file rappresenta un singolo componente.
- **Gestione dello Stato**: Non viene usata una libreria di gestione dello stato globale. Lo stato è gestito localmente nei componenti.
- **Autenticazione**: Le credenziali di base sono in `src/auth.config.js`. L'integrazione con Supabase gestisce la logica cloud.
- **Stile**: Usa le classi di utilità di Tailwind CSS. Evita stili in linea.

## Integrazioni
- **Supabase**: Configurato in `src/lib/supabase.js`. Assicurati che le variabili d'ambiente per le chiavi API siano impostate in un file `.env`.
- **Assets**: Le risorse statiche si trovano in `public/`.

## Comandi Comuni
- `npm install`: Installa le dipendenze.
- `npm run dev`: Avvia il server di sviluppo.
- `npm run build`: Crea la build di produzione.
- `npm run preview`: Avvia un'anteprima della build di produzione.

## Note per l'Assistente AI
- Segui la struttura modulare esistente quando aggiungi nuovi componenti.
- Usa Tailwind CSS per lo stile per mantenere la coerenza.
- Assicurati che le nuove funzionalità si integrino correttamente con Supabase.
- Documenta ogni nuovo workflow o pattern in questo file.

---

Per ulteriori dettagli, fai riferimento al file [README.md](../README.md).
