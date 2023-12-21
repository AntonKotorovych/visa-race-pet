import Circle from './Circle';

export default class RaceView {
  constructor() {
    this.circle = new Circle();
  }
  bindResizeInnerWidth(handler) {
    window.addEventListener('resize', () => {
      handler();
    });
  }
}
