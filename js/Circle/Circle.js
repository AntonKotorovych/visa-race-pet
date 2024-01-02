const FULL_CIRCLE_ANGLE = Math.PI * 2;

export default class Circle {
  constructor({ text, x, y, radius = 65, startAngle = 0, endAngle = Math.PI * 2, color = 'white', duration }) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.color = color;
    this.duration = duration;
    this.previousTimeAnimation = null;
  }

  updateEndAngle(time) {
    if (this.duration) {
      if (!this.previousTimeAnimation) {
        this.previousTimeAnimation = time;
        return;
      }
      if (this.endAngle <= FULL_CIRCLE_ANGLE) {
        this.endAngle += FULL_CIRCLE_ANGLE / (this.duration / (time - this.previousTimeAnimation));
      }

      this.previousTimeAnimation = time;
    }
  }

  drawCircle(context, time) {
    this.updateEndAngle(time);

    context.beginPath();
    context.font = '16px Arial';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(this.text, this.x, this.y);
    context.lineWidth = 3;
    context.strokeStyle = this.color;
    context.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    context.stroke();
    context.closePath();
  }
}
