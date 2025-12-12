import { projectsData } from "../assets/js/utils/projectsData.js";

export function projects() {
	const projectCards = projectsData.map(project => `
    <div class="project__item">
      <div class="project__image-container">
        <img src="${project.image}" class="project__image" alt="${project.title} Project Image" />
      </div>
      <div class="project__content">
        <div class="project__info">
          <h2 class="project__title">${project.title}</h2>
          <p class="project__subtitle">${project.subtitle}</p>
          <p class="project__description">${project.description}</p>
        </div>
        <div class="project__actions">
          <a href="${project.github}" class="project__link button__primary">GitHub repo</a>
          <a href="${project.demo}" class="project__link button__primary">Live demo</a>
        </div>
      </div>
    </div>
  `).join("");

	return `
    <h1 class="project__page-title">Projects</h1>
    <div class="project__grid">
      ${projectCards}
    </div>
  `;
}