<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div
    class="flex flex-col items-center justify-center relative min-h-screen bg-gray-100 dark:bg-gray-900"
  >
    <div class="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="mt-3 flex justify-center items-center mx-auto">
        <img class="w-auto h-7 sm:h-8 mr-2" src="../../assets/logo.png" alt="" />
        <h3 class="text-xl font-medium text-gray-800 dark:text-gray-200">Retina DeepAI</h3>
      </div>

      <form class="mt-6" autocomplete="off">
        <div>
          <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">Email</label>
          <input
            type="text"
            id="email"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm text-gray-800 dark:text-gray-200"
              >Пароль</label
            >
          </div>

          <input
            type="password"
            id="password"
            autocomplete="off"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between">
            <label for="repeat-password" class="block text-sm text-gray-800 dark:text-gray-200"
              >Подтверждение пароля</label
            >
          </div>

          <input
            type="password"
            id="repeat-password"
            autocomplete="on"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="mt-6">
          <button
            class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer"
          >
            Зарегистрироваться
          </button>
        </div>
      </form>

      <p class="mt-8 text-xs font-light text-center text-gray-400">
        Есть аккаунт?
        <RouterLink
          to="/login"
          class="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >Войти</RouterLink
        >
      </p>
    </div>
  </div>
</template>
