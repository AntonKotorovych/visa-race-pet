export default class RaceView {
  constructor() {
    this.canvas = document.getElementById('raceCanvas');
    this.context = this.canvas.getContext('2d');
  }

  updateCanvasSize() {
    const container = this.canvas.parentElement;
    this.canvas.width = container.clientWidth;
    this.canvas.height = container.clientHeight;
    this.yAxisStep = this.canvas.height / 5;
    this.clearAllCircles();
  }

  clearAllCircles() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  bindResizeInnerWidth(handler) {
    window.addEventListener('resize', () => {
      handler();
    });
  }

  renderCircles(users) {
    this.clearAllCircles();
    users.forEach(user => {
      user.circles.forEach(circle => circle.drawCircle(this.context));
    });
  }

  renderRace(users) {
    const renderRaceAnimation = () => {
      this.renderCircles(users);
      requestAnimationFrame(renderRaceAnimation);
    };
    renderRaceAnimation();
  }
}
