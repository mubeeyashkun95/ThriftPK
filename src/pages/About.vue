<script setup lang="ts">
const openWhatsApp = () => {
  window.open('https://wa.me/923001234567?text=Hi%20StepStyle%20Co!', '_blank')
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-black to-gray-900 text-white py-16 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl md:text-6xl font-black mb-4">About StepStyle Co.</h1>
        <p class="text-xl text-gray-300">
          Bringing quality footwear to Pakistan & India with style and affordability
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-16">
      <!-- Our Story -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-black text-gray-900 mb-6">Our Story</h2>
            <p class="text-gray-700 text-lg mb-4">
              StepStyle Co. was founded in 2020 with a simple mission: to make quality footwear
              accessible to everyone in Pakistan and India. We believe that great shoes shouldn't
              come with a hefty price tag.
            </p>
            <p class="text-gray-700 text-lg mb-4">
              What started as a small operation has grown into a trusted brand serving over 100,000
              happy customers. We're proud of every pair we sell and the smiles we create.
            </p>
            <p class="text-gray-700 text-lg">
              Today, we continue to expand our collection, improve our service, and stay true to our
              core values: quality, affordability, and exceptional customer care.
            </p>
          </div>
          <div class="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=600&h=600&fit=crop"
              alt="Our Team"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Mission & Vision -->
      <section class="mb-16">
        <h2 class="text-4xl font-black text-gray-900 mb-12 text-center">Our Mission & Vision</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p class="text-gray-700">
              To provide high-quality, stylish footwear at affordable prices to customers across
              Pakistan and India, with exceptional service and swift delivery.
            </p>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-lg">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p class="text-gray-700">
              To become the most trusted and loved footwear brand in South Asia, known for style,
              quality, and customer-first approach.
            </p>
          </div>
        </div>
      </section>

      <!-- Core Values -->
      <section class="mb-16">
        <h2 class="text-4xl font-black text-gray-900 mb-12 text-center">Our Core Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">✨</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Quality</h3>
            <p class="text-gray-600">We never compromise on the quality of our products</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">💰</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Affordability</h3>
            <p class="text-gray-600">Great shoes for everyone at reasonable prices</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Customer First</h3>
            <p class="text-gray-600">Your satisfaction is our top priority</p>
          </div>
          <div class="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
            <div class="text-4xl mb-4">🚀</div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
            <p class="text-gray-600">Constantly improving and bringing new styles</p>
          </div>
        </div>
      </section>

      <!-- Why Choose Us -->
      <section class="mb-16 bg-gradient-to-r from-black to-gray-900 text-white rounded-lg p-12">
        <h2 class="text-4xl font-black mb-12 text-center">Why Choose StepStyle Co.?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-2">Premium Quality Products</h3>
              <p class="text-gray-300">
                Carefully selected and tested shoes for durability and comfort
              </p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-2">Fast & Free Shipping</h3>
              <p class="text-gray-300">Delivery within 2-3 days all across Pakistan</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-2">Easy Returns</h3>
              <p class="text-gray-300">7-day return policy with no questions asked</p>
            </div>
          </div>
          <div class="flex gap-4">
            <div class="flex-shrink-0">
              <svg class="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-bold mb-2">Expert Support</h3>
              <p class="text-gray-300">Available on WhatsApp and phone for all your queries</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="mb-16">
        <h2 class="text-4xl font-black text-gray-900 mb-12 text-center">Meet Our Team</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
              alt="Team Member"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-bold text-gray-900">Ahmed Khan</h3>
            <p class="text-gray-600">Founder & CEO</p>
          </div>
          <div class="text-center">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop"
              alt="Team Member"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-bold text-gray-900">Fatima Ahmed</h3>
            <p class="text-gray-600">Design Lead</p>
          </div>
          <div class="text-center">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop"
              alt="Team Member"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-bold text-gray-900">Hassan Raza</h3>
            <p class="text-gray-600">Operations Manager</p>
          </div>
          <div class="text-center">
            <img
              src="https://images.unsplash.com/photo-1517457373614-b7152f800fd1?w=300&h=300&fit=crop"
              alt="Team Member"
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-bold text-gray-900">Aisha Khan</h3>
            <p class="text-gray-600">Customer Relations</p>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center py-12">
        <h2 class="text-3xl font-black text-gray-900 mb-6">Join Us on This Journey</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We're always excited to connect with our customers and hear your feedback. Feel free to
          reach out anytime!
        </p>
        <button
          @click="openWhatsApp"
          class="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors"
        >
          Contact Us on WhatsApp
        </button>
      </section>
    </div>
  </div>
</template>

<style scoped></style>
