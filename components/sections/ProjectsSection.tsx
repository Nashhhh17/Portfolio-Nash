import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import SectionTitle from '@/components/ui/SectionTitle';

export default function ProjectsSection() {
  return (
    <section className="px-4 sm:px-8 md:px-20 py-16 md:py-32">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}