import { gsap, Expo } from 'gsap';
import './ellipse.scss';

export const ellipse = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="ellipse">
      <div class="ellipse__item ellipse__item_thin"></div>
      <div class="ellipse__item ellipse__item_thick"></div>
      <div class="ellipse__item ellipse__item_yellow"></div>
      <div class="ellipse__circle-container ellipse__circle-container_1">
        <div class="ellipse__circle"></div>
        <span class="ellipse__text">Maecenas purus at</span>
      </div>
      <div class="ellipse__circle-container ellipse__circle-container_2">
        <div class="ellipse__circle"></div>
        <span class="ellipse__text">Fringilla Maecenas</span>
      </div>
    </div>
  `;

  gsap.from('.ellipse', {
    duration: 1,
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  gsap.from('.ellipse__item_yellow', {
    duration: 1,
    delay: 3.5,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  gsap.from('.ellipse__circle-container_1', {
    duration: 1,
    delay: 2.4,
    opacity: 0,
    ease: Expo.easeInOut,
  });

  gsap.from('.ellipse__circle-container_2', {
    duration: 1,
    delay: 2.6,
    opacity: 0,
    ease: Expo.easeInOut,
  });
};
