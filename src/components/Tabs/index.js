import React from 'react'

const Tabs = ({ currentIndex, setCurrentIndex, tabs }) => {
  return (
    <div className='tabs'>
      <ul>
        {tabs.map((tab, index) =>
          <li
            className={index === currentIndex ? 'is-active' : ''}
            key={tab}
            onClick={() => setCurrentIndex(index)}
          >
            <a>{tab}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Tabs