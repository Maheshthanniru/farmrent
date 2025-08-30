export interface Equipment {
  id: string;
  title: string;
  category: string;
  images: string[];
  pricePerDay: number;
  deposit: number;
  rating: number;
  city: string;
  availableFrom: string;
  availableTo: string;
  ageSuitability: ("13-17" | "18-25" | "26-40" | "40+")[];
  equipmentAge: "New" | "<1yr" | "1-3yr" | "3+yr";
  condition: "Like New" | "Good" | "Fair";
  year: number;
  brand: string;
  specs: Record<string, string>;
  badges: string[];
  description: string;
  owner: {
    name: string;
    rating: number;
    verified: boolean;
  };
}

export const equipments: Equipment[] = [
  {
    id: "1",
    title: "Professional DSLR Camera Kit",
    category: "Photography",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8b3b3a2a8c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&h=600&fit=crop"
    ],
    pricePerDay: 85,
    deposit: 500,
    rating: 4.8,
    city: "San Francisco",
    availableFrom: "2024-01-15",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "<1yr",
    condition: "Like New",
    year: 2023,
    brand: "Canon",
    specs: {
      "Sensor": "24.1MP APS-C",
      "Video": "4K 30fps",
      "Lens": "18-55mm f/3.5-5.6",
      "Battery": "LP-E17",
      "Storage": "SD/SDHC/SDXC"
    },
    badges: ["Professional", "4K Video", "Weather Sealed"],
    description: "Professional DSLR camera perfect for events, portraits, and commercial photography. Includes multiple lenses and accessories.",
    owner: {
      name: "Sarah Chen",
      rating: 4.9,
      verified: true
    }
  },
  {
    id: "2",
    title: "DJI Mavic Air 2 Drone",
    category: "Drones",
    images: [
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506947411487-a56738267384?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=800&h=600&fit=crop"
    ],
    pricePerDay: 120,
    deposit: 800,
    rating: 4.9,
    city: "Los Angeles",
    availableFrom: "2024-01-01",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "1-3yr",
    condition: "Good",
    year: 2022,
    brand: "DJI",
    specs: {
      "Camera": "48MP 1/2\" CMOS",
      "Video": "4K 60fps",
      "Flight Time": "34 minutes",
      "Range": "10km",
      "Max Speed": "68.4 km/h"
    },
    badges: ["4K Video", "Long Range", "Follow Me"],
    description: "Advanced drone with 4K camera, obstacle avoidance, and intelligent flight modes. Perfect for aerial photography and videography.",
    owner: {
      name: "Mike Rodriguez",
      rating: 4.8,
      verified: true
    }
  },
  {
    id: "3",
    title: "Makita Cordless Drill Set",
    category: "Power Tools",
    images: [
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop"
    ],
    pricePerDay: 35,
    deposit: 200,
    rating: 4.6,
    city: "Chicago",
    availableFrom: "2024-01-10",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "1-3yr",
    condition: "Good",
    year: 2022,
    brand: "Makita",
    specs: {
      "Power": "18V",
      "Chuck Size": "1/2 inch",
      "Speed": "0-600/0-1,700 RPM",
      "Battery": "2x 3.0Ah Li-ion",
      "Weight": "3.4 lbs"
    },
    badges: ["Cordless", "Professional", "2 Batteries"],
    description: "Professional cordless drill set with two batteries, charger, and carrying case. Ideal for construction and DIY projects.",
    owner: {
      name: "David Thompson",
      rating: 4.7,
      verified: true
    }
  },
  {
    id: "4",
    title: "Yamaha Stage Piano",
    category: "Musical Equipment",
    images: [
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop"
    ],
    pricePerDay: 75,
    deposit: 400,
    rating: 4.7,
    city: "Nashville",
    availableFrom: "2024-01-05",
    availableTo: "2024-12-31",
    ageSuitability: ["13-17", "18-25", "26-40", "40+"],
    equipmentAge: "New",
    condition: "Like New",
    year: 2024,
    brand: "Yamaha",
    specs: {
      "Keys": "88 weighted",
      "Voices": "500+",
      "Polyphony": "256 notes",
      "Weight": "40 lbs",
      "Outputs": "Stereo XLR/TRS"
    },
    badges: ["Professional", "Weighted Keys", "Studio Quality"],
    description: "Professional stage piano with weighted keys and hundreds of voices. Perfect for live performances and studio recording.",
    owner: {
      name: "Lisa Johnson",
      rating: 4.9,
      verified: true
    }
  },
  {
    id: "5",
    title: "LED Video Light Kit",
    category: "Lighting",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
    ],
    pricePerDay: 45,
    deposit: 300,
    rating: 4.5,
    city: "New York",
    availableFrom: "2024-01-15",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "<1yr",
    condition: "Good",
    year: 2023,
    brand: "Aputure",
    specs: {
      "Power": "300W",
      "Color Temp": "3200K-5600K",
      "CRI": "96+",
      "Beam Angle": "15-45°",
      "Mount": "Bowens S"
    },
    badges: ["Professional", "Color Adjustable", "High CRI"],
    description: "Professional LED video light kit with adjustable color temperature and high CRI. Perfect for film and video production.",
    owner: {
      name: "Alex Kim",
      rating: 4.6,
      verified: true
    }
  },
  {
    id: "6",
    title: "Epson Projector 4K",
    category: "AV Equipment",
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&h=600&fit=crop"
    ],
    pricePerDay: 90,
    deposit: 600,
    rating: 4.8,
    city: "Austin",
    availableFrom: "2024-01-01",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "1-3yr",
    condition: "Good",
    year: 2022,
    brand: "Epson",
    specs: {
      "Resolution": "4K UHD",
      "Brightness": "3,000 lumens",
      "Contrast": "100,000:1",
      "Throw Ratio": "1.35-2.84",
      "Lamp Life": "5,000 hours"
    },
    badges: ["4K", "High Brightness", "Wireless"],
    description: "4K UHD projector with high brightness and wireless connectivity. Perfect for home theater and business presentations.",
    owner: {
      name: "Robert Wilson",
      rating: 4.8,
      verified: true
    }
  },
  {
    id: "7",
    title: "GoPro Hero 11 Black",
    category: "Action Cameras",
    images: [
      "https://images.unsplash.com/photo-1574944985070-8b3b3a2a8c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8b3b3a2a8c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8b3b3a2a8c3b?w=800&h=600&fit=crop"
    ],
    pricePerDay: 40,
    deposit: 250,
    rating: 4.7,
    city: "Denver",
    availableFrom: "2024-01-10",
    availableTo: "2024-12-31",
    ageSuitability: ["13-17", "18-25", "26-40", "40+"],
    equipmentAge: "<1yr",
    condition: "Like New",
    year: 2023,
    brand: "GoPro",
    specs: {
      "Resolution": "5.3K 60fps",
      "Stabilization": "HyperSmooth 5.0",
      "Waterproof": "33ft",
      "Battery": "Enduro",
      "Storage": "microSD"
    },
    badges: ["5.3K Video", "Waterproof", "Stabilized"],
    description: "Latest GoPro with 5.3K video, advanced stabilization, and waterproof design. Perfect for action sports and adventures.",
    owner: {
      name: "Emma Davis",
      rating: 4.9,
      verified: true
    }
  },
  {
    id: "8",
    title: "DeWalt Table Saw",
    category: "Woodworking",
    images: [
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop"
    ],
    pricePerDay: 60,
    deposit: 400,
    rating: 4.6,
    city: "Portland",
    availableFrom: "2024-01-05",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "1-3yr",
    condition: "Good",
    year: 2022,
    brand: "DeWalt",
    specs: {
      "Blade Size": "10 inch",
      "Power": "15 Amp",
      "Rip Capacity": "32.5 inch",
      "Depth": "3-1/8 inch",
      "Weight": "45 lbs"
    },
    badges: ["Professional", "Safety Features", "Portable"],
    description: "Professional table saw with safety features and portable design. Ideal for woodworking projects and construction.",
    owner: {
      name: "Tom Anderson",
      rating: 4.7,
      verified: true
    }
  },
  {
    id: "9",
    title: "Sony A7III Mirrorless Camera",
    category: "Photography",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8b3b3a2a8c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?w=800&h=600&fit=crop"
    ],
    pricePerDay: 95,
    deposit: 700,
    rating: 4.9,
    city: "Seattle",
    availableFrom: "2024-01-15",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "1-3yr",
    condition: "Like New",
    year: 2022,
    brand: "Sony",
    specs: {
      "Sensor": "24.2MP Full-Frame",
      "Video": "4K 30fps",
      "AF Points": "693",
      "ISO": "100-51,200",
      "Battery": "NP-FZ100"
    },
    badges: ["Full-Frame", "4K Video", "Professional"],
    description: "Full-frame mirrorless camera with exceptional low-light performance and 4K video capabilities.",
    owner: {
      name: "Jennifer Lee",
      rating: 4.9,
      verified: true
    }
  },
  {
    id: "10",
    title: "Honda Generator 2000W",
    category: "Generators",
    images: [
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop"
    ],
    pricePerDay: 55,
    deposit: 350,
    rating: 4.5,
    city: "Miami",
    availableFrom: "2024-01-01",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "3+yr",
    condition: "Good",
    year: 2021,
    brand: "Honda",
    specs: {
      "Power": "2000W",
      "Fuel": "Gasoline",
      "Runtime": "8 hours",
      "Noise": "53 dB",
      "Weight": "46 lbs"
    },
    badges: ["Quiet", "Portable", "Reliable"],
    description: "Quiet and reliable portable generator perfect for camping, events, and emergency backup power.",
    owner: {
      name: "Carlos Mendez",
      rating: 4.6,
      verified: true
    }
  },
  {
    id: "11",
    title: "Fender Stratocaster Electric Guitar",
    category: "Musical Equipment",
    images: [
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop"
    ],
    pricePerDay: 50,
    deposit: 300,
    rating: 4.7,
    city: "Austin",
    availableFrom: "2024-01-10",
    availableTo: "2024-12-31",
    ageSuitability: ["13-17", "18-25", "26-40", "40+"],
    equipmentAge: "1-3yr",
    condition: "Good",
    year: 2022,
    brand: "Fender",
    specs: {
      "Body": "Alder",
      "Neck": "Maple",
      "Pickups": "3 Single-coil",
      "Bridge": "2-Point Tremolo",
      "Finish": "Olympic White"
    },
    badges: ["Classic", "Professional", "Includes Case"],
    description: "Classic Fender Stratocaster with iconic tone and playability. Perfect for studio recording and live performances.",
    owner: {
      name: "Marcus Johnson",
      rating: 4.8,
      verified: true
    }
  },
  {
    id: "12",
    title: "Canon 70-200mm f/2.8 Lens",
    category: "Photography",
    images: [
      "https://images.unsplash.com/photo-1574944985070-8b3b3a2a8c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8b3b3a2a8c3b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574944985070-8b3b3a2a8c3b?w=800&h=600&fit=crop"
    ],
    pricePerDay: 65,
    deposit: 500,
    rating: 4.8,
    city: "Phoenix",
    availableFrom: "2024-01-15",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "<1yr",
    condition: "Like New",
    year: 2023,
    brand: "Canon",
    specs: {
      "Focal Length": "70-200mm",
      "Aperture": "f/2.8",
      "Stabilization": "IS",
      "Filter Size": "77mm",
      "Weight": "1.49 kg"
    },
    badges: ["Professional", "Image Stabilized", "Weather Sealed"],
    description: "Professional telephoto zoom lens with constant f/2.8 aperture. Perfect for sports, wildlife, and portrait photography.",
    owner: {
      name: "Amanda Chen",
      rating: 4.9,
      verified: true
    }
  },
  {
    id: "13",
    title: "Milwaukee M18 Impact Driver",
    category: "Power Tools",
    images: [
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581147036324-c1c89c2c8b5c?w=800&h=600&fit=crop"
    ],
    pricePerDay: 30,
    deposit: 180,
    rating: 4.6,
    city: "Dallas",
    availableFrom: "2024-01-05",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "1-3yr",
    condition: "Good",
    year: 2022,
    brand: "Milwaukee",
    specs: {
      "Power": "18V",
      "Torque": "1,800 in-lbs",
      "Speed": "0-3,600 RPM",
      "Battery": "5.0Ah",
      "Weight": "2.1 lbs"
    },
    badges: ["High Torque", "Cordless", "Professional"],
    description: "High-torque impact driver perfect for construction and automotive work. Includes battery and charger.",
    owner: {
      name: "Ryan Smith",
      rating: 4.7,
      verified: true
    }
  },
  {
    id: "14",
    title: "Roland TD-17KV Electronic Drum Kit",
    category: "Musical Equipment",
    images: [
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&h=600&fit=crop"
    ],
    pricePerDay: 80,
    deposit: 500,
    rating: 4.7,
    city: "Las Vegas",
    availableFrom: "2024-01-10",
    availableTo: "2024-12-31",
    ageSuitability: ["13-17", "18-25", "26-40", "40+"],
    equipmentAge: "<1yr",
    condition: "Like New",
    year: 2023,
    brand: "Roland",
    specs: {
      "Pads": "8 zones",
      "Sounds": "300+",
      "Connectivity": "USB/MIDI",
      "Weight": "35 lbs",
      "Power": "AC adapter"
    },
    badges: ["Professional", "Quiet Practice", "Multiple Sounds"],
    description: "Professional electronic drum kit with mesh heads and hundreds of sounds. Perfect for practice and recording.",
    owner: {
      name: "Kevin Park",
      rating: 4.8,
      verified: true
    }
  },
  {
    id: "15",
    title: "Aputure 600D Pro LED Light",
    category: "Lighting",
    images: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
    ],
    pricePerDay: 120,
    deposit: 800,
    rating: 4.9,
    city: "Los Angeles",
    availableFrom: "2024-01-15",
    availableTo: "2024-12-31",
    ageSuitability: ["18-25", "26-40", "40+"],
    equipmentAge: "New",
    condition: "Like New",
    year: 2024,
    brand: "Aputure",
    specs: {
      "Power": "600W",
      "Color Temp": "3200K-5600K",
      "CRI": "96+",
      "Beam Angle": "15-45°",
      "Mount": "Bowens S"
    },
    badges: ["Professional", "High Power", "Color Adjustable"],
    description: "High-power LED light perfect for film and commercial photography. Includes remote control and mounting options.",
    owner: {
      name: "Sophia Rodriguez",
      rating: 4.9,
      verified: true
    }
  }
];

export const categories = [
  "Photography",
  "Drones",
  "Power Tools",
  "Musical Equipment",
  "Lighting",
  "AV Equipment",
  "Action Cameras",
  "Woodworking",
  "Generators"
];

export const cities = [
  "San Francisco",
  "Los Angeles",
  "Chicago",
  "Nashville",
  "New York",
  "Austin",
  "Denver",
  "Portland",
  "Seattle",
  "Miami",
  "Phoenix",
  "Dallas",
  "Las Vegas"
];
