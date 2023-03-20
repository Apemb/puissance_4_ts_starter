import {Terminal} from './terminal'

export class Game {
  private _terminal: Terminal

  constructor(terminal: Terminal) {
    this._terminal = terminal
  }

  start() {
    this._terminal.print('sqdqsd')
  }
}
