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
          <label for="email" class="block text-sm text-gray-800 dark:text-gray-200">E-mail</label>
          <input
            v-model="email"
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
            <RouterLink
              to="reset-password"
              class="text-xs text-gray-600 dark:text-gray-400 hover:underline"
              >Забыли пароль?</RouterLink
            >
          </div>

          <input
            v-model="password"
            type="password"
            id="password"
            autocomplete="off"
            class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div class="mt-6">
          <button
            @click.prevent="login"
            class="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer"
          >
            Войти
          </button>
        </div>
      </form>

      <p class="mt-8 text-xs font-light text-center text-gray-400">
        Нет аккаунта?
        <RouterLink
          to="/signup"
          class="font-medium text-gray-700 dark:text-gray-200 hover:underline"
          >Создать</RouterLink
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'
import router from '@/router'

const userStore = useUserStore()

const email = ref('username2@gmail.com')
const password = ref('Kilmonger731pass')

const errors = ref([])

async function login() {
  errors.value = []

  if (email.value === '') {
    errors.value.push('E-mail не введен!')
  }

  if (password.value === '') {
    errors.value.push('Пароль не введен!')
  }

  if (errors.value.length === 0) {
    await axios
      .post('/api/v1/account/login/', { email: email.value, password: password.value })
      .then((response) => {
        userStore.setToken(response.data)
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access;
      })
      .catch((error) => {
        console.log('error', error)
      })

    await axios
      .get('/api/v1/account/me/')
      .then((response) => {
        userStore.setUserInfo(response.data)

        router.push({ name: 'main' })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  console.log(errors)
}
</script>