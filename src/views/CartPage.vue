<template>
  <main class="text-white">
    <TheHeader />
    <CartHero />
    <ReturnHome />
    <ServicePage />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import CartHero from "@/components/CartHero.vue";
import ReturnHome from "@/components/ReturnHome.vue";
import ServicePage from "@/components/ServicePage.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    CartHero,
    ReturnHome,
    ServicePage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

