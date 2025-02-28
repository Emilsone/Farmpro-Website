<template>
    <section class="text-gray-600 body-font bg-section">
      <div class="container px-5 py-12 mx-auto">
        <div class="flex flex-col text-center w-full mb-8">
          <h1 class="sm:text-3xl text-lg font-medium title-font mb-4 text-gray-900">Browse All Categories</h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Find the freshest products from our farm selection.
          </p>
        </div>
  
        <!-- Grid Layout for Six Cards in One Line -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <!-- Card Component (Loop through categories) -->
          <div 
            v-for="(item, index) in categories" 
            :key="index" 
            :class="['border-2 px-6 py-8 rounded-lg flex flex-col items-center h-full transition-all duration-300',
            item.bg, item.border, { 'shadow-lg scale-105': item.isActive }]"
            @click="selectCard(index)"
          >
            
            <!-- Circular Icon Container -->
            <div class="relative flex items-center justify-center w-20 h-20 rounded-full border-2 border-dotted mb-5"
                 :class="item.border">
              
              <!-- Inner Circle with Icon -->
              <div class="w-14 h-14 rounded-full flex items-center justify-center"
                   :class="item.bgLight">
                <span class="text-2xl" :class="item.textColor">{{ item.icon }}</span>
              </div>
  
              <!-- Floating Dots -->
              <div class="absolute w-2 h-2 rounded-full top-1 left-1" :class="item.bgDot"></div>
              <div class="absolute w-2 h-2 rounded-full bottom-1 right-1" :class="item.bgDot"></div>
            </div>
  
            <h2 class="title-font font-medium text-lg" :class="item.textColor">{{ item.name }}</h2>
            <p class="text-gray-500"> <span class="w-2 h-2 rounded-full bg-yellow-300"></span>{{ item.count }} Items</p>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const categories = ref([
    { name: "Vegetable", count: 25, icon: "🥦", textColor: "text-green-600", bgLight: "bg-green-100", border: "border-green-300", bgDot: "bg-green-300", bg: "hover:bg-green-500 hover:text-white", isActive: false },
    { name: "Meat", count: 55, icon: "🍗", textColor: "text-yellow-600", bgLight: "bg-yellow-100", border: "border-yellow-300", bgDot: "bg-yellow-300", bg: "hover:bg-yellow-500 hover:text-white", isActive: false },
    { name: "Fresh Fruits", count: 30, icon: "🍎", textColor: "text-pink-600", bgLight: "bg-pink-100", border: "border-pink-300", bgDot: "bg-pink-300", bg: "hover:bg-pink-500 hover:text-white", isActive: false },
    { name: "Grains", count: 14, icon: "🌾", textColor: "text-blue-600", bgLight: "bg-blue-100", border: "border-blue-300", bgDot: "bg-blue-300", bg: "hover:bg-blue-500 hover:text-white", isActive: false },
    { name: "Coffee & Drinks", count: 15, icon: "☕", textColor: "text-red-600", bgLight: "bg-red-100", border: "border-red-300", bgDot: "bg-red-300", bg: "hover:bg-red-500 hover:text-white", isActive: false },
    { name: "Milk & Diary", count: 18, icon: "🧀", textColor: "text-yellow-500", bgLight: "bg-yellow-500", border: "border-yellow-300", bgDot: "bg-yellow-400",  isActive: false },
  ]);
  
  const selectCard = (index) => {
    categories.value.forEach((item, i) => item.isActive = (i === index));
  };
  </script>
  
  <style scoped>
  .bg-section {
    /* background: #F5F7F9; */
  }
  </style>
  