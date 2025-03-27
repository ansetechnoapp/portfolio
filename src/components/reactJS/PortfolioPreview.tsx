import React from "react";
import "../../styles/PortfolioPreview.css";

// Define the type for project data based on the Astro component structure
interface ProjectData {
  title: string;
  description: string;
  img: string;
  img_alt?: string;
  tech: string[];
  github?: string;
  liveDemo?: string;
}

// Props interface for the component
interface PortfolioPreviewProps {
  project: {
    data: ProjectData;
    slug: string;
  };
}

const PortfolioPreview: React.FC<PortfolioPreviewProps> = ({ project }) => {
  const { data, slug } = project;

  // console.log('Github URL:', data.github);
  // console.log('Live Demo URL:', data.liveDemo);

  return (
    <article className="portfolio_item">
      <div className="portfolio_item-image">
        <img src={data.img} alt={data.img_alt || ''} loading="lazy" />
        <div className="layer">
          <p>{data.description}</p>
          <a href={`/work/${slug}`} aria-label="View project details">
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="flex flex-wrap gap-3 mb-3">
          {data.tech.slice(0, 3).map((tech, index) => (
            <span key={index} className="px-0 py-1 text-xs rounded-full bg-secondary/50">
              {tech}

            </span>
          ))}
        </div>
        <h5 className="font-semibold leading-none tracking-tight">{data.title}</h5>
        <div className="text-sm text-muted-foreground">https://parisbet.vercel.app/ provides quick, secure Apple device unlocking with 24-hour service, 7-day support, and money-back guarantee.</div></div>
      <div className="items-center p-6 pt-0 flex justify-between">
        <div className="flex gap-3">
          {data.github && (
            <a target="_blank" rel="noopener noreferrer"
              className="text-sm text-primary hover:underline" href={data.github}>GitHub</a>
          )}
          <a className="text-sm text-primary hover:underline" href={`/work/${slug}`}>Details</a></div>
        {data.liveDemo && (
          <a target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline" href={data.liveDemo}>Live Demo</a>
        )}
      </div>

    </article>
  );
};

export default PortfolioPreview;
