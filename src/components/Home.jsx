import React from "react";
import findfriendslogo from "../Others/find friends.png";
import memorieslogo from "../Others/memories.png";
import savedlogo from "../Others/saved.png";
import groupslogo from "../Others/groups.png";
import videologo from "../Others/video.png";
import marketplacelogo from "../Others/marketplace.png";
import fundraiserslogo from "../Others/fundraisers.png";
import { Navbar } from "./Navbar";
import { Padding } from "@mui/icons-material";

export const Home = () => {
  return (
    <div className="">
      <div className="row">
        <div className="col-xxl-1 d-none d-xl-block ms-4 position-fixed pt-5 mt-5">

          <div className="  ">

            <a href="" className="text-decoration-none link-dark ">
              <img
                width="40"
                className="rounded-pill "
                src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-1/183819106_322171932605353_1403787150142381277_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=c6021c&_nc_ohc=pPzlWKMfw1kAX_gCK80&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfC2iB26SDqkAC5WDA_iZPnNjTgeS2-7mfzqpNvjUXolow&oe=654CB1EB"
                alt="user-male-circle"
              />
            </a>{" "}


            <span className="fw-bold ms-2">Vijay</span>

          </div>
          <div className="row mb-3 mt-3">
            <a href="#" className="text-decoration-none link-dark fw-semibold">
              <img src={findfriendslogo} alt="" className="me-2" />
              Find Friends
            </a></div>


          <div className="row mb-3">
            <a href="#" className="text-decoration-none link-dark fw-semibold">
              <img src={memorieslogo} alt="" className="me-2" />
              Memories
            </a>
          </div>
          <div className="row mb-3">
            <a href="#" className="text-decoration-none link-dark fw-semibold">
              <img src={savedlogo} alt="" className="me-2" />
              Saved
            </a>
          </div>
          <div className="row mb-3">
            <a href="#" className="text-decoration-none link-dark fw-semibold">
              <img src={groupslogo} alt="" className="me-2" />
              Groups
            </a>
          </div>
          <div className="row mb-3">
            <a href="#" className="text-decoration-none link-dark fw-semibold">
              <img src={videologo} alt="" className="me-2" />
              Video
            </a>
          </div>
          <div className="row mb-3">
            <a href="#" className="text-decoration-none link-dark fw-semibold">
              <img src={marketplacelogo} alt="" className="me-1" />
              Marketplace
            </a>
          </div>
          <div className="row mb-3">
            <a href="#" className="text-decoration-none link-dark fw-semibold">
              <img src={fundraiserslogo} alt="" className="me-2" />
              Fundraisers
            </a>
          </div>
        </div>
        <div className="col"></div>
        {/* Center content  */}
        <div className="col-xxl-7 col-xl-6 col-lg-8 col-md-12">
          <div className="">
            {/* Owl Desktop */}
            <div className="mt-5 mb-2 pt-4 position-relative d-none d-lg-block d-xl-block ">
              <a href="#" className="text-dark text-center">  <span className="position-absolute bottom-0  ms-5 mb-2 fs-6 fw-semibold  ">Story</span>
                <img src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-9/183819106_322171932605353_1403787150142381277_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=be3454&_nc_ohc=4Rncoe-kSR4AX_HWJyO&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAk44GfvX7SqU4Rn9vq3FqI8jISrIUtBbvtc40-fQCi7g&oe=65588821" alt="" className="me-2 accordion rounded ms-3 pb-5 bg-white " width="126" height="240" /></a>
              <img src="https://source.unsplash.com/featured/200x302" alt="" className="me-2 rounded" width="126" height="240" />
              <img src="https://source.unsplash.com/featured/200x303" alt="" className="me-2 rounded" width="126" height="240" />
              <img src="https://source.unsplash.com/featured/200x304" alt="" className="me-2 rounded" width="126" height="240" />
              <img src="https://source.unsplash.com/featured/200x305" alt="" className="me-2 rounded" width="126" height="240" />
              <img src="https://source.unsplash.com/featured/200x306" alt="" className="me-2 rounded" width="126" height="240" />
              <img src="https://source.unsplash.com/featured/200x307" alt="" className="me-2 rounded" width="126" height="240" />
              <img src="https://source.unsplash.com/featured/200x308" alt="" className=" rounded " width="126" height="240" />
            </div>

             {/* Owl Mobile */}
             <div className="mt-1 mb-2 pt-1 position-relative 	d-sm-none d-sm-block d-md-none d-block ">
              <a href="#" className="text-dark text-center">  <span className="position-absolute bottom-0  ms-5 mb-2 fs-6 fw-semibold  ">Story</span>
                <img src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-9/183819106_322171932605353_1403787150142381277_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=be3454&_nc_ohc=4Rncoe-kSR4AX_HWJyO&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAk44GfvX7SqU4Rn9vq3FqI8jISrIUtBbvtc40-fQCi7g&oe=65588821" alt="" className="me-1 rounded ms-2 pb-5 bg-white " width="113" height="180" /></a>
              <img src="https://source.unsplash.com/featured/200x302" alt="" className="me-1 rounded" width="113" height="180" />
              <img src="https://source.unsplash.com/featured/200x303" alt="" className="me-1 rounded" width="113" height="180" />
            </div>

              {/* Owl Tablet */}
              <div className="mt-2 mb-2 pt-2 position-relative d-none d-md-block d-lg-none">
              <a href="#" className="text-dark text-center">  <span className="position-absolute bottom-0  ms-5 mb-2 fs-6 fw-semibold  ">Story</span>
                <img src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-9/183819106_322171932605353_1403787150142381277_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=be3454&_nc_ohc=4Rncoe-kSR4AX_HWJyO&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAk44GfvX7SqU4Rn9vq3FqI8jISrIUtBbvtc40-fQCi7g&oe=65588821" alt="" className="me-1 rounded ms-2 pb-5 bg-white " width="122" height="240" /></a>
              <img src="https://source.unsplash.com/featured/200x302" alt="" className="me-1 rounded" width="122" height="240" />
              <img src="https://source.unsplash.com/featured/200x303" alt="" className="me-1 rounded" width="122" height="240" />
              <img src="https://source.unsplash.com/featured/200x304" alt="" className="me-1 rounded" width="122" height="240" />
              <img src="https://source.unsplash.com/featured/200x305" alt="" className="me-1 rounded" width="122" height="240" />
              <img src="https://source.unsplash.com/featured/200x306" alt="" className="me-1 rounded" width="122" height="240" />
            </div>
            {/* owl end  */}
            <div className="row ">
              <div className="container-fluid ">
                <div className="card ">
                  <div className="card-body">
                    <div className="">
                      <div className="row ">
                        <div className="col-xxl-1 col-xl-1  col-lg-1 col-2">
                          <span className=" position-relative">
                            <a href="">
                              <img
                                width="40"
                                className="rounded-pill "
                                src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-1/183819106_322171932605353_1403787150142381277_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=102&ccb=1-7&_nc_sid=c6021c&_nc_ohc=pPzlWKMfw1kAX_gCK80&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfC2iB26SDqkAC5WDA_iZPnNjTgeS2-7mfzqpNvjUXolow&oe=654CB1EB"
                                alt="user-male-circle"
                              />
                            </a>{" "}
                            <span className="position-absolute top-100 start-100 translate-middle badge border border-light rounded-circle  p-1" style={{ backgroundColor: "#66FF00" }} >

                              <span className="visually-hidden">
                                unread messages
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="col g-0">
                          <input
                            className="form-control rounded-pill shadow-none"
                            type="text"
                            placeholder="What's on your mind"
                          />
                        </div>
                        <div className="col-3 d-lg-none">
                          <a
                            href="#"
                            className="text-decoration-none link-dark"
                          >
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                              alt=""
                              className=""
                            />
                            <span className="small me-1 ">Photo</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <hr className="d-none d-xl-block" />
                    <div className="container d-none d-xl-block">
                      <div className="row">
                        <div className="col d-flex justify-content-around">
                          <a
                            href="#"
                            className="text-decoration-none link-dark"
                          >
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
                              alt=""
                              className="me-3"
                            />
                            <span className="fw-semibold">Live video</span>
                          </a>
                        </div>
                        <div className="col d-flex justify-content-around">
                          <a
                            href="#"
                            className="text-decoration-none link-dark"
                          >
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
                              alt=""
                              className="me-3"
                            />
                            <span className="fw-semibold">Photos/videos</span>
                          </a>
                        </div>
                        <div className="col d-flex justify-content-around">
                          <a
                            href="#"
                            className="text-decoration-none link-dark"
                          >
                            <img
                              src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png"
                              alt=""
                              className="me-3"
                            />
                            <span className="fw-semibold">Feelings/activity</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card start  */}
                <div className="">
                  <div className="row pt-2">
                    <div className="col-2"> </div>
                    <div className="col-xxl-8 col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12">
                      <div className="card">
                        <div className="row">
                          <div className="col-xxl-1 col-lg-1 col-auto">
                            <img
                              className="rounded-pill ms-2 mt-2 "
                              src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/274736966_4940025746104835_4908244450164914163_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CVIad2XKbb4AX_TJ0na&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfDavxhWNVGvRFsHdyX4aDzdUMqU5dwb9nH2cCzMT1ZJFQ&oe=65359289"
                              width="40"
                              alt=""
                            />
                          </div>
                          <div className="col mt-1">
                            <div className="row fw-bold ms-">boAt</div>
                            <span className="text-end position-absolute top-0  end-0 me-2 mt-2">
                              <a href="/mobilemenu" className="pe-1">
                                <i className="bi bi-three-dots link-dark"></i>
                              </a>
                            </span>
                            <div className="row small text-muted ">
                              Sponsored .
                            </div>
                          </div>
                        </div>
                        <div className="card-body position-relative">
                          <p className="card-text">
                            Upgrade to incredible beats 🎶 with incredible
                            deals.
                            <span className="ms-1">
                              {" "}
                              Save the date and get your Airdopes 161 Pro at
                              just ₹999.
                            </span>
                          </p>
                          {/* <p className="card-text">
                                                    Save the date and get your Airdopes 161 Pro at just
                                                    ₹999.
                                                </p> */}
                          <p className="card-text">
                            <a href="#" className="text-decoration-none">
                              #Airdopes161Pro{" "}
                            </a>
                            <a href="" className="text-decoration-none">
                              #LiveTheSound
                            </a>
                          </p>
                          <img
                            src="https://www.boat-lifestyle.com/cdn/shop/products/AD-141-FI-1.3_fa14e3d5-7538-435c-948c-64d624fabdc8_700x.jpg?v=1690363011"
                            className="card-img"
                            alt="card image"
                          ></img>
                          <div className="d-flex bd-highlight ">
                            <div className="me-auto bd-highlight">
                              <img
                                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                                alt=""
                              />
                            </div>
                            {/* <div className="mt-2 bd-highlight"></div>
                                                    <div className="mt-2 me-2 bd-highlight">
                                                        <span className="me-1">12</span>Comments
                                                    </div>
                                                    <div className="mt-2 bd-highlight">
                                                        <span className="me-1">6</span>Share
                                                    </div> */}
                          </div>
                          {/* <hr /> */}
                          <div className="d-flex justify-content-evenly">
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/windows/32/facebook-like.png"
                                alt="facebook-like"
                              />
                              {/* Like  */}
                              <span className="me-5 fw-semibold ps-1">125k</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="22"
                                src="https://img.icons8.com/ios/50/topic--v1.png"
                                alt="topic--v1"
                              />
                              {/* Comments  */}
                              <span className="me-5 fw-semibold ps-1">624</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/fluency-systems-regular/48/forward-arrow.png"
                                alt="forward-arrow"
                              />
                              {/* Share  */}
                              <span className="fw-semibold ps-1">2K</span>
                            </div>
                          </div>

                          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secound card  */}
                  <div className="row pt-2">
                    <div className="col-2"> </div>
                    <div className="col-xxl-8 col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12">
                      <div className="col-1"></div>
                      <div className="card mt-3">
                        <div className="row">
                          <div className="col-xxl-1 col-lg-1 col-auto">
                            <img
                              className="rounded-pill ms-2 mt-2"
                              src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/274736966_4940025746104835_4908244450164914163_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CVIad2XKbb4AX_TJ0na&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfDavxhWNVGvRFsHdyX4aDzdUMqU5dwb9nH2cCzMT1ZJFQ&oe=65359289"
                              width="40"
                              alt=""
                            />
                          </div>
                          <div className="col mt-1">
                            <div className="row fw-bold">boAt</div>
                            <span className="text-end position-absolute top-0  end-0 me-2 mt-2">
                              <a href="/mobilemenu" className="pe-1">
                                <i className="bi bi-three-dots link-dark"></i>
                              </a>
                            </span>
                            <div className="row small text-muted ">
                              Sponsored .
                            </div>
                          </div>
                        </div>
                        <div className="card-body position-relative">
                          <p className="card-text">
                            The only mid week 'blues' we want today 🤞🏻🇮🇳
                          </p>
                          {/* <p className="card-text">
                                                    Save the date and get your Airdopes 161 Pro at just
                                                    ₹999.
                                                </p> */}
                          <p className="card-text">
                            <a href="#" className="text-decoration-none me-2">
                              #INDvsAFG
                            </a>
                            <a href="" className="text-decoration-none">
                              #WorldCup2023
                            </a>
                          </p>
                          <img
                            src="https://www.boat-lifestyle.com/cdn/shop/files/Artboard1copy2_2_700x.png?v=1688113018"
                            className="card-img"
                            alt="card image"
                          ></img>
                          <div className="d-flex bd-highlight ">
                            <div className="me-auto bd-highlight">
                              <img
                                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                                alt=""
                              />
                            </div>
                            {/* <div className="mt-2 bd-highlight"></div>
                                                    <div className="mt-2 me-2 bd-highlight">
                                                        <span className="me-1">12</span>Comments
                                                    </div>
                                                    <div className="mt-2 bd-highlight">
                                                        <span className="me-1">6</span>Share
                                                    </div> */}
                          </div>
                          {/* <hr /> */}
                          <div className="d-flex justify-content-evenly">
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/windows/32/facebook-like.png"
                                alt="facebook-like"
                              />
                              {/* Like  */}
                              <span className="me-5 fw-semibold ps-1">25k</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="22"
                                src="https://img.icons8.com/ios/50/topic--v1.png"
                                alt="topic--v1"
                              />
                              {/* Comments  */}
                              <span className="me-5 fw-semibold ps-1">24</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/fluency-systems-regular/48/forward-arrow.png"
                                alt="forward-arrow"
                              />
                              {/* Share  */}
                              <span className="fw-semibold ps-1">859</span>
                            </div>
                          </div>

                          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 3rd card  */}
                  <div className="row pt-2">
                    <div className="col-2"> </div>
                    <div className="col-xxl-8 col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12">
                      <div className="card mt-3">
                        <div className="row">
                          <div className="col-xxl-1 col-lg-1 col-auto">
                            <img
                              className="rounded-pill ms-2 mt-2"
                              src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/369271668_682885813865884_1809990101190086635_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tzwnGDt8nbMAX9AAoO4&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfCjr935HLkTZFdWmULbFNXXD7A-DpssUfPzyPx73MkMEg&oe=65356AB1"
                              width="40"
                              alt=""
                            />
                          </div>
                          <div className="col mt-1">
                            <div className="row fw-bold">Axis Bank</div>
                            <span className="text-end position-absolute top-0  end-0 me-2 mt-2">
                              <a href="/mobilemenu" className="pe-1">
                                <i className="bi bi-three-dots link-dark"></i>
                              </a>
                            </span>
                            <div className="row small text-muted ">
                              Sponsored .
                            </div>
                          </div>
                        </div>
                        <div className="card-body position-relative">
                          <p className="card-text">
                            Fuel Your Shopping with 5% Cashback* on Axis Bank
                            Debit & Credit Cards via GRAB DEALS
                          </p>
                          {/* <p className="card-text">
                                                    Save the date and get your Airdopes 161 Pro at just
                                                    ₹999.
                                                </p> */}

                          <img
                            src="https://supernova.axisbank.com/75940a53cef80ade721f7788fd7d9d7a.png"
                            className="card-img"
                            alt="card image"
                          ></img>
                          <div className="d-flex bd-highlight ">
                            <div className="me-auto bd-highlight">
                              <img
                                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                                alt=""
                              />
                            </div>
                            {/* <div className="mt-2 bd-highlight"></div>
                                                    <div className="mt-2 me-2 bd-highlight">
                                                        <span className="me-1">12</span>Comments
                                                    </div>
                                                    <div className="mt-2 bd-highlight">
                                                        <span className="me-1">6</span>Share
                                                    </div> */}
                          </div>
                          {/* <hr /> */}
                          <div className="d-flex justify-content-evenly">
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/windows/32/facebook-like.png"
                                alt="facebook-like"
                              />
                              {/* Like  */}
                              <span className="me-5 fw-semibold ps-1">7k</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="22"
                                src="https://img.icons8.com/ios/50/topic--v1.png"
                                alt="topic--v1"
                              />
                              {/* Comments  */}
                              <span className="me-5 fw-semibold ps-1">24</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/fluency-systems-regular/48/forward-arrow.png"
                                alt="forward-arrow"
                              />
                              {/* Share  */}
                              <span className="fw-semibold ps-1">82</span>
                            </div>
                          </div>

                          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 4th card  */}
                  <div className="row pt-2">
                    <div className="col-2"> </div>
                    <div className="col-xxl-8 col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12">
                      <div className="card mt-3">
                        <div className="row">
                          <div className="col-xxl-1 col-lg-1 col-auto">
                            <img
                              className="rounded-pill ms-2 mt-2"
                              src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/355848108_649462377217094_541856528888035300_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=pSY8LLoDGnMAX9054Hf&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfCh-j_8DI0cttkUw-2e-a3ovkqYJKeXaw0aI1C5lDDKvA&oe=65350F48"
                              width="40"
                              alt=""
                            />
                          </div>
                          <div className="col mt-1">
                            <div className="row fw-bold">Flipkart</div>
                            <span className="text-end position-absolute top-0  end-0 me-2 mt-2">
                              <a href="/mobilemenu" className="pe-1">
                                <i className="bi bi-three-dots link-dark"></i>
                              </a>
                            </span>
                            <div className="row small text-muted ">6 June</div>
                          </div>
                        </div>
                        <div className="card-body position-relative">
                          <p className="card-text">
                            Bade se bhi bade discounts, new launches, games,
                            rewards dekh ke har koi karega FLIP, during Flipkart
                            Big Billion Days 3rd to 10th Oct! 🚀
                          </p>
                          {/* <p className="card-text">
                                                    Save the date and get your Airdopes 161 Pro at just
                                                    ₹999.
                                                </p> */}

                          <img
                            src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/387148338_719458866884111_622673810398135522_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IKr9z0vtdcIAX9ez3Wg&_nc_oc=AQk9MTFUwEwLCiSFVwUj4d0oAHlM7z8kjocfyF61PQf5Vpj1mBtuOBNheW9VQjphDK8&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfBPv-98DGKKaIi4VRawQLHW5L4MSeZPurRrDHkLywAEAQ&oe=6536698E"
                            className="card-img"
                            alt="card image"
                          ></img>

                          <div className="d-flex bd-highlight ">
                            <div className="me-auto bd-highlight">
                              <img
                                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                                alt=""
                              />
                            </div>
                          </div>
                          {/* <hr /> */}
                          <div className="d-flex justify-content-evenly">
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/windows/32/facebook-like.png"
                                alt="facebook-like"
                              />
                              {/* Like  */}
                              <span className="me-5 fw-semibold ps-1">925K</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="22"
                                src="https://img.icons8.com/ios/50/topic--v1.png"
                                alt="topic--v1"
                              />
                              {/* Comments  */}
                              <span className="me-5 fw-semibold ps-1">20K</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/fluency-systems-regular/48/forward-arrow.png"
                                alt="forward-arrow"
                              />
                              {/* Share  */}
                              <span className="fw-semibold ps-1">80K</span>
                            </div>
                          </div>

                          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 5th card  */}
                  <div className="row pt-2">
                    <div className="col-2"> </div>
                    <div className="col-xxl-8 col-xl-9 col-lg-10 col-md-12 col-sm-12 col-12">
                      <div className="card mt-3">
                        <div className="row">
                          <div className="col-xxl-1 col-lg-1 col-auto">
                            <img
                              className="rounded-pill ms-2 mt-2"
                              src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/352511694_813202543225897_3746379673757524371_n.png?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=l8I-bMLclAYAX_oNjWU&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfDWFBx8nHTj_V4RqjEzQdajn-YrHPkw58q0GhaRsOqJmA&oe=6536A248"
                              width="40"
                              alt=""
                            />
                          </div>
                          <div className="col mt-1">
                            <div className="row fw-bold">Amazon India</div>
                            <span className="text-end position-absolute top-0  end-0 me-2 mt-2">
                              <a href="/mobilemenu" className="pe-1">
                                <i className="bi bi-three-dots link-dark"></i>
                              </a>
                            </span>
                            <div className="row small text-muted ">6 Oct</div>
                          </div>
                        </div>
                        <div className="card-body position-relative">
                          <p className="card-text">
                          Get great festive deals on Samsung Galaxy smartphones, Starting at Rs.6,499 with up to 18 months No Cost EMI and up to Rs.10,000 Instant bank discount.
                          </p>
                          {/* <p className="card-text">
                                                    Save the date and get your Airdopes 161 Pro at just
                                                    ₹999.
                                                </p> */}

                          <img
                            src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/391699120_726652982840174_5634422238483891592_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=uSHmb63iy1AAX93DzIF&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfC2rtKoyZBkZQUSMAsmYVhr02al-TJoWsnffyGPuWVNDg&oe=653628F3"
                            className="card-img"
                            alt="card image"
                          ></img>

                          <div className="d-flex bd-highlight ">
                            <div className="me-auto bd-highlight">
                              <img
                                src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                                alt=""
                              />
                            </div>
                          </div>
                          {/* <hr /> */}
                          <div className="d-flex justify-content-evenly">
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/windows/32/facebook-like.png"
                                alt="facebook-like"
                              />
                              {/* Like  */}
                              <span className="me-5 fw-semibold ps-1">25M</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="22"
                                src="https://img.icons8.com/ios/50/topic--v1.png"
                                alt="topic--v1"
                              />
                              {/* Comments  */}
                              <span className="me-5 fw-semibold ps-1">241</span>
                            </div>
                            <div className=" bd-highlight">
                              <img
                                width="24"
                                src="https://img.icons8.com/fluency-systems-regular/48/forward-arrow.png"
                                alt="forward-arrow"
                              />
                              {/* Share  */}
                              <span className="fw-semibold ps-1">8</span>
                            </div>
                          </div>

                          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col d-none d-xl-block pt-5 mt-5 fw-semibold">
          <div className="container  position-fixed">
            <h5 className="pb-3 pt-3">Contact</h5>
            <div className="row pb-3 ">
              <div className="col-2">
                <img
                  src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/312257846_10114737758665291_6588360857015169674_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dXMbfOO0-mgAX-pwHin&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfBUb9QZrp2_PjWlFd5ntQrmfFdyuoxGfWMeRwBXxDXQyw&oe=653407EE"
                  width="40" height="40"
                  className="rounded-pill me-2"
                  alt=""
                />{" "}
                <span className="">Mark Zuckerberg</span>
              </div>
              <div className="col pt-1"></div>
            </div>
            <div className="row pb-3">
              <div className="col-2 rounded-pill">
                <img
                  src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/301509805_627780922047672_6062793317280586582_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qUcfystWdZYAX8eVWaa&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfDez-BMir6Hzw1rcejMbsorPXXx6eOMCPBT-xpKIEKiVA&oe=65345FE6"
                  width="40" height="40"
                  className="rounded-pill me-2"
                  alt=""
                />{" "}
                <span>Virat Kohli</span>
              </div>
              <div className="col pt-1"></div>
            </div>
            <div className="row pb-3">
              <div className="col-2">
                <img
                  src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/357429513_593993886174559_8168043197365970028_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=7jliLZLc6y0AX8r66kz&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAsIsbslvd8S0w0BNHBbD59ihH-diVocHjU6ioL8NYDQA&oe=65367B2F"
                  width="40" height="40"
                  className="rounded-pill me-2"
                  alt=""
                />{" "}
                <span> Sony</span>
              </div>
              <div className="col pt-1"></div>
            </div>
            <div className="row pb-3">
              <div className="col-3">
                <img
                  src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/299790619_5849673358384344_1277902966570664477_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Jk1TwShccB4AX823ytR&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfB05FMEjD7i07jv_lMH9zD4HaF04INTCcdvIwe20oWf7A&oe=65349C4B"
                  width="40" height="40"
                  className="rounded-pill me-2"
                  alt=""
                />{" "}
                <span> Chennai Super Kings</span>
              </div>
              <div className="col pt-1"></div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
