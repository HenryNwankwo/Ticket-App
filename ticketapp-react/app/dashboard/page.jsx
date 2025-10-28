'use client'
import { useEffect, useState } from 'react'
import { getSession } from '../../lib/session'
import { listTickets } from '../../lib/ticketsApi'
import DashboardStats from '../../components/DashboardStats'

export default function DashboardPage(){
  const [loading,setLoading]=useState(true)
  const [tickets,setTickets]=useState([])
  const [error,setError]=useState(null)

  useEffect(()=>{
    const s = getSession(); if (!s) return (window.location.href='/auth/login')
    async function load(){ try{ const data = await listTickets(); setTickets(data) }catch(err){ setError('Failed to load tickets. Please retry.') }finally{ setLoading(false) } }
    load()
  },[])

  const total = tickets.length
  const open = tickets.filter(t=>t.status==='open').length
  const resolved = tickets.filter(t=>t.status==='closed').length

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {loading? <div>Loading...</div> : (
        <>
          {error && <div className="text-red-600 mb-4">{error}</div>}
          <DashboardStats total={total} open={open} resolved={resolved} />
          <div className="mt-8"><a href="/tickets" className="px-4 py-2 rounded bg-blue-600 text-white">Manage Tickets</a></div>
        </>
      )}
    </div>
  )
}
