<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import { getProductById, products, getProductsByCategory } from '@/data/products'

const route = useRoute()
const router = useRouter()
const selectedColor = ref<string>('')
const selectedSize = ref<number | null>(null)
const currentImageIndex = ref(0)

const product = computed(() => {
  const id = parseInt(route.params.id as string)
  return getProductById(id)
})

const relatedProducts = computed(() => {
  if (!product.value) return []
  return getProductsByCategory(product.value.category)
    .filter((p) => p.id !== product.value!.id)
    .slice(0, 3)
})

const mainImage = computed(() => {
  if (!product.value) return ''
  const images = product.value.images || [product.value.image]
  return images[currentImageIndex.value] || product.value.image
})

const addToCart = () => {
  if (!product.value) return
  const colorText = selectedColor.value ? ` in ${selectedColor.value}` : ''
  const sizeText = selectedSize.value ? ` Size ${selectedSize.value}` : ''
  const message = `Hi! I want to order the ${product.value.name}${colorText}${sizeText}. Price: Rs. ${product.value.price}`
  window.open(`https://wa.me/923001234567?text=${encodeURIComponent(message)}`, '_blank')
}

const buyNow = () => {
  addToCart()
}

const nextImage = () => {
  if (!product.value) return
  const images = product.value.images || [product.value.image]
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const prevImage = () => {
  if (!product.value) return
  const images = product.value.images || [product.value.image]
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length
}

const callPhone = () => {
  window.location.href = 'tel:+923001234567'
}
</script>

<template>
  <div v-if="product" class="min-h-screen bg-white">
    <!-- Breadcrumb -->
    <div class="max-w-7xl mx-auto px-4 py-4">
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <router-link to="/" class="hover:text-blue-500">Home</router-link>
        <span>/</span>
        <router-link to="/shop" class="hover:text-blue-500">Shop</router-link>
        <span>/</span>
        <router-link :to="`/shop?category=${product.category}`" class="hover:text-blue-500">
          {{ product.category }}
        </router-link>
        <span>/</span>
        <span class="text-gray-900 font-semibold">{{ product.name }}</span>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Image Gallery -->
        <div>
          <div class="relative bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img :src="mainImage" :alt="product.name" class="w-full h-96 object-cover" />
            <button
              @click="prevImage"
              class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              @click="nextImage"
              class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition-colors"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <!-- Thumbnail Gallery -->
          <div v-if="product.images && product.images.length > 1" class="grid grid-cols-4 gap-2">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              @click="currentImageIndex = index"
              :class="[
                'border-2 rounded-lg overflow-hidden transition-colors',
                currentImageIndex === index ? 'border-blue-500' : 'border-gray-300',
              ]"
            >
              <img
                :src="image"
                :alt="`${product.name} view ${index + 1}`"
                class="w-full h-20 object-cover"
              />
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div>
          <!-- Badge -->
          <div v-if="product.badge" class="mb-4">
            <span
              v-if="product.badge === 'Hot'"
              class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold"
            >
              🔥 Hot Item
            </span>
            <span
              v-else-if="product.badge === 'New'"
              class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold"
            >
              ⭐ New
            </span>
          </div>

          <!-- Category -->
          <p class="text-gray-600 uppercase text-sm mb-2 font-semibold">{{ product.category }}</p>

          <!-- Name -->
          <h1 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">{{ product.name }}</h1>

          <!-- Rating -->
          <div class="flex items-center gap-2 mb-6">
            <div class="flex gap-1">
              <span v-for="i in 5" :key="i" class="text-yellow-400">★</span>
            </div>
            <span class="text-gray-600 text-sm">(128 reviews)</span>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <div class="flex items-center gap-4">
              <span class="text-4xl font-black text-gray-900"
                >Rs. {{ product.price.toLocaleString() }}</span
              >
              <span v-if="product.originalPrice" class="text-2xl text-gray-400 line-through">
                Rs. {{ product.originalPrice.toLocaleString() }}
              </span>
            </div>
            <p v-if="product.discount" class="text-red-500 font-bold mt-2">
              Save Rs. {{ (product.originalPrice! - product.price).toLocaleString() }} (-{{
                product.discount
              }}%)
            </p>
          </div>

          <!-- Color Selection -->
          <div class="mb-6">
            <label class="block text-sm font-bold text-gray-900 mb-3">Color</label>
            <div class="flex gap-3">
              <button
                v-for="color in product.colors"
                :key="color"
                @click="selectedColor = color"
                :class="[
                  'px-4 py-2 rounded-lg border-2 font-semibold transition-all',
                  selectedColor === color
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 text-gray-700 hover:border-blue-300',
                ]"
              >
                {{ color }}
              </button>
            </div>
          </div>

          <!-- Size Selection -->
          <div class="mb-8">
            <label class="block text-sm font-bold text-gray-900 mb-3">Size</label>
            <div class="grid grid-cols-4 gap-3">
              <button
                v-for="size in product.sizes"
                :key="size"
                @click="selectedSize = size"
                :class="[
                  'px-4 py-3 rounded-lg border-2 font-semibold transition-all text-center',
                  selectedSize === size
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-300 text-gray-700 hover:border-blue-300',
                ]"
              >
                {{ size }}
              </button>
            </div>
          </div>

          <!-- Buttons -->
          <div class="space-y-3 mb-8">
            <button
              @click="addToCart"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.5 1h-15C3.1 1 2 2.1 2 3.5v17C2 21.9 3.1 23 4.5 23h15c1.4 0 2.5-1.1 2.5-2.5v-17C22 2.1 20.9 1 19.5 1zm-4 21h-7v-1h7v1zm4-4H4V4h15.5v14z"
                />
              </svg>
              Add to Cart (WhatsApp)
            </button>
            <button
              @click="buyNow"
              class="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition-colors"
            >
              Buy Now
            </button>
            <button
              @click="callPhone"
              class="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
              Call Us
            </button>
          </div>

          <!-- Info -->
          <div class="space-y-3 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              7-Day Return Policy
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Cash on Delivery Available
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              Free Shipping All Pakistan
            </div>
          </div>
        </div>
      </div>

      <!-- Description & How to Style -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Description</h2>
          <p class="text-gray-700 mb-4">{{ product.description }}</p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-3">
              <span class="text-blue-500 font-bold mt-1">✓</span>
              <span>Premium quality materials and construction</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-blue-500 font-bold mt-1">✓</span>
              <span>Comfortable fit for all-day wear</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-blue-500 font-bold mt-1">✓</span>
              <span>Available in multiple colors and sizes</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-blue-500 font-bold mt-1">✓</span>
              <span>Perfect for any occasion</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">How to Style</h2>
          <ul class="space-y-4 text-gray-700">
            <li class="flex gap-4">
              <span class="text-blue-500 font-bold text-lg">1</span>
              <div>
                <p class="font-semibold">Casual Look</p>
                <p class="text-sm text-gray-600">
                  Pair with jeans and a basic t-shirt for a timeless casual vibe
                </p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="text-blue-500 font-bold text-lg">2</span>
              <div>
                <p class="font-semibold">Formal Occasion</p>
                <p class="text-sm text-gray-600">
                  Match with traditional or formal wear for special events
                </p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="text-blue-500 font-bold text-lg">3</span>
              <div>
                <p class="font-semibold">Street Style</p>
                <p class="text-sm text-gray-600">
                  Combine with trendy outfits for a modern, fashionable look
                </p>
              </div>
            </li>
            <li class="flex gap-4">
              <span class="text-blue-500 font-bold text-lg">4</span>
              <div>
                <p class="font-semibold">Active Wear</p>
                <p class="text-sm text-gray-600">Perfect for gym, sports, and fitness activities</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Related Products -->
      <div v-if="relatedProducts.length > 0" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Related Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="p in relatedProducts" :key="p.id" :product="p" />
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
      <router-link
        to="/shop"
        class="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors"
      >
        Back to Shop
      </router-link>
    </div>
  </div>
</template>

<style scoped></style>
