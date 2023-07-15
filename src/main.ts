import "./styles/styles.scss";
import { Grid } from "./components/grid/grid";

import { Cursor } from "./components/cursor/cursor";

const grid = new Grid();
grid.toggleGrid();

new Cursor();
// cursor.cursorFunc();
