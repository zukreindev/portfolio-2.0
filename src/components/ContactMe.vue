<script setup lang="ts">
import { ref, reactive } from 'vue'

//the package has no declaration file
// @ts-ignore
import VueTurnstile from 'vue-turnstile'
import { toast } from 'vue3-toastify'

const input = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})
const error = ref(false)
const errorText = ref('Something went wrong. Please try again later.')
const success = ref(false)
const loading = ref(false)
const cftoken = ref('')
const cfturnstile = ref()

const siteKey = '0x4AAAAAAAFXPmnYhhVF7ZEP'

async function submitForm() {
  if (input.name === '' || input.email === '' || input.message === '') {
    error.value = true
    return
  }

  loading.value = true

  const response = await fetch('https://api.zukrein.me/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: input.name,
      email: input.email,
      subject: input.subject,
      message: input.message,
      cf_turnstile_token: cftoken.value
    })
  })

  if (response.status === 200) {
    success.value = true
    input.name = ''
    input.email = ''
    input.message = ''
    input.subject = ''
    toast.success('Message sent successfully!', {
      theme: 'dark',
      position: 'bottom-right'
    })
  } else {
    const data = await response.json()
    error.value = true
    errorText.value = data.error.message
    toast.error(data.error.message, {
      theme: 'dark',
      position: 'bottom-right'
    })
  }
  // @ts-ignore
  window.turnstile.reset()
  loading.value = false
}
</script>

<template>
  <div class="bg-zukrein-500 flex flex-col items-center py-16" id="contact">
    <div class="md:max-w-[1000px]">
      <div class="block md:flex rounded-xl overflow-hidden">
        <section class="bg-[#272727] py-10 md:py-12 flex flex-col justify-between gap-10 md:gap-16">
          <div class="flex gap-1 items-center font-semibold text-xl md:text-2xl pl-10 md:pl-16">
            <p>CONTACT</p>
            <div class="h-0.5 w-44 md:w-56 bg-white"></div>
          </div>
          <div class="hidden md:flex flex-col gap-6 md:gap-8 pl-10 md:pl-16">
            <div class="flex items-center text-sm gap-4">
              <svg
                width="25"
                height="25"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.25 11.3335L15.4283 18.7857C16.3801 19.4203 17.6199 19.4203 18.5716 18.7857L29.75 11.3335H4.25ZM7.08333 26.9168H26.9167C28.4815 26.9168 29.75 25.6483 29.75 24.0835V9.91683C29.75 8.35202 28.4815 7.0835 26.9167 7.0835H7.08333C5.51853 7.0835 4.25 8.35202 4.25 9.91683V24.0835C4.25 25.6483 5.51853 26.9168 7.08333 26.9168Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>contact@zukrein.me</p>
            </div>
            <div class="flex items-center text-sm gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <path d="M5.5 16c5 2.5 8 2.5 13 0" />
                  <path
                    d="m15.5 17.5l1 2s4.171-1.328 5.5-3.5c0-1 .53-8.147-3-10.5c-1.5-1-4-1.5-4-1.5l-1 2h-2"
                  />
                  <path
                    d="m8.528 17.5l-1 2s-4.171-1.328-5.5-3.5c0-1-.53-8.147 3-10.5c1.5-1 4-1.5 4-1.5l1 2h2"
                  />
                  <path
                    d="M8.5 14c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2s1.5.895 1.5 2s-.672 2-1.5 2Zm7 0c-.828 0-1.5-.895-1.5-2s.672-2 1.5-2s1.5.895 1.5 2s-.672 2-1.5 2Z"
                  />
                </g>
              </svg>

              <p>zukreindev</p>
            </div>
            <div class="flex items-center text-sm gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.536 10.536 0 0 1 12 6.32a10.49 10.49 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"
                />
              </svg>

              <p>zukrein00</p>
            </div>
          </div>
          <div class="hidden md:block h-0.5 w-44 md:w-56 bg-white"></div>
        </section>
        <form
          class="bg-[#202020] md:pt-16 py-5 md:pb-10 px-5 md:px-8 flex flex-col gap-6 md:gap-7 relative"
          @submit.prevent="submitForm"
        >
          <div class="flex gap-3 md:gap-7 flex-col md:flex-row w-full justify-between">
            <div class="w-full md:w-1/2">
              <p>Your Name</p>
              <input class="w-full" v-model="input.name" type="text" required name="name" />
            </div>
            <div class="w-full md:w-1/2">
              <p>Your Email</p>
              <input class="w-full" v-model="input.email" type="email" required name="email" />
            </div>
          </div>
          <div class="w-full">
            <p>Your Subject</p>
            <input class="w-full" v-model="input.subject" type="text" required name="subject" />
          </div>
          <div class="flex flex-col gap-6 md:gap-7">
            <div class="w-full">
              <p>Message</p>
              <textarea name="" v-model="input.message" class="w-full h-24" required></textarea>
            </div>
            <div class="flex flex-col md:flex-row justify-between gap-5 items-center">
              <VueTurnstile :site-key="siteKey" v-model="cftoken" ref="cfturnstile" theme="dark" />
              <button
                v-if="!loading"
                type="submit"
                class="px-7 py-3 flex items-center justify-center gap-3 rounded-lg bg-zukrein-100 text-zukrein-200 font-semibold w-fit h-fit"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.25 14.5001L13.1094 15.2605C12.4376 15.7084 11.5624 15.7084 10.8906 15.2605L9.75 14.5001M3 19.0001V10.0705C3 9.40177 3.3342 8.7773 3.8906 8.40637L10.8906 3.73971C11.5624 3.29184 12.4376 3.29184 13.1094 3.73971L20.1094 8.40637C20.6658 8.7773 21 9.40177 21 10.0705V19.0001H3ZM3 19.0001C3 20.1047 3.89543 21.0001 5 21.0001H19C20.1046 21.0001 21 20.1047 21 19.0001H3ZM3 19.0001L9.75 14.5001L3 19.0001ZM21 19.0001L14.25 14.5001L21 19.0001ZM3 10.0001L9.75 14.5001L3 10.0001ZM21 10.0001L14.25 14.5001L21 10.0001Z"
                    stroke="#202020"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                Submit
              </button>
              <button
                v-else
                type="submit"
                class="px-7 py-3 flex items-center justify-center gap-3 rounded-lg bg-zukrein-100 text-zukrein-200 font-semibold w-fit h-fit"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.25 14.5001L13.1094 15.2605C12.4376 15.7084 11.5624 15.7084 10.8906 15.2605L9.75 14.5001M3 19.0001V10.0705C3 9.40177 3.3342 8.7773 3.8906 8.40637L10.8906 3.73971C11.5624 3.29184 12.4376 3.29184 13.1094 3.73971L20.1094 8.40637C20.6658 8.7773 21 9.40177 21 10.0705V19.0001H3ZM3 19.0001C3 20.1047 3.89543 21.0001 5 21.0001H19C20.1046 21.0001 21 20.1047 21 19.0001H3ZM3 19.0001L9.75 14.5001L3 19.0001ZM21 19.0001L14.25 14.5001L21 19.0001ZM3 10.0001L9.75 14.5001L3 10.0001ZM21 10.0001L14.25 14.5001L21 10.0001Z"
                    stroke="#202020"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                Submitting...
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
