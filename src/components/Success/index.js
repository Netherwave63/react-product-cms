import React from 'react'

const Success = ({ text, setIsActive }) => {
  return (
    <div className='alert-message'>
      <div className='message is-info'>
        <div className='message-header'>
          <p>Success</p>
          <button className='delete' aria-label='delete' onClick={() => setIsActive(false)}></button>
        </div>
        <div className='message-body'>
          {text}
        </div>
      </div>
    </div>
  )
}

export default Success