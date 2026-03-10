'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useMemo } from 'react';
import { ProviderCard } from '@/components/ProviderCard';
import { serviceProviders, categories } from '@/lib/providers-data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Search,
  SlidersHorizontal,
  Users,
  X,
  Menu,
  Grid3X3,
  LayoutList,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

// ────────────────────────────────────────────────
//  Note: Create this component in '@/components/Footer.tsx' or inline it
// ────────────────────────────────────────────────
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-0">
              <Image
                src="/Images/logo.png"
                alt="Logo"
                width={55}
                height={55}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-white leading-none">
                HomeFix.
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mt-3">
              Your trusted platform for on-demand household services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services/plumber" className="text-gray-400 text-sm hover:text-white transition-colors">Plumbing Services</Link></li>
              <li><Link href="/services/electrical" className="text-gray-400 text-sm hover:text-white transition-colors">Electrical Work</Link></li>
              <li><Link href="/services/painter" className="text-gray-400 text-sm hover:text-white transition-colors">Painting Services</Link></li>
              <li><Link href="/services/beautician" className="text-gray-400 text-sm hover:text-white transition-colors">Beautician Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#howitworks" className="text-gray-400 text-sm hover:text-white transition-colors">How It Works</Link></li>
              <li><Link href="/about#team" className="text-gray-400 text-sm hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/about#contact" className="text-gray-400 text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/helpcenter" className="text-gray-400 text-sm hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/helpcenter#contactsupport" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Support</Link></li>
              <li><Link href="/helpcenter#faq" className="text-gray-400 text-sm hover:text-white transition-colors">Browse FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm">
            © {currentYear}{' '}
            <Link href="/" className="text-blue-600 hover:underline">
              HomeFix
            </Link>{' '}
            | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function ProvidersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [connectedProviders, setConnectedProviders] = useState<string[]>([]);
  const [removedProviders, setRemovedProviders] = useState<string[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProviders = useMemo(() => {
    return serviceProviders.filter((provider) => {
      if (removedProviders.includes(provider.id)) return false;
      if (selectedCategory !== 'all' && provider.category !== selectedCategory) return false;

      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          provider.name.toLowerCase().includes(query) ||
          provider.profession.toLowerCase().includes(query) ||
          provider.skills.some((skill) => skill.toLowerCase().includes(query)) ||
          provider.location.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [searchQuery, selectedCategory, removedProviders]);

  const handleConnect = (id: string) => {
    setConnectedProviders((prev) => [...prev, id]);
  };

  const handleRemove = (id: string) => {
    setRemovedProviders((prev) => [...prev, id]);
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/About', label: 'About' },
    { href: '/About#services', label: 'Services' },
    { href: '/About#contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* ─── Navigation ──────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white
          ${isScrolled ? 'shadow-md border-b-[8px] border-blue-600' : 'border-b-[8px] border-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/Images/logo.png"
                alt="HomeFix Logo"
                width={55}
                height={55}
                className="object-contain"
              />
              <span className="text-2xl font-bold text-black leading-none">
                Home<span className="text-blue-600">Fix.</span>
              </span>
            </Link>

            {/* Search bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <Input
                  type="text"
                  placeholder="Search service providers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 h-10 bg-zinc-100 border-0 rounded-full focus:bg-white focus:ring-2 focus:ring-zinc-200 transition-all"
                />
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-blue-600 transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden bg-white py-4 border-t">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block py-2 px-4 text-black hover:text-blue-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ─── Main Content ────────────────────────────────────── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-zinc-900 tracking-tight flex items-center gap-3">
                <Users className="w-8 h-8 text-zinc-400" />
                Find Service Providers
              </h1>
              <p className="mt-2 text-zinc-500 text-lg">
                Connect with verified professionals for your home service needs
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-white rounded-lg border border-zinc-200 p-1">
              <button
                aria-label="Grid view"
                title="Grid view"
                className="p-2 rounded-md bg-zinc-100 text-zinc-700"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                aria-label="List view"
                title="List view"
                className="p-2 rounded-md text-zinc-400 hover:text-zinc-600"
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-6">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400 pointer-events-none" />
            <Input
              type="text"
              placeholder="Search providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 h-11 bg-white border-zinc-200 rounded-xl"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap
                  ${selectedCategory === category.id
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white rounded-xl border border-zinc-200/80 p-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-900">
                  {filteredProviders.length} Providers
                </p>
                <p className="text-xs text-zinc-500">Available in your area</p>
              </div>
            </div>
          </div>
          <Button variant="outline" className="text-sm h-9">
            View All
          </Button>
        </div>

        {/* Providers Grid */}
        {filteredProviders.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProviders.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onConnect={handleConnect}
                onRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-zinc-200">
            <div className="w-16 h-16 mx-auto bg-zinc-100 rounded-full flex items-center justify-center mb-4">
              <Search className="w-8 h-8 text-zinc-400" />
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 mb-2">
              No providers found
            </h3>
            <p className="text-zinc-500 mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <Button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              Clear filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredProviders.length > 0 && (
          <div className="mt-12 text-center">
            <Button variant="outline" className="h-11 px-10 rounded-full">
              Load more providers
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}