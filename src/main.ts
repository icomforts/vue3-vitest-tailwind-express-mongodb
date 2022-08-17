import App from "./App.vue";
import "@/assets/style/index.scss";
import { createRippleDirective } from "vue-create-ripple";
import { createPinia } from "pinia";
import { router } from "@/routes";

const defaultAvatar: string =
  "https://www.looper.com/img/gallery/20-epic-movies-like-avatar-you-need-to-watch-next/l-intro-1645555067.jpg";

createApp(App)
  .directive(
    "ripple",
    createRippleDirective({
      class: "bg-white opacity-20",
    })
  )
  .use(router)
  .use(createPinia())
  .provide("defaultAvatar", defaultAvatar)
  .provide("baseApiUrl", import.meta.env.VITE_API_BASE_URL as string)
  .mount("#app");
