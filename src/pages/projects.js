import { projectsData } from "../assets/js/utils/projectsData.js";

function getTagsHtml(tags) {
  return tags.map(tag => `<span class="project__tag tag__${tag.toLowerCase().replace(/\s+/g, '-')}">${tag}</span>`).join("");
}

export function projects() {
  const projectCards = projectsData.map(project => `
    <div class="project__item">
      <div class="project__image-container">
        <div class="project__tags">
          ${getTagsHtml(project.tags)}
        </div>
        <img src="${project.image}" class="project__image" alt="${project.title} Project Image" />
      </div>
      <div class="project__content">
        <div class="project__info">
          <h2 class="project__title">${project.title}</h2>
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
    <h1 class="project__page-title">Projects</h1>
    <div class="project__grid">
      ${projectCards}
    </div>
  `;
}