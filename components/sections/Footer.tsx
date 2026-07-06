'use client';

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/nashrulloh-qorib' },
  { icon: FaGithub, label: 'GitHub', href: 'https://github.com/Nashhhh17' },
  { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com/naalvyy_' },
];

export default function Footer() {
  return (
    <footer style={{ padding: '8rem 5rem', borderTop: '1px solid rgba(61,214,140,0.1)' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#3dd68c', marginBottom: '1.25rem', letterSpacing: '0.15em' }}
        >
          {"GET IN TOUCH"}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
          style={{ fontSize: '3.5rem', fontWeight: 800, color: '#efefef', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}
        >
          Let's Connect!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}
          style={{ fontSize: '1.05rem', color: '#777777', maxWidth: '30rem', marginBottom: '3.5rem', lineHeight: 1.8 }}
        >
          Terbuka untuk peluang baru, kolaborasi, atau sekadar ngobrol-ngobrol santai.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}
          style={{ display: 'flex', gap: '1rem', marginBottom: '5rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
               style={{
                 display: 'flex', alignItems: 'center', gap: '0.75rem',
                 padding: '1rem 2rem', borderRadius: '0.75rem',
                 border: '1px solid rgba(61,214,140,0.2)',
                 backgroundColor: '#141414', textDecoration: 'none',
                 fontFamily: 'monospace', fontSize: '0.9rem',
                 color: '#888888', transition: 'all 0.3s',
               }}
               className="hover:border-green-400/50 hover:text-text-primary"
            >
              <Icon size={20} />
              <span>{label}</span>
            </a>
          ))}
        </motion.div>

        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '1rem', color: '#FFFFFF'  }}>
            Nashrulloh Qorib
          </p>
        </div>

        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#333333' }}>
            © 2026 Nash. Built with Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}