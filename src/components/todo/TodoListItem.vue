<template>
  <div class="flex flex-row justify-between items-center shadow-md p-2 rounded">
    <input
      type="checkbox"
      v-model="todo.isCompleted"
      @change="editTodo(todo)"
    />
    <span class="text-lg" :class="{ 'line-through': todo.isCompleted }">
      {{ todo.title }}
    </span>
    <!-- delete button with x icon -->
    <button @click="removeTodo(todo)" class="text-sm text-red-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-x"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
//todo list item
import { useTodoStore } from "@/store/todo";
import { useAudioStore } from "@/store/audio";
import { ITodo } from "@/types/todo";
const todoStore = useTodoStore();
const audioStore = useAudioStore();

//defineProps with todo
defineProps<{ todo: ITodo }>();

// edit todo
function editTodo(todo: ITodo) {
  todoStore.update(todo);
  if (todo.isCompleted) {
    playAudio();
  }
}

// delete todo
function removeTodo(todo: ITodo) {
  todoStore.delete(todo);
}

// play audio after todo is completed
function playAudio() {
  if (audioStore.soundEnabled)
    audioStore.playSound(
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/373456/337000__corsica-s__cheer-01.wav"
    );
}
</script>

<style scoped></style>
