<template>
    <section class="text-white body-font mobile_hero">
        <div class="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
            <div
                class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center hero-text">
                <h1 class="title-font sm:text-5xl text-3xl mb-4 font-bold text-white">WHy choose us ?
                    <!-- <br class="hidden lg:inline-block">back -->
                </h1>
                <p class="mb-8 leading-relaxed paragraph-text">We care from seed to table! We watch over everything our farm grows, so you get the freshest, best quality food possible. Think of it like going straight from our farm to your kitchen!</p>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-50 w-5/6">
                <img class="object-cover object-center rounded hero-image" alt="hero" src="../assets/juice.png">
            </div>
        </div>
    </section>
</template>

<style scoped>
.mobile_hero{
background-image:linear-gradient(rgba(19, 19, 19, 0.6), rgba(19, 19, 19, 1.9)), url("../assets/veg.jpeg");
background-position: center center;
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
color: white; 
background-attachment: fixed;
}
</style>