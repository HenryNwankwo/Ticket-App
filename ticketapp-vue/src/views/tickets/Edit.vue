<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">Ticket</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <TicketForm :initial="ticket" :onSubmit="handleUpdate" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getSession } from '../../lib/session'
import { getTicket, updateTicket } from '../../lib/ticketsApi'
import TicketForm from '../../components/TicketForm.vue'
import { useRoute, useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export default {
  components: { TicketForm },
  setup(){ 
    const route = useRoute(), router = useRouter(), toast = useToast()
    const id = route.params.id, ticket = ref(null), loading = ref(true)
    onMounted(async ()=>{
      if (!getSession()) return window.location.href='/auth/login'
      try{ const t = await getTicket(id); if(!t){ toast.error('Ticket not found'); router.push('/tickets'); return } ticket.value = t }catch(e){ toast.error('Failed to load ticket') } finally{ loading.value=false }
    })
    async function handleUpdate(changes){ try{ await updateTicket(id, changes); toast.success('Updated'); router.push('/tickets') }catch(e){ toast.error('Failed to update ticket') } }
    return { ticket, loading, handleUpdate }
  }
}
</script>
