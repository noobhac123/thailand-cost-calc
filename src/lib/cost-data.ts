export type City = 'Bangkok' | 'Phuket' | 'Chiang Mai' | 'Pattaya';
export type Lifestyle = 'Basic' | 'Normal' | 'Comfortable';
export type Household = 'Single' | 'Couple' | 'Family';

interface CostBreakdown {
  rent: number;
  food: number;
  transport: number;
  internet: number;
  healthcare: number;
  misc: number;
}

export const CITIES: City[] = ['Bangkok', 'Phuket', 'Chiang Mai', 'Pattaya'];
export const LIFESTYLES: Lifestyle[] = ['Basic', 'Normal', 'Comfortable'];
export const HOUSEHOLDS: Household[] = ['Single', 'Couple', 'Family'];

// Base costs per month in THB for a Single person with Normal lifestyle
const BASE_COSTS: Record<City, CostBreakdown> = {
  Bangkok: { rent: 15000, food: 9000, transport: 3000, internet: 600, healthcare: 2000, misc: 3000 },
  Phuket: { rent: 18000, food: 10000, transport: 4000, internet: 600, healthcare: 2000, misc: 3500 },
  'Chiang Mai': { rent: 10000, food: 7000, transport: 1500, internet: 600, healthcare: 1500, misc: 2000 },
  Pattaya: { rent: 12000, food: 8000, transport: 2000, internet: 600, healthcare: 2000, misc: 3000 },
};

// Multipliers
const LIFESTYLE_MULTIPLIER: Record<Lifestyle, number> = {
  Basic: 0.7,
  Normal: 1.0,
  Comfortable: 1.8,
};

const HOUSEHOLD_MULTIPLIER: Record<Household, number> = {
  Single: 1.0,
  Couple: 1.7, // Couples save on rent/internet shared
  Family: 2.5, // Kids add cost
};

export function calculateCost(city: City, lifestyle: Lifestyle, household: Household) {
  const base = BASE_COSTS[city];
  const lm = LIFESTYLE_MULTIPLIER[lifestyle];
  const hm = HOUSEHOLD_MULTIPLIER[household];

  // Specific logic: Rent scales differently than Food
  // Rent: Couples share 1 unit, Family needs bigger unit
  const rentMultiplier = household === 'Couple' ? 1.2 : household === 'Family' ? 1.8 : 1.0;
  
  const costs = {
    rent: Math.round(base.rent * lm * rentMultiplier),
    food: Math.round(base.food * lm * hm),
    transport: Math.round(base.transport * lm * hm),
    internet: Math.round(base.internet * 1.0), // Internet usually fixed per household
    healthcare: Math.round(base.healthcare * lm * hm),
    misc: Math.round(base.misc * lm * hm),
  };

  const total = Object.values(costs).reduce((a, b) => a + b, 0);
  return { costs, total };
}

export function getVerdict(income: number, totalCost: number) {
  const ratio = income / totalCost;
  if (ratio < 1.0) return { label: 'Not Affordable', color: 'bg-red-100 text-red-800', icon: '❌' };
  if (ratio < 1.3) return { label: 'Tight Budget', color: 'bg-yellow-100 text-yellow-800', icon: '⚠️' };
  return { label: 'Comfortable Living', color: 'bg-green-100 text-green-800', icon: '✅' };
}