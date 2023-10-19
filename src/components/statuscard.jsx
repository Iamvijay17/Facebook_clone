import React from 'react'
import firstStatusCard from '../Others/Status/first sta.jpg'

export const Statuscard = () => {
    return (
        <div>
            <div id="carouselExample" className="carousel slide" >
                <div className="carousel-inner">


                    <div className="carousel-item active ">
                        <div className="d-flex justify-content-center">
                            <div className="card me-1 " >
                                <div className="card-img-top">
                                    <img src={firstStatusCard} alt="" width="120" height="120" />
                                </div>
                                {/* <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card 1</h6>
                                </div> */}
                            </div>
                            <div className="card me-1 " >
                                <div className="card-img">
                                    <img src={firstStatusCard} alt="" width="120" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card 2</h6>
                                </div>
                            </div>
                            <div className="card me-1 " >
                                <div className="card-img">
                                    <img src={firstStatusCard} alt="" width="120" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card 3</h6>
                                </div>
                            </div>
                            <div className="card me-1 " >
                                <div className="card-img">
                                    <img src={firstStatusCard} alt="" width="120" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card 4</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <div className="card me-1 " >
                                <div className="card-img">
                                    <img src={firstStatusCard} alt="" width="150" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card 5</h6>
                                </div>
                            </div>
                            <div className="card me-1 " >
                                <div className="card-img">
                                    <img src={firstStatusCard} alt="" width="150" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card 6</h6>
                                </div>
                            </div>
                            <div className="card me-1 " >
                                <div className="card-img">
                                    <img src={firstStatusCard} alt="" width="150" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card 7</h6>
                                </div>
                            </div>
                            <div className="card me-1 " >
                                <div className="card-img">
                                    <img src={firstStatusCard} alt="" width="150" />
                                </div>
                                <div className="card-body">
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card 8</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            
        </div>
        // </div>
    )
}
