import React, { useState, useEffect } from "react";
import "../../styles/PortfolioPreview.css";

interface ProjectData {
  title: string;
  description: string;
  tech: string[];
  publishDate: Date;
  tags: string[];
  img: string;
  img_alt?: string;
  github?: string;
  liveDemo?: string;
  device?: string | undefined;
  additionalImages?: Array<{
    url: string;
    alt?: string;
  }>;
}

interface PortfolioPreviewProps {
  project: {
    id: string;
    slug: string;
    body: string;
    collection: string;
    data: ProjectData;
    render(): Promise<unknown>;
  };
  activeFilter?: 'all' | 'web' | 'mobile';
}

export default function PortfolioPreview({ project, activeFilter = 'all' }: PortfolioPreviewProps) {
  const { data, slug } = project;
  const [currentFilter, setCurrentFilter] = useState(activeFilter);

  useEffect(() => {
    const handleFilterChange = (e: CustomEvent) => {
      setCurrentFilter(e.detail);
    };

    const portfolioSection = document.getElementById('portfolio-section');
    portfolioSection?.addEventListener('filterChange', handleFilterChange as EventListener);

    return () => {
      portfolioSection?.removeEventListener('filterChange', handleFilterChange as EventListener);
    };
  }, []);

  // Don't render if filtered out and not showing all
  if (currentFilter !== 'all' && data.device !== currentFilter) {
    return null;
  }

  return (
    <article className="portfolio_item"> 
      <div className="portfolio_item-image">
        <img src={data.img} alt={data.img_alt || ''} loading="lazy" decoding="async" />
        <div className="layer">
          <p>{data.description}</p>
          <a href={`/work/${slug}`} aria-label={`View details for ${data.title}`}>
            <i className="fas fa-external-link-alt px-2"></i>
          </a>
        </div>
      </div>

      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold leading-none tracking-tight">{data.title}</h3>
          <span id="project_device_info" className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{data.device}</span>
        </div>
        <p className="text-sm projetdesc">{data.description}</p>
        <div className="flex flex-wrap gap-3">
          {data.tech.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="items-center p-6 pt-0 flex justify-between">
        <div className="flex gap-3">
          {data.github && (
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
              aria-label={`View GitHub repository for ${data.title}`}
            >
              <i className="fab fa-github px-2"></i>
              GitHub
            </a>
          )}
          <a
            href={`/work/${slug}`}
            className="text-sm text-primary hover:underline"
            aria-label={`View details for ${data.title}`}
          >
            <i className="fa-solid fa-circle-info px-2"></i>

            Details
          </a>
        </div>
        {data.liveDemo && (
          <a
            href={data.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
            aria-label={`View live demo of ${data.title}`}
          >
            <i className="fas fa-external-link-alt px-2"></i>
            Live Demo
          </a>
        )}
      </div>
      <style>
        {`
          .projetdesc {
            color: var(--gray-0);
          }
        `}
      </style>
    </article>
  );
}
