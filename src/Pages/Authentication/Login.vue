<template>
  <div style="background-image: url('/src/assets/bg2.jpg')"
       class="flex justify-around
              bg-cover bg-center
              h-screen"
  >
    <div class="flex justify-around
                flex-col lg:flex-row
                mt-10 lg:mt-40
                rounded-lg
                w-11/12 md:w-9/12 lg:w-3/5
                bg-gray-500
                shadow
                bg-opacity-40 lg:bg-opacity-30
                h-max
                py-7 sm:py-5 md:py-10 lg:py-6"
    >
      <div class="w-full lg:w-4/6
                  px-4 py-2 lg:py-0 lg:px-10
                  lg:border-r-2 lg:border-r-teal-900"
      >
        <h1 class="text-center
                   text-teal-900
                   text-xl
                   font-bold mb-5"
        >
          Envie d'aller voir ailleurs ?
        </h1>
        <div class="flex
                    flex-col
                    space-y-2
                    mb-5"
        >
          <label class="relative">
            <input type="text"
                   placeholder="Your Email"
                   class="h-10
                          pl-10
                          shadow-xl
                          border border-gray-500
                          hover:bg-gray-300
                          bg-rose-50
                          focus:bg-gray-300
                          focus:bg-opacity-75
                          bg-opacity-50
                          hover:bg-opacity-50
                          rounded-lg
                          w-full p-4"
            />
            <span class="absolute left-3 top-1.5 text-black"><i class="fas fa-envelope"></i></span>
          </label>
        </div>
        <div class="flex
                    flex-col
                    space-y-2
                    mb-5"
        >
          <label class="relative">
            <input type="text"
                   placeholder="Password"
                   class="h-10
                          pl-10
                          shadow-xl
                          border border-gray-500
                          hover:bg-gray-300
                          bg-rose-50
                          focus:bg-gray-300
                          focus:bg-opacity-75
                          bg-opacity-50
                          hover:bg-opacity-50
                          rounded-lg
                          w-full p-4"
            />
            <span class="absolute left-3 top-1.5"><i class="fas fa-key"></i></span>
          </label>
        </div>
        <div class="text-center mb-5">
          <button class="bg-blue-700 py-1 px-5 text-white rounded-lg">Se connecter</button>
        </div>
        <div class="text-center
                    font-bold
                    text-xs md:text-sm"
        >
          Vous n'avez pas un compte ?
          <a href="/register"
             class="text-blue-600
                     underline
                     cursor-pointer
                     hover:text-blue-500"
          >
            Inscrivez-vous ici
          </a>
        </div>
      </div>
      <div class="w-4/6 mx-auto lg:w-2/6
                  mt-5
                  border-t-2 border-t-teal-900 lg:border-t-0
                  pt-2 lg:pt-0
                  text-center
                  flex flex-col
                  items-center
                  justify-center"
      >
        <span class="text-teal-900 font-bold mb-1 lg:mb-5">Ou</span>
        <span class="text-xs font-bold">Se connecter avec</span>
        <div class="flex space-x-5 mt-5">
          <i class="fab fa-facebook fa-2x text-blue-800 cursor-pointer"></i>
          <i class="fab fa-google fa-2x text-red-700 cursor-pointer"></i>
          <i class="fab fa-twitter fa-2x text-blue-500 cursor-pointer"></i>
        </div>
      </div>
    </div>
  </div>
</template>