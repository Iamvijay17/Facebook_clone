import React from 'react'
import './Find_Your_Account.css'

export const Find_Your_Account = () => {
    return (
        <div className='container-fluid'>

            {/* Navbar Start  */}
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <title>Facebook</title>
                    <a className="navbar-brand">
                        <img className='navlogo' src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="" srcset="" />
                    </a>
                    <form className="d-flex">
                        <input className="form-control w-auto me-2 shadow-none d-md-none d-lg-block d-sm-none d-sm-block d-none d-block" type="search" placeholder="Email or Phone" aria-label="Search" />
                        <input className="form-control w-auto me-2 shadow-none d-md-none d-lg-block d-sm-none d-sm-block d-none" type="password" placeholder="Password" aria-label="Search" />
                        <button className="btn btn-primary me-2" href="/login" type="submit">Login</button>
                        <a href="/" className='text-decoration-none d-block d-md-none d-lg-block d-sm-none d-sm-block d-none d-block align-middle'>Forgotten account?</a>
                    </form>
                </div>
            </nav>

            {/* Navbar End  */}

            <div className="container mt-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4 text-center">
                        {/* <img className='logo' src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="Logo" srcset="" /> */}
                        <div className="card element" >
                            <div className="card-body">
                                <h5 className="card-title">Find Your Account</h5>
                                <p className='card-text d-flex justify-content-start'>
                                    Please enter your email address or mobile number to search for your account.
                                </p>
                                <form>
                                    <div className="form-group mt-3">
                                        <input type="email" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address or mobile number" />
                                    </div>
                                    <hr />
                                    <div className="d-grid gap-2 d-flex justify-content-end">
                                        <button type="button" className="btn btn-secondary  fw-bolder ">Cancel</button>
                                        <button type="submit" className="btn btn-primary fw-bolder ">Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}
