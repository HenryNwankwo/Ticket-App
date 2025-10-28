<template>
  <header class="bg-white shadow">
    <div class="container-centered px-6 py-4 flex items-center justify-between">
      <router-link to="/" class="font-bold text-xl">TicketApp</router-link>
      <nav>
        <ul class="flex items-center gap-4">
          <template v-if="session">
            <li><router-link to="/dashboard">Dashboard</router-link></li>
            <li><router-link to="/tickets">Tickets</router-link></li>
            <li>
              <button @click="logout" class="btn btn-ghost">Logout</button>
            </li>
          </template>
          <template v-else>
            <li><router-link to="/auth/login">Login</router-link></li>
            <li><router-link to="/auth/signup">Sign up</router-link></li>
          </template>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getSession, clearSession } from '../lib/session'

export default {
  setup(){
    const session = ref(null)
    onMounted(()=> session.value = getSession())
    function logout(){ clearSession(); window.location.href = '/' }
    return { session, logout }
  }
}
</script>
