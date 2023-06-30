<script setup lang="ts">
import { onMounted, ref } from 'vue'

let scrollHeight = ref(0)
let totalHeight = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollHeight.value = window.scrollY
  })
  totalHeight.value = document.body.offsetHeight
})
</script>

<template>
  <Transition>
    <div
      v-if="scrollHeight > 0"
      :class="`fixed z-50 bottom-1/2 left-0 ml-2 flex flex-col gap-3 transition-all duration-75`"
    >
      <div class="h-44 w-1 rounded-md bg-zukrein-300">
        <div
          class="h-44 w-1 bg-zukrein-100 rounded-full z-10"
          :style="{ height: `${(scrollHeight / totalHeight) * 100}%` }"
        ></div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
