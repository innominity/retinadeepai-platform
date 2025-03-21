<script setup lang="ts">
import { onMounted } from 'vue'

import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()


onMounted(() => {
  userStore.initStore()

  const token = userStore.user.access

  if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
      axios.defaults.headers.common["Authorization"] = "";
  }
})

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
