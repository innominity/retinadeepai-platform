<template>
  <div :class="isShort? 'flex': ''">
    <div
      :class="[isShort? 'w-20 flex flex-col justify-center items-center px-1' : 'w-74 px-4', isVisibility == true ? 'translate-x-0 ease-in' : '-translate-x-full ease-out']"
      class="fixed inset-y-0 left-0 z-30 overflow-y-auto transition duration-200 transform bg-white border-r border-gray-100 lg:translate-x-0 lg:relative lg:inset-0"
    >
      <div class="flex items-center mt-8" v-if="!isShort">
        <img class="w-auto h-8" src="" alt="" />
      </div>

      <hr class="my-6 border-gray-100" v-if="!isShort" />
      <nav>
        <div :class="isShort? 'flex flex-col items-center justify-center px-1': 'px-4'" class="space-y-4">
          <h3 v-if="!isShort" class="space-y-4 text-sm tracking-wider text-gray-400 uppercase">СТРАНИЦЫ</h3>

          <RouterLink
            class="flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg bg-opacity-40"
            :to="{ name: 'main' }"
            :class="
              router.currentRoute.value.name == 'main'
                ? 'bg-gray-200 text-gray-600'
                : 'hover:text-gray-600 text-gray-500 hover:bg-gray-100'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>

            <span v-if="!isShort" class="mx-3 font-medium capitalize">Главная</span>
          </RouterLink>

          <RouterLink
            class="flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg bg-opacity-40"
            :to="{ name: 'research' }"
            :class="
              router.currentRoute.value.name == 'research'
                ? 'bg-gray-200 text-gray-600'
                : 'hover:text-gray-600 text-gray-500 hover:bg-gray-100'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              ></path>
            </svg>

            <span v-if="!isShort" class="mx-3 font-medium capitalize">Исследования</span>
          </RouterLink>

          <RouterLink
            class="flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg bg-opacity-40"
            :to="{ name: 'services' }"
            :class="
              router.currentRoute.value.name == 'services'
                ? 'bg-gray-200 text-gray-600'
                : 'hover:text-gray-600 text-gray-500 hover:bg-gray-100'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              ></path>
            </svg>

            <span v-if="!isShort" class="mx-3 font-medium">Сервисы и модели</span>
          </RouterLink>

          <RouterLink
            class="flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg bg-opacity-40"
            :to="{ name: 'handbook' }"
            :class="
              router.currentRoute.value.name == 'handbook'
                ? 'bg-gray-200 text-gray-600'
                : 'hover:text-gray-600 text-gray-500 hover:bg-gray-100'
            "
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 10V14H19V10H13ZM11 10H5V14H11V10ZM13 19H19V16H13V19ZM11 19V16H5V19H11ZM13 5V8H19V5H13ZM11 5H5V8H11V5ZM19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19Z"
                fill="currentColor"
              ></path>
            </svg>

            <span v-if="!isShort" class="mx-3 font-medium capitalize">Справочник</span>
          </RouterLink>

          <RouterLink
            class="flex items-center px-4 py-2 transition-colors duration-300 transform rounded-lg bg-opacity-40"
            :to="{ name: 'reports' }"
            :class="
              router.currentRoute.value.name == 'reports'
                ? 'bg-gray-200 text-gray-600'
                : 'hover:text-gray-600 text-gray-500 hover:bg-gray-100'
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              ></path>
            </svg>

            <span v-if="!isShort" class="mx-3 font-medium capitalize">Отчеты</span>
          </RouterLink>

          <div v-if="!isShort">
            <button
              @click="openExamples = !openExamples"
              class="flex items-center justify-between w-full px-4 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
            >
              <span class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  ></path>
                </svg>

                <span class="mx-3 font-medium capitalize">Примеры</span>
              </span>

              <span class="rtl:rotate-180">
                <svg
                  class="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    v-show="!openExamples"
                    d="M9 5L16 12L9 19"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    v-show="openExamples"
                    d="M19 9L12 16L5 9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style="display: none"
                  ></path>
                </svg>
              </span>
            </button>
            <div v-show="openExamples" class="mt-2">
              <a
                class="block py-2 text-sm text-gray-500 transition-colors duration-300 transform rounded-lg pl-14 rtl:pr-14 hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
                href=""
                >Детекция</a
              >
              <a
                class="block py-2 text-sm text-gray-500 transition-colors duration-300 transform rounded-lg pl-14 rtl:pr-14 hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
                href=""
                >Анализ ОКТ</a
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import router from '@/router'
import { RouterLink } from 'vue-router'

const openExamples = ref(false)

const props = defineProps({
  isVisibility: { type: Boolean, default: false },
  isShort: {type: Boolean, default: false },
})

</script>
