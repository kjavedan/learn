<script setup lang="ts">
import Layout from '@/layout/Layout.vue'
</script>

<template>
  <el-config-provider namespace="ep">
    <Layout>
      <RouterView />
    </Layout>
  </el-config-provider>
</template>

<style scoped></style>
