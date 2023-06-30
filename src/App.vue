<script setup lang="ts">
import { onMounted, ref } from 'vue'
import NavMenu from './components/NavMenu.vue'
import PageIndicator from './components/PageIndicator.vue'
import MainPage from './components/MainPage.vue'
import AboutmePage from './components/AboutmePage.vue'
import MyServicesPage from './components/MyServicesPage.vue'
import EducationAndJobsPage from './components/EducationAndJobsPage.vue'
import MyProjects from './components/MyProjects.vue'
import ContactMe from './components/ContactMe.vue'

let loaded = ref(false)

onMounted(() => {
  loaded.value = true
})
</script>

<template>
  <div v-if="loaded">
    <PageIndicator />
    <NavMenu />
    <MainPage />
    <AboutmePage />
    <MyServicesPage />
    <EducationAndJobsPage />
    <MyProjects />
    <ContactMe />
  </div>
  <div v-else>
    <div class="h-screen w-screen flex justify-center items-center">
      <div class="animate-spin rounded-full h-24 w-24 border-b-4 border-zukrein-100"></div>
    </div>
  </div>
</template>
