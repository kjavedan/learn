<template>
  <div>
    <ElButton @click="switchTheme">change theme</ElButton>
  </div>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus'
import { useAppStoreWithOut } from '@/store/modules/app'

const { switchTheme } = useAppStoreWithOut()
</script>

<style scoped></style>
