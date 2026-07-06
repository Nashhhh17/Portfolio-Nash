'use client';

import Image from 'next/image';
import { ArrowUpRight, Folder } from 'lucide-react';
import { useState } from 'react';

type Project = {
  id: number;
  title: string;
  description: string | null;
  image: string | null;
  tech_stack: string;
  github_url: string | null;
  live_url: string | null;
  role?: string | null;
  year?: string | number | null;
};

export default function ProjectHero({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;

  return (
    <section className="relative flex min-h-[85vh] w-full flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 h-full w-full">
        {showImage ? (
          <Image
            src={project.image as string}
            alt={project.title}
            fill
            priority
            onError={() => setImgError(true)}
            className="object-cover opacity-50"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#141414]">
            <Folder size={48} strokeWidth={1.5} className="text-[#3a3a3a]" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/70 to-[#060606]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-16 pt-32 sm:px-12 lg:px-20">
        <h1 className="mb-10 max-w-3xl text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-[3.5rem]">
          {project.title}
        </h1>

        {/* Role / Year / Stack table */}
        <div className="mb-8 grid max-w-2xl grid-cols-1 sm:grid-cols-[auto_auto_1fr] gap-x-10 gap-y-2">
          {project.role && (
            <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#3dd68c]">
              Role
            </span>
          )}
          {project.year && (
            <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#3dd68c]">
              Year
            </span>
          )}
          {project.tech_stack && (
            <span className="font-mono text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-[#3dd68c]">
              Stack
            </span>
          )}

          {project.role && (
            <span className="text-[0.95rem] text-[#e0e0e0]">{project.role}</span>
          )}
          {project.year && (
            <span className="text-[0.95rem] text-[#e0e0e0]">{project.year}</span>
          )}
          {project.tech_stack && (
            <span className="text-[0.95rem] text-[#e0e0e0]">
              {project.tech_stack}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 border-b-2 border-white pb-1 font-mono text-[0.8rem] font-bold uppercase tracking-[0.1em] text-white transition-colors duration-300 hover:border-[#3dd68c] hover:text-[#3dd68c]"
            >
              Live Site
              <ArrowUpRight size={15} />
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 border-b border-[#555555] pb-1 font-mono text-[0.8rem] font-medium uppercase tracking-[0.1em] text-[#777777] transition-colors duration-300 hover:border-white hover:text-white"
            >
              Github
              <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}