<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Ticket</h1>
    <div v-if="loading">Loading...</div>
    <div v-else class="bg-white p-6 rounded-lg shadow">
      <h2 class="text-xl font-semibold">{{ ticket.title }}</h2>
      <p class="mt-2 text-gray-600">{{ ticket.description }}</p>
      <div class="mt-4">Status: <strong>{{ ticket.status }}</strong></div>
      <div class="mt-6"><router-link :to="`/tickets/${ticket.id}/edit`" class="px-3 py-2 rounded bg-blue-600 text-white">Edit</router-link></div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getSession } from '../../lib/session'
import { getTicket } from '../../lib/ticketsApi'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export default {
  setup(){
    const route = useRoute(), router = useRouter(), toast = useToast()
    const id = route.params.id
    const ticket = ref(null), loading = ref(true)
    onMounted(async ()=>{
      if (!getSession()) return window.location.href='/auth/login'
      try{ const t = await getTicket(id); if(!t){ toast.error('Ticket not found'); router.push('/tickets'); return } ticket.value = t }catch(e){ toast.error('Failed to load ticket') } finally{ loading.value=false }
    })
    return { ticket, loading }
  }
}
</script>
