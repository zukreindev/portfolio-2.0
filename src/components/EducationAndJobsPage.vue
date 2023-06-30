<template>
  <div
    class="flex flex-col items-center py-44 space-y-16 bg-zukrein-500 relative overflow-hidden z-20 pl-8"
  >
    <div
      class="max-w-sm md:max-w-[960px] w-full flex flex-col gap-16 md:gap-0 md:flex-row justify-between"
    >
      <section class="flex flex-col gap-8 md:gap-16">
        <h3 class="font-bold text-4xl">Education</h3>
        <section class="flex flex-col gap-8 md:gap-16">
          <div class="font-medium gap-2 flex flex-col">
            <p class="flex font-semibold text-lg">2016 September - 2020 June</p>
            <h4 class="text-zukrein-100 text-xl">Student</h4>
            <div class="text-[#C1C1C1] text-lg">Şehit Yusuf Alsancak Middle School</div>
          </div>
          <div class="font-medium gap-2 flex flex-col">
            <p class="flex font-semibold text-lg">2020 September - Present</p>
            <h4 class="text-zukrein-100 text-xl">Student</h4>
            <div class="text-[#C1C1C1] text-lg">Kırıkkale High School</div>
          </div>
        </section>
      </section>
      <section class="flex flex-col gap-8 md:gap-16">
        <h3 class="font-bold text-4xl">Jobs</h3>
        <section class="flex flex-col gap-8 md:gap-16">
          <div class="font-medium gap-2 flex flex-col">
            <p class="flex font-semibold text-lg">2021 May - 2022 October</p>
            <h4 class="text-zukrein-100 text-xl">Student</h4>
            <div class="text-[#C1C1C1] text-lg">Veiversa Software Development</div>
          </div>
          <div class="font-medium gap-2 flex flex-col">
            <p class="flex font-semibold text-lg">2022 Agust - Present</p>
            <h4 class="text-zukrein-100 text-xl">Head Developer</h4>
            <div class="text-[#C1C1C1] text-lg">OpenAnime</div>
          </div>
        </section>
      </section>
    </div>
    <div
      class="text-[#272727] text-[200px] font-bold md:absolute -bottom-16 -left-[31.8rem] -z-10 select-none hidden"
    >
      ABOUT ME
    </div>
    <div
      class="text-[#272727] font-bold hidden absolute -top-20 right-1 -z-10 md:grid grid-cols-4 gap-4 select-none"
    >
      <div v-for="_ in 16" :key="_" :class="`h-10 w-10 rounded-full  bg-white bg-opacity-5`"></div>
    </div>
  </div>
</template>
