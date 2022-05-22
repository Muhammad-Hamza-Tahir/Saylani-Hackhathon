import React from 'react'
import './images.css'
import image1 from '../../Assests/category-1.jpg' ;
import image2 from '../../Assests/category-2.jpg' ;
import image3 from '../../Assests/category-3.jpg' ;
export default function Images() {
  return (
    <div>

    <div className='container '>
        <div className='row mt-5 background1'>
            <div className='col-lg-4 col-md-4 col-sm-12 d-flex'>
                   <img className='resize' src={image1} alt="img" />
                  
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 d-flex'>
                   <img className='resize' src={image2} alt="img" />
                  
            </div>
            <div className='col-lg-4 col-md-4 col-sm-12 d-flex'>
                   <img className='resize' src={image3} alt="img" />
                  
            </div>

        </div>

    </div>




    </div>
  )
}
