import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  external,
  onClick,
  icon,
  className = '',
  ...props
}) => {
  const classes = `btn btn--${variant} btn--${size} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
