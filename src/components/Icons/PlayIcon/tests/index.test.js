import React from 'react'
import renderer from 'react-test-renderer'
import { ReactSVG } from 'react-svg'

import PlayIcon from '../index'

describe('PlayIcon component', () => {
  it('fires svg beforeInjection', () => {
    const instance = renderer
      .create(<PlayIcon />)
      .root

    const setAttribute = jest.fn()
    const fakeSVG = { setAttribute }
    instance.findByType(ReactSVG).props.beforeInjection(fakeSVG)

    expect(setAttribute).toHaveBeenCalled()
  })
})
