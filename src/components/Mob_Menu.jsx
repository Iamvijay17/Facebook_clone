import React from 'react'
import marketplacelogo from '../Others/marketplace.png'
import savedlogo from '../Others/saved.png'
import groupslogo from '../Others/groups.png'
import memorieslogo from '../Others/memories.png'
import feeds from '../Others/feeds.png'
import games from '../Others/games.png'
import pages from '../Others/pages.png'
import videos from '../Others/video.png'

export const Mob_Menu = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="container-md">
                    <a href='/' className="navbar-brand rounded-pill me-3" type="back"><i className="bi bi-arrow-left"></i>Menu</a>
                </div>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-3">
                                        <img width="60" className='rounded-pill' src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-1/183819106_322171932605353_1403787150142381277_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=c6021c&_nc_ohc=pPzlWKMfw1kAX_gCK80&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfC2iB26SDqkAC5WDA_iZPnNjTgeS2-7mfzqpNvjUXolow&oe=654CB1EB" alt="user-male-circle" />
                                        {/* <img className='rounded-pill' width="60" src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-1/183819106_322171932605353_1403787150142381277_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=c6021c&_nc_ohc=pPzlWKMfw1kAX_gCK80&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfC2iB26SDqkAC5WDA_iZPnNjTgeS2-7mfzqpNvjUXolow&oe=654CB1EB" width="40" alt="" /> */}

                                    </div>
                                    <div className="col-9">
                                        <h5 className="card-title">Vijay</h5>
                                        <p className="card-text text-muted ">View your Profile</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="row-2 mb-1"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt="" width="29" /></div>
                                        <div className="row"><a href='' className="card-title text-decoration-none link-dark">Messages</a></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"><div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="row-2 mb-1"><img src={groupslogo} alt="" width="29" /></div>
                                    <div className="row"><a href='' className="card-title text-decoration-none link-dark">Group</a></div>
                                </div>

                            </div>
                        </div>
                    </div></div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="row-2 mb-1"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt="" width="29" /></div>
                                        <div className="row"><a href='' className="card-title text-decoration-none link-dark">Friends</a></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"><div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="row-2 mb-1"><img src={videos} alt="" width="29" /></div>
                                    <div className="row"><a href='' className="card-title text-decoration-none link-dark">Videos</a></div>
                                </div>

                            </div>
                        </div>
                    </div></div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="row-2 mb-1"><img src={marketplacelogo} alt="" width="29" /></div>
                                        <div className="row"><a href='' className="card-title text-decoration-none link-dark">Marketplace</a></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"><div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="row-2 mb-1"><img src={pages} alt="" width="29" /></div>
                                    <div className="row"><a href='' className="card-title text-decoration-none link-dark">Pages</a></div>
                                </div>

                            </div>
                        </div>
                    </div></div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="row-2 mb-1"><img src={savedlogo} alt="" width="29" /></div>
                                        <div className="row"><a href='' className="card-title text-decoration-none link-dark">Saved</a></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"><div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="row-2 mb-1"><img src={memorieslogo} alt="" width="29" /></div>
                                    <div className="row"><a href='' className="card-title text-decoration-none link-dark">Memories</a></div>
                                </div>

                            </div>
                        </div>
                    </div></div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="row-2 mb-1"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt="" width="29" /></div>
                                        <div className="row"><a href='' className="card-title text-decoration-none link-dark">Events</a></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"><div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="row-2 mb-1"><img src={games} alt="" width="29" /></div>
                                    <div className="row"><a href='' className="card-title text-decoration-none link-dark">Games</a></div>
                                </div>


                            </div>
                        </div>
                    </div></div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="row-2 mb-1"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" alt="" width="29" /></div>
                                        <div className="row"><a href='' className="card-title text-decoration-none link-dark">Ads Manager</a></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col"><div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div className="row-2 mb-1"><img src={feeds} alt="" width="29" /></div>
                                    <div className="row"><a href='' className="card-title text-decoration-none link-dark">Feeds</a></div>
                                </div>

                            </div>
                        </div>
                    </div></div>
                </div>
            </div>
        </div>
    )
}
