<template>
  <nav class="fixed z-50 container flex justify-around py-8 mx-auto bg-white">
    <div class="flex items-center">
      <router-link to="/" class="text-2xl font-black text-orange-500"
        >Todo List</router-link
      >
    </div>
    <div class="flex items-center space-x-2">
      <router-link
        to="/auth"
        v-if="!isLoggedIn"
        class="text-m font-black text-orange-500"
        >登入</router-link
      >
      <DropdownList v-if="isLoggedIn">
        <template #header>
          <img
            class="mr-2 w-8 h-8 rounded-full object-cover"
            :src="
                user.avatar?`${baseApiUrl}/images/${user.avatar}`as string : defaultAvatar as string
              "
            alt="user photo"
          />
          <p>
            {{ user.username }}
          </p>
        </template>
        <template #body>
          <a
            href="#"
            class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white truncate"
            @click="authStore.logout()"
            >登出</a
          >
        </template>
      </DropdownList>
      <Audio v-if="isLoggedIn" />
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
const authStore = useAuthStore();
const { user, isLoggedIn } = storeToRefs(authStore);
const defaultAvatar = inject("defaultAvatar");
const baseApiUrl = inject("baseApiUrl");
</script>

<style scoped></style>
