process.env.NODE_ENV = 'test'

import sinonModule from 'sinon'
import { expect as chaiExpect } from "chai";

export const sinon = sinonModule
export const expect = chaiExpect

afterEach(() => {
  sinon.restore()
})
