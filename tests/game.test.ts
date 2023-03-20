import {expect, sinon} from './test-helper'
import {Game} from '../src/game'
import {Terminal} from '../src/terminal'
import {SinonStubbedInstance} from 'sinon'

describe('Game', () => {
  describe('game initialization', () => {
    it('given an new game instance, ' +
      'when starting the game, ' +
      'it prints the welcome message', () => {
      // Arrange
      let terminal: SinonStubbedInstance<Terminal> = sinon.createStubInstance(Terminal)
      terminal.print.resolves()

      const game = new Game(terminal)

      // Act
      game.start()

      // Assert
      const expectedWelcomeMessage = '4 in a Row Game : STARTED !'
      expect(terminal.print).to.have.been.calledOnceWith(expectedWelcomeMessage)
    })
  })
})
