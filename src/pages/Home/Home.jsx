import { Link } from 'react-router-dom';
import ProjectCard from '../../components/Projects/ProjectCard';
import Button from '../../components/UI/Button';
import useSEO from '../../hooks/useSEO';
import projects from '../../data/projects.json';
import './Home.css';

const Home = () => {
  useSEO({
    title: 'Creative Tools & Experiments',
    description: 'Welcome to kitsunechaos — an indie developer\'s experimental playground for building creative tools, STEM simulators, and wild experiments.'
  });

  const featuredProjects = projects.filter((p) => p.featured);
  const totalTags = [...new Set(projects.flatMap((p) => p.tags))].length;
  const liveCount = projects.filter((p) => p.status === 'live').length;

  return (
    <div className="home page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg-orb hero__bg-orb--1" />
        <div className="hero__bg-orb hero__bg-orb--2" />
        <div className="hero__bg-orb hero__bg-orb--3" />

        <div className="hero__content container">
          <div className="hero__badge">
            <img src="/brand/favicon.ico" alt="" className="badge-icon" />
            <span>Indie Dev Lab</span>
          </div>

          <h1 className="hero__title">
            Solving the<br />
            Great <span className="gradient-text">Chaos</span>
          </h1>

          <p className="hero__subtitle">
            Welcome to <strong>kitsunechaos</strong> — an indie developer's experimental playground.
            Explore live projects, creative tools, and wild experiments built for curiosity.
          </p>

          <div className="hero__actions">
            <Link to="/projects">
              <Button variant="primary" size="lg" icon="🚀">
                Explore Projects
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="secondary" size="lg">
                About the Lab
              </Button>
            </Link>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-value">{projects.length}</span>
              <span className="hero__stat-label">Projects</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">{totalTags}</span>
              <span className="hero__stat-label">Technologies</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-value">{liveCount}</span>
              <span className="hero__stat-label">Live</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="featured container">
        <div className="section-header">
          <div>
            <h2 className="section-header__title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-header__subtitle">Handpicked experiments from the lab</p>
          </div>
          <Link to="/projects">
            <Button variant="ghost" size="sm">
              View All →
            </Button>
          </Link>
        </div>

        <div className="featured__grid stagger-children">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta container">
        <div className="cta__card glass">
          <div className="cta__content">
            <h2 className="cta__title">Curious about what's next?</h2>
            <p className="cta__text">
              New experiments are always brewing in the lab. Check out all projects or learn more about kitsunechaos.
            </p>
            <div className="cta__actions">
              <Link to="/projects">
                <Button variant="primary" size="md" icon="⚡">All Projects</Button>
              </Link>
            </div>
          </div>
          <div className="cta__decoration">
            <img src="/brand/logo.jpg" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
