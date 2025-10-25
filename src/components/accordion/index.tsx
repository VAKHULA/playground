'use client'

import './style.css';

type AccordionProps = {
  children: React.ReactNode;
  summary?: string;
  className?: 'secondary' | 'contrast';
};

export const Accordion: React.FC<AccordionProps> = ({ children, summary = '', className = '' }) => {
  return (
  <details open>
  <summary role="button" className={className}>{summary}</summary>
 {children}
</details>
  );
};
