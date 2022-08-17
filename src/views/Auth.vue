<template>
  <div class="h-screen flex justify-center items-center">
    <div class="flex flex-col justify-center p-8 max-w-8xl w-4/5 md:w-2/6">
      <div class="mb-8 text-gray-600">
        <Form @submitEvent="handleSubmit()">
          <template #body>
            <div class="inputs mb-6 flex" v-if="isRegister">
              <div class="py-3 center mx-auto">
                <div
                  class="bg-white px-4 py-5 rounded-lg shadow-lg text-center w-48"
                >
                  <div class="flex justify-center content-center mb-4">
                    <img
                      class="w-20 h-20 rounded-full object-cover object-center"
                      :src="previewAvatar || defaultAvatar"
                      alt="Avatar Upload"
                    />
                  </div>
                  <label class="cursor-pointer mt-6">
                    <span
                      v-ripple
                      class="mt-2 leading-normal px-4 py-2 iButton iButton-orange"
                      >大頭照</span
                    >
                    <input
                      type="file"
                      name="avatar"
                      id="avatar"
                      @change="uploadAvatar"
                      accept="image/png, image/jpeg,image/jpg"
                      class="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div class="inputs mb-6" v-if="isRegister">
              <Input
                v-model="userData.username"
                placeholder="name"
                label="Name"
              />
            </div>
            <div class="inputs mb-6">
              <Input
                v-model="userData.email"
                placeholder="email"
                label="Email"
              />
            </div>
            <div class="inputs mb-6">
              <Input
                v-model="userData.password"
                placeholder="password"
                label="Password"
              />
            </div>
          </template>
          <template #footer>
            <button
              v-ripple
              type="submit"
              class="iButton iButton-orange"
              :disabled="v$.$error"
            >
              {{ isRegister ? "註冊" : "登入" }}
            </button>
            <p class="text-sm font-semibold mt-2 pt-1 mb-0">
              {{ isRegister ? "已經有帳號了嗎?" : "還沒有帳號嗎?" }}
              <span
                class="text-orange-600 hover:text-orange-700 focus:text-orange-700 transition duration-200 ease-in-out cursor-pointer"
                @click="isRegister = !isRegister"
                >{{ isRegister ? "登入" : "註冊" }}</span
              >
            </p>
          </template>
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { IUser } from "@/types/auth";
import { useAuthStore } from "@/store/auth";
import { serialize } from "object-to-formdata";
const authStore = useAuthStore();
const isRegister = ref<boolean>(false);
const defaultAvatar = inject<string>("defaultAvatar");
const previewAvatar = ref<string>("");
const userData = reactive<IUser>({
  username: "",
  email: "",
  password: "",
  avatar: "",
});

// 表單驗證規則
const rules = computed(() => {
  if (isRegister.value) {
    return {
      username: { required },
      email: { required, email },
      password: { required },
    };
  }
  return {
    email: { required, email },
    password: { required },
  };
});

const v$ = useVuelidate(rules, userData);

//切換註冊/登入 資料重置
watch(
  () => isRegister.value,
  (val: boolean) => {
    if (val) {
      userData.username = "";
      userData.email = "";
      userData.password = "";
      userData.avatar = "";
    }
  }
);

//設定預覽圖
const uploadAvatar = (e: any): void => {
  previewAvatar.value = URL.createObjectURL(e.target.files[0]);
  userData.avatar = e.target.files[0];
};
const handleSubmit = async (): Promise<void> => {
  const validatorResult = await v$.value.$validate();
  if (!validatorResult) return;
  authFormAction(userData);
};
const authFormAction = async (userAuthData: IUser): Promise<void> => {
  if (isRegister.value) {
    await authStore.register(serialize(userAuthData));
  } else {
    await authStore.login(userAuthData);
  }
};
</script>

<style lang="scss" scoped></style>
