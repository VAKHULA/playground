import './style.css';

type LinkProps = {
  children: React.ReactNode;
  href: string;
  className?: 'secondary' | 'contrast';
};

export const Link: React.FC<LinkProps> = ({ children, href, className = '' }) => {
  return (
    <>
      <a href={href} className={className}>
        {children}
      </a>
    </>
  );
};
