<template>
  <form @submit.prevent="emits('submitEvent')">
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </form>
</template>

<script setup lang="ts">
const emits = defineEmits(["submitEvent"]);
</script>

<style scoped></style>
