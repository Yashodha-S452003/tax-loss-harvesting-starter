import { useEffect, useMemo, useState } from "react";
import CapitalGainsCard from "./components/CapitalGainsCard";
import HoldingsTable from "./components/HoldingsTable";
import SavingsBanner from "./components/SavingsBanner";
import { fetchCapitalGains, fetchHoldings } from "./api/mockApi";
import type { CapitalGains, Holding } from "./types";
import {
  computeAfterHarvesting,
  computeTaxSavings,
  getRealisedCapitalGains
} from "./utils/harvesting";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [preGains, setPreGains] = useState<CapitalGains | null>(null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const [h, g] = await Promise.all([fetchHoldings(), fetchCapitalGains()]);
        if (!mounted) return;
        setHoldings(h);
        setPreGains(g);
        setSelectedIds(new Set()); // reset
      } catch (e) {
        setError(e instanceof Error ? e.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const postGains = useMemo(() => {
    if (!preGains) return null;
    return computeAfterHarvesting(preGains, holdings, selectedIds);
  }, [preGains, holdings, selectedIds]);

  const savings = useMemo(() => {
    if (!preGains || !postGains) return 0;
    const preRealised = getRealisedCapitalGains(preGains);
    const postRealised = getRealisedCapitalGains(postGains);
    return computeTaxSavings(preRealised, postRealised, 0.3);
  }, [preGains, postGains]);

  const toggle = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    setSelectedIds((prev) => {
      if (prev.size === holdings.length) return new Set();
      return new Set(holdings.map((h) => h.id));
    });
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-700">
          Loading…
        </div>
      </div>
    );
  }

  if (error || !preGains || !postGains) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-6 text-rose-900">
          <div className="font-semibold">Failed to load</div>
          <div className="text-sm">{error ?? "Missing data"}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">
          Tax Loss Harvesting
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Starter template (React + TypeScript + Tailwind) with mock APIs and core
          business logic.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <CapitalGainsCard title="Capital Gains" gains={preGains} variant="pre" />
        <CapitalGainsCard
          title="After Harvesting"
          gains={postGains}
          variant="post"
        />
      </div>

      <SavingsBanner savings={savings} />

      <HoldingsTable
        holdings={holdings}
        selectedIds={selectedIds}
        onToggle={toggle}
        onToggleAll={toggleAll}
      />
    </div>
  );
}

