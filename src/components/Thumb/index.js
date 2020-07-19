import React from 'react'
import PropTypes from 'prop-types'

import { PlayIcon } from '../Icons'

import './index.css'

const Thumb = ({ image, size, caption }) => {
  const contentStyle = size ? { width: `${size}px`, height: `${size/1.6}px` } : {}
  const titleStyle = size ? { width: `${size}px` } : {}
  const iconSize = size && size / 3

  return (
    <div className='thumb'>
      <div
        className='content'
        style={contentStyle}
      >
        <img className='image' src={image} alt='thumb' />
        <PlayIcon width={iconSize} height={iconSize} />
      </div>
      {caption && <p className='title' style={titleStyle}>{caption}</p>}
    </div>
  )
}

Thumb.propTypes = {
  image: PropTypes.string.isRequired,
  size: PropTypes.number,
  caption: PropTypes.string,
}

export default Thumb
