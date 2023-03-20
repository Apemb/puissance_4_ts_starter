process.env.NODE_ENV = 'test'

import chai from 'chai'
import sinonModule from 'sinon'
import sinonChai from 'sinon-chai'

chai.use(sinonChai)

export const sinon = sinonModule
export const expect = chai.expect

afterEach(() => {
  sinon.restore()
})

