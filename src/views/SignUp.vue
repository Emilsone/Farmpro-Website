<template>
    <div class="bg-gray-100 flex justify-center items-center ">
        <div class="w-1/3 h-screen hidden lg:block">
            <img src="https://placehold.co/800x/667fff/ffffff.png?text=Your+Image&font=Montserrat"
                alt="Placeholder Image" class="object-cover w-full h-full">
        </div>
        
        <div class="lg:p-20 md:p-16 sm:p-10 p-8  w-full lg:w-2/3">      
            <div class="py-3">
                <h1 class="text-2xl font-semibold py-2">Create an Account</h1>
                <p>Take the next steps to create an account with <span class="font-bold">Farmpro</span> </p>
            </div>
            
            <form action="#" method="POST" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label for="name" class="block text-gray-600">Full Name</label>
                    <input type="text" id="name" name="full name"
                        class="w-full border border-gray-300 rounded-sm py-2 px-3 focus:outline-none focus:border-blue-500"
                        autocomplete="off">
                </div>
                <div>
                    <label for="email" class="block text-gray-600">Email</label>
                    <input type="email" id="email" name="email"
                        class="w-full border border-gray-300 rounded-sm py-2 px-3 focus:outline-none focus:border-blue-500"
                        autocomplete="off">
                </div>
                <div>
                    <label for="state" class="block text-gray-600">State of Residence</label>
                    <input type="text" id="state" name="state"
                        class="w-full border border-gray-300 rounded-sm py-2 px-3 focus:outline-none focus:border-blue-500"
                        autocomplete="off">
                </div>
                <div>
                    <label for="phone" class="block text-gray-600">Phone Number</label>
                    <input type="tel" id="phone" name="phone"
                        class="w-full border border-gray-300 rounded-sm py-2 px-3 focus:outline-none focus:border-blue-500"
                        autocomplete="off">
                </div>
                <div>
                    <label for="password" class="block text-gray-600">Password</label>
                    <input type="password" id="password" name="password"
                        class="w-full border border-gray-300 rounded-sm py-2 px-3 focus:outline-none focus:border-blue-500"
                        autocomplete="off">
                </div>
                <div>
                    <label for="confirm-password" class="block text-gray-600">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password"
                        class="w-full border border-gray-300 rounded-sm py-2 px-3 focus:outline-none focus:border-blue-500"
                        autocomplete="off">
                </div>
                <div class="col-span-1 md:col-span-2 flex items-center">
                    <input type="checkbox" id="terms" name="terms" class="text-blue-500">
                    <label for="terms" class="text-gray-600 ml-2">By clicking continue, I agree to Terms of Use and acknowledge that I have read the Privacy Policy.</label>
                </div>
                <div class="col-span-1 md:col-span-2 flex justify-left">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-6 w-1/2">Signup</button>
                </div>

                
            </form>
            
            <div class="mt-6">
                <p class="font-lg font-semibold">Already have an account? <router-link class="underline text-blue-500" to="/signin">Sign In!</router-link></p>
            </div>
        </div>
    </div>
</template>
