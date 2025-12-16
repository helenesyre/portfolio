import { Application } from "@splinetool/runtime";
import { animationsData } from "../assets/js/utils/animationsData.js";
import { projectsData } from "../assets/js/utils/projectsData.js";
import { contact } from '../pages/contact.js';

export function home() {
  const graphicDesignAnimation = animationsData.find(anim => anim.id === 'graphicDesign');
  const motionGraphicsAnimation = animationsData.find(anim => anim.id === 'motionGraphics');
  const brandIdentityAnimation = animationsData.find(anim => anim.id === 'brandIdentity');
  const uiUxAnimation = animationsData.find(anim => anim.id === 'uiUx');
  const webDevelopmentAnimation = animationsData.find(anim => anim.id === 'webDevelopment');
  const projectCards = projectsData.map(project => `
    <div class="project__item">
      <div class="project__image-container">
        <div class="project__tags">
          ${project.tags.map(tag => `<span class="project__tag tag__${tag.toLowerCase().replace(/\s+/g, '-')}">${tag}</span>`).join("")}
        </div>
        <img src="${project.image}" class="project__image" alt="${project.alt} Project Image" />
      </div>
      <div class="project__content">
        <div class="project__info">
          <h3 class="project__title">${project.title}</h3>
          <p class="project__subtitle">${project.subtitle}</p>
          <p class="project__description">${project.description}</p>
        </div>
        <div class="project__actions">
          <a href="${project.githubRepo}" class="project__link button__primary" target="_blank" rel="noopener">GitHub repo</a>
          <a href="${project.liveDemo}" class="project__link button__primary" target="_blank" rel="noopener">Live demo</a>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <div class="hero-spline-container">
      <div class="hero-spline-wrapper">
      </div>
    </div>
    <section>
      <div class="hero__content">
        <p class="hero__intro">Hi! I'm Helene</p>
        <h1 class="hero__title">
          <span>Front-end Developer,</span>
          <span>UI & UX Designer.</span>
        </h1>
      </div>
      <button type="button" class="hero__scroll scroll-button" aria-label="Scroll down to projects" onclick="scrollToProjects()">scroll down</button>
    </section>

    <section class="skills-and-services"">
      <h2 class="skills-and-services__heading">Skills & Services</h2>
      <ul class="skills-and-services__list">
        <li class="skills-and-services__item">
          <span class="skills-and-services__text">UI</span>
          <div class="skills-and-services__lottie">
            ${uiUxAnimation.html}
          </div>
          <span class="skills-and-services__text">UX</span>
        </li>
        <li class="skills-and-services__item">
          <span class="skills-and-services__text">Graphic</span>
          <div class="skills-and-services__lottie">
            ${graphicDesignAnimation.html}
          </div>
          <span class="skills-and-services__text">design</span>
        </li>
        <li class="skills-and-services__item">
          <span class="skills-and-services__text">Motion</span>
          <div class="skills-and-services__lottie">
            ${motionGraphicsAnimation.html}
          </div>
          <span class="skills-and-services__text">graphics</span>
        </li>
        <li class="skills-and-services__item">
          <span class="skills-and-services__text">Brand</span>
          <div class="skills-and-services__lottie">
            ${brandIdentityAnimation.html}
          </div>
          <span class="skills-and-services__text">identity</span>
        </li>
        <li class="skills-and-services__item">
          <span class="skills-and-services__text">Web</span>
          <div class="skills-and-services__lottie">
            ${webDevelopmentAnimation.html}
          </div>
          <span class="skills-and-services__text">development</span>
        </li>
      </ul>
    </section>

    <section class="projects__section" id="projects">
      <h2 class="projects__heading">Projects</h2>
      <div class="project__grid">
        ${projectCards}
      </div>
    </section>

    <section class="contact__section">
      ${contact("h2")}
    </section>
  `;
}

/**
 * Source from 15.december:
 * https://www.npmjs.com/package/@splinetool/runtime
 */
export function initHeroSpline() {
  const splineSceneUrl = 'https://prod.spline.design/h0WdaIUKmoHSzeMK/scene.splinecode';
  function initializeCanvas() {
    const wrapper = document.querySelector('.hero-spline-wrapper');
    if (!wrapper) return;
    const canvas = document.createElement('canvas');
    canvas.id = 'hero-spline';
    canvas.className = 'hero-spline';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    wrapper.appendChild(canvas);
  }

  let spline = null;

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#/') {
      initializeCanvas();
      const newCanvas = document.getElementById('hero-spline');
      if (!newCanvas) return;
      if (spline !== null) {
        spline.dispose();
      };
      spline = new Application(newCanvas); // Reuse the same spline reference
      spline.load(splineSceneUrl);
    } else {
      if (spline !== null) {
        spline.dispose();
      };
      const canvas = document.getElementById('hero-spline');
      if (canvas) {
        canvas.remove();
      };
    }
  });

  // start the application and load the scene
  initializeCanvas();

  const canvas = document.getElementById('hero-spline');
  if (!canvas) return;
  spline = new Application(canvas);
  spline.load(splineSceneUrl);
}

// Scroll to #projects with offset
export function scrollToProjects() {
  const element = document.getElementById('projects');
  if (element) {
    const yOffset = -80; // Adjust this value to set the offset
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// Attach to window for inline HTML access
window.scrollToProjects = scrollToProjects;