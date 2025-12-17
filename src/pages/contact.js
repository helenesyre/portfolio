export function contact(headingLevel = "h1") {
  const headingTag = headingLevel === "h2" ? "h2" : "h1";
  return `
    <section class="contact">
      <div class="contact__intro">
        <div>
          <p class="eyebrow">Contact Now</p>
          <${headingTag} class="contact__title">Let’s Talk</${headingTag}>
          <p class="contact__description"> Have some big idea or brand to develop and need help? Then reach out — we'd love to hear about your project and provide help.</p>
        </div>

        <ul class="contact__methods">
          <li class="contact__method">
            <a href="mailto:syrehelene@gmail.com">
              <i class="fa-regular fa-envelope contact__icon" aria-hidden="true"></i>
              <p class="contact__text"><span class="sr-only">Email address</span>syrehelene@gmail.com</p>
            </a>
          </li>
          <li class="contact__method">
            <a href="https://www.instagram.com/syre_design" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-instagram contact__icon" aria-hidden="true"></i>
              <p class="contact__text"><span class="sr-only">Instagram username</span>syre_design</p>
            </a>
          </li>
          <li class="contact__method">
            <a href="https://www.linkedin.com/in/helene-syre" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-linkedin-in contact__icon" aria-hidden="true"></i>
              <p class="contact__text"><span class="sr-only">LinkedIn username</span>helene-syre</p>
            </a>
          </li>
          <li class="contact__method">
            <a href="https://github.com/helenesyre" target="_blank" rel="noopener noreferrer">
              <i class="fa-brands fa-github contact__icon" aria-hidden="true"></i>
              <p class="contact__text"><span class="sr-only">Github username</span>helenesyre</p>
            </a>
          </li>
        </ul>

        <div class="contact__files">
          <div class="contact__file">
            <a href="documents/Helene_Syre-CV.pdf" download class="contact__file-link">
              <span class="sr-only">Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <path d="M25.75,22.5c-.78,1.37-1.91,2.5-3.27,3.29-1.36.79-2.91,1.21-4.48,1.21s-3.12-.42-4.48-1.21c-1.36-.79-2.49-1.93-3.27-3.29h-5.75c-.6,0-1.17.24-1.59.66-.42.42-.66.99-.66,1.59v6.75c0,.6.24,1.17.66,1.59.42.42.99.66,1.59.66h27c.6,0,1.17-.24,1.59-.66.42-.42.66-.99.66-1.59v-6.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66h-5.75Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                <path d="M18,18V2.25" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                <path d="M12.38,13.5l5.62,4.5,5.62-4.5" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
              </svg>
            </a>
            <div class="contact__file-info">
              <p class="contact__file-label">Download</p>
              <p class="contact__file-type">CV</p>
            </div>
          </div>

          <div class="contact__file">
            <a href="documents/Helene_Syre-Cover_Letter.pdf" download class="contact__file-link">
              <span class="sr-only">Download Cover Letter</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <path d="M25.75,22.5c-.78,1.37-1.91,2.5-3.27,3.29-1.36.79-2.91,1.21-4.48,1.21s-3.12-.42-4.48-1.21c-1.36-.79-2.49-1.93-3.27-3.29h-5.75c-.6,0-1.17.24-1.59.66-.42.42-.66.99-.66,1.59v6.75c0,.6.24,1.17.66,1.59.42.42.99.66,1.59.66h27c.6,0,1.17-.24,1.59-.66.42-.42.66-.99.66-1.59v-6.75c0-.6-.24-1.17-.66-1.59-.42-.42-.99-.66-1.59-.66h-5.75Z" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                <path d="M18,18V2.25" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
                <path d="M12.38,13.5l5.62,4.5,5.62-4.5" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
              </svg>
            </a>
            <div class="contact__file-info">
              <p class="contact__file-label">Download</p>
              <p class="contact__file-type">Cover Letter</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact__form">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="786ee1a7-239d-4a92-b8c6-241d377e2822">
          <div class="form__group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter your name..." required />
          </div>

          <div class="form__group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email..." required />
          </div>

          <div class="form__group">
            <label for="service">What service are you interested in</label>
            <select id="service" name="service" required>
              <optgroup label="Front-end">
                <option value="Website" selected>Website</option>
                <option value="WebApp">Web App</option>
                <option value="LandingPage">Landing Page</option>
                <option value="Other-Frontend">Other (Front-end)</option>
              </optgroup>
              <optgroup label="Graphic Design">
                <option value="Branding">Branding</option>
                <option value="UIUXDesign">UI/UX Design</option>
                <option value="Other-Graphic">Other (Graphic Design)</option>
              </optgroup>
            </select>
          </div>

          <div class="form__group">
            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Enter your message..." required></textarea>
          </div>

          <button type="submit" class="button__secondary">
            Send Message
            <i class="fa-regular fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </section>
  `;
}