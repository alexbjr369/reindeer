import './media.scss';

export const media = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="media">
      <ul class="media__list">
        <li class="media__item"><i class="fa-brands fa-facebook-f"></i></i></li>
        <li class="media__item"><i class="fa-brands fa-twitter"></i></li>
        <li class="media__item"><i class="fa-brands fa-instagram"></i></li>
      </ul>
    </div>
  `;
};
