export interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  colors: string[]
  sizes: number[]
  description: string
  badge?: 'Hot' | 'Sold Out' | 'New'
  discount?: number
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Urban Black Sneakers',
    category: 'Sneakers',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511886642985-c7e8e229a992?w=600&h=600&fit=crop',
    ],
    colors: ['Black', 'White', 'Gray'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description:
      'Premium black sneakers crafted with genuine leather upper and cushioned sole. Perfect for everyday wear with a modern, sleek design.',
    badge: 'Hot',
    discount: 37,
  },
  {
    id: 2,
    name: 'Golden Formal Shoes',
    category: 'Formal',
    price: 3999,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1543163521-9efccb4a3562?w=600&h=600&fit=crop',
    ],
    colors: ['Black', 'Brown', 'Tan'],
    sizes: [6, 7, 8, 9, 10, 11],
    description:
      'Elegant formal shoes perfect for weddings and special occasions. Made with premium leather and traditional Pakistani craftsmanship.',
    discount: 27,
  },
  {
    id: 3,
    name: 'Casual Khaki Loafers',
    category: 'Casual',
    price: 2199,
    originalPrice: 3599,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1514293713666-3a72c7db4dd0?w=600&h=600&fit=crop',
    ],
    colors: ['Khaki', 'Brown', 'Cream'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description:
      'Comfortable and versatile loafers ideal for casual outings. Lightweight with arch support for all-day comfort.',
    badge: 'New',
  },
  {
    id: 4,
    name: 'Sports Running Shoes',
    category: 'Sports',
    price: 3299,
    originalPrice: 4899,
    image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    ],
    colors: ['Black', 'Red', 'White'],
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    description:
      'High-performance running shoes with advanced cushioning technology. Perfect for athletes and fitness enthusiasts.',
    discount: 33,
  },
  {
    id: 5,
    name: 'Classic Leather Jutti',
    category: 'Formal',
    price: 1999,
    originalPrice: 3299,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1511886642985-c7e8e229a992?w=600&h=600&fit=crop',
    ],
    colors: ['Gold', 'Silver', 'Black'],
    sizes: [6, 7, 8, 9, 10, 11],
    description:
      'Traditional Pakistani Jutti with embroidered details. Perfect for weddings and festive occasions. Handcrafted quality.',
  },
  {
    id: 6,
    name: 'Beach Casual Sandals',
    category: 'Casual',
    price: 899,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
    ],
    colors: ['Black', 'White', 'Navy'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description:
      'Lightweight and comfortable sandals perfect for beach and casual outings. Water-resistant material.',
    badge: 'Hot',
  },
  {
    id: 7,
    name: 'Premium White Canvas',
    category: 'Sneakers',
    price: 2899,
    originalPrice: 4299,
    image: 'https://images.unsplash.com/photo-1616694337950-ab60908a64f0?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1616694337950-ab60908a64f0?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    ],
    colors: ['White', 'Off-White', 'Cream'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description:
      'Classic white canvas sneakers with premium quality. Versatile and timeless design suitable for all occasions.',
    discount: 33,
  },
  {
    id: 8,
    name: 'Elegant Pink Heels',
    category: 'Formal',
    price: 4499,
    originalPrice: 6999,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=600&fit=crop',
    ],
    colors: ['Pink', 'Red', 'Gold'],
    sizes: [5, 6, 7, 8, 9, 10],
    description:
      'Stunning pink heels with elegant design. Perfect for weddings, parties, and special celebrations. Premium finish.',
    discount: 35,
  },
  {
    id: 9,
    name: 'Casual Brown Boots',
    category: 'Casual',
    price: 3599,
    originalPrice: 5499,
    image: 'https://images.unsplash.com/photo-1574368915700-6a0be3b04b02?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1574368915700-6a0be3b04b02?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=600&h=600&fit=crop',
    ],
    colors: ['Brown', 'Black', 'Tan'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description:
      'Versatile brown boots suitable for casual and semi-formal occasions. Comfortable with excellent durability.',
    badge: 'New',
    discount: 35,
  },
  {
    id: 10,
    name: 'Athletic Blue Runners',
    category: 'Sports',
    price: 2999,
    originalPrice: 4499,
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
    ],
    colors: ['Blue', 'Black', 'White'],
    sizes: [6, 7, 8, 9, 10, 11, 12, 13],
    description:
      'Professional athletic shoes with advanced grip and support. Ideal for running, training, and sports activities.',
    discount: 33,
  },
  {
    id: 11,
    name: 'Luxury Leather Oxfords',
    category: 'Formal',
    price: 5999,
    originalPrice: 8999,
    image: 'https://images.unsplash.com/photo-1543163521-9efccb4a3562?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1543163521-9efccb4a3562?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    ],
    colors: ['Black', 'Brown', 'Oxblood'],
    sizes: [6, 7, 8, 9, 10, 11],
    description:
      'Premium leather oxfords with traditional craftsmanship. Perfect for business meetings and formal events.',
    badge: 'Hot',
    discount: 33,
  },
  {
    id: 12,
    name: 'Minimalist Gray Slip-ons',
    category: 'Casual',
    price: 1799,
    originalPrice: 2999,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&h=600&fit=crop',
    ],
    colors: ['Gray', 'Black', 'Charcoal'],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description:
      'Minimalist slip-on shoes for maximum comfort. Easy to wear for quick outings or daily commute.',
    discount: 40,
  },
  
]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export function getTrendingProducts(limit: number = 6): Product[] {
  return products.slice(0, limit)
}

export function getCategories(): string[] {
  return ['Sneakers', 'Formal', 'Casual', 'Sports']
}
