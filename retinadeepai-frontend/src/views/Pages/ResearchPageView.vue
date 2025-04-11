<template>
  <div class="relative flex h-screen text-gray-800 bg-white font-roboto">
    <div
      @click="sidebarOpen = false"
      :class="sidebarOpen ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <div
      :class="sidebarOpen == true ? 'translate-x-0 ease-in' : '-translate-x-full ease-out'"
      class="fixed inset-y-0 left-0 z-30 w-74 px-4 overflow-y-auto transition duration-200 transform bg-white border-r border-gray-100 lg:translate-x-0 lg:relative lg:inset-0"
    >
      <div class="flex items-center mt-8">
        <img class="w-auto h-8" src="" alt="" />
      </div>

      <hr class="my-6 border-gray-100" />

      <SidebarNavigation class="space-y-8"></SidebarNavigation>
    </div>
    <div class="flex flex-col flex-1 overflow-hidden bg-gray-100">
      <HeaderPanel @switch-sidebar="sidebarOpen = !sidebarOpen"></HeaderPanel>
      <main class="flex-1 overflow-y-auto overflow-x-hidden">
        <div class="px-4 py-8 sm:px-6">
          <div>
            <h1 class="text-2xl font-medium text-gray-700 sm:text-3xl">Исследования</h1>

            <div
              class="hidden mt-3 overflow-y-auto text-sm lg:items-center lg:flex whitespace-nowrap"
            >
              <a href="#" class="text-gray-600 hover:underline"> Страницы </a>

              <span class="mx-1 text-gray-500"> / </span>

              <a href="#" class="text-indigo-600 hover:underline"> Исследования </a>
            </div>
          </div>

          <div class="mt-6">
            <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              <RouterLink
                :to="{'name': 'research-new'}"
                target='_blank'
                class="min-h-60 max-w-full rounded-lg border-dashed border-2 border-gray-400 bg-white flex items-center justify-center cursor-pointer flex-col"
              >
                <div>
                  <svg class="w-[36px] text-gray-600" 
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="{2}"
                    stroke="#45494f"
                    className="size-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
                <div class="text-gray-600">Создать</div>
              </RouterLink>
              <ResearchCard></ResearchCard>
              <ResearchCard></ResearchCard>
              <ResearchCard></ResearchCard>
            </div>
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

import HeaderPanel from '@/components/pages/HeaderPanel.vue'
import SidebarNavigation from '@/components/pages/SidebarNavigation.vue'
import ResearchCard from '@/components/pages/ResearchCard.vue'

const sidebarOpen = ref<boolean>(false)
</script>
