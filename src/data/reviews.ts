export interface Review {
  id: number
  name: string
  image: string
  rating: number
  text: string
  product: string
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Aisha Khan',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    text: "Best quality shoes I've ever bought! The Urban Black Sneakers are so comfortable. Highly recommend!",
    product: 'Urban Black Sneakers',
  },
  {
    id: 2,
    name: 'Muhammad Ali',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    text: 'The Golden Formal Shoes are perfect for my wedding. Great craftsmanship and amazing delivery service!',
    product: 'Golden Formal Shoes',
  },
  {
    id: 3,
    name: 'Fatima Ahmed',
    image: 'https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=100&h=100&fit=crop',
    rating: 5,
    text: 'These Elegant Pink Heels are absolutely stunning! Exactly as shown in pictures. Very satisfied!',
    product: 'Elegant Pink Heels',
  },
  {
    id: 4,
    name: 'Hassan Raza',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    text: 'The Classic Leather Jutti is a masterpiece. Perfect for traditional occasions. Worth every penny!',
    product: 'Classic Leather Jutti',
  },
]
