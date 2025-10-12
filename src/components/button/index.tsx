import './style.css';
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: 'secondary' | 'contrast';
};

export const Button: React.FC<ButtonProps> = ({ children, className = '' }) => {
  return <button className={className}>{children}</button>;
};
