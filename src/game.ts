import { Terminal } from './terminal.ts'

export class Game {
  private terminal: Terminal

  constructor(terminal: Terminal) {
    this.terminal = terminal
  }

  start() {
    this.terminal.print('sqdqsd')
  }
}
