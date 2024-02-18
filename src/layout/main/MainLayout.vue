<template>
  <div>
    <h1>main layout</h1>
    <Header />
    <Sidebar />
    <main> <slot></slot> </main>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
