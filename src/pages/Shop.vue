<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import { products, getCategories } from '@/data/products'

const route = useRoute()
const categories = getCategories()

const selectedCategory = computed(() => {
  return (route.query.category as string) || 'All'
})

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'All') {
    return products
  }
  return products.filter((p) => p.category === selectedCategory.value)
})

const priceSort = computed(() => {
  return (route.query.sort as string) || 'featured'
})

const sortedProducts = computed(() => {
  const sorted = [...filteredProducts.value]
  if (priceSort.value === 'low-to-high') {
    return sorted.sort((a, b) => a.price - b.price)
  } else if (priceSort.value === 'high-to-low') {
    return sorted.sort((a, b) => b.price - a.price)
  }
  return sorted
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <div class="bg-gradient-to-r from-black to-gray-900 text-white py-8 px-4">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-black mb-2">Shop</h1>
        <p class="text-lg text-gray-300">Discover our complete collection of premium shoes</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <!-- Sidebar Filters -->
        <div class="lg:col-span-1">
          <div class="bg-gray-50 rounded-lg p-6">
            <h2 class="text-xl font-bold text-gray-900 mb-6">Filters</h2>

            <!-- Category Filter -->
            <div class="mb-8">
              <h3 class="font-bold text-gray-900 mb-4">Category</h3>
              <div class="space-y-3">
                <router-link
                  to="/shop"
                  :class="[
                    'block px-4 py-2 rounded-lg transition-colors',
                    selectedCategory === 'All'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200',
                  ]"
                >
                  All
                </router-link>
                <router-link
                  v-for="category in categories"
                  :key="category"
                  :to="`/shop?category=${category}`"
                  :class="[
                    'block px-4 py-2 rounded-lg transition-colors',
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200',
                  ]"
                >
                  {{ category }}
                </router-link>
              </div>
            </div>

            <!-- Sort Filter -->
            <div>
              <h3 class="font-bold text-gray-900 mb-4">Sort By</h3>
              <div class="space-y-3">
                <router-link
                  to="/shop"
                  :class="[
                    'block px-4 py-2 rounded-lg transition-colors',
                    priceSort === 'featured'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200',
                  ]"
                >
                  Featured
                </router-link>
                <router-link
                  to="/shop?sort=low-to-high"
                  :class="[
                    'block px-4 py-2 rounded-lg transition-colors',
                    priceSort === 'low-to-high'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200',
                  ]"
                >
                  Price: Low to High
                </router-link>
                <router-link
                  to="/shop?sort=high-to-low"
                  :class="[
                    'block px-4 py-2 rounded-lg transition-colors',
                    priceSort === 'high-to-low'
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-700 hover:bg-gray-200',
                  ]"
                >
                  Price: High to Low
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="lg:col-span-3">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">
              {{ selectedCategory === 'All' ? 'All Shoes' : selectedCategory }}
            </h2>
            <p class="text-gray-600">{{ sortedProducts.length }} products</p>
          </div>

          <div
            v-if="sortedProducts.length > 0"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <ProductCard v-for="product in sortedProducts" :key="product.id" :product="product" />
          </div>

          <div v-else class="text-center py-12">
            <p class="text-gray-600 text-lg">No products found in this category.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
