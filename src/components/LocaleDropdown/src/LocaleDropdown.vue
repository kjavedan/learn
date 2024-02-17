<script setup lang="ts">
import { unref } from 'vue'
import { useLocale } from '@/hooks/web/useLocale'
import { useLocaleStoreWithOut } from '@/store/modules/locale'
import { ElButton, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'

const { currentLocale, localeMap, setCurrentLocale } = useLocaleStoreWithOut()

const setLang = (newLang: LocaleType) => {
  if (newLang === unref(currentLocale).lang) return

  window.location.reload()
  setCurrentLocale({ lang: newLang })
  const { changeLocale } = useLocale()
  changeLocale(newLang)
}
</script>

<template>
  <ElDropdown trigger="click" @command="setLang">
    <ElButton>{{ currentLocale.lang }}</ElButton>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem v-for="item in localeMap" :key="item.lang" :command="item.lang">{{
          item.name
        }}</ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>

<style></style>
