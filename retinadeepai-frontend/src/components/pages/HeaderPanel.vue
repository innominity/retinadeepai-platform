<template>
  <header class="bg-white border-b border-gray-100">
    <div class="flex items-center justify-between px-4 py-4 sm:px-6">
      <div class="flex items-center">
        <button v-if="sidebarVisibility" @click="$emit('switchSidebar')" class="text-gray-500 lg:hidden focus:outline-none">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>

        <div v-if="searchVisibility" class="relative" @click.away="search = ''">
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
        <div class="relative inline-block">
          <button
            @click="
              dropdownOpen =
                dropdownOpen != DROPDOWN_OPEN_NOTIFICATION ? DROPDOWN_OPEN_NOTIFICATION : 0
            "
            
            @blur="dropdownOpen = 0"
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
            v-show="dropdownOpen == DROPDOWN_OPEN_NOTIFICATION"
            x-transition:enter="transition ease-out duration-100 transform"
            x-transition:enter-start="opacity-0 scale-95"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75 transform"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-95"
            @click.away="dropdownOpen = 0"
          >
            <div class="flex items-center justify-between px-4 pt-4">
              <h4 class="text-lg font-medium text-gray-700 capitalize">Уведомления</h4>
              <button class="text-sm text-indigo-600 hover:underline focus:outline-none">
                очистить
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
                  <span class="font-bold" href="#">Abigail Bennett</span> create new project . 3h
                </p>
              </a>
            </div>
          </div>
        </div>

        <div class="relative inline-block">
          <button
            @click="dropdownOpen = dropdownOpen != DROPDOWN_OPEN_AVATAR ? DROPDOWN_OPEN_AVATAR : 0"
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
            v-show="dropdownOpen == DROPDOWN_OPEN_AVATAR"
            x-transition:enter="transition ease-out duration-100 transform"
            x-transition:enter-start="opacity-0 scale-95"
            x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-75 transform"
            x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-95"
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
                <h1 class="text-sm font-semibold text-gray-700"></h1>
                <p class="text-sm text-gray-500">{{ userStore.user.email }}</p>
              </div>
            </a>

            <hr class="border-gray-200" />

            <RouterLink
              :to="{ name: 'profile' }"
              class="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
            >
              Профиль
            </RouterLink>

            <RouterLink
              :to="{ name: 'settings' }"
              class="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
            >
              Настройки
            </RouterLink>

            <a
              href=""
              class="block px-4 py-2 text-sm text-gray-600 capitalize transition-colors duration-200 transform hover:bg-gray-100"
              @click="userStore.removeToken()"
            >
              Выход
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import router from '@/router'

import { ref, defineProps } from 'vue'
import { useUserStore } from '@/stores/user'

const search = ref<string>('')

const userStore = useUserStore()

const DROPDOWN_OPEN_NOTIFICATION = 1
const DROPDOWN_OPEN_AVATAR = 2

const dropdownOpen = ref<Number>(0)

const props = defineProps({
  searchVisibility: { type: Boolean, default: true },
  sidebarVisibility: { type: Boolean, default: true },
})

</script>
