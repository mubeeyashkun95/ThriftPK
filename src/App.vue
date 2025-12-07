<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import WhatsAppButton from '@/components/WhatsAppButton.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white">
    <Header />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
    <WhatsAppButton />
  </div>
</template>

<style scoped></style>
