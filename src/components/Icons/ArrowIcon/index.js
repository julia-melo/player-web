import React from 'react'
import PropTypes from 'prop-types'
import { ReactSVG } from 'react-svg'

import arrowIcon from '../../../assets/arrow.svg'

import './index.css'

const ArrowIcon = ({
  className,
  width = 80,
  height = 80,
  disabled = false,
  onClick
}) => (
  <ReactSVG
    className={`${className} ${disabled ? 'disabled' : ''} ${onClick ? 'clickable' : ''}`}
    src={arrowIcon}
    beforeInjection={svg => {
      svg.setAttribute('style', `width: ${width}px; height: ${height}px;`)
    }}
    onClick={onClick}
  />
)

ArrowIcon.propTypes = {
  className: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

const ArrowRightIcon = props => (
  <ArrowIcon className='arrow-right-icon' {...props} />
)

const ArrowLeftIcon = props => (
  <ArrowIcon className='arrow-left-icon' {...props} />
)

const ArrowUpIcon = props => (
  <ArrowIcon className='arrow-up-icon' {...props} />
)

const ArrowDownIcon = props => (
  <ArrowIcon className='arrow-down-icon' {...props} />
)

export { ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon }
