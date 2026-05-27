export type GainBucket = {
  profits: number; // positive
  losses: number; // positive magnitude (e.g., 1200 means -1200)
};

export type CapitalGains = {
  stcg: GainBucket;
  ltcg: GainBucket;
};

export type Holding = {
  id: string;
  coin: string;
  coinName: string;
  logo: string; // url
  totalHoldings: number;
  averageBuyPrice: number;
  currentPrice: number;
  stcg: { gain: number; balance: number };
  ltcg: { gain: number; balance: number };
};

