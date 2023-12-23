import Circles from './Circles';

export default class RaceView {
  constructor() {
    this.circles = new Circles();
  }

  bindResizeInnerWidth(handler) {
    window.addEventListener('resize', () => {
      handler();
    });
  }

  initiateBalanceRendering(balances) {
    this.circles.drawBalanceCircles(balances);
  }
}
