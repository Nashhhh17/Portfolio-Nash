import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ProjectsSection() {
  return (
    <section style={{ padding: '8rem 5rem' }}>
      <div className="section-divider" style={{ marginBottom: '8rem' }} />

      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '4rem' }}>
        <SectionTitle label="" title="MY PROJECTS" />
        <Link href="/projects" style={{
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

      {projects.length === 0 ? (
        <p style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#444444' }}>// no projects yet</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}