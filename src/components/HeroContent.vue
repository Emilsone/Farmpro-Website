<template>
  <section class="hero-section">
    <main>
      <div class="pt-40 md:pt-56">
        <div
          class="
            container
            px-3
            mx-auto
            flex flex-wrap flex-col
            md:flex-row
            items-center
          "
        >
          <!--Left Col-->
          <div
            class="
              flex flex-col
              w-full
              md:w-3/4
              justify-center
              lg:items-start
              items-center
              text-center
              md:text-left
            "
          >
            <p class="uppercase w-full">
              Your healthy life starts here with us
            </p>
            <h1 class="my-4 text-6xl font-bold leading-tight">
              WELCOME TO <span class="r">FARMPRO</span>
            </h1>
            <p class="leading-normal text-lg mb-8 pt">
              Get the natural taste of farm produce from our farm right to your doorstep
            </p>

            <a href="#"
                        class="inline-flex btn text-white order_now_btn border-0 py-4 px-4 md:px-8 focus:outline-none text-lg rounded-lg ">Shop Now</a>
          </div>
          <!--Right Col-->
        </div>
      </div>
    </main>
  </section>
</template>
<script>

export default {
  name: "HeroContent",
};
</script>
<style>
.hero-section {
  background-image: url("../assets/home-bg.jpg");
  background-size: cover;
  height: 100vh;
  background-position: center;
}
.btn {
  background-color: #3d9421;
  border-radius: 8px;
}
.r {
  color: #3d9421;
}
</style>