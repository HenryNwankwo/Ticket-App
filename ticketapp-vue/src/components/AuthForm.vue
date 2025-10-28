<template>
  <form @submit.prevent="handleSubmit" class="max-w-md">
    <label class="block mb-2"
      >Email
      <input
        v-model="email"
        class="mt-1 block w-full rounded border px-3 py-2"
        :aria-describedby="errors.email ? 'email-error' : undefined"
      />
    </label>
    <div v-if="errors.email" id="email-error" class="text-red-600 text-sm">
      {{ errors.email }}
    </div>

    <label class="block mt-4 mb-2"
      >Password
      <input
        type="password"
        v-model="password"
        class="mt-1 block w-full rounded border px-3 py-2"
        :aria-describedby="errors.password ? 'password-error' : undefined"
      />
    </label>
    <div
      v-if="errors.password"
      id="password-error"
      class="text-red-600 text-sm"
    >
      {{ errors.password }}
    </div>

    <div class="mt-6 flex gap-3">
      <button type="submit" class="px-4 py-2 rounded bg-blue-600 text-white">
        {{ mode === 'login' ? 'Login' : 'Sign up' }}
      </button>
    </div>
    <div v-if="errors.form" class="text-red-600 mt-3">{{ errors.form }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { setSession } from '../lib/session'
import { useToast } from 'vue-toastification'

export default {
  props: { mode: { type: String, default: 'login' } },
  setup(props){
    const email = ref('')
    const password = ref('')
    const errors = ref({})
    const toast = useToast()

    function validate(){
      const e = {}
      if (!email.value) e.email = 'Email is required.'
      if (!password.value) e.password = 'Password is required.'
      if (password.value && password.value.length < 6) e.password = 'Password must be at least 6 characters.'
      return e
    }

    function handleSubmit(){
      const e = validate(); errors.value = e; if (Object.keys(e).length) return
      if (email.value === 'test@ticketapp.local' && password.value === 'password123'){
        setSession(email.value); toast.success('Logged in'); window.location.href = '/dashboard'
      } else if (props.mode === 'signup') {
        setSession(email.value); toast.success('Account created — logged in'); window.location.href = '/dashboard'
      } else {
        toast.error('Invalid credentials — try again.'); errors.value = { form: 'Invalid credentials.' }
      }
    }

    return { email, password, errors, handleSubmit }
  }
}
</script>
