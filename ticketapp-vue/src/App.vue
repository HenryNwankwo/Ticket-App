<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1 bg-gray-50">
      <div class="container-centered px-6 py-10">
        <router-view/>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { Navbar, Footer }
}
</script>
