'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getSession } from '../../../lib/session'
import { getTicket, updateTicket } from '../../../lib/ticketsApi'
import TicketForm from '../../../components/TicketForm'
import toast from 'react-hot-toast'

export default function TicketPage({ params }){
  const { id } = params
  const router = useRouter()
  const [ticket, setTicket] = useState(null)
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState(false)

  useEffect(()=>{
    if (!getSession()) return (window.location.href='/auth/login')
    async function load(){ try{ const t = await getTicket(id); if (!t) { toast.error('Ticket not found'); router.push('/tickets'); return } setTicket(t) }catch(err){ toast.error('Failed to load ticket') }finally{ setLoading(false) } }
    load()
  },[id])

  async function handleUpdate(changes){ try{ const updated = await updateTicket(id, changes); setTicket(updated); toast.success('Updated'); router.push('/tickets') }catch(err){ toast.error('Failed to update ticket') } }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Ticket</h1>
      {!editing ? (
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">{ticket.title}</h2>
          <p className="mt-2 text-gray-600">{ticket.description}</p>
          <div className="mt-4">Status: <strong>{ticket.status}</strong></div>
          <div className="mt-6"><button onClick={()=>setEditing(true)} className="px-3 py-2 rounded bg-blue-600 text-white">Edit</button></div>
        </div>
      ) : (
        <TicketForm initial={ticket} onSubmit={handleUpdate} />
      )}
    </div>
  )
}
