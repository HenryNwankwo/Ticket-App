import { v4 as uuidv4 } from 'uuid'

const KEY = 'ticketapp_tickets'
const SIM_DELAY = 250
const FAIL_RATE = 0.04

function delay(ms=SIM_DELAY){ return new Promise(r=> setTimeout(r, ms)) }
function maybeFail(){ if (Math.random() < FAIL_RATE) throw new Error('Simulated network error') }

export async function listTickets(){ await delay(); maybeFail(); const raw = localStorage.getItem(KEY) || '[]'; return JSON.parse(raw) }
export async function getTicket(id){ await delay(); maybeFail(); const all = await listTickets(); return all.find(t=>t.id===id) || null }
export async function createTicket(payload){ await delay(); maybeFail(); const all = await listTickets(); const now = new Date().toISOString(); const ticket = { id: uuidv4(), createdAt: now, updatedAt: now, ...payload }; all.unshift(ticket); localStorage.setItem(KEY, JSON.stringify(all)); return ticket }
export async function updateTicket(id, changes){ await delay(); maybeFail(); const all = await listTickets(); const idx = all.findIndex(t=>t.id===id); if (idx===-1) throw new Error('Ticket not found'); const updated = { ...all[idx], ...changes, updatedAt: new Date().toISOString() }; all[idx] = updated; localStorage.setItem(KEY, JSON.stringify(all)); return updated }
export async function deleteTicket(id){ await delay(); maybeFail(); let all = await listTickets(); all = all.filter(t=>t.id!==id); localStorage.setItem(KEY, JSON.stringify(all)); return true }
export function seedSample(){ const sample = [ { id: uuidv4(), title: 'Fix login bug', description: 'Users report 500 when logging in', status: 'open', priority: 'high', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, { id: uuidv4(), title: 'Add export CSV', description: 'Export tickets to CSV', status: 'in_progress', priority: 'medium', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, { id: uuidv4(), title: 'UI polish on hero', description: '', status: 'closed', priority: 'low', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() } ]; localStorage.setItem(KEY, JSON.stringify(sample)) }
