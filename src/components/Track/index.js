import React from 'react'
import PropTypes from 'prop-types'

import { ArrowRightIcon, ArrowLeftIcon } from '../Icons'

import './index.css'

const Track = ({ itensList, children }) => {
  return (
    <div className='track'>
      <ArrowLeftIcon width={32} height={32} disabled />
      {itensList.map(item => (
        <div
          key={`track-${item.id}`}
          className='track-item'
        >
          {children(item)}
        </div>
      ))}
      <ArrowRightIcon width={32} height={32} />
    </div>
  )
}

Track.propTypes = {
  itensList: PropTypes.array.isRequired,
  children: PropTypes.func.isRequired,
}

export default Track