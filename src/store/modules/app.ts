import { ref } from 'vue'
import { store } from '..'
import { defineStore } from 'pinia'
import { useStorage } from '@/hooks/web/useStorage'

const { getStorage, setStorage } = useStorage()

export const useAppStore = defineStore('app', () => {
  // Theme
  const isDark = ref<Boolean>(getStorage('isDark') || false)

  const switchTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
    } else {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    }
    setStorage('isDark', isDark.value)
  }
  return { isDark, switchTheme }
})

export const useAppStoreWithOut = () => {
  return useAppStore(store)
}
