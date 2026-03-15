import { useState, useMemo } from 'react';
import ProjectGrid from '../../components/Projects/ProjectGrid';
import SearchBar from '../../components/UI/SearchBar';
import useSEO from '../../hooks/useSEO';
import projects from '../../data/projects.json';
import './Projects.css';

const CATEGORIES = ['all', 'work', 'stem', 'business', 'education', 'extension', 'portfolio'];
const STATUSES = ['all', 'live', 'wip', 'archived'];

const Projects = () => {
  useSEO({
    title: 'Project Gallery',
    description: 'Browse all projects from the kitsunechaos Lab — including STEM tools, business UIs, Chrome extensions, and creative experiments.'
  });

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [status, setStatus] = useState('all');

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

      const matchCategory = category === 'all' || p.category === category;
      const matchStatus = status === 'all' || p.status === status;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [search, category, status]);


  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'work': return '💼';
      case 'stem': return '🔬';
      case 'business': return '📊';
      case 'education': return '📚';
      case 'extension': return '🧩';
      case 'portfolio': return '👤';
      default: return '✦';
    }
  };

  return (
    <div className="projects-page page-enter">
      <div className="container">
        <div className="projects-page__header">
          <h1 className="projects-page__title">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="projects-page__subtitle">
            Browse everything that's come out of the lab — from polished tools to chaotic experiments.
          </p>
        </div>

        <div className="projects-page__filters">
          <SearchBar value={search} onChange={setSearch} />

          <div className="projects-page__filter-group">
            <div className="filter-pills">
              <span className="filter-pills__label">Category</span>
              <div className="filter-pills__options">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    id={`filter-category-${cat}`}
                    className={`filter-pill ${category === cat ? 'filter-pill--active' : ''}`}
                    onClick={() => setCategory(cat)}
                  >
                    {getCategoryIcon(cat)} {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-pills">
              <span className="filter-pills__label">Status</span>
              <div className="filter-pills__options">
                {STATUSES.map((s) => (
                  <button
                    key={s}
                    id={`filter-status-${s}`}
                    className={`filter-pill ${status === s ? 'filter-pill--active' : ''}`}
                    onClick={() => setStatus(s)}
                  >
                    {s === 'all' ? 'All' : s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="projects-page__count">
            <span className="projects-page__count-num">{filteredProjects.length}</span>
            <span className="projects-page__count-label">
              {filteredProjects.length === 1 ? 'project' : 'projects'} found
            </span>
          </div>
        </div>

        <ProjectGrid projects={filteredProjects} />
      </div>
    </div>
  );
};

export default Projects;
