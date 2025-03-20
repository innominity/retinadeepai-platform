<template>
  <div
    class="relative flex h-screen text-gray-800 bg-white font-roboto"
  >
    <div
      @click="sidebarOpen = false"
      :class="sidebarOpen? 'block': 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <div
      :class="sidebarOpen == true ? 'translate-x-0 ease-in' : '-translate-x-full ease-out'"
      class="fixed inset-y-0 left-0 z-30 w-74 px-4 overflow-y-auto transition duration-200 transform bg-white border-r border-gray-100 lg:translate-x-0 lg:relative lg:inset-0"
    >
      <div class="flex items-center mt-8">
        <img
          class="w-auto h-8"
          src=""
          alt=""
        />
      </div>

      <hr class="my-6 border-gray-100" />

      <nav class="space-y-8">
        <div class="space-y-4">
          <h3 class="px-4 text-sm tracking-wider text-gray-400 uppercase">СТРАНИЦЫ</h3>

          <a
            class="flex items-center px-4 py-2 text-gray-600 transition-colors duration-200 transform bg-gray-200 rounded-lg bg-opacity-40"
            href=""
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

            <span class="mx-3 font-medium capitalize">Главная</span>
          </a>

          <a
            class="flex items-center px-4 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
            href=""
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

            <span class="mx-3 font-medium capitalize">Исследования</span>
          </a>

          <a
            class="flex items-center px-4 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
            href=""
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

            <span class="mx-3 font-medium">Сервисы и модели</span>
          </a>

          <a
            class="flex items-center px-4 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
            href=""
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 10V14H19V10H13ZM11 10H5V14H11V10ZM13 19H19V16H13V19ZM11 19V16H5V19H11ZM13 5V8H19V5H13ZM11 5H5V8H11V5ZM19 3C20.1046 3 21 3.89543 21 5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H19Z"
                fill="currentColor"
              ></path>
            </svg>

            <span class="mx-3 font-medium capitalize">Справочник</span>
          </a>

          <a
            class="flex items-center px-4 py-2 text-gray-500 transition-colors duration-300 transform rounded-lg hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
            href=""
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

            <span class="mx-3 font-medium capitalize">Отчеты</span>
          </a>

          <div>
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
            <div
              v-show="openExamples"
              class="mt-2"
            >
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
    <div class="flex flex-col flex-1 overflow-hidden bg-gray-100">
      <header class="bg-white border-b border-gray-100">
        <div class="flex items-center justify-between px-4 py-4 sm:px-6">
          <div class="flex items-center">
            <button
              @click="sidebarOpen = !sidebarOpen"
              class="text-gray-500 lg:hidden focus:outline-none"
            >
              <svg
                class="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20M4 12H20M4 18H11"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>

            <div class="relative" @click.away="search = ''">
              <div class="relative mx-4 lg:mx-0">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>

                <input
                  v-model="search"
                  type="text"
                  class="w-32 h-10 py-2 pl-10 pr-4 text-gray-700 placeholder-gray-400 transition-all duration-150 bg-white border border-gray-200 rounded-md focus:w-44 sm:w-64 sm:focus:w-80 focus:border-indigo-400 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-40"
                  placeholder="Поиск ..."
                />
              </div>

              <div
                class="absolute right-0 z-20 w-full py-2 mt-2 space-y-4 overflow-hidden bg-white rounded-md shadow-xl"
                v-if="search.length > 0"
                x-transition:enter="transition ease-out duration-100 transform"
                x-transition:enter-start="opacity-0 scale-95"
                x-transition:enter-end="opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-75 transform"
                x-transition:leave-start="opacity-100 scale-100"
                x-transition:leave-end="opacity-0 scale-95"
                style="display: none"
              >
                <div>
                  <h3 class="px-5 text-xs tracking-wider text-gray-500 uppercase">Accounts</h3>

                  <div class="mt-2">
                    <a
                      class="block px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform sm:px-12 hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
                      href=""
                    >
                      Esther Howard
                    </a>

                    <a
                      class="block px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform sm:px-12 hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
                      href=""
                    >
                      Cameron Williamson
                    </a>
                  </div>
                </div>

                <div>
                  <h3 class="px-5 text-xs tracking-wider text-gray-500 uppercase">projects</h3>

                  <div class="mt-2">
                    <a
                      class="block px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform sm:px-12 hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
                      href=""
                    >
                      Minimalist
                    </a>

                    <a
                      class="block px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform sm:px-12 hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
                      href=""
                    >
                      Scandinavian
                    </a>

                    <a
                      class="block px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform sm:px-12 hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
                      href=""
                    >
                      Classic
                    </a>

                    <a
                      class="block px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 transform sm:px-12 hover:text-gray-600 hover:bg-gray-100 bg-opacity-40"
                      href=""
                    >
                      Modern
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center">
            <div x-data="{ dropdownOpen: false }" class="relative inline-block">
              <button
                @click="dropdownOpen = !dropdownOpen"
                class="relative z-10 block mx-2 text-gray-700 sm:mx-4 focus:outline-none"
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  ></path>
                </svg>
              </button>

              <div
                class="absolute right-0 z-20 w-64 mt-2 overflow-hidden bg-white rounded-md shadow-lg rtl:right-auto rtl:left-0 sm:w-80"
                x-show="dropdownOpen"
                x-transition:enter="transition ease-out duration-100 transform"
                x-transition:enter-start="opacity-0 scale-95"
                x-transition:enter-end="opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-75 transform"
                x-transition:leave-start="opacity-100 scale-100"
                x-transition:leave-end="opacity-0 scale-95"
                @click.away="dropdownOpen = false"
                style="display: none"
              >
                <div class="flex items-center justify-between px-4 pt-4">
                  <h4 class="text-lg font-medium text-gray-700 capitalize">notifications</h4>
                  <button class="text-sm text-indigo-600 hover:underline focus:outline-none">
                    Clear all
                  </button>
                </div>

                <div class="py-2 divide-y divide-gray-100">
                  <a
                    href="#"
                    class="flex px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-50"
                  >
                    <p class="mx-2 text-sm text-gray-600 truncate">
                      <span class="font-bold" href="#">Modern </span> Project updated . 11m
                    </p>
                  </a>

                  <a
                    href="#"
                    class="flex px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-50"
                  >
                    <p class="mx-2 text-sm text-gray-600 truncate">
                      <span class="font-bold" href="#">Slick Net</span> start following you . 45m
                    </p>
                  </a>

                  <a
                    href="#"
                    class="flex px-4 py-3 -mx-2 transition-colors duration-200 transform hover:bg-gray-50"
                  >
                    <p class="mx-2 text-sm text-gray-600 truncate">
                      <span class="font-bold" href="#">Abigail Bennett</span> create new project .
                      3h
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div x-data="{ dropdownOpen: false }" class="relative inline-block">
              <button
                @click="dropdownOpen = !dropdownOpen"
                class="relative z-10 flex items-center flex-shrink-0 text-sm text-gray-600 focus:outline-none"
              >
                <img
                  class="flex-shrink-0 object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                  alt="john avatar"
                />
              </button>

              <div
                class="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl rtl:right-auto rtl:left-0"
                x-show="dropdownOpen"
                x-transition:enter="transition ease-out duration-100 transform"
                x-transition:enter-start="opacity-0 scale-95"
                x-transition:enter-end="opacity-100 scale-100"
                x-transition:leave="transition ease-in duration-75 transform"
                x-transition:leave-start="opacity-100 scale-100"
                x-transition:leave-end="opacity-0 scale-95"
                @click.away="dropdownOpen = false"
                style="display: none"
              >
                <a
                  href=""
                  class="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform hover:bg-gray-100"
                >
                  <img
                    class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=880&amp;q=80"
                    alt="john avatar"
                  />
                  <div class="mx-1">
                    <h1 class="text-sm font-semibold text-gray-700">John Doe</h1>
                    <p class="text-sm text-gray-500">johndoe@example.com</p>
                  </div>
                </a>

                <hr class="border-gray-200" />

                <a
                  href=""
                  class="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
                >
                  Profile
                </a>

                <a
                  href=""
                  class="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
                >
                  Settings
                </a>

                <a
                  href=""
                  class="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
                >
                  Sign Out
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto overflow-x-hidden">
        <div class="px-4 py-8 sm:px-6">
          <div>
            <h1 class="text-2xl font-medium text-gray-700 sm:text-3xl">Главная</h1>

            <div
              class="hidden mt-3 overflow-y-auto text-sm lg:items-center lg:flex whitespace-nowrap"
            >
              <a href="#" class="text-gray-600 hover:underline"> Страницы </a>

              <span class="mx-1 text-gray-500"> / </span>

              <a href="#" class="text-indigo-600 hover:underline"> Главная </a>
            </div>
          </div>

          <div class="mt-6">
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'

const openExamples = ref(false)
const sidebarOpen = ref<boolean>(false)
const search = ref<string>('')

</script>