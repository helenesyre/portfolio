import { workExperiencesData } from "../assets/js/utils/workExperiencesData.js";
import { educationsData } from "../assets/js/utils/educationsData.js";
import { animationsData } from "../assets/js/utils/animationsData.js";

export function about() {
  const workExperienceCard = workExperiencesData.map(experience => `
    <li class="work__item">
      <div class="work__logo">
        ${experience.logo}
      </div>
      <div class="work__details">
        <div class="work__info">
          <p class="work__role">${experience.role}</p>
          <h3 class="work__company">${experience.company}</h3>
        </div>
        <div class="work__duration">
          <p>${experience.duration}</p>
        </div>
      </div>
    </li>
  `).join("");

  const educationCard = educationsData.map(education => `
    <li class="education__item">
      <div class="education__logo">
        ${education.logo}
      </div>
      <div class="education__details">
        <div class="education__info">
          <p class="education__type">${education.type}</p>
          <h3 class="education__school">${education.school}</h3>
        </div>
        <div class="education__duration">
          <p>${education.duration}</p>
        </div>
      </div>
    </li>
  `).join("");

  const graphicDesignAnimation = animationsData.find(anim => anim.id === 'graphicDesign');
  const motionGraphicsAnimation = animationsData.find(anim => anim.id === 'motionGraphics');
  const brandIdentityAnimation = animationsData.find(anim => anim.id === 'brandIdentity');
  const uiUxAnimation = animationsData.find(anim => anim.id === 'uiUx');
  const webDevelopmentAnimation = animationsData.find(anim => anim.id === 'webDevelopment');

  return `
    <section class="about__container">
      <section class="about__section">
        <img class="image__mask" alt="Portrait Image" src="${import.meta.env.BASE_URL}portrait.jpg" />
        <h1>Hi! I'm Helene Syre</h1>
        <p>I'm currently a student, but have worked as a graphic designer.</p>
      </section>

      <section class="details__section">
        <div class="work__experience">
          <h2>Work experience</h2>
          <ul class="work__list">
            ${workExperienceCard}
          </ul>
        </div>

        <hr>

        <div class="education">
          <h2>Education</h2>
          <ul class="education__list">
            ${educationCard}
          </ul>
        </div>

        <hr>

        <div class="services">
          <h2>What I do</h2>
          <ul class="services__list">
            <li class="services__item">
              <div class="lottie__container">
                ${uiUxAnimation.html}
              </div>
              <div class="services__details">
                <div class="services__info">
                  <h3 class="services__name">UI/UX</h3>
                  <p class="services__description">UI (user interface) and UX (user experience) design are about creating intuitive, user-friendly digital products. UI focuses on the design of the visual elements such as buttons, icons, and menus, while UX is about the overall experience the user has when interacting with the product. The goal is to make the interaction as simple and efficient as possible.</p>
                </div>
              </div>
            </li>
            <li class="services__item">
              <div class="lottie__container">
                ${graphicDesignAnimation.html}
              </div>
              <div class="services__details">
                <div class="services__info">
                  <h3 class="services__name">Graphic design</h3>
                  <p class="services__description">Graphic design is about creating visual communication through the use of typography, images, colors, and layout. It includes everything from printed materials like posters and brochures, to digital media like websites and apps.</p>
                </div>
              </div>
            </li>
            <li class="services__item">
              <div class="lottie__container">
                ${motionGraphicsAnimation.html}
              </div>
              <div class="services__details">
                <div class="services__info">
                  <h3 class="services__name">Motion graphics</h3>
                  <p class="services__description">Motion design combines graphic design with animation to create moving images. This can include anything from animated logos and titles to complex sequences that tell a story. Motion design is often used in film, television, advertising, and digital platforms to capture attention and engage audiences.</p>
                </div>
              </div>
            </li>
            <li class="services__item">
              <div class="lottie__container full-height">
                ${brandIdentityAnimation.html}
              </div>
              <div class="services__details">
                <div class="services__info">
                  <h3 class="services__name">Brand identity</h3>
                  <p class="services__description">Brand identity, or visual identity, refers to the visual elements that represent a business or organization. This includes the logo, color palette, typography, and other elements that are used consistently across all media channels. A strong corporate identity helps create recognition and credibility.</p>
                </div>
              </div>
            </li>
            <li class="services__item">
              <div class="lottie__container">
                ${webDevelopmentAnimation.html}
              </div>
              <div class="services__details">
                <div class="services__info">
                  <h3 class="services__name">Web development</h3>
                  <p class="services__description">Web development involves building and maintaining websites using HTML, CSS, and JavaScript. It focuses on creating functional and interactive websites by turning designs into working pages. Web development also includes making sure websites work well on different devices and screen sizes.</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </section>
  `;
}