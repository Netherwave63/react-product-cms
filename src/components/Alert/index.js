import React from 'react'

const Alert = ({ text, setIsActive }) => {
  return (
    <div className='alert-message' style={{ maxWidth: '480px' }}>
      <div className='message is-danger'>
        <div className='message-header'>
          <p>Alert</p>
          <button className='delete' aria-label='delete' onClick={() => setIsActive(false)}></button>
        </div>
        <div className='message-body'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default Alert