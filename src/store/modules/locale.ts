import { ref } from 'vue'
import { store } from '../index'
import { defineStore } from 'pinia'
import { useStorage } from '@/hooks/web/useStorage'
import { LocaleDropdownType } from '@/components/LocaleDropdown'

import en from 'element-plus/es/locale/lang/en'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const { getStorage, setStorage } = useStorage()

const elLocaleMap = {
  'zh-CN': zhCn,
  en: en
}

export const useLocaleStore = defineStore('locales', () => {
  const currentLocale = ref<LocaleDropdownType>({
    lang: getStorage('lang') || 'en',
    elLocale: elLocaleMap[getStorage('lang') || 'en']
  })

  const localeMap = ref<LocaleDropdownType[]>([
    {
      lang: 'en',
      name: 'English'
    },
    {
      lang: 'zh-CN',
      name: 'Chinese'
    }
  ])

  const setCurrentLocale = (newLocaleMap: LocaleDropdownType) => {
    currentLocale.value.lang = newLocaleMap?.lang
    currentLocale.value.elLocale = elLocaleMap[newLocaleMap?.lang]
    setStorage('lang', newLocaleMap?.lang)
  }

  return { currentLocale, localeMap, setCurrentLocale }
})

export const useLocaleStoreWithOut = () => {
  return useLocaleStore(store)
}
