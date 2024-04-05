<template>
    <section class="text-black advantage_section">
        <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="w-full md:w-1/2 p-6">
                <h1
                    class="title-font mb-4 text-3xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none md:text-4xl">
                    Why Choose Us ?</h1>
                <p class="text-base leading-relaxed">We go beyond organic certification to embrace sustainable practices
                    that nurture our land and ensure the health of your family. Experience the difference farm-fresh
                    makes!</p>
                <ul class="space-y-8 my-10">
                    <li>
                        <div class="flex items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="3" class="check_icon w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">All produce meets quality standards and grown with less chemicals</span>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="3" class="check_icon w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">Fastest service delivery with low cost</span>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="3" class="check_icon w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                            </svg>
                            <span class="title-font font-medium">Discount shipping fee for large quantity buyers </span>
                        </div>
                    </li>
                </ul>
                <div class="flex py-6 ">
                    <button
                        class="inline-flex text-white order_now_btn border-0 py-4 px-4 md:px-8 focus:outline-none text-lg ">Order Now</button>
                    <button
                        class="md:ml-4 ml-3 inline-flex text-gray-700 learn_more_btn bg-white border-0 py-4 px-4 md:px-8 focus:outline-none text-lg">Learn More</button>
                </div>
            </div>
            <div class="w-full md:w-1/2">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <!-- First Card -->
                    <div class="card-container p-8 flex-col border rounded-lg border-gray-300 shadow-md">
                        <div class="flex items-center mb-3">
                            <div class=" mr-3 inline-flex items-center justify-center icon-bg text-white flex-shrink-0">
                                <h1>01</h1>
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-bold">Freshness Delivered</h2>
                        </div>
                        <div class="flex-grow">
                            <p class="leading-relaxed text-base">We partner with nearby farms known for their
                                sustainable practices, delivering the best to you. No long journeys, no artificial
                                ripening. Just pure, delicious farm-fresh produce.</p>
                        </div>
                    </div>
                    <!-- Second Card -->
                    <div class="card-container p-8 flex-col rounded-0 border-gray-300 shadow-md custom-shadow ">
                        <div class="flex items-center mb-3">
                            <div class="mr-2 inline-flex items-center justify-center icon-bg text-white flex-shrink-0">
                                <h1>02</h1>
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-bold">Top-Quality Produce</h2>
                        </div>
                        <div class="flex-grow">
                            <p class="leading-relaxed text-base">We have a keen eye for excellence. Our team of
                                experts
                                carefully selects only the finest produce from local farms and send right to your
                                door
                                step</p>
                        </div>
                    </div>
                    <!-- third card -->
                    <div class="card-container p-8 flex-col rounded-0 border-gray-300 custom-shadow">
                        <div class="flex items-center mb-3">
                            <div
                                class=" mr-3 inline-flex items-center justify-center icon-bg text-white flex-shrink-0 ">
                                <h1>03</h1>
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-bold">Support Farmers</h2>
                        </div>
                        <div class="flex-grow">
                            <p class="leading-relaxed text-base">When you choose us, you are not just getting the
                                freshest farm produce, you are supporting local farmers in the community to build
                                sustainable agriculture and good farm produce.</p>
                        </div>
                    </div>

                    <!-- Fourth Card -->
                    <div class="card-container p-8 flex-col rounded-lg border-gray-300 shadow-md">
                        <div class="flex items-center mb-3">
                            <div class="mr-3 inline-flex items-center justify-center  icon-bg flex-shrink-0">
                                <h1>04</h1>
                            </div>
                            <h2 class="text-gray-900 text-lg title-font font-bold">Packed with care</h2>
                        </div>
                        <div class="flex-grow">
                            <p class="leading-relaxed text-base">We take pride in ensuring your produce travels
                                safely.
                                Our secure packaging box minimizes the risk of damage, so you can experience the
                                quality
                                produce.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.icon-bg {
    color: black;
    font-size: 50px;
    font-weight: bolder;
}

.card-container {
    background-color: #f7f7f7;
    /* border-radius: 30px; */
}

.custom-shadow {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1), 0 16px 32px rgba(0, 0, 0, 0.05);
    border-top-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border: 3px solid #3d9421;
    /* Green border color */
}

.advantage_section {
    background-color: #FAFBFB;
    height: 100vh;
}
.check_icon{
  color: #3d9421;  
}
.order_now_btn{
    background-color: #3d9421;
}
.learn_more_btn{
    border: 1px solid #3d9421;
}
</style>