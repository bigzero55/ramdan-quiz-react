import React from 'react'

import PropTypes from 'prop-types'

import './countdown.css'

const Countdown = (props) => {
  return (
    <div className={`countdown-container glass ${props.rootClassName} `}>
      <h1 className="countdown-text">{props.value}</h1>
    </div>
  )
}

Countdown.defaultProps = {
  value: '30',
  rootClassName: '',
}

Countdown.propTypes = {
  value: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Countdown
