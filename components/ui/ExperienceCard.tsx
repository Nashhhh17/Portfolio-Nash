'use client';

import { motion } from 'framer-motion';

type Experience = {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string[];
  image: string | null;
};

export default function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{
        position: 'relative',
        borderRadius: '0.75rem',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        backgroundColor: '#141414',
        minHeight: '280px',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'default',
        transition: 'border-color 0.3s',
      }}
      className="group hover:border-white/20"
    >
      {experience.image && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${experience.image})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.05,
        }} />
      )}

      <div style={{
        position: 'relative', zIndex: 10,
        padding: '1.75rem',
        display: 'flex', flexDirection: 'column', height: '100%',
      }}>
        <span style={{
          fontFamily: 'monospace', fontSize: '0.75rem',
          letterSpacing: '0.15em', color: '#3dd68c',
          textTransform: 'uppercase', marginBottom: '1rem',
        }}>
          {experience.period}
        </span>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#efefef', marginBottom: '0.4rem', lineHeight: 1.3 }}>
          {experience.company}
        </h3>
        <p style={{ fontFamily: 'monospace', fontSize: '0.85rem', color: '#777777', marginBottom: '1rem' }}>
          {experience.role}
        </p>

        <ul style={{
          display: 'flex', flexDirection: 'column', gap: '0.5rem',
          flex: 1, margin: 0, padding: 0, listStyle: 'none',
        }}>
          {experience.description.map((point, index) => (
            <li
              key={index}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: '0.5rem',
                fontSize: '0.9rem', color: '#FFFFFF', lineHeight: 1.6,
              }}
            >
              <span style={{
                marginTop: '0.5rem', width: '4px', height: '4px',
                borderRadius: '9999px', backgroundColor: '#FFFFFF',
                flexShrink: 0,
              }} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}