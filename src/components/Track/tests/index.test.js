import React from 'react'
import renderer from 'react-test-renderer'

import Track from '../index'

describe('Track component', () => {
  it('renders correctly', () => {
    const itensListMock = ['item example']
    const tree = renderer
      .create(<Track itensList={itensListMock}>{item => item}</Track>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})