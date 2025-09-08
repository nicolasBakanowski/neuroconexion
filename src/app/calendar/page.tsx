'use client';

import { useState } from 'react';

export default function CalendarPage() {
  const [date, setDate] = useState('');

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F0E8] text-[#4A3B37] p-4">
      <h1 className="text-3xl font-semibold mb-4">Agenda tu sesión</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      {date && (
        <p className="mt-2">Has seleccionado: {new Date(date).toLocaleDateString()}</p>
      )}
    </div>
  );
}
