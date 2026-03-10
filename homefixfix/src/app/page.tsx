"use client";
import ChatWidget from "@/components/ChatWidget";
import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Menu } from "lucide-react";

import ImageSlider from "@/components/ImageSlider";
import {
  Search,
  Star,
  Clock,
  MapPin,
  CheckCircle,
  Calendar,
  SprayCanIcon,
  Droplets,
  Zap, Paintbrush,Sparkles,
  Wrench,
  TreesIcon,
  Bug,
  Thermometer,
  WashingMachine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

type SlideImage = {
  src: string;
  position: string;
};
const images: SlideImage[] = [
  {
    src: "/Images/slide1.jpg",
    position: "object-center",
  },
  {
    src: "/Images/slide2.jpg",
    position: "object-center",
  },
  {
    src: "/Images/slide3.jpg",
    position: "object-top",
  },
  {
    src: "/Images/slide5.jpg",
    position: "object-top",
  },
];


// Service categories data
const serviceCategories: {
  icon: LucideIcon;
  title: string;
  description: string;
  count: number;
  slug: string;
}[] = [
  {
    icon: Droplets,
    title: "Plumbing Services",
    description: "Repairs, installations, and maintenance",
    count: 12,
    slug: "plumber",
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Electrical repairs and installations",
    count: 8,
    slug: "electrical",
  },
  {
    icon: Paintbrush,
    title: "Painting Services",
    description: "Professional interior and exterior painting",
    count: 8,
      slug: "painter",
  },
  {
    icon: Sparkles,
    title: "Beautician Services",
    description: "Professional beauty and grooming services",
    count: 8,
     slug: "beautician",
  },

];

// Featured services data
const featuredServices = [
  {
    image: "https://ext.same-assets.com/3720208447/331804972.jpeg",
    category: "Cleaning Services",
    title: "Deep House Cleaning",
    price: 120,
    description: "Complete deep cleaning service including kitchen, bathrooms, bedrooms, and living areas",
    rating: 4.9,
    reviews: 85,
    duration: 180,
  },
  {
    image: "https://ext.same-assets.com/3720208447/3566870113.jpeg",
    category: "Cleaning Services",
    title: "Regular Home Cleaning",
    price: 80,
    description: "Weekly or bi-weekly cleaning service to keep your home spotless",
    rating: 4.8,
    reviews: 132,
    duration: 120,
  },
  {
    image: "https://ext.same-assets.com/3720208447/4074025232.jpeg",
    category: "Plumbing",
    title: "Emergency Plumbing Repair",
    price: 150,
    description: "Same-day plumbing repairs for leaks, clogs, and other urgent issues",
    rating: 4.7,
    reviews: 64,
    duration: 90,
  },
  {
    image: "https://ext.same-assets.com/3720208447/1980895371.jpeg",
    category: "Plumbing",
    title: "Bathroom Renovation",
    price: 800,
    description: "Complete bathroom plumbing installation and fixture replacement",
    rating: 4.9,
    reviews: 23,
    duration: 480,
  },
  {
    image: "https://ext.same-assets.com/3720208447/3510808973.jpeg",
    category: "Electrical Work",
    title: "Electrical Panel Upgrade",
    price: 600,
    description: "Professional electrical panel installation and circuit upgrades",
    rating: 4.8,
    reviews: 34,
    duration: 300,
  },
  {
    image: "https://ext.same-assets.com/3720208447/2504580691.jpeg",
    category: "Electrical Work",
    title: "Home Electrical Inspection",
    price: 200,
    description: "Comprehensive electrical safety inspection and troubleshooting",
    rating: 4.6,
    reviews: 78,
    duration: 120,
  },
];

// Professionals data
const professionals = [
  {
    name: "Sarah Johnson",
    initials: "SJ",
    image: null,
    rating: 4.9,
    reviews: 127,
    location: "Downtown",
    description: "Professional cleaner with 8 years of experience. Specializing in deep cleaning and eco-friendly products.",
    experience: 8,
  },
  {
    name: "Mike Rodriguez",
    initials: "MR",
    image: "https://ext.same-assets.com/3720208447/3817463146.svg",
    rating: 4.8,
    reviews: 89,
    location: "Westside",
    description: "Licensed plumber with expertise in residential and commercial plumbing systems.",
    experience: 12,
  },
  {
    name: "David Chen",
    initials: "DC",
    image: "https://ext.same-assets.com/3720208447/1018619315.svg",
    rating: 4.7,
    reviews: 156,
    location: "Eastside",
    description: "Certified electrician specializing in home automation and energy-efficient solutions.",
    experience: 10,
  },
];

//header component

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/About", label: "About" },
    { href: "#services", label: "Services" },
    { href: "/About#providers", label: "Service Providers" },
    { href: "#", label: "My Bookings" },
  ];

  return (
    <header
     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
  bg-white 
  ${isScrolled ? "shadow-md border-b-[8px] border-blue-600" : "border-b-[8px] border-transparent"}`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo + Desktop Nav */}
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/Images/logo.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-black">
              Home<span className="text-blue-600">Fix.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-black hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Desktop Sign In */}
          <Link href="/login" className="hidden md:block">
            <Button variant="outline">Sign In</Button>
          </Link>

          {/* Get Started (Visible on Desktop & Mobile) */}
          <Link href="/login">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              Get Started
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <nav className="flex flex-col p-4 space-y-3">
            
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Sign In as normal text */}
            <Link
              href="/login"
              className="text-black hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}

// Hero section
function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState(""); // 1. Added state to track typing

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // 2. Function to handle the search button click
  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    // This calls your backend API directly in the console for testing
    console.log("Searching backend for:", searchQuery);
    fetch(`http://localhost:5000/api/services?search=${searchQuery}`)
      .then(res => res.json())
      .then(data => {
        console.log("Data received from backend:", data);
        alert(`Found ${data.length} services matching "${searchQuery}" in your server.js!`);
      })
      .catch(err => alert("Error: Make sure your backend (node server.js) is running on port 5000!"));
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={images[currentIndex].src}
          alt="background"
          className={`w-full h-full object-cover ${images[currentIndex].position} transition-opacity duration-1000`}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Book Trusted Home Services <span className="text-blue-400">On Demand</span>
        </h1>

        <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-200">
          Connect with verified professionals for all your household needs.
        </p>

        {/* Search bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex items-center bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="flex items-center flex-1 px-4">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <Input
                type="text"
                value={searchQuery} // 3. Connect state to input
                onChange={(e) => setSearchQuery(e.target.value)} // 4. Update state when typing
                placeholder="Search for services (e.g., plumbing...)"
                className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm text-black"
              />
            </div>
            <Button 
              onClick={handleSearch} // 5. Connect function to button
              className="rounded-none rounded-r-lg px-6 bg-gray-900 hover:bg-gray-800"
            >
              Search
            </Button>
          </div>
        </div>

        {/* Stats Section remains the same */}
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
            <div className="text-sm text-gray-200">Verified Professionals</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold mb-1">10,000+</div>
            <div className="text-sm text-gray-200">Services Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
}



// Popular Services section
function PopularServicesSection() {
  return (
    <section  id="services"className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Services</h2>
          <p className="text-gray-600">Choose from our wide range of household services</p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 justify-items-center">

          {serviceCategories.map((service, index) => (
        <Link
    key={index}
    href={`/services/${service.slug.toLowerCase().replace(/\s+/g, "-")}`}
    className="w-full"
  >
         <Card
              key={index}
              className="group hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-gray-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm mb-3">{service.description}</p>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-normal">
                  {service.count} services
                </Badge>
              </CardContent>
            </Card>
              </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Featured Services section
function FeaturedServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Services</h2>
          <p className="text-gray-600">Most popular services booked by our customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((service, index) => (
            <Card key={index} className="overflow-hidden border border-gray-200 bg-white">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <Badge className="absolute top-3 left-3 bg-blue-500 text-white">
                  {service.category}
                </Badge>
              </div>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                  <div className="text-right">
                    <span className="text-xl font-bold text-blue-500">${service.price}</span>
                    <div className="text-xs text-gray-500">starting from</div>
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-4">{service.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-blue-600w-400 text-blue-600w-400" />
                    <span className="text-sm font-medium text-gray-900">{service.rating}</span>
                    <span className="text-sm text-gray-500">({service.reviews})</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration} min</span>
                  </div>
                </div>
                <Button className="w-full bg-gray-900 hover:bg-gray-800">Book Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works section
function HowItWorksSection() {
  const steps = [
    {
      icon: Search,
      title: "1. Browse & Select",
      description: "Choose from hundreds of services and find the perfect professional for your needs",
    },
    {
      icon: Calendar,
      title: "2. Book & Schedule",
      description: "Pick your preferred date and time, add your requirements, and confirm your booking",
    },
    {
      icon: CheckCircle,
      title: "3. Relax & Enjoy",
      description: "Our verified professionals will complete your task while you sit back and relax",
    },
  ];

  return (
    <section 
     id="howitworks"
     className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
          <p className="text-gray-600">Get your household tasks done in 3 simple steps</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                <step.icon className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Top Rated Professionals section
function ProfessionalsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Top Rated Professionals</h2>
          <p className="text-gray-600">Meet our verified and highly-rated service providers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {professionals.map((professional, index) => (
            <Card key={index} className="border border-gray-200 bg-white">
              <CardContent className="p-6 text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  {professional.image ? (
                    <AvatarImage src={professional.image} alt={professional.name} />
                  ) : null}
                  <AvatarFallback className="bg-gray-100 text-gray-600 text-lg font-medium">
                    {professional.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900">{professional.name}</h3>
                  <div className="w-5 h-5 bg-blue-100 rounded-md flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                </div>

                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-4 h-4 fill-blue-600w-400 text-blue-600w-400" />
                  <span className="text-sm font-medium text-gray-900">{professional.rating}</span>
                  <span className="text-sm text-gray-500">({professional.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-center gap-1 text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{professional.location}</span>
                </div>

                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{professional.description}</p>

                <Badge variant="secondary" className="bg-gray-100 text-gray-700 font-normal mb-4">
                  {professional.experience} years experience
                </Badge>

                <Button variant="outline" className="w-full mt-2">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer component
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
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted platform for on-demand household services.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/plumber" className="text-gray-400 text-sm hover:text-white transition-colors">
                 Plumbing Services
                </Link>
              </li>
              <li>
                <Link href="/services/electrical" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Electrical Work
                </Link>
              </li>
              <li>
                <Link href="/services/painter" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Painting Services
                </Link>
                 </li>
                <li>
                <Link href="/services/beautician" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Beautician Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/About" className="text-gray-400 text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#howitworks" className="text-gray-400 text-sm hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/About#team" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/About#contact" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

     <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/helpcenter" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/helpcenter#contactsupport" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="/helpcenter#faq" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Browse FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-white text-sm">
            © 2024{" "}
        <Link href="/" className="text-blue-600 hover:underline">
          HomeFix
        </Link>{" "}
        | {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <PopularServicesSection />
        <FeaturedServicesSection />
        <HowItWorksSection />
        <ProfessionalsSection />
        <Footer />
      </main>

      <ChatWidget />
    </>
  );
}
