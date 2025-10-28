'use client';
import Link from 'next/link';

const statusStyles = {
  open: 'bg-statusOpen text-white px-2 py-1 rounded-full text-xs',
  in_progress: 'bg-statusProgress text-white px-2 py-1 rounded-full text-xs',
  closed: 'bg-statusClosed text-white px-2 py-1 rounded-full text-xs',
};

export default function TicketCard({ ticket, onDelete }) {
  return (
    <div className='bg-white rounded-lg shadow p-4'>
      <div className='flex items-start justify-between gap-3'>
        <div>
          <h3 className='font-semibold'>{ticket.title}</h3>
          <p className='text-sm text-gray-600 mt-2'>
            {ticket.description || '—'}
          </p>
        </div>
        <div className='flex flex-col items-end gap-2'>
          <span className={statusStyles[ticket.status] || statusStyles.closed}>
            {ticket.status}
          </span>
          <div className='flex gap-2 mt-2'>
            <Link href={`/tickets/${ticket.id}`}>
              <p className='text-sm underline'>View</p>
            </Link>
            <Link href={`/tickets/${ticket.id}/edit`}>
              <p className='text-sm underline'>Edit</p>
            </Link>
            <button
              onClick={() => onDelete(ticket.id)}
              className='text-sm text-red-600'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
