<template>
  <div class="relative" ref="target">
    <button
      class="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-orange-600 dark:hover:text-orange-500 md:mr-0 dark:text-white"
      type="button"
      @click="isOpen = true"
    >
      <slot name="header"></slot>
      <svg
        class="w-4 h-4 mx-1.5"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <div
      v-if="isOpen"
      class="absolute translate-y-2 z-10 w-full bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 block text-center"
    >
      <div class="py-1">
        <slot name="body" :closeDropdown="closeDropdown"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref<boolean>(false);
const target = ref<HTMLElement>();
const closeDropdown = () => {
  isOpen.value = false;
};
onClickOutside(target, () => {
  isOpen.value = false;
});
</script>

<style scoped></style>
