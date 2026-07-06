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
    <section className="px-4 sm:px-8 md:px-20 pb-16 md:pb-32">
      <div className="section-divider" style={{ marginBottom: '8rem' }} />
      <SectionTitle label="" title="SOFT SKILLS" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
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