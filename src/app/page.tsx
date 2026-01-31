import Calculator from "@/components/Calculator";
import AdPlaceholder from "@/components/AdPlaceholder";
import Link from "next/link";
import { ArrowRight, MapPin, TrendingUp, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="pb-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-brand-50 to-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Can You Afford to Live in Thailand?
          </h1>
          <p className="text-xl text-gray-600">
            Calculate your monthly budget for Bangkok, Phuket, and beyond based on your lifestyle.
          </p>
        </div>
        
        {/* Main Feature */}
        <Calculator />
        
        {/* Ad Slot */}
        <div className="max-w-4xl mx-auto">
          <AdPlaceholder label="Sponsored Partners" />
        </div>
      </section>

      {/* Content Section SEO */}
      <section className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
        <div className="prose lg:prose-lg mx-auto">
          <h2>Why Use This Cost Calculator?</h2>
          <p>
            Thailand is one of the most popular destinations for digital nomads and retirees, but costs can vary wildly. 
            Living in <strong>Bangkok</strong> is significantly more expensive than <strong>Chiang Mai</strong>. 
            Our tool uses real-time 2024 data to help you plan your move.
          </p>

          <div className="grid md:grid-cols-3 gap-6 not-prose my-10">
            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <MapPin className="text-brand-500 mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">City Comparison</h3>
              <p className="text-gray-600 text-sm">Compare costs between major hubs like Bangkok and island life in Phuket.</p>
            </div>
            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <TrendingUp className="text-success mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">Inflation Adjusted</h3>
              <p className="text-gray-600 text-sm">Prices are updated regularly to reflect the current economic situation.</p>
            </div>
            <div className="p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
              <DollarSign className="text-warning mb-3" size={32} />
              <h3 className="font-bold text-lg mb-2">Hidden Costs</h3>
              <p className="text-gray-600 text-sm">We include often overlooked costs like healthcare and visa runs.</p>
            </div>
          </div>

          <h3>Average Costs in Thailand (2024)</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-100 text-gray-900 font-bold">
                <tr>
                  <th className="px-4 py-2">Item</th>
                  <th className="px-4 py-2">Cost (THB)</th>
                  <th className="px-4 py-2">Cost (USD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-2">Street Food Meal</td><td className="px-4 py-2">฿50 - ฿80</td><td className="px-4 py-2">$1.50 - $2.30</td></tr>
                <tr><td className="px-4 py-2">Studio Apartment (City)</td><td className="px-4 py-2">฿12,000+</td><td className="px-4 py-2">$340+</td></tr>
                <tr><td className="px-4 py-2">High-Speed Internet</td><td className="px-4 py-2">฿600</td><td className="px-4 py-2">$17</td></tr>
              </tbody>
            </table>
          </div>
          
          <AdPlaceholder label="Travel Insurance Deals" />

          <div className="bg-brand-50 p-6 rounded-xl border border-brand-100 mt-8">
            <h4 className="text-brand-900 font-bold text-xl mb-2">Ready to plan?</h4>
            <p className="mb-4">Check specific guides for detailed breakdowns.</p>
            <Link href="/cost-of-living-bangkok" className="inline-flex items-center text-brand-600 font-bold hover:underline">
              Read Bangkok Guide <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}