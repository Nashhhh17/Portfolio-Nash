'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, Folder } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiAxios, SiReact,
  SiNodedotjs, SiJavascript, SiMongodb, SiExpress, SiPostgresql,
  SiPython, SiDjango, SiLaravel, SiPhp, SiVuedotjs, SiFramer, SiCss,
  SiDart,
  SiMysql, SiLaragon,
  SiFlutter,
  SiFirebase,
  SiArduino,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

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

const TECH_ICON_MAP: Record<string, IconType> = {
  'next.js': SiNextdotjs,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  'tailwind css': SiTailwindcss,
  tailwindcss: SiTailwindcss,
  axios: SiAxios,
  react: SiReact,
  'node.js': SiNodedotjs,
  nodejs: SiNodedotjs,
  javascript: SiJavascript,
  mongodb: SiMongodb,
  express: SiExpress,
  postgresql: SiPostgresql,
  python: SiPython,
  django: SiDjango,
  laravel: SiLaravel,
  php: SiPhp,
  css: SiCss,
  dart: SiDart,
  mysql: SiMysql,
  flutter: SiFlutter,
  firebase: SiFirebase,
  arduino: SiArduino,
  'vue.js': SiVuedotjs,
  'framer motion': SiFramer,
};

function getTechIcon(tech: string): IconType | null {
  return TECH_ICON_MAP[tech.trim().toLowerCase()] ?? null;
}

export default function ProjectCard({ project }: { project: Project }) {
  const router = useRouter();
  const [imgError, setImgError] = useState(false);
  const techList = project.tech_stack.split(',').map((t) => t.trim());
  const showImage = project.image && !imgError;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onClick={() => router.push(`/projects/${project.id}`)}
      className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-md bg-[#121212] cursor-pointer ring-1 ring-white/[0.06] transition-all duration-500 hover:ring-[#3dd68c]/30 hover:shadow-[0_20px_50px_-15px_rgba(61,214,140,0.25)]"
    >
      {/* Full background image */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        {showImage ? (
          <Image
            src={project.image as string}
            alt={project.title}
            fill
            onError={() => setImgError(true)}
            className="object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-110 group-hover:opacity-70"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#181818]">
            <Folder size={30} strokeWidth={1.5} className="text-[#3a3a3a]" />
          </div>
        )}
        {/* Dark gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
      </div>

      {/* Content, layered above the background */}
      <div className="relative z-10 flex flex-1 flex-col px-10 pb-9 pt-10">

        <div className="flex-[0.1]" />
        {/* Role / category + year — fixed near top, small */}
        {(project.role || project.year) && (
          <div className="ml-1 flex items-center gap-2 font-mono text-[0.7rem] font-medium uppercase tracking-[0.15em] text-[#3dd68c]/80">
            {project.role && <span>{project.role}</span>}
            {project.role && project.year && <span className="text-white/30">·</span>}
            {project.year && <span>{project.year}</span>}
          </div>
        )}

        {/* Title — centered in the remaining space below role */}
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="ml-1 text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-white transition-colors duration-300 group-hover:text-[#3dd68c]">
            {project.title}
          </h3>
        </div>

        {/* Tech icons row */}
        {techList.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {techList.slice(0, 5).map((tech) => {
              const Icon = getTechIcon(tech);
              return (
                <div
                  key={tech}
                  title={tech}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/40 ring-1 ring-white/10 backdrop-blur-md shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:ring-[#3dd68c]/40"
                >
                  {Icon ? (
                    <Icon size={16} className="text-[#e0e0e0]" />
                  ) : (
                    <span className="font-mono text-[0.55rem] font-semibold text-[#e0e0e0]">
                      {tech.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Links */}
        <div className="flex items-center gap-5 pt-1">
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 font-mono text-[0.75rem] font-medium tracking-wide text-[#999999] transition-colors duration-300 hover:text-white"
            >
              <FaGithub size={14} />
              Source
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1.5 font-mono text-[0.75rem] font-medium tracking-wide text-[#999999] transition-colors duration-300 hover:text-white"
            >
              <ExternalLink size={14} />
              Live Site
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}