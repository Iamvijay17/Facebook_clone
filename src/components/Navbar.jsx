import React from 'react'
import brandlogo from '../Others/Brandlogo.ico'

export const Navbar = () => {
    return (
        <div className='d-none d-xl-block '>
            <nav className="navbar bg-white fixed-top shadow  bg-body ">
                <div className="container-fluid ">
                    <div>
                        <form className="d-flex " role="search">
                            <a className="navbar-brand " href="/">
                                <img src={brandlogo} alt="" srcset="" />
                            </a>

                            <div class="dropdown">
                                <input className="form-control me-2 shadow-none rounded-pill text-dark bg-light dropdown-toggle" placeholder="Search Facebook" aria-label="Search" data-bs-toggle="dropdown" aria-expanded="false" />
                                {/* Drop down  */}
                                <a class=" btn-secondary " type="buttona" >

                                </a>
                                <ul class="dropdown-menu " style={{ minWidth: "320px" }}>
                                    <li><button class="dropdown-item " type="button">
                                        <img className='rounded-pill' src="https://source.unsplash.com/featured/200x309" width="40" height="40" alt="" /> <span className='fw-semibold text-center ms-2 '>Vijay</span>
                                    </button></li>
                                    <li><button class="dropdown-item " type="button">
                                        <img className='rounded-pill' src="https://source.unsplash.com/featured/200x310" width="40" height="40" alt="" /> <span className='fw-semibold text-center ms-2'>Kumar</span> 
                                    </button></li>
                                    <li><button class="dropdown-item " type="button">
                                        <img className='rounded-pill' src="https://source.unsplash.com/featured/200x311" width="40" height="40" alt="" /> <span className='fw-semibold text-center ms-2'>Chennai </span> 
                                    </button></li>
                                    <li><button class="dropdown-item " type="button">
                                        <img className='rounded-pill' src="https://source.unsplash.com/featured/200x312" width="40" height="40" alt="" /> <span className='fw-semibold text-center ms-2'>Virat Kohli</span>
                                    </button></li>
                                    <li><button class="dropdown-item " type="button">
                                        <img className='rounded-pill' src="https://source.unsplash.com/featured/200x313" width="40" height="40" alt="" /> <span className='fw-semibold text-center ms-2'>Sony</span>
                                    </button></li>
                                    <li><button class="dropdown-item " type="button">
                                        <img className='rounded-pill' src="https://source.unsplash.com/featured/200x314" width="40" height="40" alt="" /> <span className='fw-semibold text-center ms-2'>Kohli</span>
                                    </button></li>
                                </ul>
                            </div>

                        </form>
                    </div>
                    <ul className="nav justify-content-center gap-5 ">
                        <li className="nav-item  ">
                            <a className="nav-link active" href="/"><img width="24" src="https://img.icons8.com/material-sharp/24/home.png" alt="home" /></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="friends"><img width="30" src="https://img.icons8.com/sf-black-filled/64/conference-call.png" alt="conference-call" /></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="video"><img width="28" src="https://img.icons8.com/ios-glyphs/30/tv-show.png" alt="tv-show" /></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link " href="marketplace"><img width="24" src="https://img.icons8.com/ios-glyphs/30/shop.png" alt="shop" /></a>
                        </li>
                        {/* <li className="nav-item ">
                            <a className="nav-link " href="groups"><img width="25" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />
                            </a>
                        </li> */}
                    </ul>
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <a className="nav-link active" href="#"><img width="24" src="https://img.icons8.com/ios-filled/50/circled-menu.png" alt="circled-menu" /></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="#"><img width="24" src="https://img.icons8.com/ios-filled/50/facebook-messenger.png" alt="facebook-messenger" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img width="24" src="https://img.icons8.com/ios-filled/50/appointment-reminders--v1.png" alt="appointment-reminders--v1" /></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><img
                                width="30"
                                className="rounded-pill "
                                src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-1/183819106_322171932605353_1403787150142381277_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=c6021c&_nc_ohc=pPzlWKMfw1kAX_gCK80&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfC2iB26SDqkAC5WDA_iZPnNjTgeS2-7mfzqpNvjUXolow&oe=654CB1EB"
                                alt="user-male-circle"
                            /></a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}
