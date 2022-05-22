import React from 'react'
import image11 from '../../Assests/image1.png'
import { Link } from 'react-router-dom'
import './Section.css'

export default function Section() {
  return (
    <div>

     <div className='container-fluid'>
          <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-10'>
                   <img className='image1' src={image11} alt="image" />
              </div>
              <div className='col-lg-6 col-md-6 col-sm-10 margins11'>
                   <h2 style={{fontStyle: 'italic'}}>Give your workout a new Style</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ea aspernatur 
                       corporis eaque!</p>
                   <Link to='/products'><button type="button" class="btn btn-primary">Explore Now</button></Link>    
              </div>
          </div>

     </div>
    </div>
  )
}
