import { useEffect, useState } from "react";
import axios from "../../api/axios";
import Skeleton from "../../loaders/Skeleton";

export default function ProjectsPreview() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios.get("/projects/").then(res => {
      setProjects(res.data.slice(0, 3));
    });
  }, []);

  return (
    <section id="projects" className="py-32 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-light mb-16 tracking-wide">
        Projets récents
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {!projects
          ? Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-80 w-full" />
            ))
          : projects.map(project => (
              <div
                key={project.id}
                className="group overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover group-hover:scale-105 transition"
                />
                <p className="mt-4 opacity-70">{project.title}</p>
              </div>
            ))}
      </div>
    </section>
  );
}
