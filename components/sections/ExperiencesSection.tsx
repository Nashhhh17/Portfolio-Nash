import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { experiences } from '@/data/experiences';
import ExperienceCard from '@/components/ui/ExperienceCard';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ExperiencesSection() {
  return (
    <section style={{ padding: '0 5rem 8rem' }}>
      <div className="section-divider" style={{ marginBottom: '8rem' }} />

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem' }}>
        <SectionTitle label="" title="EXPERIENCES" />
        <Link href="/experiences" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          fontFamily: 'monospace',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          color: '#555555',
          textDecoration: 'none',
          transition: 'color 0.3s',
        }}
        className="hover:text-text-primary"
        >
        </Link>
      </div>

      {experiences.length === 0 ? (
        <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#444444' }}>// no experiences yet</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      )}
    </section>
  );
}