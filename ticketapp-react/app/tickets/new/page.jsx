'use client'
import TicketForm from '../../../components/TicketForm'
import { getSession } from '../../../lib/session'
import { createTicket } from '../../../lib/ticketsApi'
import toast from 'react-hot-toast'

export default function NewTicketPage(){
  if (typeof window !== 'undefined' && !getSession()){ window.location.href = '/auth/login'; return null }

  async function handleCreate(payload){ try{ await createTicket(payload); toast.success('Ticket created'); window.location.href = '/tickets' }catch(err){ toast.error('Failed to create ticket') } }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">New Ticket</h1>
      <TicketForm onSubmit={handleCreate} />
    </div>
  )
}
