export interface ServiceProvider {
  id: string
  name: string
  avatar: string
  profession: string
  category: "plumbing" | "electrical" | "painting" | "beautician"
  rating: number
  reviewCount: number
  location: string
  experience: number
  hourlyRate: number
  isVerified: boolean
  isOnline: boolean
  completedJobs: number
  mutualConnections: number
  skills: string[]
  bio: string
}

export const serviceProviders: ServiceProvider[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    profession: "Professional Cleaner",
    category: "plumbing",
    rating: 4.9,
    reviewCount: 127,
    location: "Downtown",
    experience: 8,
    hourlyRate: 35,
    isVerified: true,
    isOnline: true,
    completedJobs: 342,
    mutualConnections: 12,
    skills: ["Deep Cleaning", "Eco-Friendly Products", "Office Cleaning"],
    bio: "Professional cleaner with 8 years of experience. Specializing in deep cleaning and eco-friendly products."
  },
  {
    id: "2",
    name: "Mike Rodriguez",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    profession: "Licensed Plumber",
    category: "plumbing",
    rating: 4.8,
    reviewCount: 89,
    location: "Westside",
    experience: 12,
    hourlyRate: 65,
    isVerified: true,
    isOnline: false,
    completedJobs: 456,
    mutualConnections: 8,
    skills: ["Emergency Repairs", "Bathroom Renovation", "Pipe Installation"],
    bio: "Licensed plumber with expertise in residential and commercial plumbing systems."
  },
  {
    id: "3",
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    profession: "Certified Electrician",
    category: "electrical",
    rating: 4.7,
    reviewCount: 156,
    location: "Eastside",
    experience: 10,
    hourlyRate: 70,
    isVerified: true,
    isOnline: true,
    completedJobs: 289,
    mutualConnections: 5,
    skills: ["Home Automation", "Panel Upgrades", "Safety Inspections"],
    bio: "Certified electrician specializing in home automation and energy-efficient solutions."
  },
  {
    id: "4",
    name: "Emily Parker",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    profession: "Interior Painter",
    category: "painting",
    rating: 4.9,
    reviewCount: 203,
    location: "Midtown",
    experience: 6,
    hourlyRate: 45,
    isVerified: true,
    isOnline: true,
    completedJobs: 178,
    mutualConnections: 15,
    skills: ["Interior Design", "Color Consultation", "Textured Finishes"],
    bio: "Creative painter with an eye for detail. Transform your space with beautiful finishes."
  },
  {
    id: "5",
    name: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    profession: "Master Plumber",
    category: "plumbing",
    rating: 4.6,
    reviewCount: 78,
    location: "Northside",
    experience: 15,
    hourlyRate: 75,
    isVerified: true,
    isOnline: false,
    completedJobs: 521,
    mutualConnections: 3,
    skills: ["Water Heaters", "Sewer Lines", "Gas Lines"],
    bio: "Master plumber with 15 years of experience in complex residential projects."
  },
  {
    id: "6",
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    profession: "Beautician",
    category: "beautician",
    rating: 4.9,
    reviewCount: 312,
    location: "Central",
    experience: 7,
    hourlyRate: 55,
    isVerified: true,
    isOnline: true,
    completedJobs: 634,
    mutualConnections: 22,
    skills: ["Makeup Artist", "Hair Styling", "Bridal Services"],
    bio: "Professional beautician offering premium beauty and grooming services at your doorstep."
  },
  {
    id: "7",
    name: "Carlos Martinez",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    profession: "House Cleaner",
    category: "plumbing",
    rating: 4.7,
    reviewCount: 94,
    location: "Southside",
    experience: 5,
    hourlyRate: 30,
    isVerified: true,
    isOnline: true,
    completedJobs: 187,
    mutualConnections: 7,
    skills: ["Move-out Cleaning", "Kitchen Deep Clean", "Window Cleaning"],
    bio: "Reliable cleaner focused on quality and customer satisfaction."
  },
  {
    id: "8",
    name: "Lisa Thompson",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    profession: "Electrician",
    category: "electrical",
    rating: 4.8,
    reviewCount: 67,
    location: "Harbor District",
    experience: 9,
    hourlyRate: 65,
    isVerified: true,
    isOnline: false,
    completedJobs: 234,
    mutualConnections: 11,
    skills: ["Lighting Installation", "Outlet Repairs", "Smart Home Setup"],
    bio: "Experienced electrician with a focus on smart home technologies and modern installations."
  },
  {
    id: "9",
    name: "Ahmed Hassan",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
    profession: "Exterior Painter",
    category: "painting",
    rating: 4.5,
    reviewCount: 45,
    location: "Riverside",
    experience: 11,
    hourlyRate: 50,
    isVerified: true,
    isOnline: true,
    completedJobs: 145,
    mutualConnections: 4,
    skills: ["Exterior Painting", "Pressure Washing", "Deck Staining"],
    bio: "Expert in exterior painting and surface preparation for lasting finishes."
  },
  {
    id: "10",
    name: "Jennifer Lee",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    profession: "Nail Artist & Beautician",
    category: "beautician",
    rating: 4.9,
    reviewCount: 189,
    location: "Fashion District",
    experience: 4,
    hourlyRate: 40,
    isVerified: true,
    isOnline: true,
    completedJobs: 412,
    mutualConnections: 18,
    skills: ["Nail Art", "Manicure", "Pedicure", "Facial Treatments"],
    bio: "Creative nail artist and skincare specialist bringing salon quality to your home."
  },
  {
    id: "11",
    name: "Robert Brown",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    profession: "Commercial Cleaner",
    category: "plumbing",
    rating: 4.6,
    reviewCount: 112,
    location: "Business District",
    experience: 14,
    hourlyRate: 40,
    isVerified: true,
    isOnline: false,
    completedJobs: 567,
    mutualConnections: 9,
    skills: ["Commercial Cleaning", "Floor Polishing", "Sanitization"],
    bio: "Specialized in commercial and office cleaning with attention to hygiene standards."
  },
  {
    id: "12",
    name: "Nina Patel",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    profession: "Licensed Electrician",
    category: "electrical",
    rating: 4.8,
    reviewCount: 98,
    location: "Tech Park",
    experience: 7,
    hourlyRate: 60,
    isVerified: true,
    isOnline: true,
    completedJobs: 198,
    mutualConnections: 14,
    skills: ["EV Charger Installation", "Solar Systems", "Energy Audits"],
    bio: "Forward-thinking electrician specializing in green energy solutions and EV infrastructure."
  }
]

export const categories = [
  { id: "all", label: "All Providers"},
  { id: "plumbing", label: "Plumbing" },
  { id: "electrical", label: "Electrical" },
  { id: "painting", label: "Painting" },
  { id: "beautician", label: "Beautician" },
]