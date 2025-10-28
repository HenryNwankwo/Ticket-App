
/* Client-side logic for Twig implementation.
   Uses localStorage keys: ticketapp_session, ticketapp_tickets
   Mirrors behavior of Next.js and Vue implementations. */

const SESSION_KEY = 'ticketapp_session'
const TICKETS_KEY = 'ticketapp_tickets'

export function getSession(){ try { const raw = localStorage.getItem(SESSION_KEY); if (!raw) return null; const obj = JSON.parse(raw); if (!obj.expiresAt || new Date(obj.expiresAt) < new Date()){ localStorage.removeItem(SESSION_KEY); return null } return obj } catch(e){ return null } }
export function setSession(email){ const token = Math.random().toString(36).slice(2) + Date.now().toString(36); const session = { token, user: { email }, expiresAt: new Date(Date.now() + 1000*60*60*24).toISOString() }; localStorage.setItem(SESSION_KEY, JSON.stringify(session)); return session }
export function clearSession(){ localStorage.removeItem(SESSION_KEY) }

function delay(ms=250){ return new Promise(r => setTimeout(r, ms)) }

export async function listTickets(){ await delay(); const raw = localStorage.getItem(TICKETS_KEY) || '[]'; return JSON.parse(raw) }
export async function getTicket(id){ await delay(); const all = await listTickets(); return all.find(t => t.id === id) || null }
export async function createTicket(payload){ await delay(); const all = await listTickets(); const now = new Date().toISOString(); const id = Math.random().toString(36).slice(2) + Date.now().toString(36); const ticket = { id, createdAt: now, updatedAt: now, ...payload }; all.unshift(ticket); localStorage.setItem(TICKETS_KEY, JSON.stringify(all)); return ticket }
export async function updateTicket(id, changes){ await delay(); const all = await listTickets(); const idx = all.findIndex(t=>t.id===id); if (idx===-1) throw new Error('Ticket not found'); const updated = { ...all[idx], ...changes, updatedAt: new Date().toISOString() }; all[idx] = updated; localStorage.setItem(TICKETS_KEY, JSON.stringify(all)); return updated }
export async function deleteTicket(id){ await delay(); let all = await listTickets(); all = all.filter(t=>t.id!==id); localStorage.setItem(TICKETS_KEY, JSON.stringify(all)); return true }

window.TicketApp = { getSession, setSession, clearSession, listTickets, getTicket, createTicket, updateTicket, deleteTicket }
