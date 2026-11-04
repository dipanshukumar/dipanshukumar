'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('darkMode');
      if (saved && saved !== 'undefined') {
        const parsed = JSON.parse(saved);
        setIsDarkMode(Boolean(parsed));
        if (parsed) {
          document.documentElement.classList.add('dark-mode');
        } else {
          document.documentElement.classList.remove('dark-mode');
        }
      }
    } catch (e) {
      console.warn('Failed to read darkMode from localStorage', e);
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const nextValue = !prev;
      try {
        localStorage.setItem('darkMode', JSON.stringify(nextValue));
      } catch (e) {
        console.warn('Failed to save darkMode to localStorage', e);
      }
      if (nextValue) {
        document.documentElement.classList.add('dark-mode');
      } else {
        document.documentElement.classList.remove('dark-mode');
      }
      return nextValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
