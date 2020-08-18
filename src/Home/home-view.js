import React from 'react'
import PropTypes from 'prop-types'

import Player from '../components/Player'
import Track from '../components/Track'
import Thumb from '../components/Thumb'

import './index.css'

const HomeView = ({ videoInfo, recommendations }) => (
  <div className='home'>
    <Player {...videoInfo} />

    <div className='recommendations'>
      <Track itensList={recommendations}>
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

HomeView.propTypes = {
  videoInfo: PropTypes.exact({
    id: PropTypes.number,
    title: PropTypes.string,
    thumb: PropTypes.string,
  }),
  recommendations: PropTypes.array,
}

export default HomeView
