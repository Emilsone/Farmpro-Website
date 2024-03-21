<template>
    <div class="flex flex-col lg:flex-row relative">
        <!-- Left Container -->
        <div class="lg:w-1/2 hero_bg">
            <div class="p-8 md:pt-60 pt-0  pt">
                <!-- Text Content -->
                <h1 class="text-3xl font-bold mb-4">Why Choose Us ?</h1>
                <!-- <p class="text-lg break-all">We care from seed to table! We watch over everything our farm grows, so you get the freshest, best quality food possible. Think of it like going straight from our farm to your kitchen!</p> -->
            </div>
        </div>

        <!-- Right Container (Background Image) -->
        <div class="lg:w-1/2 bg-cover bg-center relative mobile_hero">
            <!-- Card -->
            <div class="absolute top-2/4 left-44 transform -translate-x-1/2 -translate-y-1/2 bg-white p-12  shadow-md"
                style="width:130%;">
                <div class="flex justify-between items-center text-black md:flex-row flex-col">
                    <div>
                        <div class="flex items-start flex-col">
                            <!-- Icon -->
                            <div
                                class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <!-- Icon SVG Path -->
                                </svg>
                            </div>
                            <!-- Text -->
                            <h1 class="text-xl font-bold title-font text-black mb-4">Freshness Delivered</h1>
                            <p class="text-base leading-normal">We partner with nearby farms known for their
                                sustainable practices, delivering the best to you. No long journeys, no artificial
                                ripening. Just pure, delicious farm-fresh produce.</p>
                        </div>


                    </div>
                    <div>
                        <div class="flex items-start flex-col">
                            <!-- Icon -->
                            <div
                                class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <!-- Icon SVG Path -->
                                </svg>
                            </div>
                            <!-- Text -->
                            <h1 class="text-xl font-bold title-font text-black mb-4">Top-Quality Produce </h1>
                            <p class="text-base  leading-relaxed ">We have a keen eye for excellence. Our team of
                                experts
                                carefully selects only the finest produce from local farms and send right to your door
                                step</p>
                        </div>

                    </div>
                </div>
                <div class="flex justify-between items-center text-black py-10 md:flex-row flex-col">
                    <div>
                        <div class="flex items-start flex-col">
                            <!-- Icon -->
                            <div
                                class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <!-- Icon SVG Path -->
                                </svg>
                            </div>
                            <!-- Text -->
                            <h1 class="text-xl font-bold title-font text-black mb-4">Supporting Local Farmers</h1>
                            <p class="text-base leading-normal">When you choose us, you are not just getting the freshest farm produce, you are supporting local farmers in the community to build sustainable agriculture and good farm produce.</p>
                        </div>

                    </div>
                    <div>
                        <div class="flex items-start flex-col">
                            <!-- Icon -->
                            <div
                                class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                    <!-- Icon SVG Path -->
                                </svg>
                            </div>
                            <!-- Text -->
                            <h1 class="text-xl font-bold title-font text-black mb-4">Packed with care</h1>
                            <p class="text-base  leading-relaxed ">We take pride in ensuring your produce travels
                                safely. Our secure packaging box minimizes the risk of damage, so you can experience the
                                quality produce.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    </div>
</template>

<style scoped>
.mobile_hero {
    background-image: linear-gradient(rgba(19, 19, 19, 0.6), rgba(19, 19, 19, 1.9)), url("../assets/veg.jpeg");
    background-repeat: no-repeat;
    height: 100vh;
    color: white;
}
.hero_bg {
  background-color: #3d9421;
}
</style>
