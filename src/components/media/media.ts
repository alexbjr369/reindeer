import { gsap, Expo } from 'gsap';
import './media.scss';

export const media = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="media">
      <ul class="media__list">
        <li>
          <a class="media__link" href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a class="media__link" href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li>
          <a class="media__link" href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </div>
  `;

  gsap.from('.media__item', {
    duration: 1,
    delay: 3,
    opacity: 0,
    y: 100,
    stagger: 0.08,
    ease: Expo.easeInOut,
  });
};
