import { ellipse } from '../ellipse/ellipse';
import { media } from '../media/media';
import { nav } from '../nav/nav';
import { overlay } from '../overlay/overlay';
import { text } from '../text/text';
import { watchnow } from '../watch-now/watch-now';
import './app.scss';

const overlaySelector = 'overlay-container';
const navSelector = 'nav-container';
const textSelector = 'text-container';
const watchnowSelector = 'watch-now-container';
const mediaSelector = 'media-container';
const ellipseSelector = 'ellipse-container';

export const app = (element: HTMLDivElement) => {
  element.innerHTML = `
    <aside id=${navSelector}></aside>
    <div class="container">
      <main class="main">
        <div id=${textSelector}></div>
        <div id=${watchnowSelector} class="watch-now-container"></div>
        <div id=${ellipseSelector}></div>
      </main>

      <footer>
        <div id=${mediaSelector}></div>
      </footer>
    </div>
    <div id=${overlaySelector}></div>
  `;

  const overlayElement = document.querySelector<HTMLDivElement>(
    `#${overlaySelector}`
  )!;
  const navElement = document.querySelector<HTMLDivElement>(`#${navSelector}`)!;
  const textElement = document.querySelector<HTMLDivElement>(
    `#${textSelector}`
  )!;
  const watchnowElement = document.querySelector<HTMLDivElement>(
    `#${watchnowSelector}`
  )!;
  const mediaElement = document.querySelector<HTMLDivElement>(
    `#${mediaSelector}`
  )!;
  const ellipseElement = document.querySelector<HTMLDivElement>(
    `#${ellipseSelector}`
  )!;

  overlay(overlayElement);
  nav(navElement);
  text(textElement);
  watchnow(watchnowElement);
  media(mediaElement);
  ellipse(ellipseElement);
};
