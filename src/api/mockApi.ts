import type { CapitalGains, Holding } from "../types";

// NOTE:
// The assignment allows mocking APIs however you want.
// Replace this data with the exact dummy response from the Notion doc if needed.

const HOLDINGS: Holding[] = [
  {
    id: "btc",
    coin: "BTC",
    coinName: "Bitcoin",
    logo: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=040",
    totalHoldings: 0.12,
    averageBuyPrice: 4200000,
    currentPrice: 5200000,
    stcg: { gain: 15000, balance: 0.02 },
    ltcg: { gain: 65000, balance: 0.1 }
  },
  {
    id: "eth",
    coin: "ETH",
    coinName: "Ethereum",
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=040",
    totalHoldings: 1.4,
    averageBuyPrice: 210000,
    currentPrice: 185000,
    stcg: { gain: 500, balance: 0.4 },
    ltcg: { gain: -1000, balance: 1.0 }
  },
  {
    id: "sol",
    coin: "SOL",
    coinName: "Solana",
    logo: "https://cryptologos.cc/logos/solana-sol-logo.png?v=040",
    totalHoldings: 12,
    averageBuyPrice: 9000,
    currentPrice: 7200,
    stcg: { gain: -2500, balance: 5 },
    ltcg: { gain: -8000, balance: 7 }
  },
  {
    id: "matic",
    coin: "MATIC",
    coinName: "Polygon",
    logo: "https://cryptologos.cc/logos/polygon-matic-logo.png?v=040",
    totalHoldings: 820,
    averageBuyPrice: 85,
    currentPrice: 92,
    stcg: { gain: 1200, balance: 400 },
    ltcg: { gain: 4000, balance: 420 }
  }
];

const CAPITAL_GAINS: CapitalGains = {
  stcg: { profits: 1200, losses: 500 },
  ltcg: { profits: 1500, losses: 500 }
};

const withDelay = async <T,>(value: T, ms = 350): Promise<T> =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

export const fetchHoldings = async (): Promise<Holding[]> => withDelay(HOLDINGS);

export const fetchCapitalGains = async (): Promise<CapitalGains> =>
  withDelay(CAPITAL_GAINS);

