<template>
  <div style="background-image: url('/src/assets/bg2.jpg')"
       class="flex
              bg-cover bg-center
              h-screen"
  >
    <div class="flex
                flex-col lg:flex-row
                rounded-lg
                w-11/12 md:w-9/12 lg:w-3/4
                bg-gray-500
                shadow
                mt-10 lg:mt-24
                mx-auto
                bg-opacity-40 lg:bg-opacity-30
                h-4/6 sm:h-3/5 md:h-2/3 lg:h-1/2
                py-7 sm:py-5 md:py-10"
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
                      mb-3"
        >
            <span class="text-gray-700
                         font-bold"
            >
              Email :
            </span>
          <label>
            <input type="email"
                   class="h-10
                          shadow-xl
                          border border-gray-500
                          bg-rose-50
                          focus:bg-white
                          focus:bg-opacity-75
                          bg-opacity-50
                          rounded-lg
                          w-full p-4"
            />
          </label>
        </div>
        <div class="flex
                    flex-col
                    space-y-2
                    mb-5"
        >
            <span class="text-gray-700
                         font-bold"
            >
              Password :
            </span>
          <label>
            <input type="password"
                   class="h-10
                          shadow-xl
                          border
                          border-gray-500
                          bg-rose-50
                          focus:bg-white
                          focus:bg-opacity-75
                          bg-opacity-50
                          rounded-lg
                          w-full p-4"
            />
          </label>
        </div>
        <div class="text-center
                      font-bold
                      text-sm"
        >
          vous n'avez pas de compte ?
          <a  href="/register"
              class="text-blue-600
                     underline
                     cursor-pointer
                     hover:text-blue-500"
          >
            inscrivez vous
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