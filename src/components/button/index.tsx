'use client'

import './style.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: 'secondary' | 'contrast';
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return <button onClick={onClick} className={className}>{children}</button>;
};
