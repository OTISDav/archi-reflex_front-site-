import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Skeleton from "../../loaders/Skeleton";
import ProjectModal from "./ProjectModal";

export default function PortfolioGrid() {
  const [projects, setProjects] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    axios.get("/projects/").then(res => {
      setProjects(res.data);
    });
  }, []);

  return (
    <>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {!projects
          ? Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="h-96 w-full" />
            ))
          : projects.map(project => (
              <div
                key={project.id}
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => setActiveProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full mb-8 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end">
                  <p className="text-white p-6 tracking-wide">
                    {project.title}
                  </p>
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
