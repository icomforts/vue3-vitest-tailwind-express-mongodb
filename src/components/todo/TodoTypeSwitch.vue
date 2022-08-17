<template>
  <div
    class="relative w-max mx-auto h-12 grid grid-cols-3 items-center px-[3px] rounded overflow-hidden transition mb-5"
  >
    <div
      class="absolute indicator h-11 my-auto top-0 bottom-0 left-0 rounded-full bg-white shadow-md"
    ></div>
    <button
      class="relative block h-10 px-6 tab rounded"
      :class="{
        shadow: todoListType === TodoListType.All,
      }"
      @click="emit('setTodoListType', TodoListType.All)"
    >
      <span class="text-orange-600">全部</span>
    </button>
    <button
      class="relative block h-10 px-6 tab rounded"
      :class="{
        shadow: todoListType === TodoListType.Active,
      }"
      @click="emit('setTodoListType', TodoListType.Active)"
    >
      <span class="text-orange-600">未完成</span>
    </button>
    <button
      class="relative block h-10 px-6 tab rounded"
      :class="{
        shadow: todoListType === TodoListType.Completed,
      }"
      @click="emit('setTodoListType', TodoListType.Completed)"
    >
      <span class="text-orange-600">已完成</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import { TodoListType } from "@/types/todo";
//defineProps with todoListType
defineProps<{ todoListType: TodoListType }>();
// defineEmits with setTodoListType
const emit = defineEmits(["setTodoListType"]);
</script>

<style scoped></style>
