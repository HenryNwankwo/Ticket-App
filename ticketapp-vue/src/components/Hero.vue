<template>
  <section
    class="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 rounded-xl"
  >
    <div class="container-centered px-6 py-20 relative">
      <!-- Decorative circles -->
      <div
        class="absolute -left-12 -top-12 w-44 h-44 bg-blue-100 rounded-full opacity-60 decor-circle"
        aria-hidden
      ></div>
      <div
        class="absolute -right-12 -bottom-12 w-56 h-56 bg-amber-100 rounded-full opacity-60 decor-circle"
        aria-hidden
      ></div>

      <!-- Main hero section -->
      <div class="flex flex-col md:flex-row items-center gap-8">
        <div class="flex-1">
          <h1 class="text-4xl font-extrabold">
            TicketApp — manage issues, fast and efficiently.
          </h1>
          <p class="mt-4 text-lg text-gray-700">
            Create, track, and resolve tickets with a consistent, accessible
            interface.
          </p>

          <!-- Conditional buttons -->
          <div class="mt-6 flex gap-4 w-full">
            <template v-if="!isLoggedIn">
              <router-link
                to="/auth/login"
                class="px-4 py-2 rounded-lg bg-blue-600 text-white shadow text-center flex-1"
                >Login</router-link
              >
              <router-link
                to="/auth/signup"
                class="px-4 py-2 rounded-lg border border-blue-600 text-center flex-1"
                >Get Started</router-link
              >
            </template>
            <template v-else>
              <router-link
                to="/dashboard"
                class="px-4 py-2 rounded-full bg-blue-600 text-white shadow text-center w-full md:w-40"
                >Go to Dashboard</router-link
              >
            </template>
          </div>
        </div>

        <!-- Preview card -->
        <div class="w-full md:w-1/2">
          <div class="bg-white rounded-2xl shadow p-6">
            <p class="text-sm text-gray-600">
              Preview of ticket cards and stats. Responsive and accessible
              layout.
            </p>
            <div class="mt-4 grid grid-cols-3 gap-3">
              <div class="p-3 rounded-lg shadow text-center">
                Total<br /><strong>12</strong>
              </div>
              <div class="p-3 rounded-lg shadow text-center">
                Open<br /><strong>4</strong>
              </div>
              <div class="p-3 rounded-lg shadow text-center">
                Resolved<br /><strong>7</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hero wave -->
    <img
      src="/shared-assets/hero-wave.svg"
      alt="wave"
      class="absolute bottom-0 left-0 w-full"
    />
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  data() {
    return {
      isLoggedIn: false
    }
  },
  mounted() {
    // Check for ticketapp_session in localStorage
    const session = localStorage.getItem('ticketapp_session')
    this.isLoggedIn = !!session
  }
}
</script>
