import { writable } from 'svelte/store';

// Only access localStorage in the browser
const storedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') || 'default' : 'default';

// Initialize the theme store with the stored theme or default
export const theme = writable(storedTheme);

// Subscribe to the theme store to apply changes immediately
theme.subscribe((value) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme', value); // Store the selected theme in localStorage
    document.documentElement.className = value; // Apply the theme to <html> immediately
  }
});
