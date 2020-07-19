import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Thumb from '../Thumb'
import Loading from '../Loading'

import './index.css'

const Player = ({ title, thumb }) => {
  const [isPlaying, updateIsPlaying] = useState(false)

  const toggleIsPlaying = () => updateIsPlaying(!isPlaying)

  return (
    <div className='player'>
      <p className='title'>{title}</p>
      <div className='content' onClick={toggleIsPlaying}>
        {isPlaying
          ? <Loading />
          : <Thumb image={thumb} />
        }
      </div>
    </div>
  )
}

Player.propTypes = {
  title: PropTypes.string.isRequired,
  thumb: PropTypes.string.isRequired,
}

export default Player
