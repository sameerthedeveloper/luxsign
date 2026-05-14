import { createClient } from '@/lib/supabase/server';

const mockProducts = [
  {
    id: "processor-x",
    slug: "processor-x",
    name: "Quantum Processor X",
    description: "Next-generation 8K video processing with AI-driven upscaling and zero-latency transmission.",
    price: 12500,
    image_url: "/products/processor-2.png",
    category: "processor",
    featured: true,
    specs: {
      Resolution: "8K UHD",
      Latency: "< 1ms",
      Inputs: "8x HDMI 2.1, 4x DP 1.4"
    }
  },
  {
    id: "processor-lite",
    slug: "processor-lite",
    name: "Core Processor V2",
    description: "Reliable 4K processing for standard broadcasting and medium-scale events.",
    price: 5200,
    image_url: "/products/processor-1.png",
    category: "processor",
    featured: false,
    specs: {
      Resolution: "4K UHD",
      Latency: "2ms",
      Inputs: "4x HDMI 2.0"
    }
  },
  {
    id: "aero-display",
    slug: "aero-display",
    name: "Aero Series Display",
    description: "Ultra-lightweight transparent LED display for architectural and retail environments.",
    price: 850,
    image_url: "/products/display-2.png",
    category: "display",
    featured: true,
    specs: {
      PixelPitch: "2.5mm",
      Brightness: "4500 nits",
      Transparency: "65%"
    }
  },
  {
    id: "titan-display",
    slug: "titan-display",
    name: "Titan Outdoor LED",
    description: "Rugged, weatherproof LED panels designed for extreme conditions.",
    price: 1100,
    image_url: "/products/display-1.png",
    category: "display",
    featured: false,
    specs: {
      PixelPitch: "4.8mm",
      Brightness: "7000 nits",
      IPRating: "IP65"
    }
  },
  {
    id: "flex-display",
    slug: "flex-display",
    name: "Flex Curve Display",
    description: "Flexible LED modules for creating seamless curved and cylindrical screens.",
    price: 1350,
    image_url: "/products/display-3.png",
    category: "display",
    featured: false,
    specs: {
      PixelPitch: "1.9mm",
      CurveRadius: "Up to 500mm",
      RefreshRate: "3840Hz"
    }
  },
  {
    id: "nexus-controller",
    slug: "nexus-controller",
    name: "Nexus Smart Controller",
    description: "Cloud-native fleet management and diagnostics for global LED networks.",
    price: 3400,
    image_url: "/products/controller-1.png",
    category: "controller",
    featured: true,
    specs: {
      Connectivity: "5G / Wi-Fi 6",
      Management: "Cloud Portal",
      Redundancy: "Active-Active"
    }
  }
];

export async function fetchProducts(category = null) {
  try {
    const supabase = await createClient();
    
    let query = supabase.from('products').select('*');
    if (category) {
      query = query.eq('category', category);
    }
    
    const { data, error } = await query.order('created_at', { ascending: false });
    
    if (error || !data || data.length === 0) {
      console.warn('Using mock products due to database error or empty state.');
      return category ? mockProducts.filter(p => p.category === category) : mockProducts;
    }
    
    return data;
  } catch (error) {
    console.warn('Caught error fetching products, using mock data.');
    return category ? mockProducts.filter(p => p.category === category) : mockProducts;
  }
}

export async function getProductBySlug(slug) {
  try {
    const supabase = await createClient();
    
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('slug', slug)
      .single();
      
    if (error || !data) {
      const mockProduct = mockProducts.find(p => p.slug === slug);
      if (mockProduct) return mockProduct;
      throw new Error('Product not found');
    }
    
    return data;
  } catch (error) {
    const mockProduct = mockProducts.find(p => p.slug === slug);
    if (mockProduct) return mockProduct;
    return null;
  }
}
