import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

type IUser = {
  id: string | null
  email: string | null
  access: string | null
  refresh: string | null
  isAuthenticated: boolean
}

export const useUserStore = defineStore('user', () => {
  const user: Ref<IUser> = ref({
    isAuthenticated: false,
    id: null,
    email: null,
    access: null,
    refresh: null,
  })


  function initStore() {
    if (localStorage.getItem('user.access')) {
      user.value.access = localStorage.getItem('user.access')
      user.value.refresh = localStorage.getItem('user.refresh')
      user.value.id = localStorage.getItem('user.id')
      user.value.email = localStorage.getItem('user.email')
      user.value.isAuthenticated = true

      refreshToken()
    }
  }

  function setToken(data: any) {
    user.value.access = data.access
    user.value.refresh = data.refresh
    user.value.isAuthenticated = true

    localStorage.setItem('user.access', data.access)
    localStorage.setItem('user.refresh', data.refresh)
  }

  function removeToken() {
    user.value.isAuthenticated = false
    user.value.refresh = null
    user.value.access = null
    user.value.id = null
    user.value.email = null

    localStorage.setItem('user.access', '')
    localStorage.setItem('user.refresh', '')
    localStorage.setItem('user.id', '')
    localStorage.setItem('user.email', '')
  }

  function setUserInfo(user: any) {
    user.id = user.id
    user.email = user.email

    localStorage.setItem('user.id', user.id)
    localStorage.setItem('user.name', user.name)
    localStorage.setItem('user.email', user.email)
  }

  function refreshToken() {
    axios
      .post('/api/v1/account/refresh/', {
        refresh: user.value.refresh,
      })
      .then((response) => {
        user.value.access = response.data.access

        localStorage.setItem('user.access', response.data.access)

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access
      })
      .catch((error) => {
        console.log(error)

        removeToken()
      })
  }

  return { user, initStore, setToken, removeToken, setUserInfo, refreshToken }
})
