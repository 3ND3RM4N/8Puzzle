export class Box {
  constructor() {
    this.width = 40;
    this.height = 40;
  }

  setMargins(posx, posy) {
    this.posx = posx;
    this.posy = posy;
  }

  set setBoxNo(num) {
    this.boxNo = num;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.posx, this.posy, this.width, this.height);
    ctx.stroke();
    ctx.font = "18px Arial";
    ctx.fillText(
      this.boxNo,
      this.posx + this.width / 2 - 6,
      this.posy + this.height / 2 + 6
    );
    ctx.stroke();
  }
}
