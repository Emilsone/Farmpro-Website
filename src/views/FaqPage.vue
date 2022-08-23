<template>
  <main>
    <TheHeader />
    <section class="faq-bg">
      <h1 class="text-6xl font-bold pt-56 text-center uppercase text-white">
        Frequently Asked Questions
      </h1>
    </section>

    <TheFooter />
  </main>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "Contact",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>
<style >

.faq-bg {
  background-image: url("../assets/bg-one.jpg");
  background-color: #3d9421;
  height: 100vh;
  background-size: cover;
  background-blend-mode: soft-light;
}
</style>