"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// 1. Import usePathname
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  
  // 2. Initialize the pathname hook
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Define paths where the Navbar should be hidden
  const isHomePage = pathname.startsWith("/");
  const isLoginPage = pathname.startsWith("/login");
   const isAboutPage = pathname.startsWith("/About");
   const isServicesPage = pathname.startsWith("/Services");
    const ishelpcenterPage = pathname.startsWith("/helpcenter");
  // 4. If we are on a login page, return null so nothing renders
  if (isLoginPage) {
    return null;
  }

if (isAboutPage) {
    return null;
  }
 if (isServicesPage) {
    return null;
  }
if (ishelpcenterPage) {
    return null;
  }
  if (isHomePage) {
    return null;
  }
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-600 shadow-lg" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1
          className={`text-2xl font-bold transition-colors duration-300 ${
            scrolled ? "text-white" : "text-black"
          }`}
        >
          HomeFix
        </h1>

        {/* Navigation */}
        <ul className="flex space-x-6 items-center">
          
          {["About", "Services", "Service Providers", "My Bookings"].map(
            (item) => (
              <li
                key={item}
                className={`cursor-pointer transition-colors duration-300 ${
                  scrolled ? "text-white" : "text-black"
                }`}
              >
                {item}
              </li>
            )
          )}

          {/* Sign In Button */}
          <li>
            <button
              className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                scrolled
                  ? "border-white text-white hover:bg-white hover:text-blue-600"
                  : "border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              Sign In
            </button>
          </li>

          {/* Get Started Button */}
          <li>
            <button
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                scrolled
                  ? "bg-white text-blue-600 hover:bg-gray-100"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}