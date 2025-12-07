<script setup lang="ts">
const openWhatsApp = () => {
  window.open(
    'https://wa.me/923001234567?text=Hi%20StepStyle%20Co!%20I%20want%20to%20know%20more%20about%20your%20products.',
    '_blank',
  )
}
</script>

<template>
  <button
    @click="openWhatsApp"
    class="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
    title="Chat with us on WhatsApp"
  >
    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.861c0 2.719.738 5.358 2.14 7.696l-2.256 6.253 6.558-2.173c2.392 1.317 5.074 2.01 7.855 2.01 9.42 0 17.006-7.557 17.006-16.876 0-4.505-1.814-8.74-5.115-11.933-3.302-3.192-7.597-4.853-12.438-4.853z"
      />
    </svg>
    <span
      class="absolute -top-12 right-0 bg-gray-900 text-white text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
    >
      Chat with us!
    </span>
  </button>
</template>

<style scoped></style>
