<template>
  <div class="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h1 class="text-2xl font-bold">Welcome back</h1>
      <p class="text-gray-600 mt-2">Login to access your dashboard and tickets.</p>
    </div>
    <div><AuthForm mode="login" /></div>
  </div>
</template>

<script>
import AuthForm from '../../components/AuthForm.vue'
export default { components: { AuthForm } }
</script>
