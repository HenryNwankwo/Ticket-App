<template>
  <div>
    <div class="flex items-center justify-between">
      <h1 class="text-2xl font-bold">Tickets</h1>
      <router-link to="/tickets/new" class="px-3 py-2 rounded bg-blue-600 text-white">New Ticket</router-link>
    </div>
    <div class="mt-6 grid md:grid-cols-3 gap-4">
      <div class="md:col-span-2">
        <div v-if="loading">Loading...</div>
        <div v-else class="grid gap-4">
          <div v-if="tickets.length===0" class="text-gray-600">No tickets yet.</div>
          <TicketCard v-for="t in tickets" :key="t.id" :ticket="t" :onDelete="handleDelete" />
        </div>
      </div>
      <aside>
        <h2 class="text-lg font-semibold">Create Ticket</h2>
        <div class="mt-4"><TicketForm :onSubmit="handleCreate" /></div>
      </aside>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { getSession } from '../../lib/session'
import { listTickets, createTicket, deleteTicket } from '../../lib/ticketsApi'
import TicketCard from '../../components/TicketCard.vue'
import TicketForm from '../../components/TicketForm.vue'
import { useToast } from 'vue-toastification'

export default {
  components: { TicketCard, TicketForm },
  setup(){
    const loading = ref(true), tickets = ref([]), error = ref(null)
    const toast = useToast()
    onMounted(async ()=>{ const s = getSession(); if (!s) return window.location.href = '/auth/login'; await load() })
    async function load(){ loading.value = true; try{ tickets.value = await listTickets() } catch(e){ error.value = 'Failed to load tickets. Please retry.' } finally{ loading.value = false } }
    async function handleCreate(payload){ try{ const t = await createTicket(payload); tickets.value.unshift(t); toast.success('Ticket created') }catch(e){ toast.error('Failed to create ticket') } }
    async function handleDelete(id){ if(!confirm('Delete this ticket?')) return; try{ await deleteTicket(id); tickets.value = tickets.value.filter(p=>p.id!==id); toast.success('Deleted') }catch(e){ toast.error('Failed to delete ticket') } }
    return { loading, tickets, error, handleCreate, handleDelete }
  }
}
</script>
