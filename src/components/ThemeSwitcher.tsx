'use client';
import { useCallback, useEffect, useState, MouseEventHandler } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import usePrefersColorScheme from 'use-prefers-color-scheme';

// Source Tabler Icons: https://tablericons.com/
const IconSun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};

// Source Tabler Icons: https://tablericons.com/
const IconMoon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};

export const ThemeSwitcher = () => {
  const htmlTag = typeof window !== 'undefined' && document.querySelector('html');
  const systemPrefersColorScheme = usePrefersColorScheme();
  const defaultTheme = systemPrefersColorScheme || 'dark';
  const [selectedTheme, setSelectedTheme] = useLocalStorageState('picoColorScheme');
  const [theme, setTheme] = useState<string>('dark');

  const switchTheme = () => {
    setSelectedTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const setDataThemeAttribute = useCallback(
    (theme: string) => {
      if (htmlTag) {
        htmlTag.setAttribute('data-theme', theme);
      }
    },
    [htmlTag],
  );

  useEffect(() => {
    if (htmlTag) {
      if (selectedTheme) {
        setDataThemeAttribute(String(selectedTheme));
        setTheme(String(selectedTheme));
      } else {
        setDataThemeAttribute(defaultTheme);
        setTheme(defaultTheme);
      }
    }
  }, [htmlTag, defaultTheme, selectedTheme, setDataThemeAttribute]);

  const nextTheme = theme === 'dark' ? 'light' : 'dark';
  const nextThemeLabel =
    theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';

  const handleSwitchTheme: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();
    switchTheme();
  };

  return (
    <a href={`#${nextTheme}`} aria-label={nextThemeLabel} onClick={handleSwitchTheme}>
      {theme === 'dark' ? <IconSun /> : <IconMoon />}
    </a>
  );
};
