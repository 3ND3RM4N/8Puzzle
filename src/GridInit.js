import { Box } from "/src/Box.js";

export class GridInit {
  constructor() {
    this.boxList = this.generateBoxList();
  }
  get gridConfig() {
    return this.boxList;
  }
  generateBoxList() {
    let boxList = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let box = new Box();
        box.setMargins(box.width * j, box.height * i);
        boxList.push(box);
      }
    }
    let config = ["", 1, 2, 3, 4, 5, 6, 7, 8];
    for (let i = config.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [config[i], config[j]] = [config[j], config[i]];
    }
    for (let i = 0; i < config.length; i++) {
      boxList[i].boxNo = config[i];
    }
    return boxList;
  }
}
