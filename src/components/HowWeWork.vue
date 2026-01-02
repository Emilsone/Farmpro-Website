<template>
  <section class="relative bg-white py-16">
    <div class="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-16">

      <!-- Left Image with Overlay Effects -->
      <div class="md:w-1/2 relative">
        <!-- Background Brush Effect -->
        <div class="absolute inset-0 bg-green-500 opacity-20 rounded-lg z-0"></div>

        <!-- Main Image -->
        <img src="../assets/content-image-4.png" alt="Organic Farmer"
          class="w-full relative z-10 rounded-lg shadow-lg" />

        <!-- Small Overlay Image -->
        <div class="absolute bottom-0 left-0 transform -translate-x-8 translate-y-8 z-20">
          <img src="../assets/who.jpg" alt="Farmer" class="w-32 h-32 rounded-lg shadow-lg border-4 border-white" />
        </div>

        <!-- Decorative Leaf -->
        <img src="../assets/leaf.png" alt="Leaf"
          class="absolute top-0 right-0 w-20 h-19 transform -translate-y-10 translate-x-10 z-20" />
      </div>

      <!-- Right Side - Text Content -->
      <div class="md:w-1/2 md:pl-12 mt-10 md:mt-0">
        <h1 class="text-xl font-bold text-gray-500">What We Do</h1>
        <h1 class="text-4xl font-bold text-green-900 mt-2 py-2">
          Provider of fresh, organic, and healthy food.
        </h1>

        <!-- Feature Badges -->
        <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4">

          <div class="bg-white shadow-md px-4 py-2 rounded-lg flex items-center space-x-2">
            <span class="text-yellow-500 text-lg">✔</span>
            <p class="text-green-900 font-semibold">Natural and organic products</p>
          </div>

          <div class="bg-white shadow-md px-4 py-2 rounded-lg flex items-center space-x-2">
            <span class="text-yellow-500 text-lg">✔</span>
            <p class="text-green-900 font-semibold">Fresh food every day</p>
          </div>

        </div>

        <p class="text-gray-600 mt-2 py-4 ">
          We care about healthy and natural food. That’s why we focus on growing fresh, high-quality organic farm
          produce that is good for you and the environment. 🌱 🥦
        </p>

        <p class="text-gray-600 mt-2 py-2">
          We help people enjoy fresh, natural food by connecting them with real, seasonal farm produce. Our goal is to
          bring the community closer to nature and help everyone appreciate where their food comes from. 🚜 🌿
        </p>

        <div class="flex items-center mt-3">
          <img src="../assets/create.png" alt="Guarantee" class="w-12 h-12">
          <p class="ml-4 text-lg font-semibold text-green-700">Guaranteed Best Quality</p>
        </div>

        <!-- Call to Action Button -->
        <button class="mt-11 bg-yellow-600 text-white px-4 py-3 rounded-md font-semibold shadow-md transition
         inline-flex items-center gap-2 whitespace-nowrap">

          <a href="http://"><span>Discover How We Work</span></a>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-4 h-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>

        </button>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OrganicFoodHero",
};
</script>

<style scoped>
/* Custom styles (if necessary) */
</style>
