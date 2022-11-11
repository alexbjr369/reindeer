import './watch-now.scss';

export const watchnow = (element: HTMLElement) => {
  element.innerHTML = `
    <a class="watch-now" href="#">
      <i class="fa-solid fa-play"></i>
      <p class="watch-now__link" href="#">watch now!</p>
    </a>
  `;
};
