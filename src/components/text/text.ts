import './text.scss';

export const text = (element: HTMLElement) => {
  element.innerHTML = `
    <div class="text">
      <div class="text__heading">reindeer</div>
      <p>Mauris elementum, dui ac sagittis <br> cursus, libero elit sodales odio</p>
    </div>
  `;
};
