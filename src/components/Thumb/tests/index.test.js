import React from 'react'
import renderer from 'react-test-renderer'

import { PlayIcon } from '../../Icons'
import Thumb from '../index'

const mockImage = 'https://designshack.net/wp-content/uploads/placeholder-image.png'

describe('Thumb component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Thumb image={mockImage} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('receives size prop', () => {
    const instance = renderer
      .create(<Thumb image={mockImage} size={48} />)
      .root

    expect(instance.findByType(PlayIcon).props.width).toBe(16)
    expect(instance.findByProps({className: 'content'}).props.style.width).toBe('48px')
    expect(instance.findByProps({className: 'content'}).props.style.height).toBe('30px')
  })

  it('receives caption prop', () => {
    const exampleCaption = 'Example caption'
    const instance = renderer
      .create(<Thumb image={mockImage} caption={exampleCaption} />)
      .root

    expect(instance.findByProps({className: 'title'}).children[0]).toBe(exampleCaption)
  })
})
