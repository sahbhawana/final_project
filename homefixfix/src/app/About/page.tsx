'use client';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';
import ImageSlider from '@/components/ImageSlider';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Search,
  Menu,
  X,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Wrench,
  SprayCanIcon,
  Paintbrush,
  Zap,
  Droplets,
  Wind,
  Home,
  Users,
  Award,
  CheckCircle,
  Sparkles,
  Settings,
  Hammer,
  User,
} from 'lucide-react';

import ChatWidget from '@/components/ChatWidget';
// Scroll animation hook
function useScrollAnimation() {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref]);

  return { ref: setRef, isVisible };
}

// TypeWriter effect hook
function useTypewriter(
  texts: string[],
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
) {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }
    setIsDeleting(false);
    setTextIndex((prev) => (prev + 1) % texts.length);
  }, [
    displayText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return displayText;
}

// Navigation Component
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#providers', label: 'Service Providers' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
  bg-white 
  ${isScrolled ? 'shadow-md border-b-[8px] border-blue-600' : 'border-b-[8px] border-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-0">
            <Image
              src="/Images/logo.png"
              alt="Logo"
              width={55}
              height={55}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-black leading-none">
              Home<span className="text-blue-600">Fix.</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-black hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 border-t">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 px-4 text-black hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  const typewriterText = useTypewriter(
    [
      'Painting Services',
      'Beautician Services',
      'Plumbing Services',
      'Electrical Services',
    ],
    100,
    50,
    2000
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="max-w-2xl">
          <p className="text-white text-sm mb-2">
            Your complete home service solution.
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Home<span className="text-blue-600">Fix</span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            And we provide{' '}
            <span className="text-blue-600 font-semibold">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          <a
            href="/login"
            className="inline-block bg-blue-600 hover:bg-[#c2185b] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-10 left-0 right-0">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-3xl font-bold text-white">500+</p>
              <p className="text-white text-sm">Verified Professionals</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-3xl font-bold text-white">10,000+</p>
              <p className="text-white text-sm">Services Completed</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-3xl font-bold text-white">4.8</p>
              <p className="text-white text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Section Title Component
function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      <div className="flex items-center justify-center gap-2 mt-2">
        <span className="w-8 h-[2px] bg-blue-600" />
        <span className="text-blue-600 text-sm font-medium">{subtitle}</span>
        <span className="w-8 h-[2px] bg-blue-600" />
      </div>
    </div>
  );
}

// About Section
function AboutSection() {
  const typewriterText = useTypewriter(
    ['Home Service Provider', 'Trusted Partner', 'Quality Experts'],
    100,
    50,
    2000
  );
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <SectionTitle title="About us" subtitle="who we are" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
                alt="HomeFix Team"
                className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-600/20 rounded-lg max-w-md mx-auto" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We are HomeFix and we are{' '}
              <span className="text-blue-600">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded with a vision to revolutionize home services, HomeFix
              connects homeowners with verified, skilled professionals for all
              their household needs. Our platform ensures quality, reliability,
              and convenience at every step.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              With over 500 verified professionals and 10,000+ successfully
              completed services, we have established ourselves as a trusted
              partner for homeowners. Our commitment to excellence, attention to
              detail, and customer-first approach sets us apart in the industry.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              By partnering with HomeFix, you can expect collaborative service
              delivery, transparent pricing, timely completion, and workmanship
              that truly reflects quality standards and resonates with your
              expectations.
            </p>
            <a
              href="#about"
              className="inline-block bg-blue-600 hover:bg-[#c2185b] text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Plumbing Services',
      description:
        'Expert repairs, installations, and maintenance for all plumbing needs.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Electrical Work',
      description:
        'Safe and reliable electrical repairs, wiring, and installations.',
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: 'Painting',
      description:
        'Interior and exterior painting with premium quality finishes.',
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Beautician Services',
      description: 'Professional beauty and grooming services.',
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 text-white overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        <ImageSlider />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionTitle title="Our Services" subtitle="what we provide" />

        {/* FLEX LAYOUT (auto 3-2 centered) */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="w-full sm:w-[300px] lg:w-[380px] bg-[#1a1a1a]/80 backdrop-blur-md rounded-lg p-8 text-center hover:bg-[#222] transition-all duration-300 group cursor-pointer border border-transparent hover:border-blue-700/40 shadow-xl"
            >
              {/* Icon */}
              <div className="text-blue-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Service Providers Section (Skills equivalent)
function ServiceProvidersSection() {
  const providerStats = [
    { name: 'Plumbing Experts', percentage: 85, count: 95 },
    { name: 'Electricians', percentage: 75, count: 80 },
    { name: 'HVAC Technicians', percentage: 70, count: 65 },
    { name: 'Handyman Services', percentage: 95, count: 140 },
  ];

  return (
    <section id="providers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Service Providers" subtitle="our experts" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Network of Verified Professionals
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We have built a strong network of certified and experienced
              service providers across all categories. Each professional
              undergoes thorough background verification, skill assessment, and
              customer service training.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our providers bring years of experience, professional tools, and a
              commitment to delivering exceptional results. Let us connect you
              with the perfect expert for your home service needs!
            </p>
            <a
              href="/serviceproviders"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
            >
              View All Providers
            </a>
          </div>

          {/* Right - Progress Bars */}
          <div className="space-y-6">
            {providerStats.map((stat) => (
              <div key={stat.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-900">{stat.name}</span>
                  <span className="text-blue-600 font-semibold">
                    {stat.count}+
                  </span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full progress-bar"
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const team = [
    {
      name: 'Udaya Bhatta',
      role: 'Computer Engineer',
      experience: '',
      image: 'Images/Udaya.jpg',
    },
    {
      name: 'Bhawana Sah',
      role: 'Computer Engineer',
      experience: '',
      image: 'Images/Bhawana.jpg',
      //rating: 4.5,
    },
    {
      name: 'Upama Giri',
      role: 'Computer Engineer',
      experience: '',
      image: 'Images/Upama.jpg',
    },
    {
      name: 'Hritik Kushwaha',
      role: 'Computer Engineer',
      experience: '',
      image: 'Images/Hritik.jpg',
    },
  ];

  return (
    <section id="team" className="py-24 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Our Team" subtitle="meet our experts" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-[#1a1a1a] rounded-lg p-6 text-center group hover:bg-[#222] transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <div className="absolute inset-0 rounded-full border-2 border-blue-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-blue-600 text-sm mb-2">{member.role}</p>
              <p className="text-gray-400 text-xs mb-3">{member.experience}</p>
              {/*<div className="flex items-center justify-center gap-1">
               <Star className="w-4 h-4 text-blue-600w-500 fill-blue-600w-500" />
                <span className="text-sm text-gray-300">{member.rating}</span>
              </div>*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Contact Us" subtitle="get in touch" />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-8">
              Have questions or ready to book a service? Reach out to us and our
              team will get back to you promptly.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Company Name</p>
                  <p className="text-gray-600">HomeFix Services Inc.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">Talchikhel, Lalitpur</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">wemershome@gmail.com</p>
                  <p className="text-gray-600">support@homefix.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-600/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-600">+977 9806488126</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Message Us</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white border-gray-200 focus:border-blue-600"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white border-gray-200 focus:border-blue-600"
                />
              </div>
              <Input
                placeholder="Subject"
                className="bg-white border-gray-200 focus:border-blue-600"
              />
              <Textarea
                placeholder="Your Message..."
                rows={5}
                className="bg-white border-gray-200 focus:border-blue-600 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-[#c2185b] text-white py-3 rounded-full font-medium transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
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
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted platform for on-demand household services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Electrical Work
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Painting Services
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Beautician Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#howitworks"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/helpcenter"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#contactsupport"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  Browse FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024{' '}
            <Link href="/" className="text-blue-600 hover:underline">
              HomeFix
            </Link>{' '}
            | 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ServiceProvidersSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
