'use client';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { setSession } from '../lib/session';

export default function AuthForm({ mode = 'login' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!email) e.email = 'Email is required.';
    if (!password) e.password = 'Password is required.';
    if (password && password.length < 6)
      e.password = 'Password must be at least 6 characters.';
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    if (email === 'test@ticketapp.local' && password === 'password123') {
      setSession(email);
      toast.success('Logged in');
      window.location.href = '/dashboard';
    } else if (mode === 'signup') {
      setSession(email);
      toast.success('Account created — logged in');
      window.location.href = '/dashboard';
    } else {
      toast.error('Invalid credentials — try again.');
      setErrors({ form: 'Invalid credentials.' });
    }
  }

  return (
    <form onSubmit={handleSubmit} className='max-w-md'>
      <label className='block mb-2'>
        Email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='mt-1 block w-full rounded border px-3 py-2'
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
      </label>
      {errors.email && (
        <div id='email-error' className='text-red-600 text-sm'>
          {errors.email}
        </div>
      )}

      <label className='block mt-4 mb-2'>
        Password
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='mt-1 block w-full rounded border px-3 py-2'
          aria-describedby={errors.password ? 'password-error' : undefined}
        />
      </label>
      {errors.password && (
        <div id='password-error' className='text-red-600 text-sm'>
          {errors.password}
        </div>
      )}

      <div className='mt-6 flex gap-3'>
        <button
          type='submit'
          className='px-4 py-2 rounded bg-blue-600 text-white'
        >
          {mode === 'login' ? 'Login' : 'Sign up'}
        </button>
      </div>
      {errors.form && <div className='text-red-600 mt-3'>{errors.form}</div>}
    </form>
  );
}
