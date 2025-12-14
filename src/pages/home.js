import { Application } from "@splinetool/runtime";

export function home() {
  return `
    <div class="hero-spline-container">
      <div class="hero-spline-wrapper">
      </div>
    </div>
    <p>Hi! I'm Helene</p>
    <h1>Front-end Developer, UI & UX Designer.</h1>
    <p>scroll down</p>
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