import { formatINR } from "../utils/format";

export default function SavingsBanner({ savings }: { savings: number }) {
  if (savings <= 0) return null;

  return (
    <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
      <span className="font-semibold">You’re going to save </span>
      <span className="font-bold">{formatINR(savings)}</span>
    </div>
  );
}

