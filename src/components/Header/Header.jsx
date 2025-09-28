import React from 'react'
import './Header.css'
import ski2 from '../../assets/ski2.png'

const Header = () => {
  return (
<>
    <div className='Header'>
        <div className="logo">
            {<img src={ski2} alt="" /> }
            {/* <h1>SkillIncome</h1> */}
        </div>
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Courses</li>
                <li>Student Results</li>
                <li>Legalities</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="dashboard">
            <button>Dashboard</button>
        </div>
    </div>

    


</>
    
  )
}

export default Header;