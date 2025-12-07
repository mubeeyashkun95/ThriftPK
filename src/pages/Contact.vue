<script setup lang="ts">
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  if (formData.value.name && formData.value.email && formData.value.message) {
    const message = `Name: ${formData.value.name}%0AEmail: ${formData.value.email}%0APhone: ${formData.value.phone}%0AMessage: ${formData.value.message}`
    window.open(`https://wa.me/923001234567?text=${message}`, '_blank')
    submitted.value = true
    setTimeout(() => {
      formData.value = { name: '', email: '', phone: '', message: '' }
      submitted.value = false
    }, 2000)
  }
}

const openWhatsApp = () => {
  window.open('https://wa.me/923001234567?text=Hi%20StepStyle%20Co!', '_blank')
}

const callPhone = () => {
  window.location.href = 'tel:+923001234567'
}

const sendEmail = () => {
  window.location.href = 'mailto:hello@stepstyle.pk'
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-black to-gray-900 text-white py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-black mb-4">Get in Touch</h1>
        <p class="text-xl text-gray-300">We'd love to hear from you. Reach out to us anytime!</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div>
          <h2 class="text-3xl font-black text-gray-900 mb-8">Contact Information</h2>

          <!-- Phone -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
              Phone
            </h3>
            <p class="text-gray-600 mb-2">+92 300 1234567</p>
            <button
              @click="callPhone"
              class="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
            >
              Call Us Now
            </button>
          </div>

          <!-- WhatsApp -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <svg class="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.861c0 2.719.738 5.358 2.14 7.696l-2.256 6.253 6.558-2.173c2.392 1.317 5.074 2.01 7.855 2.01 9.42 0 17.006-7.557 17.006-16.876 0-4.505-1.814-8.74-5.115-11.933-3.302-3.192-7.597-4.853-12.438-4.853z"
                />
              </svg>
              WhatsApp
            </h3>
            <p class="text-gray-600 mb-2">+92 300 1234567</p>
            <button
              @click="openWhatsApp"
              class="text-green-500 hover:text-green-600 font-semibold transition-colors"
            >
              Chat on WhatsApp
            </button>
          </div>

          <!-- Email -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
              Email
            </h3>
            <p class="text-gray-600 mb-2">hello@stepstyle.pk</p>
            <button
              @click="sendEmail"
              class="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
            >
              Send Email
            </button>
          </div>

          <!-- Location -->
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-3">
              <svg class="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                />
              </svg>
              Operating Hours
            </h3>
            <p class="text-gray-600">
              Monday - Friday: 9:00 AM - 6:00 PM PKT<br />
              Saturday: 10:00 AM - 4:00 PM PKT<br />
              Sunday: Closed
            </p>
          </div>

          <!-- Social Media -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
            <div class="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:shadow-lg transition-shadow"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"
                  />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:shadow-lg transition-shadow"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white hover:shadow-lg transition-shadow"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 2.31-4.64 2.86 2.86 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.01-.01z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div>
          <h2 class="text-3xl font-black text-gray-900 mb-8">Send us a Message</h2>

          <div
            v-if="submitted"
            class="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
          >
            ✓ Thank you! Your message has been sent. We'll get back to you soon!
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Name *</label>
              <input
                v-model="formData.name"
                type="text"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Email *</label>
              <input
                v-model="formData.email"
                type="email"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            <!-- Phone -->
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Phone</label>
              <input
                v-model="formData.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="+92 300 1234567"
              />
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-bold text-gray-900 mb-2">Message *</label>
              <textarea
                v-model="formData.message"
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                placeholder="Your message here..."
                required
              />
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19.5 1h-15C3.1 1 2 2.1 2 3.5v17C2 21.9 3.1 23 4.5 23h15c1.4 0 2.5-1.1 2.5-2.5v-17C22 2.1 20.9 1 19.5 1zm-4 21h-7v-1h7v1zm4-4H4V4h15.5v14z"
                />
              </svg>
              Send via WhatsApp
            </button>
          </form>

          <p class="text-center text-gray-600 text-sm mt-6">
            Or call us directly at <strong>+92 300 1234567</strong>
          </p>
        </div>
      </div>
    </div>

    <!-- FAQ Section -->
    <section class="bg-gray-50 py-16 px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-black text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        <div class="space-y-4">
          <details class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <summary
              class="cursor-pointer flex items-center justify-between font-bold text-gray-900"
            >
              How long does shipping take?
              <span class="ml-4">+</span>
            </summary>
            <p class="text-gray-600 mt-4">
              We deliver within 2-3 days across Pakistan. Shipping is completely free!
            </p>
          </details>

          <details class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <summary
              class="cursor-pointer flex items-center justify-between font-bold text-gray-900"
            >
              What is your return policy?
              <span class="ml-4">+</span>
            </summary>
            <p class="text-gray-600 mt-4">
              We offer a 7-day return policy. If you're not satisfied, simply return the shoes for a
              full refund.
            </p>
          </details>

          <details class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <summary
              class="cursor-pointer flex items-center justify-between font-bold text-gray-900"
            >
              Do you accept Cash on Delivery?
              <span class="ml-4">+</span>
            </summary>
            <p class="text-gray-600 mt-4">
              Yes! Cash on Delivery (COD) is available for all orders within Pakistan.
            </p>
          </details>

          <details class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <summary
              class="cursor-pointer flex items-center justify-between font-bold text-gray-900"
            >
              How do I know my shoe size?
              <span class="ml-4">+</span>
            </summary>
            <p class="text-gray-600 mt-4">
              Refer to our size guide on each product page or contact us on WhatsApp for
              personalized assistance.
            </p>
          </details>

          <details class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <summary
              class="cursor-pointer flex items-center justify-between font-bold text-gray-900"
            >
              Are your shoes original?
              <span class="ml-4">+</span>
            </summary>
            <p class="text-gray-600 mt-4">
              Absolutely! All our products are 100% original and authentic. We guarantee the highest
              quality.
            </p>
          </details>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
