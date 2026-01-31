'use client';

import { useState } from 'react';
import { calculateCost, getVerdict, CITIES, LIFESTYLES, HOUSEHOLDS, City, Lifestyle, Household } from '@/lib/cost-data';
import { PieChart, Wallet, ShieldCheck, Home } from 'lucide-react';
import clsx from 'clsx';

export default function Calculator() {
  const [city, setCity] = useState<City>('Bangkok');
  const [lifestyle, setLifestyle] = useState<Lifestyle>('Normal');
  const [household, setHousehold] = useState<Household>('Single');
  const [income, setIncome] = useState<number>(50000);
  
  const { costs, total } = calculateCost(city, lifestyle, household);
  const verdict = getVerdict(income, total);
  const savings = income - total;
  const rentPercent = Math.round((costs.rent / income) * 100);

  const formatTHB = (n: number) => `฿${n.toLocaleString()}`;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden max-w-4xl mx-auto my-10">
      <div className="bg-brand-900 p-6 text-white text-center">
        <h2 className="text-2xl font-bold">Thailand Affordability Calculator</h2>
        <p className="text-brand-100 text-sm mt-1">Real-time cost estimation engine</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 p-6 md:p-8">
        {/* Controls */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Destination City</label>
            <div className="grid grid-cols-2 gap-2">
              {CITIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCity(c)}
                  className={clsx(
                    "px-3 py-2 text-sm rounded-lg border transition-all",
                    city === c ? "bg-brand-500 text-white border-brand-500" : "bg-white text-gray-600 border-gray-200 hover:border-brand-300"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lifestyle Level</label>
            <select 
              value={lifestyle}
              onChange={(e) => setLifestyle(e.target.value as Lifestyle)}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none"
            >
              {LIFESTYLES.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Household Size</label>
            <div className="flex gap-2">
              {HOUSEHOLDS.map((h) => (
                <button
                  key={h}
                  onClick={() => setHousehold(h)}
                  className={clsx(
                    "flex-1 py-2 text-sm rounded-lg border transition-all",
                    household === h ? "bg-brand-600 text-white border-brand-600" : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50"
                  )}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Income (THB)</label>
            <input 
              type="number" 
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 outline-none font-mono text-lg"
            />
            <p className="text-xs text-gray-500 mt-1">Approx. ${(income / 35).toFixed(0)} USD</p>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col justify-between">
          <div>
            <div className={clsx("flex items-center justify-between p-4 rounded-lg mb-6 shadow-sm", verdict.color)}>
              <span className="font-bold text-lg">{verdict.icon} {verdict.label}</span>
              <span className="text-sm font-medium opacity-75">Verdict</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 flex items-center gap-2"><Home size={16}/> Rent</span>
                <span className="font-semibold">{formatTHB(costs.rent)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 flex items-center gap-2"><PieChart size={16}/> Food & Daily</span>
                <span className="font-semibold">{formatTHB(costs.food)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 flex items-center gap-2"><ShieldCheck size={16}/> Health & Misc</span>
                <span className="font-semibold">{formatTHB(costs.healthcare + costs.misc + costs.internet + costs.transport)}</span>
              </div>
              <div className="h-px bg-gray-200 my-2"></div>
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total Estimated Cost</span>
                <span>{formatTHB(total)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-500">Potential Savings</span>
              <span className={clsx("font-bold text-lg", savings > 0 ? "text-green-600" : "text-red-600")}>
                {savings > 0 ? "+" : ""}{formatTHB(savings)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className={clsx("h-2 rounded-full", savings > 0 ? "bg-green-500" : "bg-red-500")} 
                style={{ width: `${Math.min(100, (total / income) * 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-400 mt-2 text-right">Rent is {rentPercent}% of your income</p>
          </div>
        </div>
      </div>
    </div>
  );
}