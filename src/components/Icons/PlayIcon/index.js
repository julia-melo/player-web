import React from 'react'
import PropTypes from 'prop-types'
import { ReactSVG } from 'react-svg'

import playIcon from '../../../assets/play.svg'

const PlayIcon = ({ width = 80, height = 80 }) => (
  <ReactSVG
    className='play-icon'
    src={playIcon}
    beforeInjection={svg => {
      svg.setAttribute('style', `width: ${width}px; height: ${height}px`)
    }}
  />
)

PlayIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
}

export default PlayIcon
