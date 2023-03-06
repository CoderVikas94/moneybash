import React from 'react'
import Demo from '../demo/Demo'
import './budget.css'
import {FaHourglassHalf} from 'react-icons/fa'


const Budget = () => {
  return (
    <div className='dashboard__box'>
      <Demo/>
      <div className='budget_box_content'>
      <div className='budget_box'>
            <FaHourglassHalf className='icon-hour'/>
          </div>
        <div className='budget__text'>
            <h2>Work in Progress</h2>
            <p>This page is not ready yet, check back later😉</p>
            </div>

      </div>
      </div>
  )
}

export default Budget