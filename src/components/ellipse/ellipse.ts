import './ellipse.scss';

export const ellipse = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="ellipse">
      <div class="ellipse__item ellipse__item_thin"></div>
      <div class="ellipse__item ellipse__item_thick"></div>
      <div class="ellipse__item ellipse__item_yellow"></div>
      <div class="ellipse__circle ellipse__circle_1"><span class="ellipse__text">Maecenas purus at</span></div>
      <div class="ellipse__circle ellipse__circle_2"><span class="ellipse__text">Fringilla Maecenas</span></div>
    </div>
  `;
};
