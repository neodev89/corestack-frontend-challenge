This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## CoreStack – Frontend Challenge
⚠️ Aggiornamento
Questa è la versione aggiornata della challenge.

Se hai già iniziato una versione precedente, puoi:

continuare con quella
oppure passare alla versione aggiornata
Entrambe verranno valutate.

🎯 Obiettivo
Questa challenge serve per valutare il tuo livello reale come frontend developer.

Non è un test da “passare”, ma uno strumento per osservare:

come affronti un problema
come prendi decisioni
come strutturi una soluzione
⚙️ Contesto
Stai lavorando su una piccola feature di un prodotto che gestisce contenuti.

Hai accesso a una API pubblica, ma:

alcuni aspetti non sono completamente definiti
non tutto è specificato nel dettaglio
Come in un contesto reale, dovrai gestire ambiguità e prendere decisioni.

🧠 Approccio richiesto
Non è necessario completare tutto.

È più importante:

capire cosa fare
decidere cosa NON fare
motivare le scelte
Se qualcosa non è chiaro, puoi fare assunzioni: esplicitarle è parte della valutazione.

La capacità di priorizzare e gestire ambiguità è parte centrale della challenge.

🚀 Come partecipare
Fai fork della repository
Lavora sulla tua copia
Completa la challenge
Invia il link della tua repo GitHub
🧪 Task
Costruisci una piccola applicazione per lavorare con una lista di post.

1. Dati da API
Recupera i dati da: https://jsonplaceholder.typicode.com/posts

2. Visualizzazione
Mostra i dati nel modo che ritieni più utile.

Puoi scegliere liberamente:

struttura (lista, card, ecc.)
organizzazione
eventuale paginazione o raggruppamento
3. Aggiunta contenuti
Permetti all’utente di aggiungere un nuovo post tramite un form.

Puoi:

simulare la POST
oppure gestire i dati localmente
4. Gestione stato
Gestisci:

loading durante il fetch
errori (es. API non disponibile)
5. Validazione
Il form deve gestire:

input vuoti
feedback all’utente
6. Comportamento extra (facoltativo)
Implementa almeno una tra queste:

filtro dei post
ordinamento
gestione di molti elementi (UX/performance)
Scegli tu cosa ha più senso.

🧠 Prima di iniziare (importante)
Scrivi brevemente (3–5 righe):

cosa faresti per primo
cosa ritieni più importante
eventuali dubbi o ambiguità
Non serve essere esaustivi: ci interessa il tuo processo di ragionamento.

🧠 README finale
Nel README (breve), spiega in modo sintetico:

cosa hai deciso di fare e perché
cosa NON hai fatto e perché
eventuali compromessi
cosa miglioreresti con più tempo
Non è richiesta una documentazione lunga: poche righe chiare sono sufficienti.

⚙️ Stack
React è suggerito.

Puoi comunque utilizzare qualsiasi tecnologia frontend con cui ti senti a tuo agio.

La valutazione non si basa sulla tecnologia scelta, ma su come affronti il problema e sulle decisioni che prendi.

⏱️ Tempo
Tempo stimato: 45–60 minuti

Non è necessario completare tutto perfettamente.

📦 Output
Invia:

link alla repository GitHub
codice funzionante
🧠 Valutazione
Riceverai un feedback strutturato su:

gestione API
state management
form & validazione
qualità del codice
UX
capacità decisionale
La valutazione tiene conto sia dell’esecuzione tecnica che del modo in cui prendi decisioni.

💬 Feedback
Dopo la challenge potrai lasciare un feedback su:

difficoltà
chiarezza
realismo rispetto a un colloquio frontend
🚀 CoreStack
Questa challenge è parte della beta di CoreStack.

L’obiettivo è rendere la valutazione tecnica:

più aderente al lavoro reale
meno basata sul CV
più utile sia per developer che per aziende

## Inizio lavoro ore 0:00 del 12/04/2026

### stack utilizzato

Il progetto che ho inizializzato è basato su Next.js a cui ho applicato anche Tanstack query e Axios per le chiamate API lato client, Zod per la validazione e l'inferimento dei tipi, MUI per avere una libreria UI per implementare meglio l'interfacce.

### cosa ho fatto

- Ho implementato un controllo a mano molto basico del form di aggiunta posts (ci vorrebbe Zod e Rhf) per evitare di inviare dati vacanti.
- Non avendo un controllo sull'API originaria esterna ho gestito tramite API interne la sovrascrittura o l'update di un file JSON interno per gestire i dati ed averli sempre "freschi".
- Ho realizzato delle semplici Cards con Material UI per affibbiare loro i dati ottenuti e mostrarli sempre grazie a Tanstack query che li fornisce e li aggiorna in automatico.
- ho usato Next perché la reputo un'ottima tecnologia quando si ha necessità di controllo e, anche se è soltanto un esercizio, è comunque un modo per tenersi sempre in allenamento.
- Siccome sono un po pignolo ho impiegato più di 60 minuti (circa 2 ore) per configurare l'ambiente e predisporlo all'esercizio.

### cosa non ho fatto

non ho eseguito nessuno dei task opzionali perché dopo 2 ore ho deciso di fermarmi avendo, secondo me, superato di gran lunga qualsiasi tempo massimo.

### tempo limite

Nel complesso è un ottimo esercizio per mettere a nudo la personalità del professionista e la sua capacità di porsi d'innanzi ad un codice.
Di certo non si può pretendere che esca fuori un capolavoro di UI e UX in un'ora ma questo non mi sembra rilevante. Diventa invece essenziale sapersi relazionare con i dati e sfruttare ogni conoscenza per avere il controllo totale su di essi e sugli errori che potrebbero scaturire da essi.
Lascio solo un appunto: 60 minuti per un progetto da inizializzare, configurare e svolgere sono pochi. Ne servo almeno 120 per avere tutto il tempo di svolgere le procedure necessarie per costruire un ambiente di sviluppo solido.
