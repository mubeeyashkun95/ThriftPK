<script setup lang="ts">
const openWhatsApp = () => {
  window.open('https://wa.me/923001234567?text=Hi%20StepStyle%20Co!', '_blank')
}

const callPhone = () => {
  window.location.href = 'tel:+923001234567'
}
</script>

<template>
  <footer class="py-12 text-white bg-black">
    <div class="px-4 mx-auto max-w-7xl md:px-8">
      <div class="grid grid-cols-1 gap-8 mb-8 md:grid-cols-4">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4 text-2xl font-bold">
            <img src="/src/assets/logo2.png" class="w-20" alt="">
          </div>
          <p class="text-sm text-gray-400"></p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 text-lg font-bold">Quick Links</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>
              <router-link to="/shop" class="transition-colors hover:text-blue-500"
                >Shop</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="transition-colors hover:text-blue-500"
                >About Us</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="transition-colors hover:text-blue-500"
                >Contact</router-link
              >
            </li>
            <li>
              <a href="#" class="transition-colors hover:text-blue-500">Returns</a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="mb-4 text-lg font-bold">Contact</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.5 1h-15C3.1 1 2 2.1 2 3.5v17C2 21.9 3.1 23 4.5 23h15c1.4 0 2.5-1.1 2.5-2.5v-17C22 2.1 20.9 1 19.5 1zm-4 21h-7v-1h7v1zm4-4H4V4h15.5v14z"
                />
              </svg>
              <span>Pakistan & India</span>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
              <button @click="callPhone" class="transition-colors hover:text-blue-500">
                +92 300 1234567
              </button>
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              <a href="mailto:hello@stepstyle.pk" class="transition-colors hover:text-blue-500"
                >Thrift.pk@gmail.com</a
              >
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h3 class="mb-4 text-lg font-bold">Follow Us</h3>
          <div class="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              class="inline-flex items-center justify-center w-10 h-10 transition-colors bg-gray-900 rounded-full hover:bg-blue-500"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"
                />
              </svg>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              class="inline-flex items-center justify-center w-10 h-10 transition-colors bg-gray-900 rounded-full hover:bg-blue-500"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              class="inline-flex items-center justify-center w-10 h-10 transition-colors bg-gray-900 rounded-full hover:bg-blue-500"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.01-.01z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="pt-8 text-sm text-center text-gray-400 border-t border-gray-800">
        <p>Made with Vue Js | © 2025 ThrifPK Co. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
