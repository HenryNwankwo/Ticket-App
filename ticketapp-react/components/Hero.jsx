'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = localStorage.getItem('ticketapp_session');
      setIsLoggedIn(!!session);
    }
  }, []);

  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-white to-gray-50 rounded-xl'>
      <div className='container-centered px-6 py-20 relative'>
        {/* Decorative elements */}
        <div
          className='absolute -left-12 -top-12 w-44 h-44 bg-blue-100 rounded-full opacity-60 decor-circle'
          aria-hidden
        ></div>
        <div
          className='absolute -right-12 -bottom-12 w-56 h-56 bg-amber-100 rounded-full opacity-60 decor-circle'
          aria-hidden
        ></div>

        {/* Hero content */}
        <div className='flex flex-col md:flex-row items-center gap-8'>
          <div className='flex-1'>
            <h1 className='text-4xl font-extrabold'>
              TicketApp — manage issues, fast and efficiently.
            </h1>
            <p className='mt-4 text-lg text-gray-700'>
              Create, track, and resolve tickets with a consistent, accessible
              interface.
            </p>

            {/* Conditional buttons */}
            <div className='mt-6 flex gap-4'>
              {!isLoggedIn ? (
                <>
                  <Link href='/auth/login'>
                    <p className='px-4 py-2 rounded-lg bg-blue-600 text-white shadow cursor-pointer'>
                      Login
                    </p>
                  </Link>
                  <Link href='/auth/signup'>
                    <p className='px-4 py-2 rounded-lg border border-blue-600 cursor-pointer'>
                      Get Started
                    </p>
                  </Link>
                </>
              ) : (
                <Link href='/dashboard' className='w-full'>
                  <p className='w-full md:w-40 text-center px-4 py-2 rounded-full bg-blue-600 text-white shadow cursor-pointer'>
                    Go to Dashboard
                  </p>
                </Link>
              )}
            </div>
          </div>

          {/* Right side preview box */}
          <div className='w-full md:w-1/2'>
            <div className='bg-white rounded-2xl shadow p-6'>
              <p className='text-sm text-gray-600'>
                Preview of ticket cards and stats. Responsive and accessible
                layout.
              </p>
              <div className='mt-4 grid grid-cols-3 gap-3'>
                <div className='p-3 rounded-lg shadow text-center'>
                  Total
                  <br />
                  <strong>12</strong>
                </div>
                <div className='p-3 rounded-lg shadow text-center'>
                  Open
                  <br />
                  <strong>4</strong>
                </div>
                <div className='p-3 rounded-lg shadow text-center'>
                  Resolved
                  <br />
                  <strong>7</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero wave background */}
      <img
        src='/shared-assets/hero-wave.svg'
        alt='wave'
        className='absolute bottom-0 left-0 w-full pointer-events-none'
      />
    </section>
  );
}
