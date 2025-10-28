<template>
  <div>
    <h1 class="text-2xl font-bold mb-4">New Ticket</h1>
    <TicketForm :onSubmit="handleCreate" />
  </div>
</template>

<script>
import TicketForm from '../../components/TicketForm.vue'
import { createTicket } from '../../lib/ticketsApi'
import { getSession } from '../../lib/session'
import { useToast } from 'vue-toastification'
export default {
  components: { TicketForm },
  setup(){
    const toast = useToast()
    if (typeof window !== 'undefined' && !getSession()){ window.location.href = '/auth/login' }
    async function handleCreate(payload){ try{ await createTicket(payload); toast.success('Ticket created'); window.location.href='/tickets' }catch(e){ toast.error('Failed to create ticket') } }
    return { handleCreate }
  }
}
</script>
