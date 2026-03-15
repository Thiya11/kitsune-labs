import { Link } from 'react-router-dom';
import Tag from '../UI/Tag';
import './ProjectCard.css';

const ProjectCard = ({ project, index = 0 }) => {
  const { id, title, description, tags, category, status, date } = project;

  const categoryIcons = {
    work: '💼',
    stem: '🔬',
    business: '📊',
    education: '📚',
    extension: '🧩',
    portfolio: '👤',
  };

  return (
    <Link
      to={`/projects/${id}`}
      className="project-card animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
      id={`project-card-${id}`}
    >
      <div className="project-card__header">
        <div className="project-card__category">
          <span className="project-card__category-icon">
            {categoryIcons[category] || '📦'}
          </span>
          <span className="project-card__category-label">{category}</span>
        </div>
        <Tag variant={status} size="sm">{status}</Tag>
      </div>

      <div className="project-card__thumbnail">
        <div className="project-card__thumbnail-pattern" data-category={category}>
          <span className="project-card__thumbnail-icon">{categoryIcons[category] || '📦'}</span>
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>

      <div className="project-card__footer">
        <div className="project-card__tags">
          {tags.slice(0, 3).map((tag) => (
            <Tag key={tag} size="sm">{tag}</Tag>
          ))}
        </div>
        <span className="project-card__date">
          {new Date(date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
        </span>
      </div>

      <div className="project-card__glow" />
    </Link>
  );
};

export default ProjectCard;
