<template>
  <div class="h-screen flex justify-center items-center">
    <div class="flex flex-col justify-center p-8 max-w-6xl">
      <div class="flex flex-col shadow-md p-10 rounded">
        <TodoInput />
        <!-- todolist type toggle buttons -->
        <TodoTypeSwitch
          :todoListType="todoListType"
          @setTodoListType="setTodoListType"
        />
        <ul class="flex flex-col">
          <!-- todo list item-->
          <TodoListItem
            v-for="todo in todoListComputed"
            :key="todo._id"
            :todo="todo"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from "@/store/auth";
import { useTodoStore } from "@/store/todo";
import { ITodo } from "@/types/todo";
import { TodoListType } from "@/types/todo";

const todoStore = useTodoStore();
const authStore = useAuthStore();
if (authStore.user?._id) todoStore.getAll(authStore.user._id);

const todoListType = ref(TodoListType.Active);

//set todoList type
function setTodoListType(type: TodoListType) {
  todoListType.value = type;
}

//computed todoList with todoListType
const todoListComputed = computed<ITodo[]>(() => {
  const todoList = todoStore.todoList;
  switch (todoListType.value) {
    case "all":
      return todoList;
    case "active":
      return todoList.filter((todo) => !todo.isCompleted);
    case "completed":
      return todoList.filter((todo) => todo.isCompleted);
    default:
      return todoList;
  }
});
</script>
<style></style>
