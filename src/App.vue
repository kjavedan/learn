<script setup lang="ts"></script>

<template>
  <el-config-provider namespace="ep">
    <component :is="$route.meta.layout || 'div'">
      <router-view />
    </component>
  </el-config-provider>
</template>

<style scoped></style>
