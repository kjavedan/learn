<script setup lang="ts">
import Layout from '@/layout/Layout.vue'
import { useLocaleStoreWithOut } from './store/modules/locale'
const { currentLocale } = useLocaleStoreWithOut()
console.log(currentLocale)
</script>

<template>
  <el-config-provider namespace="ep">
    <Layout>
      <LocaleDropdown />
    </Layout>
  </el-config-provider>
</template>

<style scoped></style>
