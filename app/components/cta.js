import React from 'react'

// @todo update to use styled components based on props.
const cta = ({ color }) => {
  return (
    <button
      className={`cta__${color}`}
      href='#'
    >
      Click me!
    </button>
  )
}

export default cta
