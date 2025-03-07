import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', () => {

    const user = ref({
        isAuthenticated: false,
        id: null,
        name: null,
        email: null,
        access: null,
        refresh: null,
    })

    function initStore() {
        console.log('initStore', localStorage.getItem('user.access'))

        if (localStorage.getItem('user.access')) {
            console.log('User has access!');

            user.value.access = localStorage.getItem('user.access')
            user.value.refresh = localStorage.getItem('user.refresh')
            user.value.id = localStorage.getItem('user.id')
            user.value.email = localStorage.getItem('user.email')
            user.value.isAuthenticated = true

            refreshToken()

            console.log('Initialized user:', user)
        }
    }

    function setToken(data) {
        console.log('setToken', data)

        user.access = data.access
        user.refresh = data.refresh
        user.isAuthenticated = true

        localStorage.setItem('user.access', data.access)
        localStorage.setItem('user.refresh', data.refresh)

        console.log('user.access: ', localStorage.getItem('user.access'))
    }

    function removeToken() {
        console.log('removeToken')
        user.refresh = null
        user.access = null
        user.isAuthenticated = false
        user.id = false
        user.email = false

        localStorage.setItem('user.access', '')
        localStorage.setItem('user.refresh', '')
        localStorage.setItem('user.id', '')
        localStorage.setItem('user.email', '')
    }

    function setUserInfo(user) {
        console.log('setUserInfo', user)

        user.id = user.id
        user.email = user.email

        localStorage.setItem('user.id', user.id)
        localStorage.setItem('user.name', user.name)
        localStorage.setItem('user.email', user.email)

        console.log('User', user)
    }

    function refreshToken() {
        axios.post('/api/refresh/', {
            refresh: this.user.refresh
        })
            .then((response) => {
                this.user.access = response.data.access

                localStorage.setItem('user.access', response.data.access)

                axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.access
            })
            .catch((error)=>{
                console.log(error)

                this.removeToken()
            })
    }
})