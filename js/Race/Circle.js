export default class Circle {
  constructor({ text, x, y, radius = 65, startAngle = 0, endAngle = Math.PI * 2, color = 'white' }) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.color = color;
  }

  drawCircle(context) {
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
