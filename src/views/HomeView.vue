<template>
  <main class="text-white hero-section">
    <TheHeader />
    <HeroContent />
    <ProductCategory />
    <ProdItems />
    <HowWeWork />
    <WhyChooseUs />
    <DeliveryProcess />
    <!-- <ServicePage /> -->
    <TheFooter />
  </main>
</template>

<script>
// @ is an alias to /src

import TheHeader from "@/components/TheHeader.vue";
import HeroContent from "@/components/HeroContent.vue";
import ProductCategory from "@/components/ProductCategory.vue";
import ProdItems from "@/components/ProdItems.vue";
import HowWeWork from "@/components/HowWeWork.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import DeliveryProcess from "@/components/DeliveryProcess.vue";
// import ServicePage from "@/components/ServicePage.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    HeroContent,
    ProductCategory,
    ProdItems,
    HowWeWork,
    WhyChooseUs,
    DeliveryProcess,
    // ServicePage,
    TheFooter,
  },
};
</script>
