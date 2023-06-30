<script setup lang="ts">
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
const routes = [
  {
    name: 'Home',
    path: '#'
  },
  {
    name: 'About',
    path: '#about'
  },
  {
    name: 'Projects',
    path: '#projects'
  },
  {
    name: 'Contact',
    path: '#contact'
  }
]

const openedNavbar = ref(false)
const scrollHeight = ref(0)
onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollHeight.value = window.scrollY
  })

  gsap.registerPlugin(ScrollTrigger)

  gsap.to('.topToBottom', {
    opacity: 1,
    duration: 0.15,
    stagger: 0.15,
    y: 0
  })
})
</script>

<template>
  <div class="fixed w-full z-50">
    <!--Computer-->
    <div
      :class="`hidden md:flex top-0 w-full justify-center md:space-x-12 py-4 items-center ${
        scrollHeight > 100 ? 'backdrop-blur-sm' : ''
      }`"
    >
      <a
        v-for="(route, i) in routes"
        :href="route.path"
        :key="i"
        class="topToBottom opacity-0 -translate-y-12 text-lg hover:text-zukrein-100 transition-all text-shadow duration-300"
      >
        {{ route.name }}
      </a>
    </div>

    <!--Mobile-->
    <div class="md:hidden p-2 w-full backdrop-blur-md z-50 flex flex-col gap-2">
      <div class="flex items-center justify-between w-full px-2">
        <h2 class="text-lg font-semibold">zukrein</h2>
        <div
          class=""
          @click="
            () => {
              !openedNavbar ? (openedNavbar = true) : (openedNavbar = false)
            }
          "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 1024 1024">
            <path
              fill="#13ff00"
              d="M160 448a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V160.064a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32V416a32 32 0 0 1-32 32H608zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H160zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h255.936a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32H608z"
            />
          </svg>
        </div>
      </div>
      <Transition>
        <div
          v-if="openedNavbar"
          @mouseleave="openedNavbar = false"
          class="flex flex-col top-0 w-full justify-center md:space-x-12 items-center"
        >
          <a
            v-for="(route, i) in routes"
            :href="route.path"
            :key="i"
            class="w-full text-center rounded-md text-lg hover:text-zukrein-200 font-semibold hover:bg-zukrein-100 py-2 transition-all text-shadow duration-300"
          >
            {{ route.name }}
          </a>
        </div>
      </Transition>
    </div>
  </div>
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
