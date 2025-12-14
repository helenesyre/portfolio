export function navbar() {
  // No need for currentPath, logic handled in initNavbar
  return `
    <div class="navbar-logo">
      <a href="#/">
        <svg width="99" height="39" viewBox="0 0 99 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.1081 31.0774C9.49809 31.0774 7.2917 30.6603 5.48892 29.8262C3.71304 28.9921 2.35423 27.8485 1.41248 26.3956C0.470727 24.9157 -0.000148344 23.2474 -0.000148344 21.3908H5.61C5.61 22.1711 5.82526 22.938 6.25577 23.6914C6.68629 24.4179 7.37242 25.0098 8.31417 25.4673C9.28283 25.9247 10.5475 26.1534 12.1081 26.1534C13.5073 26.1534 14.6777 25.9516 15.6195 25.548C16.5612 25.1444 17.2608 24.6197 17.7182 23.9739C18.1757 23.3012 18.4044 22.5478 18.4044 21.7137C18.4044 20.6643 17.9604 19.8302 17.0725 19.2113C16.1845 18.5656 14.8123 18.162 12.9557 18.0005L10.3726 17.7987C7.54732 17.5565 5.28711 16.6821 3.59196 15.1753C1.92372 13.6415 1.08959 11.6235 1.08959 9.12114C1.08959 7.23763 1.53356 5.6232 2.4215 4.27784C3.30944 2.90558 4.54717 1.8562 6.13469 1.1297C7.74912 0.376301 9.63263 -0.000399896 11.7852 -0.000399896C14.0185 -0.000399896 15.9424 0.389754 17.5568 1.17006C19.1712 1.95037 20.4224 3.05357 21.3103 4.47965C22.1983 5.87882 22.6422 7.53361 22.6422 9.44402H17.0321C17.0321 8.63681 16.8303 7.89686 16.4267 7.22418C16.05 6.52459 15.4715 5.973 14.6912 5.56939C13.9378 5.13887 12.9691 4.92362 11.7852 4.92362C10.6551 4.92362 9.71335 5.11197 8.95994 5.48867C8.20654 5.86537 7.64149 6.3766 7.26479 7.02238C6.88809 7.66815 6.69974 8.36774 6.69974 9.12114C6.69974 10.036 7.03608 10.8432 7.70876 11.5428C8.38144 12.2155 9.44427 12.6056 10.8973 12.7132L13.4804 12.9554C15.5791 13.1169 17.4223 13.5608 19.0098 14.2873C20.5973 15.0138 21.8216 15.9959 22.6826 17.2337C23.5705 18.4714 24.0145 19.9647 24.0145 21.7137C24.0145 23.5703 23.5302 25.2116 22.5615 26.6377C21.5929 28.0369 20.2071 29.1266 18.4044 29.9069C16.6285 30.6872 14.5297 31.0774 12.1081 31.0774ZM28.1647 38.9478V34.1448H32.2815C33.0618 34.1448 33.7076 34.0372 34.2189 33.8219C34.757 33.6336 35.201 33.3107 35.5508 32.8533C35.9006 32.4228 36.1696 31.8173 36.358 31.037L42.2507 8.39464H47.6186L41.1205 32.2479C40.69 33.8892 40.0846 35.1942 39.3043 36.1629C38.524 37.1584 37.515 37.8715 36.2773 38.302C35.0664 38.7325 33.5596 38.9478 31.7568 38.9478H28.1647ZM34.9857 29.8262V25.3865H39.6676V29.8262H34.9857ZM33.0888 29.8262L25.9853 8.39464H31.6358L38.376 29.8262H33.0888ZM51.474 30.3105V8.39464H55.9137V17.6776H55.7926C55.7926 14.5295 56.4653 12.1482 57.8107 10.5338C59.156 8.91933 61.1337 8.11212 63.7437 8.11212H64.5509V12.9958H63.0172C61.1337 12.9958 59.6673 13.507 58.6179 14.5295C57.5954 15.525 57.0842 16.978 57.0842 18.8884V30.3105H51.474ZM77.9542 31.0774C76.0707 31.0774 74.4159 30.7545 72.9898 30.1087C71.5906 29.463 70.4202 28.6019 69.4784 27.5257C68.5636 26.4225 67.864 25.1982 67.3796 23.8528C66.9222 22.5075 66.6935 21.1352 66.6935 19.736V18.9692C66.6935 17.5162 66.9222 16.117 67.3796 14.7716C67.864 13.3994 68.5636 12.1886 69.4784 11.1392C70.4202 10.0629 71.5772 9.21531 72.9494 8.59645C74.3217 7.95067 75.9092 7.62779 77.712 7.62779C80.0798 7.62779 82.0575 8.15248 83.645 9.20186C85.2595 10.2243 86.4703 11.5831 87.2775 13.2783C88.0847 14.9465 88.4883 16.7493 88.4883 18.6866V20.7047H69.0748V17.274H84.9769L83.2414 18.9692C83.2414 17.57 83.0396 16.3726 82.636 15.3771C82.2324 14.3815 81.6135 13.6146 80.7794 13.0765C79.9722 12.5383 78.9497 12.2693 77.712 12.2693C76.4743 12.2693 75.4249 12.5518 74.5639 13.1169C73.7028 13.6819 73.0436 14.5026 72.5862 15.5789C72.1557 16.6282 71.9404 17.8929 71.9404 19.3728C71.9404 20.745 72.1557 21.9693 72.5862 23.0456C73.0167 24.095 73.6759 24.9291 74.5639 25.548C75.4518 26.1399 76.5819 26.4359 77.9542 26.4359C79.3264 26.4359 80.4431 26.1668 81.3041 25.6287C82.1651 25.0636 82.7167 24.3775 82.9589 23.5703H88.1251C87.8022 25.0771 87.1833 26.3956 86.2685 27.5257C85.3536 28.6558 84.1832 29.5302 82.7571 30.1491C81.3579 30.768 79.757 31.0774 77.9542 31.0774Z"
            fill="#F0F0F0" />
          <path d="M91.9322 30.3105V23.8528H98.2285V30.3105H91.9322Z" fill="#60B0FF" />
        </svg>
      </a>
    </div>

    <div class="nav__overlay" id="nav-overlay"></div>

    <ul class="navbar-links">
      <li><a href="#/" class="active">Home</a></li>
      <li><a href="#/projects">Projects</a></li>
      <li><a href="#/about">About</a></li>
      <li><a href="#/contact">Contact</a></li>
    </ul>

    <ul class="navbar-icons">
      <li>
        <a href="https://www.instagram.com/syre_design" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-instagram" aria-label="Instagram"></i>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/helene-syre" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-linkedin-in" aria-label="LinkedIn"></i>
        </a>
      </li>
      <li>
        <a href="https://github.com/helenesyre" target="_blank" rel="noopener noreferrer">
          <i class="fa-brands fa-github" aria-label="Github"></i>
        </a>
      </li>
    </ul>

    <div class="nav__menu" id="nav-menu">
      <div class="nav__close" id="nav-close">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 13.5">
          <path d="M.75,12.75L12.75.75M.75.75l12,12" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.25px;"/>
        </svg>
      </div>
      <ul class="navbar-links-mobile">
        <li><a href="#/" class="active">Home</a></li>
        <li><a href="#/projects">Projects</a></li>
        <li><a href="#/about">About</a></li>
        <li><a href="#/contact">Contact</a></li>
      </ul>

      <ul class="navbar-icons-mobile">
        <li>
          <a href="https://www.instagram.com/syre_design" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-instagram" aria-label="Instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/helene-syre" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-linkedin-in" aria-label="LinkedIn"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/helenesyre" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-github" aria-label="Github"></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="nav__toggle" id="nav-toggle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M1,4h22M1,12h22M1,20h22" style="fill: none; stroke: currentColor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5px;"/>
      </svg>
    </div>
  `;
}

function initNavbar() {
  const navOverlay = document.getElementById("nav-overlay");
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLinks = document.querySelectorAll(".navbar-links-mobile a");
  const navLinksDesktop = document.querySelectorAll(".navbar-links a");

  function setActiveNavLink() {
    const hash = window.location.hash || "#/";
    // Desktop links
    navLinksDesktop.forEach(link => {
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
    // Mobile links
    navLinks.forEach(link => {
      if (link.getAttribute("href") === hash) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  setActiveNavLink();
  window.addEventListener("hashchange", setActiveNavLink);

  // Show menu
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
      navOverlay.classList.add("show-overlay");
    });
  }

  // Hide menu
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      navOverlay.classList.remove("show-overlay");
    });
  }

  // Hide menu when clicking outside
  if (navOverlay) {
    navOverlay.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
      navOverlay.classList.remove("show-overlay");
    });
  }

  // Close menu when clicking on nav links
  if (navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
        navOverlay.classList.remove("show-overlay");
      });
    });
  }
}

window.addEventListener('load', () => {
  initNavbar();
});