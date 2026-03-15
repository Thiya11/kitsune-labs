import ProjectCard from './ProjectCard';
import './ProjectGrid.css';

const ProjectGrid = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="project-grid__empty">
        <span className="project-grid__empty-icon">🔍</span>
        <p className="project-grid__empty-title">No projects found</p>
        <p className="project-grid__empty-text">Try adjusting your filters or search terms.</p>
      </div>
    );
  }

  return (
    <div className="project-grid stagger-children">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectGrid;
