import React from 'react'
import './login.css'

export const Login = () => {
    return (
        <div className='container'>

            <div className="row">
                <div className="col"></div>
                <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 text-center">
                    <img className='logo' src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="Logo" srcset="" />
                    <div className="card element" >
                        <div className="card-body">
                            <h5 className="card-title text-center">Log in to Facebook</h5>
                            <form>
                                <div className="form-group form-input mt-3">
                                    <input type="email" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address or phone number" />
                                </div>
                                <div className="form-group form-input mt-3">
                                    <input type="password" className="form-control shadow-none" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                                <div className="text-center d-grid gap-2">
                                    <a type="button" href='/home' className="btn btn-lg btn-primary mt-3 logbtn fw-bolder fs-5 ">Log in</a>
                                </div>
                                <div className="pt-3 pb-3">

                                <a href="/findyouraccount" className='text-decoration-none'>Forgotten account?</a> <a href="/signup" className='text-decoration-none'>- Sign up for Facebook</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}
