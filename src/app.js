/**
 * Source from 11.desember:
 * https://dev.to/moseeh_52/building-modern-spas-with-vanilla-javascript-a-beginners-guide-9a3
 */
import { home } from './pages/home.js'
import { projects } from './pages/projects.js'
import { about } from './pages/about.js'
import { contact } from './pages/contact.js'

import { footer } from './assets/js/components/footer.js'

const routes = {
  '#/': home,
  '#/projects': projects,
  '#/about': about,
  '#/contact': contact
};

function handleRoute() {
  console.log('Navigating to:', window.location.hash);
  const hash = window.location.hash || '#/'; // Default to home if no hash
  const content = routes[hash] ? routes[hash]() : '<h1>Page Not Found</h1>';
  document.getElementById('app').innerHTML = content;
}

// Listen for navigation events
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

// Render footer
document.getElementById('footer').innerHTML = footer();