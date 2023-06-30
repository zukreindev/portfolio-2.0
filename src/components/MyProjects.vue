<script setup lang="ts">
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const projects: {
  title: string
  language: string
  link: string
  css?: string
  livepreview?: string
}[] = [
  {
    title: 'Keyboard AFK Client',
    language: 'Go Lang',
    link: 'https://github.com/zukrein00/KeyboardAFKClient'
  },
  {
    title: 'OpenAnime',
    language: 'Svelte',
    link: 'https://github.com/OpenAnime',
    livepreview: 'https://openani.me'
  },
  {
    title: 'Go KeyLogger',
    language: 'Go Lang',
    link: 'https://github.com/zukrein00/Go-keylogger'
  },
  {
    title: 'Çelik Hurda',
    language: 'Svelte',
    link: 'https://github.com/zukrein00/celikhurda',
    livepreview: 'https://celikhurda.net'
  }
]
</script>

<template>
  <div class="bg-zukrein-200 relative overflow-hidden" id="projects">
    <section class="container flex flex-col items-center py-28 justify-center gap-14 z-20">
      <div class="flex flex-col items-center gap-1 z-20">
        <h2 class="text-4xl font-bold uppercase">Projects</h2>
        <div class="w-20 h-1 rounded-full bg-zukrein-100"></div>
      </div>
      <Carousel
        :items-to-show="3"
        :breakpoints="{
          768: {
            itemsToShow: 1
          },
          1024: {
            itemsToShow: 2
          },
          1366: {
            itemsToShow: 3
          }
        }"
        class="z-20 max-w-[1366px]"
      >
        <Slide v-for="(project, i) in projects" :key="i">
          <div class="bg-zukrein-600 shadow-lg rounded-lg z-20 overflow-hidden">
            <div class="p-4 flex flex-col gap-5">
              <div class="flex flex-col gap-2">
                <h3 class="font-semibold text-lg text-start">{{ project.title }}</h3>
                <p class="flex items-center gap-1">
                  <svg
                    width="24"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M43.3333 6.5H8.66667C6.27684 6.5 4.33334 8.4435 4.33334 10.8333V41.1667C4.33334 43.5565 6.27684 45.5 8.66667 45.5H43.3333C45.7232 45.5 47.6667 43.5565 47.6667 41.1667V10.8333C47.6667 8.4435 45.7232 6.5 43.3333 6.5ZM8.66667 41.1667V15.1667H43.3333L43.3377 41.1667H8.66667Z"
                      fill="#13FF00"
                    />
                    <path
                      d="M20.1348 20.1349L12.103 28.1667L20.1348 36.1986L23.1985 33.1349L18.2303 28.1667L23.1985 23.1986L20.1348 20.1349ZM31.8652 20.1349L28.8015 23.1986L33.7697 28.1667L28.8015 33.1349L31.8652 36.1986L39.897 28.1667L31.8652 20.1349Z"
                      fill="#13FF00"
                    /></svg
                  ><span class="text-base text-zukrein-400">{{ project.language }}</span>
                </p>
              </div>
              <div class="flex gap-10 items-center justify-between">
                <a :href="project.link" target="_blank" class="font-semibold rounded-lg flex gap-2"
                  >View Code
                  <svg
                    width="27"
                    height="24"
                    viewBox="0 0 27 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 12L21.3536 11.6464L21.7071 12L21.3536 12.3536L21 12ZM1 12.5C0.723858 12.5 0.5 12.2761 0.5 12C0.5 11.7239 0.723858 11.5 1 11.5V12.5ZM17.3536 7.64645L21.3536 11.6464L20.6464 12.3536L16.6464 8.35355L17.3536 7.64645ZM21.3536 12.3536L17.3536 16.3536L16.6464 15.6464L20.6464 11.6464L21.3536 12.3536ZM21 12.5H1V11.5H21V12.5Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  :href="project.livepreview"
                  target="_blank"
                  :class="`px-5 py-1.5 font-semibold rounded-lg  text-zukrein-600 ${
                    project.livepreview
                      ? 'pointer-events-auto bg-zukrein-100'
                      : 'opacity-50 pointer-events-none bg-zukrein-300 text-white'
                  }`"
                  >Live Preview</a
                >
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </section>
    <div class="-z-10">
      <div class="absolute -top-96 -right-96">
        <svg
          width="712"
          height="712"
          viewBox="0 0 1068 1068"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="534" cy="534" r="534" fill="#252525" />
        </svg>
      </div>
      <div class="absolute -bottom-96 -left-96">
        <svg
          width="712"
          height="712"
          viewBox="0 0 1068 1068"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="534" cy="534" r="534" fill="#252525" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__slide--sliding {
  transition: 0.3s ease-out;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 0.8;
}

.carousel__slide--next {
  opacity: 0.8;
}
.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.01);
}
</style>
