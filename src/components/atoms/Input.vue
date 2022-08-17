<template>
  <label
    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >{{ label }}</label
  >
  <input
    class="input"
    :type="type"
    :placeholder="placeholder"
    v-model="value"
  />
</template>

<script lang="ts" setup>
import { useVModel } from "@vueuse/core";

const props = withDefaults(
  defineProps<{
    label?: string;
    type?: string;
    modelValue?: string | number;
    placeholder?: string;
  }>(),
  {
    label: "",
    type: "text",
    modelValue: "",
    placeholder: "",
  }
);

const emit = defineEmits(["update:modelValue"]);
const value = useVModel(props, "modelValue", emit);
</script>

<style scoped lang="scss">
.input {
  @apply bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}
</style>
