<template>
  <div>
    <Header />
    <Sidbar />
    <main> <slot></slot> </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from '@/layout/components/Header.vue'
import Footer from '@/layout/components/Footer.vue'
import Sidbar from '@/layout/components/Sidebar.vue'
</script>

<style lang="scss" scoped></style>
