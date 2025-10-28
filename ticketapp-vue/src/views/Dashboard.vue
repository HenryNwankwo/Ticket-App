<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div v-if="error" class="text-red-600 mb-4">{{ error }}</div>
      <DashboardStats :total="total()" :open="open()" :resolved="resolved()" />
      <div class="mt-8"><router-link to='/tickets' class="px-4 py-2 rounded bg-blue-600 text-white">Manage Tickets</router-link></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getSession } from '../lib/session'
import { listTickets } from '../lib/ticketsApi'
import DashboardStats from '../components/DashboardStats.vue'

export default {
  components: { DashboardStats },
  setup(){
    const loading = ref(true), tickets = ref([]), error = ref(null)
    onMounted(async ()=>{
      const s = getSession(); if (!s) return window.location.href = '/auth/login'
      try{ tickets.value = await listTickets() } catch(e){ error.value = 'Failed to load tickets. Please retry.' } finally{ loading.value = false }
    })
    const total = () => tickets.value.length
    const open = () => tickets.value.filter(t=>t.status==='open').length
    const resolved = () => tickets.value.filter(t=>t.status==='closed').length
    return { loading, tickets, error, total, open, resolved }
  }
}
</script>
