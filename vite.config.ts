import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import {
  ElementPlusResolver,
  AntDesignVueResolver,
  VantResolver,
  HeadlessUiResolver,
  ElementUiResolver,
} from "unplugin-vue-components/resolvers";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    //vitest
    // test:{

    // }
  },
  plugins: [
    vue(),
    //components auto import
    Components({
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        VantResolver(),
        HeadlessUiResolver(),
        ElementUiResolver(),
      ],
    }),
    // plugins auto import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        // "vue-i18n",
        // "@vueuse/head",
        "@vueuse/core",
        "pinia",
      ],
    }),
  ],
});
