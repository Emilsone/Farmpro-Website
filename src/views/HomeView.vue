<template>
  <main class="text-white hero-section">
    <TheHeader />
    <HeroContent />
    <HowWeWork />
    <WhyChooseUs />
    <DeliveryProcess />
    <ServicePage /> 
    <TheFooter />
  </main>
</template>

<script>
// @ is an alias to /src

import TheHeader from "@/components/TheHeader.vue";
import HeroContent from "@/components/HeroContent.vue";
import HowWeWork from "@/components/HowWeWork.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import DeliveryProcess from "@/components/DeliveryProcess.vue";
import ServicePage from "@/components/ServicePage.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "HomeView",
  components: {
    TheHeader,
    HeroContent,
    HowWeWork,
    WhyChooseUs,
    DeliveryProcess,
    ServicePage,
    TheFooter,
  },
};
</script>
