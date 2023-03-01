import {FaRegUserCircle,FaSignInAlt} from 'react-icons/fa'
import './demo.css'

const Demo = () => {
  return (
    <div className='demo__box'>
        <div className='demo__user'>
            <FaRegUserCircle className='icon-circle'/>
          </div>
        <div className='demo__text'>
            <h2>Welcome to demo account!</h2>
            <p>You are logged in as a demo user with sample data generated to show you how things might look like.</p>
            <p>All the changes you make will only be stored locally on your device.</p>
            <button>Go to Live app<span><FaSignInAlt className='sign-icon'/></span></button>  
            </div>
        </div>
  )
}

export default Demo