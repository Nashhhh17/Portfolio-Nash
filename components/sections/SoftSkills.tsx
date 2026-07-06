'use client';

import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';

const softSkills = [
  'Problem Solving', 'Team Collaboration', 'Adaptability',
  'Communication', 'Time Management', 'Critical Thinking',
  'Attention to Detail', 'Self-Learning',
];

export default function SoftSkills() {
  return (
    <section style={{ padding: '0 5rem 8rem' }}>
      <div className="section-divider" style={{ marginBottom: '8rem' }} />
      <SectionTitle label="" title="SOFT SKILLS" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        marginTop: '3rem',
      }}>
        {softSkills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            style={{
              padding: '1.25rem 1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(61,214,140,0.2)',
              backgroundColor: '#141414',
              textAlign: 'center',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: '#888888',
              cursor: 'default',
              transition: 'all 0.3s',
            }}
            className="hover:border-green-400/50 hover:text-text-primary hover:bg-green-500/5"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}