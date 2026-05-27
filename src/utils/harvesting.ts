import type { CapitalGains, Holding } from "../types";

export const getNetGain = (bucket: { profits: number; losses: number }): number =>
  bucket.profits - bucket.losses;

export const getRealisedCapitalGains = (gains: CapitalGains): number =>
  getNetGain(gains.stcg) + getNetGain(gains.ltcg);

export const applyHoldingToGains = (
  base: CapitalGains,
  holding: Holding
): CapitalGains => {
  const next: CapitalGains = structuredClone(base);

  const apply = (gain: number, target: { profits: number; losses: number }) => {
    if (gain > 0) target.profits += gain;
    else if (gain < 0) target.losses += Math.abs(gain);
  };

  apply(holding.stcg.gain, next.stcg);
  apply(holding.ltcg.gain, next.ltcg);

  return next;
};

export const computeAfterHarvesting = (
  pre: CapitalGains,
  holdings: Holding[],
  selectedIds: Set<string>
): CapitalGains => {
  let acc: CapitalGains = structuredClone(pre);
  for (const h of holdings) {
    if (!selectedIds.has(h.id)) continue;
    acc = applyHoldingToGains(acc, h);
  }
  return acc;
};

export const computeTaxSavings = (
  preRealised: number,
  postRealised: number,
  taxRate = 0.3
): number => {
  if (postRealised >= preRealised) return 0;
  return (preRealised - postRealised) * taxRate;
};

