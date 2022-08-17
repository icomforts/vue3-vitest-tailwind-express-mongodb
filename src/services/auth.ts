import api from "@/services/config";
import { IUser } from "@/types/auth";
export const authApi = {
  //register user
  register: async (user: FormData) => {
    return await api.post("/auth/register", user);
  },
  //login user
  login: async (user: IUser) => {
    return await api.post("/auth/login", user);
  },
};
