<template>
  <div>
    <h1>Simple Layout</h1>
    <ThemeSwitch />
    <main>
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SimpleLayout'
}
</script>

<style scoped>
/* Your styles here */
</style>
