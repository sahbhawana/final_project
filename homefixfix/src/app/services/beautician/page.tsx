"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import ImageSlider from "@/components/ImageSlider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { X, Menu } from "lucide-react";


import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";



//navbar
function Navbar() {
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
    { href: "/", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#providers", label: "Service Providers" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
  ];

  return (
   <nav
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
  bg-white 
  ${isScrolled ? "shadow-md border-b-[8px] border-blue-600" : "border-b-[8px] border-transparent"}`}
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


// Plumbing services data
const plumbingServices = [
  {
    id: 1,
    name: "Emergency Plumbing Repair",
    description: "Same-day plumbing repairs for leaks, clogs, burst pipes, and other urgent issues. Available 24/7 for your peace of mind.",
    price: 150,
    duration: "60-90 min",
    rating: 4.7,
    reviews: 64,
    features: ["24/7 Availability", "Same-day service", "No hidden fees", "Licensed professionals"],
    image: "https://ext.same-assets.com/3720208447/269338315.jpeg"
  },
  {
    id: 2,
    name: "Bathroom Renovation",
    description: "Complete bathroom plumbing installation and fixture replacement. From showers to toilets, sinks to bathtubs.",
    price: 800,
    duration: "6-8 hours",
    rating: 4.9,
    reviews: 23,
    features: ["Free consultation", "Premium fixtures", "Warranty included", "Clean finish"],
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&auto=format"
  },
  {
    id: 3,
    name: "Drain Cleaning & Unclogging",
    description: "Professional drain cleaning services to remove blockages and restore proper water flow in your home.",
    price: 120,
    duration: "45-60 min",
    rating: 4.8,
    reviews: 156,
    features: ["Camera inspection", "Hydro jetting", "Root removal", "Preventive tips"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&auto=format"
  },
  {
    id: 4,
    name: "Water Heater Installation",
    description: "Expert installation of tankless and traditional water heaters. Energy-efficient solutions for your home.",
    price: 450,
    duration: "3-4 hours",
    rating: 4.6,
    reviews: 89,
    features: ["Brand options", "Energy efficient", "10-year warranty", "Free disposal"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format"
  },
  {
    id: 5,
    name: "Pipe Repair & Replacement",
    description: "Fix leaky, corroded, or damaged pipes. Full pipe replacement services using modern materials.",
    price: 200,
    duration: "2-3 hours",
    rating: 4.7,
    reviews: 42,
    features: ["Leak detection", "Modern materials", "Minimal disruption", "Pressure testing"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&auto=format"
  },
  {
    id: 6,
    name: "Toilet Repair & Installation",
    description: "From running toilets to complete replacements. Expert toilet services for all brands and models.",
    price: 175,
    duration: "1-2 hours",
    rating: 4.8,
    reviews: 112,
    features: ["All brands", "Water-saving options", "Same-day service", "Clean installation"],
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format"
  },
  {
    id: 7,
    name: "Faucet & Fixture Installation",
    description: "Professional installation of faucets, showerheads, and other bathroom and kitchen fixtures.",
    price: 95,
    duration: "30-60 min",
    rating: 4.9,
    reviews: 78,
    features: ["Modern designs", "Expert fitting", "Leak-free guarantee", "Fixture disposal"],
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&auto=format"
  },
  {
    id: 8,
    name: "Sewer Line Services",
    description: "Comprehensive sewer line inspection, cleaning, and repair services to prevent major issues.",
    price: 350,
    duration: "2-4 hours",
    rating: 4.5,
    reviews: 34,
    features: ["Video inspection", "Trenchless repair", "Root treatment", "Preventive maintenance"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format"
  }
];

// Plumber profiles data
const plumberProfiles = [
  {
    id: 1,
    name: "Mike Rodriguez",
    avatar: "https://ext.same-assets.com/3720208447/4057701860.svg",
    rating: 4.8,
    reviews: 89,
    location: "Westside",
    experience: "12 years",
    specialties: ["Emergency Repairs", "Bathroom Renovation", "Commercial Plumbing"],
    bio: "Licensed plumber with expertise in residential and commercial plumbing systems. Master plumber certification with specialization in high-efficiency systems.",
    completedJobs: 342,
    responseTime: "Under 30 min",
    verified: true
  },
  {
    id: 2,
    name: "Carlos Mendez",
    avatar: "https://ext.same-assets.com/3720208447/2202846119.svg",
    rating: 4.9,
    reviews: 156,
    location: "Downtown",
    experience: "15 years",
    specialties: ["Water Heaters", "Pipe Repair", "Drain Cleaning"],
    bio: "Expert plumber specializing in water heater installations and pipe repairs. Known for clean work and excellent customer service.",
    completedJobs: 528,
    responseTime: "Under 45 min",
    verified: true
  },
  {
    id: 3,
    name: "James Wilson",
    avatar: null,
    rating: 4.7,
    reviews: 67,
    location: "Northside",
    experience: "8 years",
    specialties: ["Toilet Installation", "Faucet Repair", "Leak Detection"],
    bio: "Skilled plumber focused on residential repairs and installations. Fast, reliable service with attention to detail.",
    completedJobs: 245,
    responseTime: "Under 1 hour",
    verified: true
  },
  {
    id: 4,
    name: "Robert Thompson",
    avatar: null,
    rating: 4.6,
    reviews: 45,
    location: "Eastside",
    experience: "10 years",
    specialties: ["Sewer Lines", "Gas Plumbing", "Commercial"],
    bio: "Certified gas plumber with expertise in sewer line repairs and commercial plumbing systems.",
    completedJobs: 189,
    responseTime: "Under 45 min",
    verified: true
  },
  {
    id: 5,
    name: "Anthony Garcia",
    avatar: null,
    rating: 4.8,
    reviews: 98,
    location: "Midtown",
    experience: "14 years",
    specialties: ["Emergency Repairs", "Bathroom Remodel", "Kitchen Plumbing"],
    bio: "Master plumber with extensive experience in both emergency repairs and complete bathroom remodels. Family-owned business since 2012.",
    completedJobs: 412,
    responseTime: "Under 30 min",
    verified: true
  },
  {
    id: 6,
    name: "David Park",
    avatar: null,
    rating: 4.7,
    reviews: 72,
    location: "Southside",
    experience: "9 years",
    specialties: ["Water Filtration", "Pipe Replacement", "Drain Cleaning"],
    bio: "Specializing in water quality solutions and modern pipe replacement techniques. Eco-friendly plumbing expert.",
    completedJobs: 276,
    responseTime: "Under 1 hour",
    verified: true
  }
];

export default function PlumbingServicesPage() {
  return (
    <div className="min-h-screen bg-white">

<Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-100/50 blur-3xl" />
          <div className="absolute top-20 -left-20 w-60 h-60 rounded-full bg-primary/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-4 bg-blue-100 text-primary hover:bg-blue-100 border-0 px-4 py-1.5">
                12 Professional Services
              </Badge>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight">
                Expert <span className="text-primary">Plumbing</span> Services
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                From emergency repairs to complete renovations, our verified plumbers deliver reliable,
                professional service for all your plumbing needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3.5 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
                  Book a Plumber
                </button>
                <button className="px-8 py-3.5 bg-white text-foreground border border-border rounded-xl font-semibold hover:bg-muted transition-all">
                  View Pricing
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8 mt-10">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Expert Plumbers</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">4.8</p>
                  <p className="text-sm text-muted-foreground">Average Rating</p>
                </div>
                <Separator orientation="vertical" className="h-12" />
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Emergency Service</p>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://ext.same-assets.com/3720208447/269338315.jpeg"
                  alt="Professional plumber at work"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full bg-green-500 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Verified Professionals</p>
                      <p className="text-white/80 text-sm">Background checked & insured</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Plumbing Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We connect you with the best plumbers in your area, ensuring quality work every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Licensed & Insured",
                description: "All plumbers are fully licensed and carry liability insurance for your protection."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "24/7 Emergency Service",
                description: "Plumbing emergencies don't wait, and neither do we. Available round the clock."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "Upfront Pricing",
                description: "Get a detailed quote before work begins. No hidden fees or surprise charges."
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Satisfaction Guaranteed",
                description: "We stand behind our work with a 100% satisfaction guarantee on all services."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-gradient-to-b from-white to-slate-50/50">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Plumbing Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From simple repairs to complex installations, we offer comprehensive plumbing solutions for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plumbingServices.map((service) => (
              <Card key={service.id} className="group overflow-hidden border-0 shadow-sm hover-lift bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-white border-0">
                    Plumbing
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground text-base leading-tight pr-2">{service.name}</h3>
                    <div className="text-right shrink-0">
                      <span className="text-lg font-bold text-primary">${service.price}</span>
                      <p className="text-xs text-muted-foreground">starting from</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p>

                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="font-medium">{service.rating}</span>
                      <span className="text-muted-foreground">({service.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <button className="w-full py-2.5 bg-foreground text-white text-sm font-medium rounded-lg hover:bg-foreground/90 transition-colors">
                    Book Now
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get professional plumbing help in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Describe Your Issue",
                description: "Tell us about your plumbing problem and we'll match you with the right specialist.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )
              },
              {
                step: "2",
                title: "Book & Schedule",
                description: "Choose your preferred plumber, pick a time that works for you, and confirm your booking.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                step: "3",
                title: "Get It Fixed",
                description: "Your plumber arrives on time, completes the work, and you pay only when satisfied.",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.step}. {item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plumber Profiles Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Top Rated Plumbers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet our verified and highly-rated plumbing professionals ready to help you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plumberProfiles.map((plumber) => (
              <Card key={plumber.id} className="border-0 shadow-sm hover-lift bg-white overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center mb-4">
                    <Avatar className="w-20 h-20 mb-4 border-4 border-primary/10">
                      {plumber.avatar ? (
                        <AvatarImage src={plumber.avatar} alt={plumber.name} />
                      ) : null}
                      <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                        {plumber.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">{plumber.name}</h3>
                      {plumber.verified && (
                        <svg className="w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                      <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                      <span className="font-semibold">{plumber.rating}</span>
                      <span className="text-muted-foreground text-sm">({plumber.reviews} reviews)</span>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {plumber.location}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-2">
                    {plumber.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {plumber.specialties.slice(0, 3).map((specialty, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs font-normal">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                    <div className="p-2 rounded-lg bg-slate-50">
                      <p className="text-sm font-semibold text-foreground">{plumber.experience}</p>
                      <p className="text-xs text-muted-foreground">Experience</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50">
                      <p className="text-sm font-semibold text-foreground">{plumber.completedJobs}</p>
                      <p className="text-xs text-muted-foreground">Jobs</p>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50">
                      <p className="text-sm font-semibold text-foreground">{plumber.responseTime.replace('Under ', '<')}</p>
                      <p className="text-xs text-muted-foreground">Response</p>
                    </div>
                  </div>

                  <button className="w-full py-2.5 border border-foreground text-foreground text-sm font-medium rounded-lg hover:bg-foreground hover:text-white transition-colors">
                    View Profile
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">
              View All Plumbers
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary to-blue-600">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Need a Plumber Right Now?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
            Our emergency plumbing team is available 24/7. Get fast, reliable service when you need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3.5 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all shadow-lg">
              Book Emergency Service
            </button>
            <button className="px-8 py-3.5 bg-transparent text-white border-2 border-white rounded-xl font-semibold hover:bg-white/10 transition-all">
              Call Now: (555) 123-4567
            </button>
          </div>
        </div>
      </section>

 <Footer />
    </div>
  );
}
// Footer component
function Footer() {
   const currentYear = new Date().getFullYear(); // client-only dynamic
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
                <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Cleaning Services
                </Link>
              </li>
              <li>
                <Link href="/services/plumber" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Plumbing Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Electrical Work
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Painting Services
                </Link>
                 </li>
                <li>
                <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
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
                <Link href="#contactsupport" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 text-sm hover:text-white transition-colors">
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