<script setup lang="ts">
import { ref, h } from 'vue'

// Fix: Properly type the icons object
const icons = {
  home: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    })
  ]),

  'shopping-bag': () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
    })
  ]),

  'information-circle': () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    })
  ]),

  'chat-bubble': () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
    h('path', {
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
    })
  ]),
} as const

// Fix: Add type-safe key lookup
type IconKey = keyof typeof icons

const mobileMenuOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/', icon: 'home' },
  { name: 'Shop', path: '/shop', icon: 'shopping-bag' },
  { name: 'About', path: '/about', icon: 'information-circle' },
  { name: 'Contact', path: '/contact', icon: 'chat-bubble' },
]

const openWhatsApp = () => {
  window.open('https://wa.me/923001234567?text=Hi%20StepStyle!%20I%20saw%20your%20amazing%20collection', '_blank')
}
</script>

<template>
  <header class="sticky top-0 z-50">
    <nav class="fixed top-0 left-0 right-0 z-50 border-b shadow-2xl border-white/10 bg-black/90 backdrop-blur-2xl">
  <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">

      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2 text-2xl font-bold transition-all hover:scale-105">
        <img src="/src/assets/logo2.png" class="w-20 drop-shadow-2xl" alt="">
      </router-link>

      <!-- Desktop Centered Menu – Clean & Premium -->
      <div class="absolute items-center hidden gap-12 -translate-x-1/2 left-1/2 md:flex">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="flex flex-col items-center gap-2 px-5 py-2 transition-all duration-300 group"
          :class="{ 'text-cyan-400': $route.path === item.path, 'text-gray-400 hover:text-cyan-300': $route.path !== item.path }"
          exact-active-class="text-cyan-400"
        >
          <!-- Icon -->
          <component :is="icons[item.icon as IconKey]""
            class="transition-all duration-300 w-7 h-7"
            :class="[
              $route.path === item.path 
                ? 'text-cyan-400 scale-125 drop-shadow-lg' 
                : 'text-gray-500 group-hover:text-cyan-300 group-hover:scale-110'
            ]"
          />

          <!-- Text Label -->
          <span
            class="text-xs font-semibold tracking-wider uppercase transition-all duration-300"
            :class="[
              $route.path === item.path 
                ? 'text-cyan-400 font-extrabold' 
                : 'text-gray-500 group-hover:text-gray-200'
            ]"
          >
            {{ item.name }}
          </span>

          <!-- Active Bar – Glowing Cyan (Nike-style) -->
          <span
            class="w-10 h-1 transition-all duration-500 origin-center scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
            :class="{ 'scale-x-100': $route.path === item.path, 'group-hover:scale-x-75 group-hover:opacity-70': $route.path !== item.path }"
          />
        </router-link>
      </div>

      <!-- Right Side -->
      <div class="flex items-center gap-4">
        <button
          @click="openWhatsApp"
          class="hidden items-center gap-2.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 font-bold text-white shadow-xl transition-all hover:from-green-600 hover:to-emerald-700 hover:scale-105 hover:shadow-green-500/50 md:flex"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.867 2.03-.967.272-.099.471-.148.67.15.197.297.767.966.94 1.164.173.199.347.223.644.075.297-.149 1.255-.463 2.39-1.475.883-.788 1.48-1.761 1.653-2.059.173-.297.018-.458-.13-.606-.134-.133-.298-.347-.446-.52-.149-.174-.198-.298-.298-.497-.099-.198-.05-.371.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01zM12 21.75c-5.385 0-9.75-4.365-9.75-9.75S6.615 2.25 12 2.25 21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
          </svg>
          Chat Now
        </button>

        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="p-2 text-gray-300 transition-all rounded-lg hover:bg-white/10 md:hidden"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>

    <!-- Mobile Menu -->
    <teleport to="body">
      <div v-if="mobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
        <div @click="mobileMenuOpen = false" class="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-x-full"
          enter-to-class="translate-x-0"
          leave-active-class="transition duration-300 ease-in"
          leave-from-class="translate-x-0"
          leave-to-class="translate-x-full"
        >
          <div v-if="mobileMenuOpen" class="absolute top-0 right-0 h-full border-l shadow-2xl w-80 bg-white/95 backdrop-blur-2xl border-white/30">
            <div class="flex flex-col items-center gap-8 pt-24 pb-12">
              <router-link
                v-for="item in menuItems"
                :key="item.path"
                :to="item.path"
                @click="mobileMenuOpen = false"
                class="flex items-center gap-5 text-xl font-semibold text-gray-800 transition hover:text-blue-600"
                :class="{ 'text-blue-600': $route.path === item.path }"
              >
                <component :is="icons[item.icon]" class="w-8 h-8 text-blue-600" />
                {{ item.name }}
              </router-link>

              <button
                @click="openWhatsApp(); mobileMenuOpen = false"
                class="w-3/4 py-4 mt-8 text-lg font-bold text-white transition shadow-xl rounded-2xl bg-gradient-to-r from-green-500 to-green-600 hover:scale-105"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </transition>
      </div>
    </teleport>
  </header>
</template>

<style scoped>
router-link {
  @apply transition-all duration-300;
}
</style>