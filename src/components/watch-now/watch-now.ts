import { gsap, Expo } from 'gsap';
import './watch-now.scss';

export const watchnow = (element: HTMLElement) => {
  element.innerHTML = `
    <a class="watch-now" href="#">
      <i class="fa-solid fa-play"></i>
      <p class="watch-now__link" href="#">watch now!</p>
    </a>
  `;

  gsap.from('.watch-now', {
    duration: 1,
    delay: 3.4,
    opacity: 0,
    x: 200,
    ease: Expo.easeInOut,
  });
};
