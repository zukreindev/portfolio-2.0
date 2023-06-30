<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type SocialMediaButton = {
  icon: string
  link: string
}

let socialMediaButtons = ref<SocialMediaButton[]>([])
let checkData = ref(false)

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.from('#circleAnimate', {
    scrollTrigger: {
      trigger: '#circleAnimate',
      start: 'top 80%'
    },
    x: 200,
    y: -60,
    opacity: 0,
    duration: 1
  })

  gsap.from('#leftToRight', {
    scrollTrigger: {
      trigger: '#leftToRight',
      start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 1
  })

  fetch('https://api.lanyard.rest/v1/users/1109212175291133996').then((res) => {
    res.json().then((data) => {
      socialMediaButtons.value = [
        {
          icon: 'mdi:instagram',
          link: data.data.kv.instagram
        },
        {
          icon: 'mdi:github',
          link: data.data.kv.github
        },
        {
          icon: 'mdi:linkedin',
          link: data.data.kv.linkedin
        },
        {
          icon: 'ic:round-discord',
          link: data.data.kv.discord
        }
      ]
      setTimeout(() => [(checkData.value = true)], 1000)
    })
  })
})
</script>

<template>
  <div class="flex h-[80vh] md:h-screen flex-shrink-0 relative items-center overflow-hidden">
    <section class="w-full lg:w-4/5 h-full flex z-20 flex-shrink-0">
      <div
        class="bg-zukrein-200 h-[80vh] md:h-screen w-full lg:w-1/2 flex flex-col justify-center px-4 lg:pl-48 m-0 gap-3"
      >
        <h1
          id="leftToRight"
          class="uppercase font-bold text-4xl md:text-5xl text-zukrein-100 border-b-4 w-fit border-zukrein-100"
        >
          zukrein
        </h1>
        <h2 id="leftToRight" class="font-bold text-2xl md:text-4xl">
          Front-end Developer & UI Designer
        </h2>
        <p id="leftToRight" class="text-gray-300 text-sm md:text-base">
          I am a UI designer and web developer who is passionate about creating beautiful and
          functional websites.
        </p>
        <div id="leftToRight" class="flex gap-3 mt-5">
          <button
            class="py-2 px-1 md:px-3 text-sm md:text-base transition-all hover:bg-zukrein-300 rounded-md font-semibold flex gap-2 md:gap-3 items-center justify-center"
          >
            <Icon icon="ci:cloud-download" width="25px" />
            <span>Download CV</span>
          </button>
          <a
            href="#about"
            class="py-2 px-1 md:px-3 text-sm md:text-base text-gray-800 bg-zukrein-100 transition-all hover:bg-opacity-90 rounded-md font-semibold text-color flex gap-2 md:gap-3 items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
              <path
                fill="black"
                d="m12 17l-5-5h3V8h4v4h3l-5 5m0-15a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8Z"
              />
            </svg>
            <span class="text-[#202020] font-bold">About Portfolio</span>
          </a>
        </div>
        <div id="leftToRight" class="flex gap-3 mt-3" v-if="checkData">
          <a
            class="flex items-center justify-center bg-zukrein-300 text-xl md:text-2xl h-8 md:h-10 w-8 md:w-10 rounded-full hover:bg-opacity-80 transition-all duration-300 hover:scale-105"
            :href="socialmediabutton.link"
            v-for="(socialmediabutton, i) in socialMediaButtons"
            :key="i"
            target="_blank"
          >
            <icon :icon="socialmediabutton.icon" />
          </a>
        </div>
        <div v-else class="flex gap-3 mt-3" id="leftToRight">
          <div
            class="flex items-center justify-center bg-zukrein-300 text-xl md:text-2xl h-8 md:h-10 w-8 md:w-10 rounded-full hover:bg-opacity-80 transition-all duration-300 hover:scale-105"
            v-for="(a, i) in 4"
            :key="i"
            target="_blank"
          ></div>
        </div>
      </div>
      <div
        class="clipSection hidden lg:block w-1/3 h-full bg-zukrein-200 z-0 pr-1 border border-zukrein-200"
      ></div>
    </section>
    <div class="max-lg:block absolute left-[34%] top-[8%]">
      <div
        class="h-[90vh] w-[90vh] border-8 border-zukrein-100 rounded-full glowEffect"
        id="circleAnimate"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.clipSection {
  clip-path: polygon(-0.2% 0, -0.2% 100%, 100% 100%);
}

.glowEffect {
  -webkit-box-shadow: 0px 0px 30px 2px rgba(17, 255, 0, 1);
  -moz-box-shadow: 0px 0px 30px 2px rgba(17, 255, 0, 1);
  box-shadow: 0px 0px 30px 2px rgba(17, 255, 0, 1);
}
</style>
