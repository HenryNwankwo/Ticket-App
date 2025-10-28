export default function DashboardStats({ total=0, open=0, resolved=0 }){
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="p-4 rounded-lg shadow bg-white"><div className="text-sm text-gray-500">Total Tickets</div><div className="text-2xl font-bold">{total}</div></div>
      <div className="p-4 rounded-lg shadow bg-white"><div className="text-sm text-gray-500">Open</div><div className="text-2xl font-bold">{open}</div></div>
      <div className="p-4 rounded-lg shadow bg-white"><div className="text-sm text-gray-500">Resolved</div><div className="text-2xl font-bold">{resolved}</div></div>
    </div>
  )
}
