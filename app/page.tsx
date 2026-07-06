import Hero from '@/components/sections/Hero';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperiencesSection from '@/components/sections/ExperiencesSection';
import AboutSection from '@/components/sections/AboutSection';
import Tools from '@/components/sections/Tools';
import SoftSkills from '@/components/sections/SoftSkills';
import Footer from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main className="bg-bg-primary text-text-primary min-h-screen">
      <Hero />
      <ProjectsSection />
      <ExperiencesSection />
      <AboutSection />
      <Tools />
      <SoftSkills />
      <Footer />
    </main>
  );
}