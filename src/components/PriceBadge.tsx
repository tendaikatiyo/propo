import React from 'react';

interface PriceBadgeProps {
  currentPrice: string | null;
  previousPrice: string | null;
}

export const PriceBadge: React.FC<PriceBadgeProps> = ({ currentPrice, previousPrice }) => {
  if (!currentPrice || !previousPrice) return null;

  const current = parseFloat(currentPrice);
  const prev = parseFloat(previousPrice);

  if (isNaN(current) || isNaN(prev)) return null;

  const diff = current - prev;
  const isIncrease = diff > 0;
  const isDecrease = diff < 0;

  if (diff === 0) return null;

  const amount = Math.abs(diff).toFixed(2);
  const percent = (Math.abs(diff) / prev * 100).toFixed(1);

  return (
    <div
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
        isIncrease ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
      }`}
    >
      {isIncrease ? '↑' : '↓'} {amount} ({percent}%)
    </div>
  );
};
