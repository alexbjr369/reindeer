import { gsap, Expo } from 'gsap';
import './text.scss';

export const text = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="text">
      <div class="text__heading">reindeer</div>
      <p class="text__paragraph">Mauris elementum, dui ac sagittis <br> cursus, libero elit sodales odio</p>
    </div>
  `;

  gsap.from('.text__heading', {
    duration: 1,
    delay: 3,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut,
  });

  gsap.from('.text__paragraph', {
    duration: 1,
    delay: 3.2,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut,
  });
};
