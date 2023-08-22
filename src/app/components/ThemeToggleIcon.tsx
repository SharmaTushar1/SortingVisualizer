'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from 'next-themes';

export default function ThemeToggleIcon() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme==='dark' || false);
  return (
    <div className='cursor-pointer z-10'>
      {isDarkMode
        ? <FontAwesomeIcon className='fa-lg' icon={faSun} onClick={() => {setTheme("light"); setIsDarkMode(prev => !prev);}}/>
        : <FontAwesomeIcon className='fa-lg' icon={faMoon} onClick={() => {setTheme("dark"); setIsDarkMode(prev => !prev);}} />
      }
    </div>
  );
}