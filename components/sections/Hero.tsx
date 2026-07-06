'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="px-4 sm:px-8 md:px-20" style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(61,214,140,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(61,214,140,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Glow */}
      <div style={{
        position: 'absolute',
        top: '-10rem',
        left: '-10rem',
        width: '40rem',
        height: '40rem',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(61,214,140,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '56rem' }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: 'monospace',
            fontSize: '0.85rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#3dd68c',
            marginBottom: '2rem',
          }}
        >
          Portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 'clamp(4rem, 10vw, 9rem)',
            fontWeight: 800,
            color: '#efefef',
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: '2.5rem',
          }}
        >
          NASHRULLOH<br />
          <span style={{ color: '#014422' }}>QORIB</span>
          <span style={{ color: '#3dd68c' }}>.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            width: '3rem',
            height: '2px',
            background: '#3dd68c',
            marginBottom: '2rem',
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            fontSize: '1.15rem',
            fontWeight: 500,
            color: '#FFFFFF',
            maxWidth: '36rem',
            lineHeight: 1.8,
          }}
        >
          Software Engineer — Web Developer
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <motion.div
          animate={{ x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ width: '2rem', height: '2px', background: '#3dd68c' }}
        />
        <span style={{
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          letterSpacing: '0.2em',
          color: '#3dd68c',
          textTransform: 'uppercase',
        }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}