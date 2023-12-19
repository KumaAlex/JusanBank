import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserId = defineStore('userId', () => {
  let userId = ref(0)
  function setUserId(id) {
    userId = id;
  }
  function removeUserId() {
    userId = null;
  }

  return { userId, setUserId, removeUserId }
})
