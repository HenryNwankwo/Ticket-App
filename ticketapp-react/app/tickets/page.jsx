'use client'
import { useEffect, useState } from 'react'
import { getSession } from '../../lib/session'
import { listTickets, createTicket, deleteTicket } from '../../lib/ticketsApi'
import TicketCard from '../../components/TicketCard'
import TicketForm from '../../components/TicketForm'
import toast from 'react-hot-toast'

export default function TicketsPage(){
  const [loading,setLoading]=useState(true)
  const [tickets,setTickets]=useState([])
  const [error,setError]=useState(null)

  useEffect(()=>{ const s = getSession(); if (!s) return (window.location.href='/auth/login'); load() },[])

  async function load(){ setLoading(true); try{ const data = await listTickets(); setTickets(data) }catch(err){ setError('Failed to load tickets. Please retry.') }finally{ setLoading(false) } }

  async function handleCreate(payload){ try{ const t = await createTicket(payload); setTickets(prev=>[t,...prev]); toast.success('Ticket created') }catch(err){ toast.error('Failed to create ticket') } }
  async function handleDelete(id){ if (!confirm('Delete this ticket?')) return; try{ await deleteTicket(id); setTickets(prev=>prev.filter(p=>p.id!==id)); toast.success('Deleted') }catch(err){ toast.error('Failed to delete ticket') } }

  return (
    <div>
      <div className="flex items-center justify-between"><h1 className="text-2xl font-bold">Tickets</h1><a href="/tickets/new" className="px-3 py-2 rounded bg-blue-600 text-white">New Ticket</a></div>
      <div className="mt-6 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {loading? <div>Loading...</div> : (
            <div className="grid gap-4">
              {tickets.length===0 && <div className="text-gray-600">No tickets yet.</div>}
              {tickets.map(t=>(<TicketCard key={t.id} ticket={t} onDelete={handleDelete} />))}
            </div>
          )}
        </div>
        <aside>
          <h2 className="text-lg font-semibold">Create Ticket</h2>
          <div className="mt-4"><TicketForm onSubmit={handleCreate} /></div>
        </aside>
      </div>
    </div>
  )
}
