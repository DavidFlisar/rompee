import { writable } from 'svelte/store';
import { browser } from '$app/env';

export const theme = writable('default'); // set the default value to 'default'

if (browser) {
  // check if the browser has a previous value for the theme
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    // use the stored value if it exists
    theme.set(storedTheme);
  }

  // subscribe to the theme store and update the localStorage
  theme.subscribe((value) => {
    localStorage.setItem('theme', value);
  });
}
