import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Skeleton from "../../loaders/Skeleton";
import ProjectModal from "./ProjectModal";
import "./PortfolioGrid.css"; // Import CSS Soho

export default function PortfolioGrid() {
  const [projects, setProjects] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    axios.get("/projects/projects/").then(res => {
      setProjects(res.data);
    });
  }, []);

  return (
    <>
      <div className="portfolio-grid">
        {!projects
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="skeleton-card" />
            ))
          : projects.map(project => (
              <div
                key={project.id}
                className="portfolio-card group cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-image"
                />

                <div className="portfolio-overlay">
                  <p className="portfolio-title">{project.title}</p>
                </div>
              </div>
            ))}
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </>
  );
}
