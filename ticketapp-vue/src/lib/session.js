export const SESSION_KEY = 'ticketapp_session'

export function getSession(){
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (!raw) return null
    const obj = JSON.parse(raw)
    if (!obj.expiresAt || new Date(obj.expiresAt) < new Date()){
      localStorage.removeItem(SESSION_KEY)
      return null
    }
    return obj
  } catch(e) { return null }
}

export function setSession(email){
  const token = Math.random().toString(36).slice(2) + Date.now().toString(36)
  const session = { token, user: { email }, expiresAt: new Date(Date.now() + 1000*60*60*24).toISOString() }
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return session
}

export function clearSession(){ localStorage.removeItem(SESSION_KEY) }
