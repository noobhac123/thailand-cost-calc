import React from 'react';

export default function AdPlaceholder({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="w-full my-8 p-4 bg-gray-50 border border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400 min-h-[150px]">
      <span className="text-xs uppercase tracking-widest mb-2 font-semibold">{label}</span>
      {/* Monetag Native Ad Slot Placeholder */}
      <div className="w-full h-full bg-gray-100 rounded animate-pulse"></div>
    </div>
  );
}