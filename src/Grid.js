export class Grid {
  constructor(gridList) {
    this.gridList = gridList;
  }
  draw() {
    this.gridList.forEach((node, index, list) => {
      let level = document.createElement("div");
      level.width = node.length * node[0][0].width * 3;
      level.height = node[0][0].height * 3;
      document
        .getElementById("app")
        .insertBefore(level, document.getElementById("app").childNodes[0]);

      let header = document.createElement("h4");
      header.innerHTML = `Level ${index}`;

      level.insertBefore(header, level.childNodes[0]);

      this.level = level;
      node.forEach(gridConfig => {
        let canvas = document.createElement("canvas");
        canvas.height = gridConfig[0].height * 3;
        canvas.width = gridConfig[0].width * 3;
        canvas.style = "margin:5px";
        this.level.insertBefore(canvas, this.level.childNodes[0]);
        let ctx = canvas.getContext("2d");
        gridConfig.forEach(box => {
          box.draw(ctx);
        });
      });
    });
  }
}
