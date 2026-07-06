'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  SiNextdotjs, SiLaravel, SiReact, SiTypescript,
  SiTailwindcss, SiMysql, SiGit,
  SiPhp, SiJavascript, SiNodedotjs, SiFigma,
  SiPython, SiDart, SiFlutter, SiCss,
  SiVscodium, SiLaragon,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { Palette } from 'lucide-react';

const technologies = [
  { icon: SiReact, name: 'React' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiLaravel, name: 'Laravel' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiPhp, name: 'PHP' },
  { icon: SiPython, name: 'Python' },
  { icon: FaJava, name: 'Java' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiCss, name: 'CSS' },
  { icon: SiFlutter, name: 'Flutter' },
  { icon: SiDart, name: 'Dart' },
];

const tools = [
  { icon: SiVscodium, name: 'VS Code' },
  { icon: SiLaragon, name: 'Laragon' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiGit, name: 'Git' },
  { icon: SiFigma, name: 'Figma' },
  { icon: Palette, name: 'UI/UX Design' },
];

type IconItem = {
  icon: React.ElementType;
  name: string;
};

function IconGrid({ items }: { items: IconItem[] }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '1.25rem',
    }}>
      {items.map(({ icon: Icon, name }) => (
        <motion.div
          key={name}
          onHoverStart={() => setHovered(name)}
          onHoverEnd={() => setHovered(null)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'default',
          }}
        >
          {/* Card */}
          <motion.div
            animate={{
              borderColor: hovered === name
                ? 'rgba(61,214,140,0.5)'
                : 'rgba(255,255,255,0.06)',
              backgroundColor: hovered === name
                ? 'rgba(61,214,140,0.05)'
                : '#141414',
              y: hovered === name ? -6 : 0,
              scale: hovered === name ? 1.05 : 1,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{
              width: '100%',
              padding: '1.25rem',
              borderRadius: '0.75rem',
              border: '1px solid rgba(255,255,255,0.06)',
              backgroundColor: '#141414',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Glow effect saat hover */}
            <AnimatePresence>
              {hovered === name && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.5 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(61,214,140,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none',
                  }}
                />
              )}
            </AnimatePresence>

            <motion.div
              animate={{
                color: hovered === name ? '#3dd68c' : '#555555',
                scale: hovered === name ? 1.1 : 1,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{ position: 'relative', zIndex: 1 }}
            >
              <Icon size={36} />
            </motion.div>
          </motion.div>

          {/* Label */}
          <motion.span
            animate={{
              color: hovered === name ? '#efefef' : '#555555',
            }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: '0.78rem',
              fontFamily: 'monospace',
              textAlign: 'center',
            }}
          >
            {name}
          </motion.span>

          {/* Tooltip */}
          <AnimatePresence>
            {hovered === name && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                style={{
                  position: 'absolute',
                  marginTop: '0.25rem',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '0.375rem',
                  backgroundColor: '#3dd68c',
                  color: '#060606',
                  fontSize: '0.7rem',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  zIndex: 20,
                }}
              >
                {name}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export default function Tools() {
  return (
    <section style={{ padding: '0 5rem 8rem' }}>
      <div className="section-divider" style={{ marginBottom: '8rem' }} />

      {/* Technologies */}
      <div style={{ marginBottom: '5rem' }}>
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#3dd68c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Languages & Frameworks
          </p>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#efefef', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            TECHNOLOGIES
          </h2>
        </div>
        <IconGrid items={technologies} />
      </div>

      {/* Tools */}
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <p style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#3dd68c', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
            Software & Platforms
          </p>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#efefef', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            TOOLS
          </h2>
        </div>
        <IconGrid items={tools} />
      </div>
    </section>
  );
}