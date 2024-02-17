import type { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { setHtmlPageLang } from './helper'
import type { I18nOptions } from 'vue-i18n'
import { useLocaleStoreWithOut } from '@/store/modules/locale'

export let i18n: ReturnType<typeof createI18n>

const createI18nOptions = async (): Promise<I18nOptions> => {
  const { currentLocale, localeMap, setCurrentLocale } = useLocaleStoreWithOut()
  const defaultLocal = await import(`../../locales/${currentLocale.lang}.json`)
  const message = defaultLocal.default ?? {}

  setHtmlPageLang(currentLocale.lang)

  setCurrentLocale({
    lang: currentLocale.lang
    // elLocale: elLocal
  })

  return {
    legacy: false,
    locale: currentLocale.lang,
    fallbackLocale: currentLocale.lang,
    messages: {
      [currentLocale.lang]: message
    },
    availableLocales: localeMap.map((v) => v.lang),
    sync: true,
    silentTranslationWarn: true,
    missingWarn: false,
    silentFallbackWarn: true
  }
}

export const setupI18n = async (app: App<Element>) => {
  const options = await createI18nOptions()
  i18n = createI18n(options)
  app.use(i18n)
}
