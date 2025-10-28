<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="p-4 rounded-lg shadow bg-white"><div class="text-sm text-gray-500">Total Tickets</div><div class="text-2xl font-bold">{{ total }}</div></div>
    <div class="p-4 rounded-lg shadow bg-white"><div class="text-sm text-gray-500">Open</div><div class="text-2xl font-bold">{{ open }}</div></div>
    <div class="p-4 rounded-lg shadow bg-white"><div class="text-sm text-gray-500">Resolved</div><div class="text-2xl font-bold">{{ resolved }}</div></div>
  </div>
</template>

<script>
export default { props: { total: {type: Number, default:0}, open: {type:Number,default:0}, resolved: {type:Number,default:0} } }
</script>
