export function about() {
  return `
    <section class="about__section">
      <img class="image__mask" alt="Portrait Image" src="/portrait.jpg" />
      <h1>Hi! I'm Helene Syre</h1>
      <p>I'm currently a student, but have worked as a graphic designer.</p>
    </section>

    <section class="details__section">
      <div class="work__experience">
        <h2>Work experience</h2>
        <ul class="work__list">
          <li class="work__item">
            <div class="work__logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 35.53" fill="currentColor">
                <path d="M36.35,2.18l-.04,12.06-10.43-6.06-3.66,2.1,17.71,10.3.06-20.5-3.65,2.1Z"/>
                <path d="M22.03,35.53l3.66-2.1.05-12.06,10.34,6.03.08.04,3.66-2.09-17.7-10.32-.08,20.49Z"/>
                <path d="M3.65,12.32l10.46-6-.03,12.06,3.65,2.12.05-20.49L0,10.2l3.65,2.12Z"/>
              </svg>
            </div>
            <div class="work__details">
              <div class="work__info">
                <p class="work__role">Junior Designer</p>
                <h3 class="work__company">Larssen Amaral</h3>
              </div>
              <div class="work__duration">
                <p>2019 - 2021</p>
              </div>
            </div>
          </li>
          <li class="work__item">
            <div class="work__logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 35.53" fill="currentColor">
                <path d="M36.35,2.18l-.04,12.06-10.43-6.06-3.66,2.1,17.71,10.3.06-20.5-3.65,2.1Z"/>
                <path d="M22.03,35.53l3.66-2.1.05-12.06,10.34,6.03.08.04,3.66-2.09-17.7-10.32-.08,20.49Z"/>
                <path d="M3.65,12.32l10.46-6-.03,12.06,3.65,2.12.05-20.49L0,10.2l3.65,2.12Z"/>
              </svg>
            </div>
            <div class="work__details">
              <div class="work__info">
                <p class="work__role">Junior Designer</p>
                <h3 class="work__company">Larssen Amaral</h3>
              </div>
              <div class="work__duration">
                <p>2019 - 2021</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="education">
        <h2>Education</h2>
        <ul class="education__list">
          <li class="education__item">
            <div class="education__logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 35.53" fill="currentColor">
                <path d="M36.35,2.18l-.04,12.06-10.43-6.06-3.66,2.1,17.71,10.3.06-20.5-3.65,2.1Z"/>
                <path d="M22.03,35.53l3.66-2.1.05-12.06,10.34,6.03.08.04,3.66-2.09-17.7-10.32-.08,20.49Z"/>
                <path d="M3.65,12.32l10.46-6-.03,12.06,3.65,2.12.05-20.49L0,10.2l3.65,2.12Z"/>
              </svg>
            </div>
            <div class="education__details">
              <div class="education__info">
                <p class="education__type">Front-end development</p>
                <h3 class="education__school">Noroff</h3>
              </div>
              <div class="education__duration">
                <p>2019 - 2021</p>
              </div>
            </div>
          </li>
          <li class="education__item">
            <div class="education__logo">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 35.53" fill="currentColor">
                <path d="M36.35,2.18l-.04,12.06-10.43-6.06-3.66,2.1,17.71,10.3.06-20.5-3.65,2.1Z"/>
                <path d="M22.03,35.53l3.66-2.1.05-12.06,10.34,6.03.08.04,3.66-2.09-17.7-10.32-.08,20.49Z"/>
                <path d="M3.65,12.32l10.46-6-.03,12.06,3.65,2.12.05-20.49L0,10.2l3.65,2.12Z"/>
              </svg>
            </div>
            <div class="education__details">
              <div class="education__info">
                <p class="education__type">Bachelor in Visual Communication</p>
                <h3 class="education__school">USN</h3>
              </div>
              <div class="education__duration">
                <p>2019 - 2021</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  `;
}