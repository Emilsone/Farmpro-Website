<template>
  <main class="text-white">
    <TheHeader />
    <WishHero />
    <ReturnHome />
    <ServicePage />
    <TheFooter />
  </main>
</template>
<script>
import TheHeader from "@/components/TheHeader.vue";
import WishHero from "@/components/WishHero.vue";
import ReturnHome from "@/components/ReturnHome.vue";
import ServicePage from "@/components/ServicePage.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  components: {
    TheHeader,
    WishHero,
    ReturnHome,
    ServicePage,
    TheFooter,
  },
};
</script>
<style scoped>
</style>

