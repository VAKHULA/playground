import './style.css';

type ArticleProps = {
  children: React.ReactNode;
  className?: 'secondary' | 'contrast';
};

export const Article: React.FC<ArticleProps> = ({ children, className = '' }) => {
  return <article className={className}>{children}</article>;
};
