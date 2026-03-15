import { useParams, Link, Navigate } from 'react-router-dom';
import Tag from '../../components/UI/Tag';
import Button from '../../components/UI/Button';
import useSEO from '../../hooks/useSEO';
import projects from '../../data/projects.json';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  useSEO({
    title: project ? project.title : 'Project Details',
    description: project ? project.description : 'Explore detailed information about this experiment from the kitsunechaos Lab.'
  });

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const categoryIcons = {
    work: '💼',
    stem: '🔬',
    business: '📊',
    education: '📚',
    extension: '🧩',
    portfolio: '👤',
  };

  const relatedProjects = projects
    .filter((p) => p.id !== id && p.category === project.category)
    .slice(0, 2);

  return (
    <div className="project-detail page-enter">
      <div className="container">
        <Link to="/projects" className="project-detail__back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <div className="project-detail__hero">
          <div className="project-detail__hero-pattern" data-category={project.category}>
            <span className="project-detail__hero-icon">
              {categoryIcons[project.category] || '📦'}
            </span>
            <div className="project-detail__hero-grid" />
          </div>
        </div>

        <div className="project-detail__content">
          <div className="project-detail__main">
            <div className="project-detail__meta">
              <Tag variant={project.status} size="md">{project.status}</Tag>
              <span className="project-detail__category">
                {categoryIcons[project.category]} {project.category}
              </span>
              <span className="project-detail__date">
                {new Date(project.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
            </div>

            <h1 className="project-detail__title">{project.title}</h1>

            <p className="project-detail__long-description">
              {project.longDescription}
            </p>

            <div className="project-detail__tags">
              <span className="project-detail__tags-label">Tech Stack</span>
              <div className="project-detail__tags-list">
                {project.tags.map((tag) => (
                  <Tag key={tag} size="md">{tag}</Tag>
                ))}
              </div>
            </div>

            <div className="project-detail__actions">
              <Button
                variant="primary"
                size="lg"
                href={project.liveUrl}
                external
                icon="🚀"
                id="launch-project"
              >
                Launch Project
              </Button>
              {project.sourceUrl && (
                <Button
                  variant="secondary"
                  size="lg"
                  href={project.sourceUrl}
                  external
                  icon={
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  }
                  id="view-source"
                >
                  View Source
                </Button>
              )}
            </div>
          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className="project-detail__related">
            <h2 className="project-detail__related-title">
              More in <span className="gradient-text">{project.category}</span>
            </h2>
            <div className="project-detail__related-grid">
              {relatedProjects.map((rp) => (
                <Link
                  to={`/projects/${rp.id}`}
                  key={rp.id}
                  className="related-card"
                >
                  <div className="related-card__icon">
                    {categoryIcons[rp.category] || '📦'}
                  </div>
                  <div>
                    <h3 className="related-card__title">{rp.title}</h3>
                    <p className="related-card__desc">{rp.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
