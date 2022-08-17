import { defineStore } from "pinia";
import { todoApi } from "@/services/todo";
import { ITodo } from "../types/todo";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todoList: [] as ITodo[],
  }),
  getters: {},
  actions: {
    //get all todo by userId
    async getAll(userId: string): Promise<void> {
      const res: any = await todoApi.getAll(userId);
      this.todoList = res.todos;
    },
    //add todo
    async add(todo: ITodo): Promise<void> {
      const res: any = await todoApi.add(todo);
      this.todoList.push(res.todo);
    },
    //update todo by id
    async update(todo: ITodo): Promise<void> {
      const res: any = await todoApi.update(todo);
      const index = this.todoList.findIndex((item) => item._id === todo._id);
      this.todoList[index] = res.todo;
    },
    //delete todo by id
    async delete(todo: ITodo): Promise<void> {
      await todoApi.delete(todo);
      const index = this.todoList.findIndex((item) => item._id === todo._id);
      this.todoList.splice(index, 1);
    },
  },
});
