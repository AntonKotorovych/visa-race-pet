export default class Circles {
  constructor() {
    this.canvas = document.getElementById('raceCanvas');
    this.context = this.canvas.getContext('2d');
    this.yAxisStep = this.canvas.height / 5;
  }

  updateCanvasSize() {
    const container = this.canvas.parentElement;
    this.canvas.width = container.clientWidth;
    this.canvas.height = container.clientHeight;
    this.yAxisStep = this.canvas.height / 5;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawCircle(value, x, y, radius, startAngle, endAngle) {
    this.context.beginPath();
    this.context.font = '16px Arial';
    this.context.fillStyle = 'white';
    this.context.textAlign = 'center';
    this.context.textBaseline = 'middle';
    this.context.fillText(value, x, y);
    this.context.lineWidth = 3;
    this.context.strokeStyle = 'white';
    this.context.arc(x, y, radius, startAngle, endAngle);
    this.context.stroke();
    this.context.closePath();
  }

  drawUsernamesCircles(usernames) {
    const xPosition = this.canvas.width / 4;
    let yPosition = this.canvas.height / 10;
    this.clearAllCircles();
    usernames.forEach(username => {
      this.drawCircle(username, xPosition, yPosition, 65, 0, Math.PI * 2);
      yPosition += this.yAxisStep;
    });
  }

  drawBalanceCircles(balances) {
    const xPosition = this.canvas.width / 2;
    let yPosition = this.canvas.height / 10;
    animateBalanceCircles();
    balances.forEach(balance => {
      this.drawCircle(balance, xPosition, yPosition, 65, 0, 0);
      yPosition += this.yAxisStep;
    });
  }

  clearAllCircles() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
