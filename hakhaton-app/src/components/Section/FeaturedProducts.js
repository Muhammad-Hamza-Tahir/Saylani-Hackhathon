import React from 'react'
import './images.css'
import { Link } from 'react-router-dom';
import image4 from '../../Assests/product-1.jpg';
import image5 from '../../Assests/product-2.jpg';
import image6 from '../../Assests/product-3.jpg';
import image7 from '../../Assests/product-4.jpg';
import image8 from '../../Assests/product-5.jpg';
import image9 from '../../Assests/product-6.jpg';

export default function FeaturedProducts() {
    return (
        <div>
            <div className='container  margin111'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='text-center'>Featured Products</h3>
                        <hr />
                    </div>

                </div>

            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <img className='resize1' src={image4} alt="" />
                        <p className='text-center mt-2'>Red Printed T-shirt</p>
                        <p className='text-center '><b>$100</b></p>
                        <button type="button" class="btn btn-primary ms-5">Add to Cart</button>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <img className='resize1' src={image5} alt="" />
                        <p className='text-center mt-2'>Red Printed T-shirt</p>
                        <p className='text-center '><b>$100</b></p>
                        <button type="button" class="btn btn-primary ms-5">Add to Cart</button>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <img className='resize1' src={image6} alt="" />
                        <p className='text-center mt-2'>Red Printed T-shirt</p>
                        <p className='text-center '><b>$100</b></p>
                        <button type="button" class="btn btn-primary ms-5">Add to Cart</button>
                    </div>



                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <img className='resize1' src={image7} alt="" />
                        <p className='text-center mt-2'>Red Printed T-shirt</p>
                        <p className='text-center '><b>$100</b></p>
                        <button type="button" class="btn btn-primary ms-5">Add to Cart</button>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <img className='resize1' src={image8} alt="" />
                        <p className='text-center mt-2'>Shoes black</p>
                        <p className='text-center '><b>$200</b></p>
                        <button type="button" class="btn btn-primary ms-5">Add to Cart</button>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <img className='resize1' src={image9} alt="" />
                        <p className='text-center mt-2'>Pent</p>
                        <p className='text-center '><b>$100</b></p>
                        <button type="button" class="btn btn-primary ms-5">Add to Cart</button>
                    </div>



                </div>


            </div>
            {/* <div className='container-'>


                <div className='row'>

                    <div className='col-lg-4  col-md-4 col-sm-10'>

                        <img className='resize' src={image4} alt="" />


                    </div>

                    <div className='col-lg-4  col-md-4 col-sm-10'>

                        <img className='resize' src={image4} alt="" />


                    </div>
                    <div className='col-lg-4  col-md-4 col-sm-10'>

                        <img className='resize' src={image4} alt="" />


                    </div>



                </div>



            </div> */}

<div className='container'>
                <div className='row'>
                    <div className='col-12 text-center mt-2'>
                    <Link to='/products'><button type="button" className="btn btn-primary">More Products</button></Link>
                    </div>

                </div>

            </div>
        </div>



    )
}
