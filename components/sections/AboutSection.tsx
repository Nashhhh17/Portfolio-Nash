'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionTitle from '@/components/ui/SectionTitle';

export default function AboutSection() {
  return (
    <section style={{ padding: '0 5rem 8rem' }}>
      <div className="section-divider" style={{ marginBottom: '8rem' }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8rem',
        alignItems: 'center',
      }}>
        {/* Foto kiri */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ position: 'relative' }}
        >
          <div style={{
            width: '100%',
            aspectRatio: '4/5',
            borderRadius: '0.75rem',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
            backgroundColor: '#141414',
          }}>
            <Image
              src="/images/profile.png"
              alt="Nash"
              width={500}
              height={625}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          {/* Decorative offset border */}
          <div style={{
            position: 'absolute',
            bottom: '-1rem',
            right: '-1rem',
            width: '100%',
            height: '100%',
            borderRadius: '0.75rem',
            border: '1px solid rgba(255,255,255,0.04)',
            zIndex: -1,
          }} />
        </motion.div>

        {/* Teks kanan */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle label="" title="ABOUT ME" />

          <div style={{ marginTop: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <p style={{ fontSize: '1rem', color: '#666666', lineHeight: 1.8 }}>
              Hi, saya Nashrulloh Qorib, mahasiswa D3 Teknologi Informasi di Universitas Brawijaya dengan minat besar dalam pengembangan web. Ketertarikan ini yang membuat saya selalu bersemangat mempelajari teknologi baru, dan lewat berbagai proyek yang sudah saya kerjakan, saya terus mengasah keterampilan dalam membangun aplikasi web yang responsif dan user-friendly.
            </p>
            <p style={{ fontSize: '1rem', color: '#666666', lineHeight: 1.8 }}>
              Bagi saya, proses belajar itu tidak berhenti di satu proyek saja — karena saya percaya teknologi punya kekuatan untuk mengubah dunia, dan itu yang memotivasi saya untuk terus berkembang serta mencari tantangan baru, terutama lewat kolaborasi dengan tim yang senang mengeksplorasi hal-hal baru.
            </p>
            <p style={{ fontSize: '1rem', color: '#666666', lineHeight: 1.8 }}>
              Saat ini saya terbuka untuk kesempatan magang. Jika Anda tertarik untuk bekerja sama atau sekadar berdiskusi tentang proyek-proyek menarik, jangan ragu untuk menghubungi saya!
            </p>
          </div>

          {/* Info grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1rem',
            marginTop: '3rem',
          }}>
            {[
              { label: 'Name', value: 'Nashrulloh Qorib' },
              { label: 'Role', value: 'Web Developer' },
              { label: 'Last Education', value: 'D3 Teknologi Informasi - Universitas Brawijaya' },
              { label: 'Status', value: 'Mahasiswa' },
            ].map(({ label, value }) => (
              <div key={label} style={{
                padding: '1.25rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255,255,255,0.06)',
                backgroundColor: '#141414',
              }}>
                <p style={{ fontFamily: 'monospace', fontSize: '0.7rem', color: '#444444', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  {label}
                </p>
                <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f5f5f5' }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
          {/* Download CV */}
          <a
          href="/files/CV Nashrulloh Qorib.pdf"
          download
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '2rem',
            color: '#ffffff',
            fontFamily: 'monospace',
            fontSize: '1rem',
            letterSpacing: '0.05em',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            transition: 'opacity 0.3s',
          }}
          className="hover:opacity-70"
        >
          Download CV
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v9M4 7l4 4 4-4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 14h12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </a>
        </motion.div>
      </div>
    </section>
  );
}