import React from 'react'

import Player from '../components/Player'
import Track from '../components/Track'
import Thumb from '../components/Thumb'

import mock from './mock'
import './index.css'

const Home = () => (
  <div className='home'>
    <Player {...mock} />

    <div className='recommendations'>
      <Track itensList={mock.recommendations}>
        {(item) => (
          <Thumb
            image={item.thumb}
            size={160}
            caption={item.title}
          />
        )}
      </Track>
    </div>
  </div>
)

export default Home
