import { defineStore } from "pinia";
import { router } from "../routes";
import { IUser } from "@/types/auth";
import { authApi } from "@/services/auth";
interface IAuthState {
  user: IUser | null;
  returnUrl: string;
}
export const useAuthStore = defineStore("auth", {
  state: (): IAuthState => ({
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : null,
    returnUrl: "",
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    //login user
    async login(user: IUser): Promise<void> {
      const res: any = await authApi.login(user);
      this.user = res.user;
      localStorage.setItem("user", JSON.stringify(res.user));
      router.push(this.returnUrl || "/todos");
    },
    // register user
    async register(user: FormData): Promise<void> {
      const res: any = await authApi.register(user);
      this.user = res.user;
      localStorage.setItem("user", JSON.stringify(res.user));
      router.push(this.returnUrl || "/todos");
    },
    //logout user
    logout(): void {
      router.push("/");
      this.user = null;
      localStorage.removeItem("user");
    },
  },
});
