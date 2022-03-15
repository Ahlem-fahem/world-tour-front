<template>
  <div class="rounded-lg
              flex
              w-7/12
              bg-gray-500
              shadow
              mx-auto
              mt-16
              bg-opacity-30
              h-80 py-10"
  >
    <div class="w-4/6
                px-10
                border-r-2
                border-r-teal-900"
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
        Vous avez déjà un compte ?
        <a href="/"
              class="text-blue-600
                       underline
                       cursor-pointer
                       hover:text-blue-500"
        >
          Connecter vous
        </a>
      </div>
    </div>
    <div class="w-2/6
                  text-center
                  flex flex-col
                  items-center
                  justify-center"
    >
      <span class="text-teal-900 font-bold mb-5">Ou</span>
      <span class="text-xs font-bold">S'inscrire avec</span>
      <div class="flex space-x-5 mt-5">
        <i class="fab fa-facebook fa-2x text-blue-800 cursor-pointer"></i>
        <i class="fab fa-google fa-2x text-red-700 cursor-pointer"></i>
        <i class="fab fa-twitter fa-2x text-blue-500 cursor-pointer"></i>
      </div>
    </div>
  </div>
</template>