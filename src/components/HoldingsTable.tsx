import type { Holding } from "../types";
import { formatINR } from "../utils/format";

type Props = {
  holdings: Holding[];
  selectedIds: Set<string>;
  onToggle: (id: string) => void;
  onToggleAll: () => void;
};

export default function HoldingsTable({
  holdings,
  selectedIds,
  onToggle,
  onToggleAll
}: Props) {
  const allSelected = holdings.length > 0 && selectedIds.size === holdings.length;
  const someSelected = selectedIds.size > 0 && !allSelected;

  return (
    <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between p-4">
        <h3 className="text-base font-semibold text-slate-900">Holdings</h3>
        <div className="text-sm text-slate-500">
          Selected: <span className="font-semibold">{selectedIds.size}</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[920px] w-full border-t border-slate-200 text-sm">
          <thead className="bg-slate-50 text-left text-xs font-semibold uppercase tracking-wide text-slate-600">
            <tr>
              <th className="px-4 py-3">
                <input
                  type="checkbox"
                  checked={allSelected}
                  ref={(el) => {
                    if (!el) return;
                    el.indeterminate = someSelected;
                  }}
                  onChange={onToggleAll}
                />
              </th>
              <th className="px-4 py-3">Asset</th>
              <th className="px-4 py-3">Holdings</th>
              <th className="px-4 py-3">Current price</th>
              <th className="px-4 py-3">Short-term</th>
              <th className="px-4 py-3">Long-term</th>
              <th className="px-4 py-3">Amount to sell</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {holdings.map((h) => {
              const selected = selectedIds.has(h.id);
              const stColor = h.stcg.gain >= 0 ? "text-emerald-600" : "text-rose-600";
              const ltColor = h.ltcg.gain >= 0 ? "text-emerald-600" : "text-rose-600";

              return (
                <tr
                  key={h.id}
                  className={selected ? "bg-blue-50/50" : "bg-white"}
                >
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() => onToggle(h.id)}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={h.logo}
                        alt={`${h.coin} logo`}
                        className="h-7 w-7 rounded-full"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-semibold text-slate-900">{h.coin}</div>
                        <div className="text-xs text-slate-500">{h.coinName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-medium text-slate-900">{h.totalHoldings}</div>
                    <div className="text-xs text-slate-500">
                      Avg buy {formatINR(h.averageBuyPrice)}
                    </div>
                  </td>
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {formatINR(h.currentPrice)}
                  </td>
                  <td className="px-4 py-3">
                    <div className={`font-semibold ${stColor}`}>
                      {formatINR(h.stcg.gain)}
                    </div>
                    <div className="text-xs text-slate-500">{h.stcg.balance}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className={`font-semibold ${ltColor}`}>
                      {formatINR(h.ltcg.gain)}
                    </div>
                    <div className="text-xs text-slate-500">{h.ltcg.balance}</div>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-900">
                    {selected ? h.totalHoldings : "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

