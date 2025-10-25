'use client'

import './style.css';

type AbbreviationProps = {
  children: React.ReactNode;
  title?: string;
  className?: 'secondary' | 'contrast';
};

export const Abbreviation: React.FC<AbbreviationProps> = ({ children, title = '', className = '' }) => {
  return (
    <abbr className={className} title={title}>
      {children}
    </abbr>
  );
};
