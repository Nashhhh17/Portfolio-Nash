import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectHero from '@/components/projects/ProjectHero';
import ProjectDescription from '@/components/projects/ProjectDescription';

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    notFound();
  }

  return (
    <main>
      <ProjectHero project={project} />
      {project.sections && project.sections.length > 0 && (
        <ProjectDescription sections={project.sections} />
      )}
    </main>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: String(project.id),
  }));
}