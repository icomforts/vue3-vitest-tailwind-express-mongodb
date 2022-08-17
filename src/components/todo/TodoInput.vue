<template>
  <!-- todo list add todo input -->
  <div class="flex justify-center mb-10">
    <div class="w-full max-w-md">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="todo-input"
          >
            新增代辦事項
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="todo-input"
            type="text"
            v-model="newTodo"
            @keyup.enter="addTodo"
          />
        </div>
        <div class="flex justify-end">
          <button
            class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            @click="addTodo"
          >
            新增
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/store/todo";
import { useAuthStore } from "@/store/auth";
const todoStore = useTodoStore();
const authStore = useAuthStore();

// newTodo with ref
const newTodo = ref<string>("");
// add new todo
function addTodo() {
  if (newTodo.value && authStore.user?._id) {
    todoStore.add({
      userId: authStore.user._id,
      title: newTodo.value,
      isCompleted: false,
    });
    newTodo.value = "";
  }
}
</script>

<style scoped></style>
