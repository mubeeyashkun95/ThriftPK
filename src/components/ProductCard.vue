<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import type { Product } from '@/data/products'

const props = defineProps<{
  product: Product
}>()

const router = useRouter()

const addToCart = () => {
  const message = `Hi! I'm interested in the ${props.product.name} (Rs. ${props.product.price}). Can you help me with this order?`
  window.open(`https://wa.me/923001234567?text=${encodeURIComponent(message)}`, '_blank')
}

const viewProduct = () => {
  router.push(`/product/${props.product.id}`)
}

const discountPercentage = computed(() => {
  if (!props.product.originalPrice) return 0
  return Math.round(
    ((props.product.originalPrice - props.product.price) / props.product.originalPrice) * 100,
  )
})
</script>

<template>
  <div
    class="relative overflow-hidden transition-all duration-500 border bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl hover:scale-105 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/30"
  >
    <!-- Image -->
    <div class="relative h-64 overflow-hidden bg-gray-100 cursor-pointer" @click="viewProduct">
      <img
        :src="product.image"
        :alt="product.name"
        class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
      />
      <!-- Badge -->
      <div v-if="product.badge" class="absolute top-3 left-3">
        <span
          v-if="product.badge === 'Hot'"
          class="px-3 py-1 text-xs font-bold text-white bg-red-500 rounded-full"
        >
          🔥 Hot
        </span>
        <span
          v-else-if="product.badge === 'New'"
          class="px-3 py-1 text-xs font-bold text-white bg-blue-500 rounded-full"
        >
          ⭐ New
        </span>
        <span
          v-else-if="product.badge === 'Sold Out'"
          class="px-3 py-1 text-xs font-bold text-white bg-gray-500 rounded-full"
        >
          Sold Out
        </span>
      </div>
      <!-- Discount Badge -->
      <div
        v-if="discountPercentage > 0"
        class="absolute px-2 py-1 text-xs font-bold text-white bg-blue-500 rounded top-3 right-3"
      >
        -{{ discountPercentage }}%
      </div>
    </div>

    <!-- Content -->
    <div class="p-4">
      <!-- Category -->
      <p class="mb-1 text-xs tracking-wide text-gray-100 uppercase">{{ product.category }}</p>

      <!-- Name -->
      <h3 class="mb-2 text-lg font-bold text-gray-400 line-clamp-2">{{ product.name }}</h3>

      <!-- Price -->
      <div class="flex items-center gap-2 mb-3">
        <span class="text-xl font-bold text-gray-400"
          >Rs. {{ product.price.toLocaleString() }}</span
        >
        <span v-if="product.originalPrice" class="text-sm text-gray-400 line-through">
          Rs. {{ product.originalPrice.toLocaleString() }}
        </span>
      </div>

      <!-- Colors -->
      <div class="flex gap-2 mb-4">
        <div
          v-for="(color, index) in product.colors.slice(0, 3)"
          :key="index"
          class="w-5 h-5 border-2 border-gray-300 rounded-full"
          :style="{ backgroundColor: getColorHex(color) }"
          :title="color"
        />
        <span v-if="product.colors.length > 3" class="flex items-center text-xs text-gray-500">
          +{{ product.colors.length - 3 }}
        </span>
      </div>

      <!-- Buttons -->
      <div class="space-y-2">
        <button
          @click="viewProduct"
          class="w-full py-2 font-semibold text-gray-900 transition-colors bg-gray-200 rounded-lg hover:bg-gray-400"
        >
          View Details
        </button>
        <button
          @click="addToCart"
          class="flex items-center justify-center w-full gap-2 py-2 font-semibold text-white transition-colors bg-red-500 rounded-lg hover:bg-red-600"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M19.5 1h-15C3.1 1 2 2.1 2 3.5v17C2 21.9 3.1 23 4.5 23h15c1.4 0 2.5-1.1 2.5-2.5v-17C22 2.1 20.9 1 19.5 1zm-4 21h-7v-1h7v1zm4-4H4V4h15.5v14z"
            />
          </svg>
          WhatsApp
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
function getColorHex(colorName: string): string {
  const colors: Record<string, string> = {
    Black: '#000000',
    White: '#FFFFFF',
    Gray: '#808080',
    Charcoal: '#36454F',
    'Off-White': '#F5F5F5',
    Cream: '#FFFDD0',
    Khaki: '#C3B091',
    Brown: '#8B4513',
    Tan: '#D2B48C',
    Red: '#FF0000',
    Blue: '#0E90FF',
    Navy: '#000080',
    Gold: '#FFD700',
    Silver: '#C0C0C0',
    Pink: '#FFC0CB',
    Oxblood: '#800020',
  }
  return colors[colorName] || '#808080'
}
</script>

<style scoped></style>
