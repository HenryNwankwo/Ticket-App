<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-4 rounded-lg shadow">
    <label class="block mb-2">Title
      <input v-model="title" class="mt-1 block w-full rounded border px-3 py-2" :aria-describedby="errors.title ? 'title-error' : undefined" />
    </label>
    <div v-if="errors.title" id="title-error" class="text-red-600 text-sm">{{ errors.title }}</div>

    <label class="block mt-4 mb-2">Description
      <textarea v-model="description" class="mt-1 block w-full rounded border px-3 py-2" :aria-describedby="errors.description ? 'desc-error' : undefined"></textarea>
    </label>
    <div v-if="errors.description" id="desc-error" class="text-red-600 text-sm">{{ errors.description }}</div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <label> Status
        <select v-model="status" class="mt-1 block w-full rounded border px-3 py-2">
          <option value="open">open</option>
          <option value="in_progress">in_progress</option>
          <option value="closed">closed</option>
        </select>
      </label>
      <label> Priority
        <select v-model="priority" class="mt-1 block w-full rounded border px-3 py-2">
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </label>
    </div>

    <div v-if="errors.status" class="text-red-600 text-sm">{{ errors.status }}</div>

    <div class="mt-6 flex gap-3">
      <button type="submit" class="px-4 py-2 rounded bg-blue-600 text-white">Save</button>
    </div>
  </form>
</template>

<script>
import { ref, watch } from 'vue'
import { useToast } from 'vue-toastification'
const VALID_STATUSES = ['open','in_progress','closed']

export default {
  props: { initial: { type: Object, default: () => ({}) }, onSubmit: Function },
  setup(props){
    const title = ref(props.initial.title || '')
    const description = ref(props.initial.description || '')
    const status = ref(props.initial.status || 'open')
    const priority = ref(props.initial.priority || 'low')
    const errors = ref({})
    const toast = useToast()

    watch(()=>props.initial, (v)=>{ title.value = v.title || ''; description.value = v.description || ''; status.value = v.status || 'open'; priority.value = v.priority || 'low' })

    function validate(){
      const e = {}
      if (!title.value) e.title = 'Title is required.'
      if (title.value && (title.value.length <3 || title.value.length>120)) e.title = 'Title must be between 3 and 120 characters.'
      if (!VALID_STATUSES.includes(status.value)) e.status = 'Status must be open, in_progress, or closed.'
      if (description.value && description.value.length > 2000) e.description = 'Description is too long.'
      return e
    }

    function handleSubmit(){
      const e = validate(); errors.value = e; if (Object.keys(e).length) return
      try { props.onSubmit({ title: title.value, description: description.value, status: status.value, priority: priority.value }) } catch(err){ toast.error(err.message || 'Failed to save ticket') }
    }

    return { title, description, status, priority, errors, handleSubmit }
  }
}
</script>
