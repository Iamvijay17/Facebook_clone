import React from "react";

export const Suggestions = () => {
  return (
    <div>
      <div class="container-fluid mt-5 pt-3">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-4 col-xl-2 px-sm-2 px-0 bg-white bg-opacity-75 overflow-auto">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <div class="row">
                <div class="col py-3">
                  <a href="/friends">
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-two-tone/24/left.png"
                      alt="left"
                    />{" "}
                  </a>
                </div>
                <div class="col">
                  <div className="row">
                    <a href="" className=" text-decoration-none text-secondary">
                      <span>Friends</span>
                    </a>
                  </div>
                  <div className="row pb-2">
                    <a
                      href="#"
                      class="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-dark text-decoration-none"
                    >
                      <span class="fs-4 fw-semibold ">Suggestions</span>
                    </a>
                  </div>
                </div>
              </div>
              <span className=" text-dark py-2 ">People you may know</span>
              <div className="">
                {/*  1st card  */}
                <div className="pb-4 ">
                  <a href="" className=" text-decoration-none text-dark">
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <img
                          src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=be3454&_nc_ohc=9v6-e1JQfaEAX_aaMOE&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfDeF8j06uzJID1OjkMUv6HB4nyvCgnOYZjqdnzuYaqhrw&oe=6556E840"
                          alt="..."
                          className="rounded-pill"
                          width="60"
                        />
                      </div>
                      <div class="d-flex align-content-end flex-wrap ms-3">
                        <div class="fw-semibold mb-2 ">Cristiano Ronaldo <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="15"
                              viewBox="0 0 48 48"
                            >
                              <polygon
                                fill="#42a5f5"
                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                              ></polygon>
                              <polygon
                                fill="#fff"
                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                              ></polygon>
                            </svg>
                          </span></div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
                          <button
                            class="btn btn-primary px-4 btn-sm fw-semibold"
                            type="button"
                          >
                            Accept
                          </button>
                          <button
                            style={{ backgroundColor: "#F2F3F4" }}
                            class="btn  btn-sm text-dark fw-semibold px-4"
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* 2nd card  */}
                <div className="pb-4">
                  <a href="" className=" text-decoration-none text-dark">
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <img
                          src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/301509805_627780922047672_6062793317280586582_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qUcfystWdZYAX8eVWaa&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfDez-BMir6Hzw1rcejMbsorPXXx6eOMCPBT-xpKIEKiVA&oe=65345FE6"
                          alt="..."
                          className="rounded-pill"
                          width="60"
                        />
                      </div>
                      <div class="d-flex align-content-end flex-wrap ms-3">
                        <div class="fw-semibold mb-2 ">Virat Kohli <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="15"
                              viewBox="0 0 48 48"
                            >
                              <polygon
                                fill="#42a5f5"
                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                              ></polygon>
                              <polygon
                                fill="#fff"
                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                              ></polygon>
                            </svg>
                          </span></div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                          <button
                            class="btn btn-primary btn-sm fw-semibold px-4"
                            type="button"
                          >
                            Accept
                          </button>
                          <button
                            style={{ backgroundColor: "#F2F3F4" }}
                            class="btn  btn-sm text-dark fw-semibold px-4"
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* 3rd card  */}
                <div className="pb-4 ">
                  <a href="" className=" text-decoration-none text-dark">
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <img
                          src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/305314413_125942426867120_367217577111367222_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RaK6itmnF74AX9mDDw_&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfCSrD38xSezeNdb9NHK3zjcfZXdJDR7Di-A7swhQR_pRw&oe=6533A666"
                          alt="..."
                          className="rounded-pill"
                          width="60"
                        />
                      </div>
                      <div class="d-flex align-content-end flex-wrap ms-3">
                        <div class="fw-semibold mb-2 ">GP Muthu</div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
                          <button
                            class="btn btn-primary px-4 btn-sm fw-semibold"
                            type="button"
                          >
                            Accept
                          </button>
                          <button
                            style={{ backgroundColor: "#F2F3F4" }}
                            class="btn  btn-sm text-dark fw-semibold px-4"
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* 4th card  */}
                <div className="pb-4 ">
                  <a href="" className=" text-decoration-none text-dark">
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <img
                          src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/312257846_10114737758665291_6588360857015169674_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dXMbfOO0-mgAX-pwHin&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfBUb9QZrp2_PjWlFd5ntQrmfFdyuoxGfWMeRwBXxDXQyw&oe=653407EE"
                          alt="..."
                          className="rounded-pill"
                          width="60"
                        />
                      </div>
                      <div class="d-flex align-content-end flex-wrap ms-3">
                        <div class="fw-semibold mb-2 ">Mark Zuckerberg <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="15"
                              viewBox="0 0 48 48"
                            >
                              <polygon
                                fill="#42a5f5"
                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                              ></polygon>
                              <polygon
                                fill="#fff"
                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                              ></polygon>
                            </svg>
                          </span></div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
                          <button
                            class="btn btn-primary px-4 btn-sm fw-semibold"
                            type="button"
                          >
                            Accept
                          </button>
                          <button
                            style={{ backgroundColor: "#F2F3F4" }}
                            class="btn  btn-sm text-dark fw-semibold px-4"
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* 5th card  */}
                <div className="pb-4 ">
                  <a href="" className=" text-decoration-none text-dark">
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <img
                          src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/214450186_4452241428156790_5691913047524622265_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Frs3LgunjI8AX-ZFMmO&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfB4ilBPvqEcNZbVLSVLnOkH464mtsd3PGpoSFFv-otvyQ&oe=6534CD20"
                          alt="..."
                          className="rounded-pill "
                          width="60"
                        />
                      </div>
                      <div class="d-flex align-content-end flex-wrap ms-3">
                        <div class="fw-semibold mb-2 ">MS Dhoni <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="15"
                              viewBox="0 0 48 48"
                            >
                              <polygon
                                fill="#42a5f5"
                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                              ></polygon>
                              <polygon
                                fill="#fff"
                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                              ></polygon>
                            </svg>
                          </span></div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
                          <button
                            class="btn btn-primary px-4 btn-sm fw-semibold"
                            type="button"
                          >
                            Accept
                          </button>
                          <button
                            style={{ backgroundColor: "#F2F3F4" }}
                            class="btn  btn-sm text-dark fw-semibold px-4"
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* 6th card  */}
                <div className="pb-4 ">
                  <a href="" className=" text-decoration-none text-dark">
                    <div class="d-flex">
                      <div class="flex-shrink-0">
                        <img
                          src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-6/375051969_1078526923641539_6141717613249906768_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xX9kZWIQ1HoAX8t6H_r&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfArXw0QoPHZOkSfDFNx49CEx4XliaorTIMysb6WiA0tZg&oe=65347889"
                          alt="..."
                          className="rounded-pill"
                          width="60"
                        />
                      </div>
                      <div class="d-flex align-content-end flex-wrap ms-3">
                        <div class="fw-semibold mb-2 ">
                          Narendra Modi{" "}
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              x="0px"
                              y="0px"
                              width="15"
                              viewBox="0 0 48 48"
                            >
                              <polygon
                                fill="#42a5f5"
                                points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
                              ></polygon>
                              <polygon
                                fill="#fff"
                                points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
                              ></polygon>
                            </svg>
                          </span>{" "}
                        </div>

                        <div class="d-grid gap-2 d-md-flex justify-content-md-end ">
                          <button
                            class="btn btn-primary px-4 btn-sm fw-semibold"
                            type="button"
                          >
                            Accept
                          </button>
                          <button
                            style={{ backgroundColor: "#F2F3F4" }}
                            class="btn  btn-sm text-dark fw-semibold px-4"
                            type="button"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Card end  */}
              </div>
            </div>
          </div>
          <div class="col py-5">
            <div className="text-center py-5">
              <img
                src="https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg"
                alt=""
                width="120"
              />
              <div>
                <span className="fw-bold text-secondary">
                  When you have friend requests or suggestions, you'll see them
                  here.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
