'use client';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
const VALID_STATUSES = ['open', 'in_progress', 'closed'];

export default function TicketForm({ initial = {}, onSubmit }) {
  const [title, setTitle] = useState(initial.title || '');
  const [description, setDescription] = useState(initial.description || '');
  const [status, setStatus] = useState(initial.status || 'open');
  const [priority, setPriority] = useState(initial.priority || 'low');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTitle(initial.title || '');
    setDescription(initial.description || '');
    setStatus(initial.status || 'open');
    setPriority(initial.priority || 'low');
  }, []);

  function validate() {
    const e = {};
    if (!title) e.title = 'Title is required.';
    if (title && (title.length < 3 || title.length > 120))
      e.title = 'Title must be between 3 and 120 characters.';
    if (!VALID_STATUSES.includes(status))
      e.status = 'Status must be open, in_progress, or closed.';
    if (description && description.length > 2000)
      e.description = 'Description is too long.';
    return e;
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    try {
      onSubmit({ title, description, status, priority });
      setTitle('');
    } catch (err) {
      toast.error(err.message || 'Failed to save ticket');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white p-4 rounded-lg shadow'>
      <label className='block mb-2'>
        Title
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='mt-1 block w-full rounded border px-3 py-2'
          aria-describedby={errors.title ? 'title-error' : undefined}
        />
      </label>
      {errors.title && (
        <div id='title-error' className='text-red-600 text-sm'>
          {errors.title}
        </div>
      )}

      <label className='block mt-4 mb-2'>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='mt-1 block w-full rounded border px-3 py-2'
          aria-describedby={errors.description ? 'desc-error' : undefined}
        />
      </label>
      {errors.description && (
        <div id='desc-error' className='text-red-600 text-sm'>
          {errors.description}
        </div>
      )}

      <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <label>
          {' '}
          Status
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className='mt-1 block w-full rounded border px-3 py-2'
          >
            <option value='open'>open</option>
            <option value='in_progress'>in_progress</option>
            <option value='closed'>closed</option>
          </select>
        </label>
        <label>
          {' '}
          Priority
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className='mt-1 block w-full rounded border px-3 py-2'
          >
            <option value='low'>low</option>
            <option value='medium'>medium</option>
            <option value='high'>high</option>
          </select>
        </label>
      </div>

      {errors.status && (
        <div className='text-red-600 text-sm'>{errors.status}</div>
      )}

      <div className='mt-6 flex gap-3'>
        <button
          type='submit'
          className='px-4 py-2 rounded bg-blue-600 text-white'
        >
          Save
        </button>
      </div>
    </form>
  );
}
