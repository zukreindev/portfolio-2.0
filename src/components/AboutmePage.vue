<script setup lang="ts"></script>

<template>
  <div class="bg-zukrein-500 z-20 relative overflow-hidden" id="about">
    <div
      class="container flex flex-col items-center px-4 md:px-0 py-14 md:py-28 justify-center gap-14 z-10"
    >
      <div class="flex flex-col items-center gap-1">
        <h2 class="text-3xl md:text-4xl font-bold uppercase">About me</h2>
        <div class="w-20 h-1 rounded-full bg-zukrein-100"></div>
      </div>

      <div class="flex flex-col gap-10">
        <p
          class="text-[#8F8F8F] max-w-sm md:max-w-[900px] font-medium text-lg md:text-xl text-center"
        >
          I am a UI designer and web developer who is passionate about creating beautiful and
          functional websites. With years of experience in the industry, I have developed a keen eye
          for design and a deep understanding of what it takes to create a successful online
          presence.
        </p>
        <p
          class="text-[#8F8F8F] max-w-sm md:max-w-[900px] font-medium text-lg md:text-xl text-center"
        >
          I have prototyped and developed Landing Pages, Sites, E-commerces, E-mails Marketing, Apps
          and Programs.
        </p>
      </div>
    </div>
    <div
      class="text-[#272727] hidden md:block text-[200px] font-bold absolute -top-12 -right-48 -z-10 select-none"
    >
      ABOUT
    </div>
    <div
      class="text-[#272727] font-bold absolute -bottom-5 -left-5 -z-10 grid grid-cols-4 gap-5 select-none"
    >
      <div
        v-for="_ in 12"
        :key="_"
        :class="`h-12 w-12 rounded-full  bg-white bg-opacity-5 hidden md:block`"
      ></div>
    </div>
  </div>
</template>
