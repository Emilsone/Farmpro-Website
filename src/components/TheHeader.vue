<template>
  <nav :class="headerClassList" class="fixed w-full z-30 top-0 header___bar bg-white">
    <div class="
        w-full
        container
        mx-auto
        flex flex-wrap
        items-center
        justify-between
        mt-0
        py-2
      ">
      <div class="pl-4 flex items-center">
        <logo :isStickable="true" :isSticky="isSticky" />
      </div>
      <div class="block lg:hidden pr-4">
        <span class="flex items-center p-1 text-black hover:text-gray-900" @click.prevent.stop="onToggleClick">
          <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" />
            <title>Menu</title>
          </svg>
        </span>
      </div>

      <div :class="navContentClassList" class="
          w-full
          flex-grow
          lg:flex lg:items-center lg:w-auto lg:block
          mt-2
          lg:mt-0
          text-black
          p-4
          lg:p-0
          z-20
        ">
        <ul class="list-reset lg:flex justify-center flex-1 items-center">
          <li class="mr-3">
            <a class="
                inline-block
                no-underline
                 hover:text-underline
                py-2
                px-4
              " href="#"><router-link to="/about">ABOUT US </router-link></a>
          </li>
          <li class="mr-3">
            <a class="
                inline-block
                no-underline
                 hover:text-underline
                py-2
                px-4
              " href="#"><router-link to="/farmproducts">FARM PRODUCTS </router-link></a>
          </li>
          <li class="mr-3">
            <a class="
                inline-block
                no-underline
                 hover:text-underline
                py-2
                px-4
              " href="#"><router-link to="/farmers">OUR FARMERS</router-link></a>
          </li>
          <li class="mr-3">
            <a class="
                inline-block
                no-underline
                 hover:text-underline
                py-2
                px-4
              " href="#"><router-link to="/faq">FAQ <i class="icon-map"></i></router-link></a>
          </li>
          <li class="mr-3">
            <a class="
                inline-block
                no-underline
                 hover:text-underline
                py-2
                px-4
              " href="#"><router-link to="/blog">BLOG</router-link></a>
          </li>
          <li class="mr-3">
            <a class="
                inline-block
                no-underline
                 hover:text-underline
                py-2
                px-4
              " href="#"><router-link to="/contact">CONTACT US</router-link></a>
          </li>
          <li class="mr-3">
            <a class="
                inline-block
                no-underline
                 hover:text-underline
                py-2
                px-4
              " href="#"><router-link to="/wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg></router-link></a>
          </li>
        </ul>
        <ul class="list-reset lg:flex items-center">
          <li class="mr-3">
            <a class="
                inline-block
                no-underline
                 hover:text-underline
                py-2
                px-4
              " href="#"><router-link to="/cart">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg></router-link></a>
          </li>

          <li class="">
            <a class="
                inline-block
                text-white
                shadow-2xl
                btn-sign
                px-10
                no-underline
                hover:text-underline
                py-3
                md:mx-6
              " href="#"><router-link to="/signin"> Sign In </router-link></a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
import HeaderLogo from "@/components/HeaderLogo";
export default {
  name: "TheHeader",
  components: {
    logo: HeaderLogo,
  },
  data() {
    return {
      scrollY: 0,
      isOpen: false,
    };
  },
  computed: {
    isSticky() {
      return this.scrollY > 10;
    },
    headerClassList() {
      return this.isSticky ? "bg-white shadow" : "";
    },
    navContentClassList() {
      let classList = this.isSticky ? "bg-white" : "";
      if (!this.isOpen) {
        classList += ` hidden`;
      }
      return classList;
    },
  },
  methods: {
    onClick() {
      this.isOpen = false;
    },
    onScroll() {
      this.scrollY = window.scrollY;
    },
    onToggleClick() {
      this.isOpen = !this.isOpen;
    },
  },
  mounted() {
    this.scrollY = window.scrollY;
    document.addEventListener("click", this.onClick);
    document.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClick, true);
    document.removeEventListener("scroll", this.onScroll, true);
  },
};
</script>
<style>
.btn-sign {
  background-color: #3d9421;
  border-radius: 8px;
}
</style>
