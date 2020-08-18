import React from 'react'
import renderer from 'react-test-renderer'

import Player from '../index'
import Thumb from '../../Thumb'
import Loading from '../../Loading'

const { act } = renderer
const mockImage = 'https://designshack.net/wp-content/uploads/placeholder-image.png'

describe('Player component', () => {
  it('shows thumb', () => {
    const instance = renderer
      .create(<Player title='' thumb={mockImage} />)
      .root

    expect(instance.findByType(Thumb)).toBeDefined()
  })

  it('shows loading', () => {
    const instance = renderer
      .create(<Player title='' thumb={mockImage} />)
      .root

    act(() => {
      instance.findByProps({className: 'content'}).props.onClick()
    })
    expect(instance.findByType(Loading)).toBeDefined()
  })
})