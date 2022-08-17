<template>
  <div class="h-screen flex justify-center items-center">
    <div class="flex flex-col justify-center p-8 max-w-6xl">
      <div class="mb-8 text-gray-600">
        <h1 class="font-bold text-4xl text-center dark:text-gray-50 mb-4">
          Todo App
        </h1>
        <small>Vue3 TypeScript Tailwind Vite Vitest Express MongoDB</small>
      </div>
      <router-link to="/todos" v-ripple class="iButton iButton-orange text-2xl">
        開始體驗
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>