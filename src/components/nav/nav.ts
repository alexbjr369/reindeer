import { gsap, Expo } from 'gsap';
import './nav.scss';

export const nav = (element: HTMLElement) => {
  element.innerHTML = `
    <nav class="nav">
      <div class="nav__logo">
        <h1 class="nav__heading">
          <span class="nav__highlight">rein <br> deer</span>
          <br>
          snow life
        </h1>
      </div>

      <div class="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a class="nav__link" href="#">home.</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#">snow life.</a>
          </li>
          <li class="nav__item">
            <a class="nav__link" href="#">contact.</a>
          </li>
        </ul>
      </div>

      <span class="nav__scrolldown">scroll</span>
    </nav>
  `;

  gsap.from('.nav__logo', {
    duration: 1,
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut,
  });

  gsap.from('.nav__link', {
    duration: 1,
    delay: 3.2,
    opacity: 0,
    x: -100,
    stagger: 0.08,
    ease: Expo.easeInOut,
  });

  gsap.from('.nav__scrolldown', {
    duration: 1,
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut,
  });
};
