import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <div className='qwe'>

            <div className='container abc colors'>
                <div className='row     '>
                    <div className='col-lg-6 mx-auto col-md-8 col-sm-12 borders1   '>
                        <h2 className='text-center'>User's Login Form</h2>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control shadow-none" id="exampleInputPassword1" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input shadow-none" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                            <Link to='/products'><button type="button" class="btn btn-primary ms-5">Sign Up</button></Link>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    )
}
