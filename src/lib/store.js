import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const theme = writable('default'); // Default theme

if (browser) {
  // Check if a theme is stored in localStorage
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    theme.set(storedTheme); // Set theme from localStorage
    document.body.className = storedTheme; // Apply the theme
  }

  // Subscribe to theme changes and update both localStorage and the DOM
  theme.subscribe((value) => {
    if (value) {
      localStorage.setItem('theme', value); // Save to localStorage
      document.body.className = value; // Apply the new theme
    }
  });
}
