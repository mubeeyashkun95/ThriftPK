<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import { getTrendingProducts, getCategories, products } from '@/data/products'
import { reviews } from '@/data/reviews'

const trendingProducts = getTrendingProducts(8) // Show 8 for better grid
const categories = getCategories()
const currentReviewIndex = ref(0)

// Review carousel
const nextReview = () => {
  currentReviewIndex.value = (currentReviewIndex.value + 1) % reviews.length
}
const prevReview = () => {
  currentReviewIndex.value = (currentReviewIndex.value - 1 + reviews.length) % reviews.length
}

// WhatsApp
const openWhatsApp = () => {
  window.open('https://wa.me/923001234567?text=Hi%20StepStyle%20Co!%20I%20saw%20your%20amazing%20collection%20', '_blank')
}

// Fake add to cart (replace with real cart later)
const handleAddToCart = (product: any) => {
  alert(`${product.name} added to cart!`)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      <div class="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40"
        style="background-image: url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1920&h=1080&fit=crop');">
      </div>
    </section>

    <!-- Trending Now – Premium Dark Nike Style -->
<section class="relative px-6 overflow-hidden bg-black py-28">
  <!-- Epic glowing background orbs -->
  <div class="absolute -translate-x-1/2 rounded-full top-20 left-1/2 w-96 h-96 bg-cyan-500 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
  <div class="absolute delay-700 bg-blue-600 rounded-full bottom-10 left-20 w-80 h-80 mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
  <div class="absolute delay-1000 bg-purple-600 rounded-full top-40 right-20 w-72 h-72 mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>

  <div class="relative mx-auto text-center max-w-7xl">
    <!-- Heading -->
    <h2 class="mb-4 text-5xl font-black tracking-tighter text-white md:text-7xl">
      Trending <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400">Right Now</span>
    </h2>
    <p class="mb-16 text-xl font-medium text-gray-300">
      The hottest Nike drops Pakistan is obsessing over
    </p>

    <!-- Product Grid -->
    <div class="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard
        v-for="product in trendingProducts"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
        class="group"
      />
    </div>

    <!-- View All Button – Premium Glow -->
    <div class="mt-20">
      <router-link
        to="/shop"
        class="relative inline-flex items-center gap-4 px-12 py-6 text-xl font-bold text-white transition-all duration-500 rounded-full shadow-2xl group bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/50 hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
      >
        <span>View All Drops</span>
        <svg class="transition-transform w-7 h-7 group-hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
        <!-- Shine effect -->
        <div class="absolute inset-0 transition-opacity duration-700 bg-white rounded-full opacity-0 group-hover:opacity-20"></div>
      </router-link>
    </div>

    <!-- Live badge (optional fire touch) -->
    <div class="flex items-center justify-center gap-3 mt-10">
      <span class="relative flex w-4 h-4">
        <span class="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"></span>
        <span class="relative inline-flex w-4 h-4 bg-red-500 rounded-full"></span>
      </span>
      <p class="text-sm font-medium text-gray-400">Live • Updated every hour</p>
    </div>
  </div>
</section>


    <!-- Shop by Category – Premium Dark Nike Style -->
    <section class="relative px-6 overflow-hidden bg-black py-15">
      <!-- Background glow orbs (same as other dark sections) -->
      <div
        class="absolute rounded-full top-10 -left-32 w-96 h-96 bg-cyan-500 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse">
      </div>
      <div
        class="absolute delay-1000 bg-blue-600 rounded-full bottom-10 -right-32 w-80 h-80 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse">
      </div>

      <div class="relative mx-auto text-center max-w-7xl">
        <h2 class="mb-4 text-5xl font-black tracking-tighter text-white md:text-7xl">
          Shop Nike by Style
        </h2>
        <p class="mb-16 text-xl font-medium text-gray-300">
          Choose your vibe — all 100% authentic
        </p>

        <!-- Category Grid -->
        <div class="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <router-link v-for="category in categories" :key="category" :to="`/shop?category=${category}`"
            class="group relative overflow-hidden rounded-3xl aspect-[4/3] bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105">
            <!-- Nike Shoe Image -->
            <img :src="getCategoryImage(category)" alt=""
              class="object-contain w-full h-full p-12 transition-transform duration-1000 group-hover:scale-125 group-hover:rotate-3">

            <!-- Dark overlay + text -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8 text-left">
              <h3 class="text-3xl font-black tracking-tight text-white drop-shadow-2xl">
                {{ category }}
              </h3>
              <p
                class="mt-1 text-lg font-medium transition-opacity duration-300 opacity-0 text-cyan-300 group-hover:opacity-100">
                Nike {{ category }} →
              </p>
            </div>

            <!-- Subtle shine effect on hover -->
            <div class="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100">
              <div class="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
            </div>
          </router-link>
        </div>

        <!-- Optional tagline -->
        <p class="mt-16 text-lg font-medium text-gray-400">
          Fresh drops • Limited stock • Pakistan-wide delivery
        </p>
      </div>
    </section>


    <!-- Why Choose StepStyle – Premium Dark Nike Style -->
    <section class="relative px-6 py-24 overflow-hidden text-center bg-black">
      <!-- Background glow orbs (consistent with Reviews & CTA) -->
      <div
        class="absolute top-0 rounded-full -left-40 w-96 h-96 bg-cyan-500 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse">
      </div>
      <div
        class="absolute bottom-0 delay-700 bg-blue-600 rounded-full -right-40 w-80 h-80 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse">
      </div>

      <div class="relative mx-auto max-w-7xl">
        <h2 class="mb-16 text-5xl font-black tracking-tighter text-white md:text-7xl">
          Why Choose <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">StepStyle?</span>
        </h2>

        <!-- Feature Cards Grid -->
        <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
          <!-- Card 1: 7-Day Return -->
          <div
            class="relative p-10 transition-all duration-500 border group rounded-3xl bg-white/5 backdrop-blur-xl border-white/10 hover:border-cyan-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
            <div class="mb-6 text-6xl">7-Day Return</div>
            <p class="text-xl font-bold text-cyan-300">Easy & Hassle-Free Returns</p>
            <div
              class="absolute inset-0 transition-opacity opacity-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-transparent group-hover:opacity-100">
            </div>
          </div>

          <!-- Card 2: Cash on Delivery -->
          <div
            class="relative p-10 transition-all duration-500 border group rounded-3xl bg-white/5 backdrop-blur-xl border-white/10 hover:border-green-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
            <div class="mb-6 text-6xl">Cash on Delivery</div>
            <p class="text-xl font-bold text-green-400">Pay When You Receive</p>
            <div
              class="absolute inset-0 transition-opacity opacity-0 rounded-3xl bg-gradient-to-br from-green-500/10 to-transparent group-hover:opacity-100">
            </div>
          </div>

          <!-- Card 3: Original Quality -->
          <div
            class="relative p-10 transition-all duration-500 border group rounded-3xl bg-white/5 backdrop-blur-xl border-white/10 hover:border-purple-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div class="mb-6 text-6xl">Original Quality</div>
            <p class="text-xl font-bold text-purple-400">100% Authentic Nike</p>
            <div
              class="absolute inset-0 transition-opacity opacity-0 rounded-3xl bg-gradient-to-br from-purple-500/10 to-transparent group-hover:opacity-100">
            </div>
          </div>

          <!-- Card 4: Trusted -->
          <div
            class="relative p-10 transition-all duration-500 border group rounded-3xl bg-white/5 backdrop-blur-xl border-white/10 hover:border-orange-500/50 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
            <div class="mb-6 text-6xl">100K+ Customers</div>
            <p class="text-xl font-bold text-orange-400">Trusted Nationwide</p>
            <div
              class="absolute inset-0 transition-opacity opacity-0 rounded-3xl bg-gradient-to-br from-orange-500/10 to-transparent group-hover:opacity-100">
            </div>
          </div>
        </div>

        <!-- Trust line -->
        <p class="mt-16 text-lg font-medium text-gray-400">
          Serving sneaker lovers across Pakistan with love since 2020
        </p>
      </div>
    </section>

    
    <!-- Customer Reviews – Premium Dark Nike Style -->
    <section class="relative px-6 py-24 overflow-hidden text-center bg-black">
      <!-- Background glow orbs (same as CTA) -->
      <div
        class="absolute rounded-full top-20 left-10 w-80 h-80 bg-cyan-500 mix-blend-multiply filter blur-3xl opacity-10 animate-pulse">
      </div>
      <div
        class="absolute delay-700 bg-blue-600 rounded-full bottom-20 right-10 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-10 animate-pulse">
      </div>

      <div class="relative max-w-5xl mx-auto">
        <h2 class="mb-16 text-5xl font-black tracking-tighter text-white md:text-7xl">
          Loved by <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">100,000+</span> Customers
        </h2>

        <!-- Review Card – Glassmorphism + Glow -->
        <div class="relative p-10 border shadow-2xl md:p-16 bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl">
          <!-- Optional: subtle inner glow -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10"></div>

          <div class="relative">
            <!-- Customer Photo -->
            <img :src="reviews[currentReviewIndex].image"
              class="object-cover mx-auto mb-6 rounded-full shadow-2xl w-28 h-28 ring-4 ring-cyan-500/50">

            <!-- Name & Product -->
            <h3 class="text-2xl font-bold text-white">{{ reviews[currentReviewIndex].name }}</h3>
            <p class="mt-2 text-lg font-medium text-cyan-300">{{ reviews[currentReviewIndex].product }}</p>

            <!-- Stars -->
            <div class="flex justify-center gap-1 my-6 text-3xl text-yellow-400">
              <span v-for="i in 5" :key="i">★</span>
            </div>

            <!-- Review Text -->
            <p class="max-w-3xl mx-auto text-xl italic leading-relaxed text-gray-200 md:text-2xl">
              "{{ reviews[currentReviewIndex].text }}"
            </p>

            <!-- Navigation Controls -->
            <div class="flex items-center justify-center gap-8 mt-12">
              <button @click="prevReview"
                class="p-4 text-white transition-all border rounded-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-110">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <!-- Dots Indicator -->
              <div class="flex gap-3">
                <button v-for="(r, i) in reviews" :key="i" @click="currentReviewIndex = i"
                  class="transition-all duration-300 rounded-full"
                  :class="currentReviewIndex === i ? 'w-12 h-3 bg-cyan-400' : 'w-3 h-3 bg-white/30'" />
              </div>

              <button @click="nextReview"
                class="p-4 text-white transition-all border rounded-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-110">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <!-- Trust counter -->
            <p class="mt-10 text-sm font-medium text-gray-400">
              Verified Purchase • Pakistan • {{ "Reviewed " + new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric' })}}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA – Premium Dark Nike Style -->
    <section class="relative px-6 py-24 overflow-hidden text-center bg-black">
      <!-- Subtle gradient overlay + floating particles effect -->
      <div class="absolute inset-0 opacity-60">
        <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-600/10"></div>
      </div>

      <!-- Animated background glow (optional but looks insane) -->
      <div
        class="absolute rounded-full -top-40 -left-40 w-96 h-96 bg-cyan-500 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse">
      </div>
      <div
        class="absolute delay-1000 bg-blue-600 rounded-full -bottom-40 -right-40 w-96 h-96 mix-blend-multiply filter blur-3xl opacity-20 animate-pulse">
      </div>

      <div class="relative max-w-5xl mx-auto">
        <!-- Main Heading -->
        <h2 class="mb-6 text-5xl font-black tracking-tighter text-white md:text-7xl">
          Level Up Your Game
          <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-500">
            With Nike
          </span>
        </h2>

        <p class="mb-12 text-xl font-medium text-gray-300 md:text-2xl">
          Join <span class="font-bold text-cyan-400">100,000+</span> sneakerheads who already stepped up
        </p>

        <!-- Buttons – Premium Style -->
        <div class="flex flex-col items-center justify-center gap-6 md:flex-row">
          <!-- Shop Now Button (White → Cyan glow) -->
          <router-link to="/shop"
            class="relative inline-flex items-center gap-3 px-12 py-6 text-xl font-bold text-black transition-all duration-300 bg-white rounded-full shadow-2xl group hover:shadow-cyan-500/50 hover:-translate-y-1">
            <span>Shop Full Collection</span>
            <svg class="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor"
              viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </router-link>

          <!-- WhatsApp Button (Green → Dark with glow) -->
          <button @click="openWhatsApp"
            class="relative flex items-center justify-center gap-4 px-12 py-6 text-xl font-bold text-white transition-all duration-300 rounded-full shadow-2xl group bg-gradient-to-r from-green-600 to-emerald-600 hover:shadow-green-500/50 hover:-translate-y-1">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.861c0 2.719.738 5.358 2.14 7.696l-2.256 6.253 6.558-2.173c2.392 1.317 5.074 2.01 7.855 2.01 9.42 0 17.006-7.557 17.006-16.876 0-4.505-1.814-8.74-5.115-11.933-3.302-3.192-7.597-4.853-12.438-4.853z" />
            </svg>
            <span>Order Now on WhatsApp</span>
            <span
              class="absolute inset-0 transition-opacity bg-white rounded-full opacity-0 group-hover:opacity-20"></span>
          </button>
        </div>

        <!-- Trust badge -->
        <p class="mt-12 text-sm font-medium text-gray-400">
          Free Delivery • Cash on Delivery • 7-Day Returns • 100% Original
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
function getCategoryImage(category: string): string {
  const map: Record<string, string> = {
    Sneakers: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    Formal: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    Casual: 'https://images.unsplash.com/photo-1562183241-b937e1de65e4?w=800&h=600&fit=crop',
    Sports: 'https://images.unsplash.com/photo-1469395446860-7b3d4c373347?w=800&h=600&fit=crop',
  }
  return map[category] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop'
}
</script>