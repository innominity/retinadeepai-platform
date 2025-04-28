<template>
  <div class="relative flex h-screen text-gray-800 bg-white font-roboto">
    <div
      @click="navigationSidebarVisibility = false"
      :class="navigationSidebarVisibility ? 'block' : 'hidden'"
      class="fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden"
    ></div>
    <SidebarNavigation
      :is-visibility="navigationSidebarVisibility"
      :is-short="true"
    ></SidebarNavigation>

    <div class="flex flex-col flex-1 overflow-hidden bg-gray-100">
      <HeaderPanel
        :search-visibility="false"
        @switch-sidebar="navigationSidebarVisibility = !navigationSidebarVisibility"
      ></HeaderPanel>
      <main class="flex flex-1 overflow-y-auto overflow-x-hidden">
        <div class="flex-1 px-4 py-8 sm:px-6">
          <div></div>
          <div></div>
        </div>
        <div
          class="mx-4 my-4 w-100 px-4 right-0 z-30 transition duration-200 transform bg-white border-r border-gray-100"
        >
          <nav>
            <div class="space-y-4 px-4 py-4">
              <h3 class="space-y-4 text-sm tracking-wider text-gray-700 uppercase">МЕНЮ</h3>
              <div>
                <p class="text-sm tracking-wider text-gray-400 uppercase">1. Выбор изображения</p>
                <div class="flex flex-col">
                  <div class="flex justify-between"></div>
                </div>
              </div>
              <div>
                <p class="text-sm tracking-wider text-gray-400 uppercase">
                  2. Распознавание сегментов
                </p>
                <div class="flex flex-col"></div>
              </div>
              <div>
                <p class="text-sm tracking-wider text-gray-400 uppercase">3. Анализ изображения</p>
                <div class="flex flex-col"></div>
              </div>
            </div>
          </nav>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import HeaderPanel from '@/components/pages/HeaderPanel.vue'
import SidebarNavigation from '@/components/pages/SidebarNavigation.vue'

const STEP_UPLOAD = 1 // Шаг загрузки изображения
const STEP_DETECTION = 2 // Шаг детекци изображения
const STEP_ANALYSIS = 3 // Шаг анализа изображения

const STATUS_READY = 1 // Статуст задачи - активна
const STATUS_PROGRESS = 2 // Статус задачи - в процессе
const STATUS_SUCCESS = 3 // Статус задачи - успешно выполнена
const STATUS_ERROR = 4 // Статус задачи - завершилась с ошибкой

// Вид отображения результата детекции - оригинальное изображение
const DETECTION_VIEW_MODE_ORIG = 0
// Вид отображения результата детекции - разметка границ
const DETECTION_VIEW_MODE_BOXES = 1

// Порядок сортировки по точности - возрастание
const SORT_STATE_SCORE_ASC = 0
// Порядок сортировки по точности - убывание
const SORT_STATE_SCORE_DESC = 1
// Порядок сортировки как в справочнике
const SORT_STATE_BOOK = 2

const navigationSidebarVisibility = ref<boolean>(false)

const taskUpload = ref({
  image: {
    guid: '',
    imageURL: '',
    thumbnailURL: '',
  },
  status: STATUS_READY,
  statusText: 'Изображение не выбрано',
})

const taskDetection = ref({
  id: {
    model: '',
    queue: '',
  },
  crops: [],
  meta: {
    cover: '',
  },
  isOBB: false,
  viewMode: DETECTION_VIEW_MODE_ORIG,
  status: STATUS_READY,
  statusText: '',
})
</script>
