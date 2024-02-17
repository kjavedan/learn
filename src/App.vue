<script setup lang="ts">
import { useLocaleStoreWithOut } from './store/modules/locale'
const { currentLocale } = useLocaleStoreWithOut()
console.log(currentLocale)
</script>

<template>
  <el-config-provider namespace="ep">
    <LocaleDropdown />
    <h1>{{ $t('hello') }}</h1>
  </el-config-provider>
</template>

<style scoped></style>
