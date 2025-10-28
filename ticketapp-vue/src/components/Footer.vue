<template>
  <footer class="bg-white border-t">
    <div class="container-centered px-6 py-6 text-sm text-gray-600">
      © {{ year }} TicketApp — Built for the Stage 2 task.
    </div>
  </footer>
</template>

<script>
export default {
  data(){ return { year: new Date().getFullYear() } }
}
</script>
