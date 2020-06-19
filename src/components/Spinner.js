import React from 'react'

const Spinner = ({ loaderImage }) => {
  return (
    <div
      style={{
        background: `rgba(0,0,0,.5) url(${loaderImage}) no-repeat 50% 50%`,
        width: '100%',
        height: '100%',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '999'
      }}
    >
      {null}
    </div>
  )
}

export default Spinner
