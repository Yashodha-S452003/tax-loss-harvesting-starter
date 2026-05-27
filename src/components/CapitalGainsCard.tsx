import type { CapitalGains } from "../types";
import { formatINR } from "../utils/format";
import { getNetGain, getRealisedCapitalGains } from "../utils/harvesting";

type Props = {
  title: string;
  gains: CapitalGains;
  variant: "pre" | "post";
};

const Stat = ({
  label,
  value
}: {
  label: string;
  value: React.ReactNode;
}) => (
  <div className="flex items-center justify-between text-sm">
    <div className="text-white/70">{label}</div>
    <div className="font-semibold text-white">{value}</div>
  </div>
);

export default function CapitalGainsCard({ title, gains, variant }: Props) {
  const isPre = variant === "pre";
  const rootCls = isPre ? "bg-slate-900" : "bg-blue-600";

  const stNet = getNetGain(gains.stcg);
  const ltNet = getNetGain(gains.ltcg);
  const realised = getRealisedCapitalGains(gains);

  return (
    <section className={`rounded-2xl p-5 ${rootCls} text-white shadow-sm`}>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-semibold">{title}</h2>
        <div className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
          {isPre ? "Pre-harvesting" : "After harvesting"}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-white/10 p-4">
          <div className="mb-3 text-sm font-semibold">Short-term</div>
          <div className="space-y-2">
            <Stat label="Profits" value={formatINR(gains.stcg.profits)} />
            <Stat label="Losses" value={formatINR(gains.stcg.losses)} />
            <div className="h-px bg-white/15" />
            <Stat label="Net" value={formatINR(stNet)} />
          </div>
        </div>

        <div className="rounded-xl bg-white/10 p-4">
          <div className="mb-3 text-sm font-semibold">Long-term</div>
          <div className="space-y-2">
            <Stat label="Profits" value={formatINR(gains.ltcg.profits)} />
            <Stat label="Losses" value={formatINR(gains.ltcg.losses)} />
            <div className="h-px bg-white/15" />
            <Stat label="Net" value={formatINR(ltNet)} />
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Realised capital gains</div>
          <div className="text-lg font-bold">{formatINR(realised)}</div>
        </div>
      </div>
    </section>
  );
}

