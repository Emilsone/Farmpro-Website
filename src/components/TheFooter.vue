<template>
  <footer class="footer___bg">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <FooterLogo />

        <div class="flex-1 px-4 py-6">
          <p class="uppercase md:mb-6 font-bold">Features</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">About Us </a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Farm Products </a>
            </li>
            <li class="mt-2 mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Blog</a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Careers<span class="text-xs px-1 blog-text">Coming soon</span></a>
            </li>
          </ul>
        </div>
        <div class="flex-1 px-4 py-6">
          <p class="uppercase md:mb-6 font-bold">Further Information</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">FAQ</a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Terms and Conditions</a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Privacy</a>
            </li>
            <li class="mt-2 block mr-2 md:block md:mr-0 py-2">
              <a href="#" class="no-underline">Contact Us</a>
            </li>
          </ul>
        </div>

        <div class="flex-1 mb-6 py-6">
          <p class="uppercase md:mb-6 font-bold py-0">
            newsletter subscription
          </p>

          <!-- component -->
          <div>
            <p class="texl-sm py-2">
              A 30-second newsletter with new product, discount, service.
            </p>
            <form class="flex md:flex-nowrap flex-wrap">
              <input class="
                  md:w-3/4
                  w-full
                  p-4
                  border-t
                  mr-0
                  border-b border-l
                  text-gray-800
                  border-gray-200
                  bg-white
                " placeholder="your@mail.com" />
              <button class="
                  px-4
                  md:my-0
                  my-4
                  suscribe
                  text-white
                  p-4
                  uppercase
                  border-t border-b border-r
                  md:mx-auto
                  block
                ">
                Subscribe
              </button>
            </form>
          </div>

          <div class="pt-10">
            <p class="uppercase md:mb-6 font-bold">Connect with us</p>
            <ul class="list-reset mb-6 py-3">
              <li class="mt-2 inline-block mr-4 md:mr-6 w-12 span h-10 py-2">
                <svg class="w-6 h-6 mx-auto " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                    clip-rule="evenodd" />
                </svg>

              </li>
              <li class="mt-2 inline-block mr-4 md:mr-6 w-12 span h-10 py-2">
                <svg class="w-5 h-5 mx-auto " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                </svg>
              </li>
              <li class="mt-2 inline-block mr-4 md:mr-6 w-12 span h-10 py-2">
                <svg class="w-6 h-6 mx-auto " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z"
                    clip-rule="evenodd" />
                </svg>

              </li>
              <li class="mt-2 inline-block mr-4 md:mr-6  w-12 span h-10 py-2">
                <svg class="w-6 h-6 mx-auto mxa" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
                    clip-rule="evenodd" />
                  <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: "TheFooter",
};
</script>
<style scoped>
.footer___bg {
  background-color: #141313;
  color: rgb(210, 206, 206);
}

.blog-text {
  color: #3d9421;
}

.btn-sign {
  background-color: #3d9421;
  border-radius: 8px;
}

.suscribe {
  background-color: #3d9421;
  border-color: #3d9421;
}

.span {
  background-color: #3d9421;
  color: white;
  border-radius: 7px;
}
</style>
