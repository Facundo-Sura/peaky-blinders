'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { projects, Project } from '@/lib/projects';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
      <div className="card-vintage rounded-lg overflow-hidden h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.innerHTML = `
                <div class="w-full h-full flex items-center justify-center" style="background: var(--bg-secondary)">
                  <span class="text-6xl opacity-30">🖼️</span>
                </div>
              `;
            }}
          />
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
          >
            <div className="flex gap-4">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded text-sm font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--bg)',
                }}
              >
                👁️ Ver en vivo
              </a>
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded text-sm font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    color: 'var(--text)',
                    border: '1px solid var(--border)',
                  }}
                >
                  💻 Código
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="font-heading text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>
            {project.title}
          </h3>
          <p className="font-body text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded"
                style={{
                  backgroundColor: 'var(--bg)',
                  color: 'var(--accent)',
                  border: '1px solid var(--border)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || isHovered) return;
    
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [emblaApi, isHovered]);

  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Proyectos Destacados
        </motion.h2>
        <div className="section-divider max-w-xs mx-auto mb-16" />

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 glow-amber"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '2px solid var(--accent)',
            }}
            aria-label="Anterior"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110 glow-amber"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '2px solid var(--accent)',
            }}
            aria-label="Siguiente"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--accent)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-3 h-3 rounded-full transition-all duration-300"
              style={{
                backgroundColor: selectedIndex === index ? 'var(--accent)' : 'var(--border)',
                boxShadow: selectedIndex === index ? '0 0 10px var(--accent)' : 'none',
              }}
              aria-label={`Ir a proyecto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
