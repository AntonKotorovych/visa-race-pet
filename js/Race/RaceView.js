export default class RaceView {
  constructor() {
    this.canvas = document.getElementById('raceCanvas');
    this.context = this.canvas.getContext('2d');
    this.isRacePhase = false;
  }

  updateCanvasSize(users) {
    const container = this.canvas.parentElement;
    this.canvas.width = container.clientWidth;
    this.canvas.height = container.clientHeight;
    this.yAxisStep = this.canvas.height / 5;
    this.clearAllCircles();
    if (this.isRacePhase) {
      this.renderRace(users);
    } else {
      this.renderCircles(users);
    }
  }

  clearAllCircles() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    cancelAnimationFrame(this.animationId);
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
    this.isRacePhase = true;
    const renderRaceAnimation = () => {
      this.renderCircles(users);
      this.animationId = requestAnimationFrame(renderRaceAnimation);
    };
    renderRaceAnimation();

    setTimeout(() => {
      cancelAnimationFrame(this.animationId);
    }, 30000);
  }
}
