import { expect, sinon } from './test-helper.ts'
import { Game } from '../src/game.ts'
import { Terminal } from '../src/terminal.ts'
import { SinonStubbedInstance } from 'sinon'

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

      sinon.assert.calledOnceWithExactly(terminal.print, expectedWelcomeMessage)
    })
  })
})
