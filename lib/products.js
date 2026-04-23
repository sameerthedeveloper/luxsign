import { createClient as createBrowserClient } from "@/lib/supabase/client";

export const products = [
  {
    id: "lx-pro-4k",
    name: "LX-Pro 4K Processor",
    category: "processor",
    type: "Video Processor",
    tagline: "Ultra-high definition video processing",
    price: "Contact Sales",
    image: "/products/processor-1.png",
    badge: "Flagship",
    specs: {
      resolution: "3840 × 2160 @ 60Hz",
      inputs: "4× HDMI 2.0, 2× DVI, 2× SDI",
      outputs: "16× Ethernet Ports",
      processingDepth: "12-bit color",
      latency: "< 1 frame",
      powerConsumption: "120W",
      dimensions: "482 × 310 × 44 mm",
      weight: "5.2 kg",
    },
    description:
      "The LX-Pro 4K is our flagship video processor designed for large-scale LED installations. Featuring zero-compromise 4K processing at 60Hz, 12-bit color depth, and sub-frame latency, it delivers unparalleled visual fidelity for broadcast, live events, and architectural displays.",
    features: [
      "Real-time 4K scaling and switching",
      "Advanced color calibration engine",
      "Hot-swappable redundant PSU",
      "Genlock / Framelock synchronization",
      "EDID management and custom resolution support",
      "Web-based remote management interface",
    ],
  },
  {
    id: "lx-matrix-8x8",
    name: "LX-Matrix 8×8 Switcher",
    category: "processor",
    type: "Matrix Switcher",
    tagline: "Seamless signal routing for complex setups",
    price: "Contact Sales",
    image: "/products/processor-2.png",
    badge: "New",
    specs: {
      resolution: "4K @ 30Hz / 1080p @ 60Hz",
      inputs: "8× HDMI 2.0",
      outputs: "8× HDMI 2.0",
      processingDepth: "10-bit color",
      latency: "< 1 frame",
      powerConsumption: "85W",
      dimensions: "482 × 260 × 44 mm",
      weight: "4.1 kg",
    },
    description:
      "The LX-Matrix 8×8 provides flexible, zero-latency signal routing for complex multi-display environments. Perfect for control rooms, broadcast studios, and corporate AV installations where reliable signal management is mission-critical.",
    features: [
      "Instant crosspoint switching",
      "HDCP 2.2 compliant",
      "Built-in audio de-embedding",
      "RS-232 / IP / IR control",
      "Scene presets and scheduling",
      "Rack-mountable 1U design",
    ],
  },
  {
    id: "lx-panel-p2-indoor",
    name: "LX-Panel P2.5 Indoor",
    category: "display",
    type: "Indoor LED Panel",
    tagline: "Crystal-clear indoor LED display",
    price: "Contact Sales",
    image: "/products/display-1.png",
    badge: "Best Seller",
    specs: {
      pixelPitch: "2.5mm",
      resolution: "160 × 160 pixels per panel",
      brightness: "800 cd/m²",
      refreshRate: "3840Hz",
      panelSize: "400 × 400 × 45 mm",
      weight: "5.8 kg/panel",
      viewingAngle: "160° H / 160° V",
      lifespan: "100,000 hours",
    },
    description:
      "The LX-Panel P2.5 delivers stunning indoor visuals with an ultra-fine 2.5mm pixel pitch. Ideal for corporate lobbies, retail environments, and houses of worship, it combines high brightness with wide viewing angles for an immersive viewing experience.",
    features: [
      "Die-cast aluminum cabinet for precision alignment",
      "Front and rear serviceability",
      "Auto brightness adjustment",
      "16-bit grayscale processing",
      "Quick-lock panel connection system",
      "Energy-efficient SMD LED technology",
    ],
  },
  {
    id: "lx-panel-p4-outdoor",
    name: "LX-Panel P4 Outdoor",
    category: "display",
    type: "Outdoor LED Panel",
    tagline: "Weather-resistant outdoor display",
    price: "Contact Sales",
    image: "/products/display-2.png",
    badge: "Durable",
    specs: {
      pixelPitch: "4mm",
      resolution: "120 × 120 pixels per panel",
      brightness: "6500 cd/m²",
      refreshRate: "3840Hz",
      panelSize: "480 × 480 × 88 mm",
      weight: "11.2 kg/panel",
      viewingAngle: "140° H / 140° V",
      ipRating: "IP65 front / IP54 rear",
    },
    description:
      "Built for the elements, the LX-Panel P4 Outdoor delivers brilliant visuals in direct sunlight with 6500 cd/m² brightness. Its IP65 rated front panel withstands rain, dust, and extreme temperatures, making it the choice for stadiums, billboards, and outdoor events.",
    features: [
      "IP65 front-rated weather sealing",
      "Anti-UV and anti-corrosion coating",
      "High-brightness SMD LEDs for daylight visibility",
      "Smart ventilation thermal management",
      "Structural steel cabinet design",
      "Remote monitoring and diagnostics",
    ],
  },
  {
    id: "lx-flex-curve",
    name: "LX-Flex Curve Display",
    category: "display",
    type: "Flexible LED",
    tagline: "Bendable LED for creative installations",
    price: "Contact Sales",
    image: "/products/display-3.png",
    badge: "Creative",
    specs: {
      pixelPitch: "3.9mm",
      resolution: "128 × 128 pixels per module",
      brightness: "1200 cd/m²",
      refreshRate: "3840Hz",
      panelSize: "500 × 500 × 65 mm",
      weight: "7.5 kg/module",
      bendRadius: "≥ 500mm",
      installType: "Concave / Convex / S-Curve",
    },
    description:
      "The LX-Flex Curve pushes the boundaries of LED display design. With a minimum bend radius of 500mm, it enables stunning curved, cylindrical, and wave-form installations for museums, retail flagships, and architectural projects.",
    features: [
      "Flexible soft module design",
      "Concave and convex mounting",
      "Magnetic quick-assembly system",
      "Lightweight aluminum frame",
      "Seamless curved splicing",
      "Compatible with all LX processors",
    ],
  },
  {
    id: "lx-ctrl-nova",
    name: "LX-Controller Nova",
    category: "controller",
    type: "LED Controller",
    tagline: "Centralized display management",
    price: "Contact Sales",
    image: "/products/controller-1.png",
    badge: "Smart",
    specs: {
      maxPixels: "2,300,000 pixels",
      outputs: "16× Ethernet",
      inputSupport: "HDMI 2.0, DVI, DP 1.2",
      colorCalibration: "Point-by-point",
      controlSoftware: "LuxSign Studio Pro",
      redundancy: "Dual power, dual data",
      dimensions: "482 × 350 × 88 mm",
      weight: "7.8 kg",
    },
    description:
      "The LX-Controller Nova is the brain of any large-scale LED deployment. Supporting up to 2.3 million pixels with point-by-point calibration, it ensures perfect uniformity across massive video walls and multi-screen configurations.",
    features: [
      "Support for up to 2.3M pixels",
      "Point-by-point brightness and color correction",
      "Dual power and data redundancy",
      "Multi-screen mosaic and rotation",
      "Firmware OTA updates",
      "LuxSign Studio Pro software included",
    ],
  },
];

export const categories = [
  { id: "all", name: "All Products", count: 6 },
  { id: "processor", name: "Processors", count: 2 },
  { id: "display", name: "LED Displays", count: 3 },
  { id: "controller", name: "Controllers", count: 1 },
];

export async function fetchProducts(supabase) {
  try {
    const client = supabase || createBrowserClient();
    const { data, error } = await client
      .from('products')
      .select('*');
    
    if (error) {
      console.warn("Supabase returned an error while fetching products:", error.message);
      return products; // Fallback to mock data
    }
    
    return data && data.length > 0 ? data : products;
  } catch (error) {
    console.error("Critical error in fetchProducts:", error.message);
    return products; // Fallback to mock data
  }
}

export async function getProductById(id, supabase) {
  try {
    const client = supabase || createBrowserClient();
    const { data, error } = await client
      .from('products')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.warn(`Supabase returned an error while fetching product ${id}:`, error.message);
      return products.find((p) => p.id === id) || null;
    }
    
    return data;
  } catch (error) {
    console.error(`Critical error in getProductById for ${id}:`, error.message);
    return products.find((p) => p.id === id) || null;
  }
}

export async function getProductsByCategory(category, supabase) {
  try {
    const client = supabase || createBrowserClient();
    
    if (category === "all") return fetchProducts(client);
    
    const { data, error } = await client
      .from('products')
      .select('*')
      .eq('category', category);
    
    if (error) {
      console.warn(`Supabase returned an error while fetching products for category ${category}:`, error.message);
      return products.filter((p) => p.category === category);
    }
    
    return data && data.length > 0 ? data : products.filter((p) => p.category === category);
  } catch (error) {
    console.error(`Critical error in getProductsByCategory for ${category}:`, error.message);
    return products.filter((p) => p.category === category);
  }
}
