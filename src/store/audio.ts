import { defineStore } from "pinia";

export const useAudioStore = defineStore("audio", {
  state: () => ({
    soundEnabled: localStorage.getItem("soundEnabled")
      ? JSON.parse(localStorage.getItem("soundEnabled") || "")
      : true,
  }),
  getters: {},
  actions: {
    // toggle sound
    toggleSound(): void {
      this.soundEnabled = !this.soundEnabled;
      localStorage.setItem("soundEnabled", JSON.stringify(this.soundEnabled));
    },
    // play sound
    playSound(sound: string): void {
      if (!this.soundEnabled) return;
      const audio = new Audio(sound);
      audio.play();
    },
  },
});
