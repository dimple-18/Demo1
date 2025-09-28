import React from 'react'
import './Hero2.css'

const Hero2 = () => {
  return (
        
    <div className="hero2">
        <div className="hero2heading">
                <h3>Our Courses</h3>
            </div>
        <div className="hero2main">

            <div className="card-container">       
                <div className="card">
                    <div className="front-content">
                        <p>course1</p>
                    </div>
                    <div className="content">
                        <div className='heading'>
                            <p>Course1 Description</p>
                        </div>
                        <button>
                            Enroll Now 
                            <span id='arrow2'>
                                »
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            
            <div className="card-container">       
                <div className="card">
                    <div className="front-content">
                        <p>Course2</p>
                    </div>
                    <div className="content">
                        <div className='heading'>
                            <p>Course1 Description</p>
                        </div>
                        <button>
                            Enroll Now 
                            <span id='arrow2'>
                                »
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="card-container">       
                <div className="card">
                    <div className="front-content">
                        <p>COurse3</p>
                    </div>
                    <div className="content">
                        <div className='heading'>
                            <p>Course1 Description</p>
                        </div>
                        <button>
                            Enroll Now 
                            <span id='arrow2'>
                                »
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className='hero2bottom'>
                <div className="hero2bchild">

                </div>
            </div>

        </div>
    </div>
    
  )
}

export default Hero2