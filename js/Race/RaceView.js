export default class RaceView {
  constructor() {
    this.canvas = document.getElementById('raceCanvas');
    this.context = this.canvas.getContext('2d');
    this.isRacePhase = false;
    this.winnerUsername = document.getElementById('winnerUser');
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
    cancelAnimationFrame(this.firstAnimationId);
    cancelAnimationFrame(this.secondAnimationId);
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

  renderWinnerUser(user) {
    if (user) this.winnerUsername.innerText = `${user.fullName} Wins!!! \n FATALITY!`;
  }

  renderRace(users, winner) {
    this.isRacePhase = true;
    const renderRaceAnimation = () => {
      this.renderCircles(users);
      this.renderWinnerUser(winner?.user);
      this.firstAnimationId = requestAnimationFrame(renderRaceAnimation);
    };
    this.secondAnimationId = requestAnimationFrame(renderRaceAnimation);

    setTimeout(() => {
      cancelAnimationFrame(this.firstAnimationId);
      cancelAnimationFrame(this.secondAnimationId);
    }, 30000);
  }
}
