'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from 'next-themes';

export default function ThemeToggleIcon() {
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme==='dark' || false);
  return (
    <div className='cursor-pointer mr-4 mt-1 sm:mr-0 sm:mt-0 z-10'>
      {isDarkMode
        ? <FontAwesomeIcon className='w-6 h-6 sm:w-6 sm:h-6' icon={faSun} onClick={() => {setTheme("light"); setIsDarkMode(prev => !prev);}}/>
        : <FontAwesomeIcon className='w-6 h-6 sm:w-6 sm:h-6' icon={faMoon} onClick={() => {setTheme("dark"); setIsDarkMode(prev => !prev);}} />
      }
    </div>
  );
}