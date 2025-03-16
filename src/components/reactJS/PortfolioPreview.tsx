import React from "react";
import Pill from "./Pill";
import Icon from "./Icon";
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
      <div className="portfolio_item-tags">
        {data.tech.map((tech, index) => (
          <span key={index}>
            <Pill>
              <Icon icon="code" size="1.1em" />
              {tech}
            </Pill>
          </span>
        ))}
      </div>

      <div className="portfolio_item-image">
        <img src={data.img} alt={data.img_alt || ''} loading="lazy" />
        <div className="layer">
          <p>{data.description}</p>
          <a href={`/work/${slug}`} aria-label="View project details">
            <i className="bx bx-link-external"></i>
          </a>
        </div>
      </div>

      <h3 className="portfolio_item-title">{data.title}</h3>

      <div className="portfolio_item-cta">
        {data.github && (
          <a href={data.github} className="btn" target="_blank" rel="noopener noreferrer">
            <Pill>
              <Icon icon="github-logo" size="1.33em" /> GitHub
            </Pill>
          </a>
        )}

        <a href={`/work/${slug}`} className="btn">
          <Pill>
            <Icon icon="info-circle" size="1.33em" /> Details
          </Pill>
        </a>

        {data.liveDemo && (
          <a href={data.liveDemo} className="btn" target="_blank" rel="noopener noreferrer">
            <Pill>
              <Icon icon="rocket-launch" size="1.33em" /> Live Demo
            </Pill>
          </a>
        )}
      </div>
    </article>
  );
};

export default PortfolioPreview;