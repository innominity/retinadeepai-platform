<template>
  <div class="relative flex h-screen text-gray-800 bg-white font-roboto">
    <div
      @click="sidebarVisibility = false"
      :class="sidebarVisibility ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <SidebarNavigation :is-visibility="sidebarVisibility" class="space-y-8"></SidebarNavigation>
    <div class="flex flex-col flex-1 overflow-hidden bg-gray-100">
      <HeaderPanel @switch-sidebar="sidebarOpen = !sidebarOpen"></HeaderPanel>
      <main class="flex-1 overflow-y-auto overflow-x-hidden">
        <div class="px-4 py-8 sm:px-6">
          <div>
            <h1 class="text-2xl font-medium text-gray-700 sm:text-3xl">Профиль</h1>

            <div
              class="hidden mt-3 overflow-y-auto text-sm lg:items-center lg:flex whitespace-nowrap"
            >
              <a href="#" class="text-gray-600 hover:underline"> Страницы </a>

              <span class="mx-1 text-gray-500"> / </span>

              <a href="#" class="text-indigo-600 hover:underline"> Профиль </a>
            </div>
          </div>

          <div class="mt-6"></div>
        </div>
      </main>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '@/stores/user'

import HeaderPanel from '@/components/pages/HeaderPanel.vue'
import SidebarNavigation from '@/components/pages/SidebarNavigation.vue'

const sidebarOpen = ref<boolean>(false)
const sidebarVisibility = ref<boolean>(false)

</script>