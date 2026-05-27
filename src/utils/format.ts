export const formatINR = (value: number): string => {
  const rounded = Math.round(value);
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(rounded);
};

