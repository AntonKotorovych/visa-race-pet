export default class Circle {
  constructor() {
    this.canvas = document.getElementById('raceCanvas');
    this.context = this.canvas.getContext('2d');
  }

  updateCanvasSize() {
    const container = this.canvas.parentElement;
    this.canvas.width = container.clientWidth;
    this.canvas.height = container.clientHeight;
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawUsernamesCircles(usernames) {
    const xPosition = 150;
    let yPosition = 100;
    this.clearAllCircles();
    usernames.forEach(username => {
      this.context.beginPath();
      this.context.font = '15px Gloria Hallelujah';
      this.context.fillStyle = 'white';
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';
      this.context.fillText(username, xPosition, yPosition);
      this.context.lineWidth = 3;
      this.context.strokeStyle = 'white';
      this.context.arc(xPosition, yPosition, 65, 0, Math.PI * 2);
      this.context.stroke();
      this.context.closePath();
      yPosition += 150;
    });
  }

  clearAllCircles() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
