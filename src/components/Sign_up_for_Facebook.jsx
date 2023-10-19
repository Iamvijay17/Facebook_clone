import React from 'react'

export const Sign_up_for_Facebook = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col"></div>
                <div className="col-12 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                    <img className="logo d-flex justify-content-center ps-4 ms-5" src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg" alt="Logo"  />
                    <div className="card element" >
                        <div className="card-body">
                            <h3 className="card-title text-center">Create a new account</h3>
                            <p className='text-center'>It's quick and easy.</p>
                            <hr />
                            <form>
                                <div className="form-group form-input">
                                    <div className="row">
                                        <div className="col">
                                            <input type="email" className="form-control shadow-none" id="firstname" aria-describedby="emailHelp" placeholder="First name" />
                                        </div>
                                        <div className="col">
                                            <input type="email" className="form-control shadow-none" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Surname" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group form-input ">
                                    <input type="password" className="form-control shadow-none" id="exampleInputPassword1" placeholder="Mobile number or email address" />
                                </div>
                                <div className="form-group form-input">
                                    <input type="password" className="form-control shadow-none" id="exampleInputPassword1" placeholder="New Password" />
                                </div>
                                <div className="row pt-2">
                                    <label for="inputEmail4">Date of birth</label>
                                    <div className="col">
                                        <select id="inputDate" class="form-control shadow-none">
                                            <option selected>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                            <option>13</option>
                                            <option>14</option>
                                            <option>15</option>
                                            <option>16</option>
                                            <option>17</option>
                                            <option>18</option>
                                            <option>19</option>
                                            <option>20</option>
                                            <option>21</option>
                                            <option>22</option>
                                            <option>23</option>
                                            <option>24</option>
                                            <option>25</option>
                                            <option>26</option>
                                            <option>27</option>
                                            <option>28</option>
                                            <option>29</option>
                                            <option>30</option>
                                            <option>31</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select id="inputMonth" class="form-control shadow-none">
                                            <option selected>Jan</option>
                                            <option>Feb</option>
                                            <option>Mar</option>
                                            <option>Apr</option>
                                            <option>May</option>
                                            <option>Jun</option>
                                            <option>Jul</option>
                                            <option>Aug</option>
                                            <option>Sep</option>
                                            <option>Oct</option>
                                            <option>Nov</option>
                                            <option>Dec</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <select id="inputYear" class="form-control shadow-none">
                                            <option selected>2023</option>
                                            <option>2022</option>
                                            <option>2021</option>
                                            <option>2020</option>
                                            <option>2019</option>
                                            <option>2018</option>
                                            <option>2017</option>
                                            <option>2016</option>
                                            <option>2015</option>
                                            <option>2014</option>
                                            <option>2013</option>
                                            <option>2012</option>
                                            <option>2011</option>
                                            <option>2010</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="row pt-2">
                                    <label for="inputGender" className="text-left">Gender</label>
                                    <div className="col">
                                        <div class="form-check border rounded pt-1 pb-1 form-control">
                                            <input class="form-check-input shadow-none" type="radio" name="Radios" id="" value="option1" />
                                            <label class="form-check-label ps-4" for="Radios1">
                                                Male
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="form-check border rounded pt-1 pb-1">
                                            <label class="form-check-label ps-4" for="Radios2"> 
                                                Female
                                            </label>
                                            <input class="form-check-input shadow-none" type="radio" name="Radios" id="" value="option2" />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div class="form-check border rounded pt-1 pb-1">
                                            <label class="form-check-label ps-3" for="Radios3">
                                                Custome
                                            </label>
                                            <input class="form-check-input shadow-none" type="radio" name="Radios" id="" value="option3" />
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-3'>
                                    <small className='text-muted'>
                                        People who use our service may have uploaded your contact information to Facebook. <a href="#" className='text-decoration-none'> Learn more.</a>
                                    </small>
                                </div>

                                <div className='pt-3 pb-3'>
                                    
                                    <small className='text-muted'>
                                        By clicking Sign Up, you agree to our <a href="#" className='text-decoration-none'>Terms,</a> <a href="#" className='text-decoration-none'>Privacy Policy</a> and <a href="#" className='text-decoration-none'>Cookies Policy.</a> You may receive SMS notifications from us and can opt out at any time.
                                    </small>
                                    
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn  btn-success  logbtn fw-bolder fs-5 ">Sign Up</button>
                                </div>
                                <div className="pt-3 pb-3 text-center">
                                    <a href="/login" className='text-decoration-none'>Already have an account?</a>
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
