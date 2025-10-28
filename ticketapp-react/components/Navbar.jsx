'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getSession, clearSession } from '../lib/session';

export default function Navbar() {
  const [session, setSession] = useState(null);
  useEffect(() => setSession(getSession()), []);

  function handleLogout() {
    clearSession();
    window.location.href = '/';
  }

  return (
    <header className='bg-white shadow'>
      <div className='container-centered px-6 py-4 flex items-center justify-between'>
        <Link href='/'>
          <p className='font-bold text-xl'>TicketApp</p>
        </Link>
        <nav>
          <ul className='flex items-center gap-4'>
            {session ? (
              <>
                <li>
                  <Link href='/dashboard'>
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <Link href='/tickets'>
                    <p>Tickets</p>
                  </Link>
                </li>
                <li>
                  <button onClick={handleLogout} className='btn btn-ghost'>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href='/auth/login'>
                    <p>Login</p>
                  </Link>
                </li>
                <li>
                  <Link href='/auth/signup'>
                    <p>Sign up</p>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
