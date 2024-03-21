import { expect } from './test-helper.js'
import { Grid } from '../src/grid.js'

describe('Grid', () => {
  describe('testGetter', () => {
    it('should return 1', () => {
      // Arrange
      const grid = new Grid()

      // Act
      const result = grid.testGetter

      // Assert
      const expectedValue = 2
      expect(result).to.be.equal(expectedValue)
    })
  })
})
