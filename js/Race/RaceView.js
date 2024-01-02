export default class RaceView {
  constructor() {
    this.canvas = document.getElementById('raceCanvas');
    this.context = this.canvas.getContext('2d');
    this.isRacePhase = false;
    this.winnerUsername = document.getElementById('winnerUser');
    this.maxRequestAnimationTime = 43000;
    this.clearAll = document.getElementById('clearAll');
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
  }

  clear() {
    this.clearAllCircles();
    cancelAnimationFrame(this.firstAnimationId);
    cancelAnimationFrame(this.secondAnimationId);
  }

  bindResizeInnerWidth(handler) {
    window.addEventListener('resize', () => {
      handler();
    });
  }

  renderCircles(users, time) {
    this.clearAllCircles();
    users.forEach(user => {
      user.circles.forEach(circle => circle.drawCircle(this.context, time));
    });
  }

  renderWinnerUser(user) {
    if (user) this.winnerUsername.innerText = `${user.fullName} Wins!!! \n FATALITY!`;
  }

  renderRace(users, winner) {
    this.isRacePhase = true;
    const renderRaceAnimation = time => {
      this.renderCircles(users, time);
      this.renderWinnerUser(winner?.user);
      this.firstAnimationId = requestAnimationFrame(renderRaceAnimation);
    };
    this.secondAnimationId = requestAnimationFrame(renderRaceAnimation);

    setTimeout(() => {
      cancelAnimationFrame(this.firstAnimationId);
      cancelAnimationFrame(this.secondAnimationId);
    }, this.maxRequestAnimationTime + 1);
  }
}
