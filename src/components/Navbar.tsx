import Link from 'next/link';
import { Wallet } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-brand-900">
          <Wallet className="text-brand-500" />
          <span>ThaiCost<span className="text-brand-500">Calc</span></span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/cost-of-living-bangkok" className="hover:text-brand-600">Bangkok</Link>
          <Link href="/rent-prices-thailand" className="hover:text-brand-600">Rent</Link>
          <Link href="/about" className="hover:text-brand-600">About</Link>
        </div>
      </div>
    </nav>
  );
}