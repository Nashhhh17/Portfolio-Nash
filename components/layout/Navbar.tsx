'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, right: 0, zIndex: 50, padding: '1.5rem' }}>
        <button
          onClick={() => setOpen(true)}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.6rem 1rem', borderRadius: '0.5rem',
            border: '1px solid rgba(61,214,140,0.3)',
            backgroundColor: 'transparent', color: '#efefef',
            cursor: 'pointer', fontFamily: 'monospace', fontSize: '0.8rem',
            letterSpacing: '0.1em', transition: 'all 0.3s',
          }}
        >
          <Menu size={18} />
        </button>
      </nav>
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}