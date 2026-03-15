import { Link } from 'react-router-dom';
import Button from '../../components/UI/Button';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found page-enter">
      <div className="not-found__content">
        <div className="not-found__glitch" data-text="404">404</div>
        <h1 className="not-found__title">Lost in the Void</h1>
        <p className="not-found__text">
          This experiment doesn't exist... yet. Maybe it's still brewing in the lab.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg" icon="⛩">
            Back to Lab
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
