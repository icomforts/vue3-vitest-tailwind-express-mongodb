import api from "@/services/config";
import { ITodo } from "@/types/todo";
export const todoApi = {
  //get all todo
  getAll: async (userId: string) => {
    const url = `/todo/${userId}`;
    return await api.get(url);
  },
  //add todo
  add: async (todo: ITodo) => {
    const url = `/todo`;
    return await api.post(url, todo);
  },
  //update todo
  update: async (todo: ITodo) => {
    const url = `/todo/${todo._id}`;
    return await api.put(url, todo);
  },
  //delete todo
  delete: async (todo: ITodo) => {
    const url = `/todo/${todo._id}`;
    return await api.delete(url);
  },
};
