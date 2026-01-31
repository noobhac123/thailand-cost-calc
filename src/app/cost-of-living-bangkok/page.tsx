import AdPlaceholder from "@/components/AdPlaceholder";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cost of Living in Bangkok 2024 | Rent, Food & Transport Guide",
  description: "Detailed breakdown of monthly expenses in Bangkok. From Sukhumvit condos to street food prices.",
};

export default function BangkokPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href="/" className="text-sm text-brand-600 hover:underline">← Back to Calculator</Link>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-4 mb-2">Cost of Living in Bangkok (2024 Guide)</h1>
        <p className="text-xl text-gray-500">Bangkok offers a luxury lifestyle for a fraction of the cost of NYC or London.</p>
      </div>

      <div className="prose lg:prose-lg prose-headings:text-gray-900 prose-a:text-brand-600">
        <p>
          Bangkok is the heart of Southeast Asia. While it is the most expensive city in Thailand, it remains incredibly affordable compared to the West. 
          A single person can live comfortably for <strong>35,000 THB to 50,000 THB</strong> per month.
        </p>

        <AdPlaceholder label="In-Content Ad" />

        <h3>Rent Prices in Bangkok</h3>
        <p>Rent will be your biggest expense. Prices vary heavily by location (near BTS/MRT lines is more expensive).</p>
        <ul>
          <li><strong>Studio (City Center):</strong> 15,000 - 25,000 THB</li>
          <li><strong>Studio (Outskirts):</strong> 6,000 - 10,000 THB</li>
          <li><strong>Luxury 1-Bed Condo:</strong> 30,000+ THB</li>
        </ul>

        <h3>Food Costs</h3>
        <p>You can eat street food for every meal or dine in 5-star roof top bars.</p>
        <ul>
          <li><strong>Street Food:</strong> 50-80 THB per dish</li>
          <li><strong>Food Court:</strong> 60-100 THB</li>
          <li><strong>Western Meal:</strong> 300-600 THB</li>
        </ul>

        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 not-prose my-8">
          <h4 className="font-bold text-yellow-800 text-lg">💡 Pro Tip</h4>
          <p className="text-yellow-700">Avoid staying right on Sukhumvit road if you are on a budget. Moving just 2-3 stations away from Asoke can drop your rent by 40%.</p>
        </div>

        <h3>Transport</h3>
        <p>
          The BTS Skytrain and MRT Underground are efficient and clean. A typical ride costs 30-60 THB. 
          Grab (Uber equivalent) is widely available but more expensive during rush hour.
        </p>

        <AdPlaceholder label="Transport App Ads" />
      </div>
    </article>
  );
}