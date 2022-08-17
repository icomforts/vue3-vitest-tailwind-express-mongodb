export interface ITodo {
  _id?: string;
  userId?: string;
  title: string;
  isCompleted: boolean;
}

export enum TodoListType {
  All = "all",
  Active = "active",
  Completed = "completed",
}
