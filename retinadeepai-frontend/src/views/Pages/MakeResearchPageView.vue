<template>
  <div class="relative flex h-screen text-gray-800 bg-white font-roboto">
    <div
      @click="navigationSidebarVisibility = false"
      :class="navigationSidebarVisibility? 'block': 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <SidebarNavigation :is-visibility="navigationSidebarVisibility" :is-short="true"></SidebarNavigation>
    <div class="flex flex-col flex-1 overflow-hidden bg-gray-100">
      <HeaderPanel :search-visibility="false"  @switch-sidebar="navigationSidebarVisibility = !navigationSidebarVisibility"></HeaderPanel>
      <main class="flex-1 overflow-y-auto overflow-x-hidden">
        <div class="px-4 py-8 sm:px-6">
          <div></div>
          <div></div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import HeaderPanel from '@/components/pages/HeaderPanel.vue'
import SidebarNavigation from '@/components/pages/SidebarNavigation.vue'

const navigationSidebarVisibility = ref<boolean>(false)
const menuSidebarVisibility = ref<boolean>(true)
</script>