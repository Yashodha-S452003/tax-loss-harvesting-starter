# KoinX – Tax Loss Harvesting (Starter)

This is a **starter code template** for the KoinX “Tax Loss Harvesting” assignment.

It includes:
- React + TypeScript + Tailwind (Vite)
- Mock APIs for **Holdings** + **Capital Gains**
- Core business logic to compute the **After Harvesting** card from selected holdings
- A responsive(ish) UI scaffold: two cards + holdings table + select all

## Setup

```bash
npm install
npm run dev
```

Open the URL printed in your terminal (usually `http://localhost:5173`).

## Where to change data

- `src/api/mockApi.ts`  
  Replace the dummy `HOLDINGS` and `CAPITAL_GAINS` with the exact dummy responses from the Notion doc (if required).

## Business logic (what to edit if your interpretation differs)

The starter follows the wording from the assignment:

- Starts with the **Pre-harvesting** capital gains API response.
- For each selected holding:
  - if gain > 0 → add to profits
  - if gain < 0 → add to losses (as positive magnitude)
- Net gain = profits − losses
- Realised gains = ST net + LT net

Implementation:
- `src/utils/harvesting.ts`

## UI / Components

- Cards: `src/components/CapitalGainsCard.tsx`
- Holdings table: `src/components/HoldingsTable.tsx`
- Savings banner: `src/components/SavingsBanner.tsx`

## Next steps to finish the assignment

1. Match spacing/colors/typography to the provided Figma.
2. Add loader + error states per API call (currently global).
3. Add “View All” / pagination (bonus).
4. Deploy (Vercel/Netlify) and add screenshots + assumptions to README.

