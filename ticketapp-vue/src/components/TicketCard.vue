<template>
  <div class="bg-white rounded-lg shadow p-4">
    <div class="flex items-start justify-between gap-3">
      <div>
        <h3 class="font-semibold">{{ ticket.title }}</h3>
        <p class="text-sm text-gray-600 mt-2">{{ ticket.description || '—' }}</p>
      </div>
      <div class="flex flex-col items-end gap-2">
        <span :class="statusClass">{{ ticket.status }}</span>
        <div class="flex gap-2 mt-2">
          <router-link :to="`/tickets/${ticket.id}`" class="text-sm underline">View</router-link>
          <router-link :to="`/tickets/${ticket.id}/edit`" class="text-sm underline">Edit</router-link>
          <button @click="onDelete(ticket.id)" class="text-sm text-red-600">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { ticket: Object, onDelete: Function },
  computed: {
    statusClass(){ 
      const map = { open: 'bg-statusOpen text-white px-2 py-1 rounded-full text-xs', in_progress: 'bg-statusProgress text-white px-2 py-1 rounded-full text-xs', closed: 'bg-statusClosed text-white px-2 py-1 rounded-full text-xs' }
      return map[this.ticket.status] || map.closed
    }
  }
}
</script>
