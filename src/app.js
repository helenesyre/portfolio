/**
 * Source from:
 * Building Modern SPAs with Vanilla JavaScript: A Beginner's Guide
 * @publisher: moseeh
 * @date: 18 February
 * accessed: 2025-12-11
 * link: https://dev.to/moseeh_52/building-modern-spas-with-vanilla-javascript-a-beginners-guide-9a3
*/
import { home, initHeroSpline } from './pages/home.js'
import { projects } from './pages/projects.js'
import { about } from './pages/about.js'
import { contact } from './pages/contact.js'
import { navbar } from './assets/js/components/navbar.js'
import { footer } from './assets/js/components/footer.js'

const routes = {
  '#/': home,
  '#/projects': projects,
  '#/about': about,
  '#/contact': contact
};

/**
 * Handles client-side routing for the SPA.
 * Updates the #app element with the content of the current route
 * or displays a 404 message if the route is not found.
 */
function handleRoute() {
  const hash = window.location.hash || '#/'; // Default to home if no hash
  const content = routes[hash] ? routes[hash]() : '<h1>Page Not Found</h1>';
  document.getElementById('app').innerHTML = content;
}

// Listen for navigation events
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', () => {
  handleRoute();
  initHeroSpline();
});

// Render navbar
document.getElementById('navbar').innerHTML = navbar();

// Render footer
document.getElementById('footer').innerHTML = footer();