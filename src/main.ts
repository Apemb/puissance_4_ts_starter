import { Game } from "./game.js";
import { Terminal } from "./terminal.js";

console.log("Start of 4 in a row game")

const terminal = new Terminal();
const game = new Game(terminal)

game.start()