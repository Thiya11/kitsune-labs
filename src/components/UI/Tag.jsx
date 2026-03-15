import './Tag.css';

const Tag = ({ children, variant = 'default', size = 'sm' }) => {
  return (
    <span className={`tag tag--${variant} tag--${size}`}>
      {children}
    </span>
  );
};

export default Tag;
