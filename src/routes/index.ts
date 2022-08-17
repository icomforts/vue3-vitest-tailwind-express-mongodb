import {
  createWebHistory,
  createRouter,
  RouteRecordRaw,
  RouteLocationNormalized,
} from "vue-router";
import { useAuthStore } from "../store/auth";
//  Layouts
import defaultLayout from "@/layouts/Default.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: defaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
      },
    ],
  },
  {
    path: "/todos",
    name: "Todos",
    component: defaultLayout,
    children: [
      {
        path: "",
        name: "Todos",
        component: () =>
          import(/* webpackChunkName: "Todos" */ "@/views/Todos.vue"),
      },
    ],
    meta: {
      isAuthenticated: true,
    },
  },
  {
    path: "/auth",
    name: "Auth",
    component: defaultLayout,
    children: [
      {
        path: "",
        name: "Auth",
        component: () =>
          import(/* webpackChunkName: "auth" */ "@/views/Auth.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: () =>
      import(/* webpackChunkName: "404" */ "@/views/PageNotFound.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});
router.beforeEach(
  (to: RouteLocationNormalized, from: RouteLocationNormalized, next) => {
    const auth = useAuthStore();
    if (!auth.user && to.meta.isAuthenticated) {
      next({ path: "/auth" });
    } else {
      next();
    }
  }
);
