import React from 'react'

export const Mob_Nav = () => {
    return (
        <div className='d-lg-none'>
            <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand" href='/'><img className="" src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" width="150" alt="Logo" /></a>
                    <form className="d-flex" role="search">

                        <a href="/mobilesearch" className='pe-4'><i className="bi bi-search"></i></a>
                        <a href="/mobilemenu" className='pe-1'><i className="bi bi-three-dots-vertical"></i></a>
                    </form>

                </div>
                <ul className="nav ms-4 justify-content-center gap-4 ">
                        <li className="nav-item  ">
                            
                            <a className="nav-link active" href="/"><img width="24" src="https://img.icons8.com/material-sharp/24/home.png" alt="home" /></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="requests"><img width="30" src="https://img.icons8.com/sf-black-filled/64/conference-call.png" alt="conference-call" /></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="mobivideo"><img width="28" src="https://img.icons8.com/ios-glyphs/30/tv-show.png" alt="tv-show" /></a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link " href="mobimarketplace"><img width="24" src="https://img.icons8.com/ios-glyphs/30/shop.png" alt="shop" /></a>
                        </li>
                        {/* <li className="nav-item ">
                            <a className="nav-link " href="groups"><img width="25" src="https://img.icons8.com/ios-filled/50/user-male-circle.png" alt="user-male-circle" />
                            </a>
                        </li> */}
                    </ul>
            </nav>


            
        </div>
    )
}
