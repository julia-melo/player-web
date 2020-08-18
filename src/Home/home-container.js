import React from 'react'

import HomeView from './home-view'

import mock from './tests/mock'

const HomeContainer = () => (
  <HomeView videoInfo={mock} recommendations={mock.recommendations}/>
)

export default HomeContainer
