import { Grid } from "/src/Grid.js";
import { GridInit } from "/src/GridInit.js";

let util1 = new GridInit();
let util2 = new GridInit();
let util3 = new GridInit();
let gridSubList = [util1.gridConfig, util2.gridConfig, util3.gridConfig];
let gridList = [[util3.gridConfig], gridSubList];

let grid1 = new Grid(gridList, 1);
grid1.draw();
