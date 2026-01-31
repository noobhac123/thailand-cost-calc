import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-white font-bold mb-4">ThaiCostCalc</h3>
          <p>Helping expats and travelers plan their financial life in Thailand with accuracy.</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Tools</h3>
          <ul className="space-y-2">
            <li><Link href="/cost-of-living-bangkok">Bangkok Cost</Link></li>
            <li><Link href="/rent-prices-thailand">Rent Prices</Link></li>
            <li><Link href="/">Calculator</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 text-xs border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} ThaiCostCalc. All rights reserved. Not financial advice.
      </div>
    </footer>
  );
}