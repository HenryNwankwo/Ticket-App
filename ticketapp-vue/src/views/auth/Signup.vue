<template>
  <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h1 class="text-2xl font-bold">Create an account</h1>
      <p class="text-gray-600 mt-2">Sign up and start managing tickets immediately.</p>
    </div>
    <div><AuthForm mode="signup" /></div>
  </div>
</template>

<script>
import AuthForm from '../../components/AuthForm.vue'
export default { components: { AuthForm } }
</script>
