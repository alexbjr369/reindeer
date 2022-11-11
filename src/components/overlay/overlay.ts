import { gsap, Expo } from 'gsap';
import './overlay.scss';

export const overlay = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="overlay">
      <h1 class="overlay__heading">Reindeer</h1>
      <span class="overlay__subheading">snow life</span>
    </div>
  `;

  gsap.to('.overlay__heading', {
    duration: 2,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut,
  });

  gsap.to('.overlay__subheading', {
    duration: 2,
    opacity: 0,
    delay: 0.3,
    y: -60,
    ease: Expo.easeInOut,
  });

  gsap.to('.overlay', {
    duration: 2,
    delay: 0.9,
    top: '-100%',
    ease: Expo.easeInOut,
  });
};
