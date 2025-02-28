<template>
    <div class="bg-gray-100 flex justify-center items-center h-screen">

        <div class="w-1/2 h-screen hidden lg:block">
            <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
                alt="Placeholder Image" class="object-cover w-full h-full">
        </div>

        <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
            <div class="py-4">
                <h1 class="text-2xl font-bold mb-4">Forgot Password </h1>
            <p>Having issues remembering your password? You can recover it using the email created with your account.

            </p>
            </div>
           
            <form action="#" method="POST">
                <!-- Username Input -->
                <div class="mb-4">
                    <label for="username" class="block text-gray-600">Email</label>
                    <input type="text" id="username" name="username"
                        class="w-full border border-gray-300 rounded-sm py-2 px-3 focus:outline-none focus:border-blue-500"
                        autocomplete="off">
                </div>
                <!-- Reset password button -->
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full">Reset
                    Password</button>
            </form>
            <!-- Sign up  Link -->
            <div class="mt-6 text-center">
                <a href="#" class="font-bold">Remember your password?</a> <router-link
                    class="underline text-blue-500" to="/signup">SignIn</router-link>
            </div>
        </div>
    </div>
</template>
