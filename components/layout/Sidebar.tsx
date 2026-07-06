'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X } from 'lucide-react';
import { FaEnvelope } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'Home' },
];

const CONTACT_EMAIL = 'naalvyy@gmail.com';
const CONTACT_SUBJECT = 'Halo Nashrulloh, saya ingin berdiskusi';

export default function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: 'fixed', inset: 0, zIndex: 50, backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
          />
          <motion.aside
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed', top: 0, right: 0, zIndex: 50,
              height: '100%', width: 'min(280px, 85vw)',
              backgroundColor: '#0e0e0e',
              borderLeft: '1px solid rgba(61,214,140,0.15)',
              padding: '2rem',
              display: 'flex', flexDirection: 'column',
            }}
          >
            <button
              onClick={onClose}
              style={{
                alignSelf: 'flex-end', background: 'none', border: 'none',
                color: '#555555', cursor: 'pointer', transition: 'color 0.3s',
                marginBottom: '3rem',
              }}
              className="hover:text-text-primary"
            >
              <X size={24} />
            </button>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={link.href} onClick={onClose} 
                  className="block text-2xl sm:text-3xl font-extrabold hover:text-text-primary"
                  style={{
                    color: '#333333', textDecoration: 'none',
                    letterSpacing: '-0.02em',
                    padding: '0.5rem 0',
                    transition: 'color 0.3s',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div style={{ marginTop: 'auto' }}>
              <motion.a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(CONTACT_SUBJECT)}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  width: '100%',
                  padding: '0.9rem 1rem',
                  marginBottom: '1.5rem',
                  backgroundColor: '#3dd68c',
                  color: '#0e0e0e',
                  borderRadius: '4px',
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textDecoration: 'none',
                  transition: 'opacity 0.3s',
                }}
                whileHover={{ opacity: 0.85 }}
                whileTap={{ scale: 0.97 }}
              >
                <FaEnvelope size={16} />
                CONTACT ME
              </motion.a>

              <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#3dd68c', letterSpacing: '0.1em' }}>
                Nash — Portfolio
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}