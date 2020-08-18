import React from 'react'
import renderer from 'react-test-renderer'

import Home from '../home-view'
import mock from './mock'

describe('Home component', () => {
  it('renders correctly', () => {
    const videoInfoMock = {
      id: mock.id,
      title: mock.title,
      thumb: mock.thumb
    }

    const tree = renderer
      .create(<Home videoInfo={videoInfoMock} recommendations={mock.recommendations} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})