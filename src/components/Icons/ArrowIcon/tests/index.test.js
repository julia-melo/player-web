import React from 'react'
import renderer from 'react-test-renderer'
import { ReactSVG } from 'react-svg'

import ArrowIcon, {
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '../index'

describe('ArrowIcon component', () => {
  it('fires svg beforeInjection', () => {
    const instance = renderer
      .create(<ArrowIcon className='' />)
      .root

    const setAttribute = jest.fn()
    const fakeSVG = { setAttribute }
    instance.findByType(ReactSVG).props.beforeInjection(fakeSVG)

    expect(setAttribute).toHaveBeenCalled()
  })

  it('receives disabled prop', () => {
    const instance = renderer
      .create(<ArrowIcon className='' disabled />)
      .root

    expect(instance.findByType(ReactSVG).props.className).toContain('disabled')
  })

  it('receives onClick prop', () => {
    const clickMock = jest.fn()
    const instance = renderer
      .create(<ArrowIcon className='' onClick={clickMock} />)
      .root

    expect(instance.findByType(ReactSVG).props.className).toContain('clickable')
  })
})

describe('ArrowRightIcon component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ArrowRightIcon />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ArrowLeftIcon component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ArrowLeftIcon />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ArrowUpIcon component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ArrowUpIcon />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

describe('ArrowDownIcon component', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ArrowDownIcon />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
