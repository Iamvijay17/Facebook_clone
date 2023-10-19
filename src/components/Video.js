import React from "react";

export const Video = () => {
  return (
    <div>
      <div class="container-fluid mt-5 pt-3   ">
        <div class="row flex-nowrap ">
          <div class="col-auto col-md-4 col-xl-2 px-sm-2 px-0 bg-white position-fixed d-none d-sm-block">
            <div class=" d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 position-sticky fw-semibold">
              <a
                href="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none"
              >
                <span class="fs-2 fw-semibold d-none d-sm-inline">Video</span>
              </a>
              <form className="d-flex " role="search">
                <input
                  className="form-control me-2 shadow-none rounded-pill text-dark bg-light"
                  type="search"
                  placeholder="Search Videos"
                  aria-label="Search"
                />
              </form>

              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start  "
                id="menu"
              >
                <li class="nav-item ">
                  <a href="#" class="nav-link align-middle text-black px-0">
                    <i class="fs-4 bi-house"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/requests"
                    class="nav-link px-0 align-middle text-black"
                  >
                    <i class="fs-4 bi-table"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Live</span>
                  </a>
                </li>
                <li>
                  <a
                    href="suggestions"
                    class="nav-link px-0 align-middle text-black"
                  >
                    <i class="fs-4 bi-grid"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Reels</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle text-black">
                    <i class="fs-4 bi-people"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Shows</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle text-black">
                    <i class="fs-4 bi-people"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Explore</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle text-black">
                    <i class="fs-4 bi-people"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Saved Videos</span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
            </div>
          </div>
          <div className="container-fluid ">
            <div className="">
              {/* card  */}
              <div className="row pt-2">
                <div className="col-2"> </div>
                <div className="col-2"> </div>
                <div className="col-xxl-4 col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-xxl-1 col-lg-1 col-auto">
                        <img
                          className="rounded-pill ms-2 mt-2 "
                          src="https://yt3.googleusercontent.com/GZRvYPFrgy0wkaQy27gZ8HGlnY1hhC3bqnmOdkH0gTUS9JjiUt9pr7cqYd1DHIPp_Vh5APDvqCw=s176-c-k-c0x00ffffff-no-rj"
                          width="40"
                          alt=""
                        />
                      </div>
                      <div className="col mt-1 ms-3">
                        <div className="row fw-bold ">Thaman S</div>
                        <span className="text-end position-absolute top-0  end-0 me-2 mt-2">
                          <a href="/mobilemenu" className="pe-1">
                            <i className="bi bi-three-dots link-dark"></i>
                          </a>
                        </span>
                        <div className="row small text-muted ">Sponsored .</div>
                      </div>
                    </div>
                    <div className="card-body position-relative">
                      <p className="card-text">
                        <a href="#" className="text-decoration-none">
                          #Neduvaali{" "}
                        </a>
                        <a href="" className="text-decoration-none">
                          #LiveTheSound
                        </a>
                      </p>
                      <iframe
                        width="1275"
                        height="717"
                        className="card-img"
                        src="https://www.youtube.com/embed/wBmI4Nly4N8"
                        autoplay
                      ></iframe>

                      <div className="d-flex bd-highlight ">
                        <div className="me-auto bd-highlight">
                          <img
                            src="data:image/svg+xml,%3Csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint0_linear_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint1_radial_15251_63610)'/%3E%3Cpath d='M16.0001 7.9996c0 4.418-3.5815 7.9996-7.9995 7.9996S.001 12.4176.001 7.9996 3.5825 0 8.0006 0C12.4186 0 16 3.5815 16 7.9996Z' fill='url(%23paint2_radial_15251_63610)' fill-opacity='.5'/%3E%3Cpath d='M7.3014 3.8662a.6974.6974 0 0 1 .6974-.6977c.6742 0 1.2207.5465 1.2207 1.2206v1.7464a.101.101 0 0 0 .101.101h1.7953c.992 0 1.7232.9273 1.4917 1.892l-.4572 1.9047a2.301 2.301 0 0 1-2.2374 1.764H6.9185a.5752.5752 0 0 1-.5752-.5752V7.7384c0-.4168.097-.8278.2834-1.2005l.2856-.5712a3.6878 3.6878 0 0 0 .3893-1.6509l-.0002-.4496ZM4.367 7a.767.767 0 0 0-.7669.767v3.2598a.767.767 0 0 0 .767.767h.767a.3835.3835 0 0 0 .3835-.3835V7.3835A.3835.3835 0 0 0 5.134 7h-.767Z' fill='%23fff'/%3E%3Cdefs%3E%3CradialGradient id='paint1_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(90 .0005 8) scale(7.99958)'%3E%3Cstop offset='.5618' stop-color='%230866FF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%230866FF' stop-opacity='.1'/%3E%3C/radialGradient%3E%3CradialGradient id='paint2_radial_15251_63610' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='rotate(45 -4.5257 10.9237) scale(10.1818)'%3E%3Cstop offset='.3143' stop-color='%2302ADFC'/%3E%3Cstop offset='1' stop-color='%2302ADFC' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='paint0_linear_15251_63610' x1='2.3989' y1='2.3999' x2='13.5983' y2='13.5993' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%2302ADFC'/%3E%3Cstop offset='.5' stop-color='%230866FF'/%3E%3Cstop offset='1' stop-color='%232B7EFF'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-evenly">
                        <div className=" bd-highlight">
                          <img
                            width="24"
                            src="https://img.icons8.com/windows/32/facebook-like.png"
                            alt="facebook-like"
                          />
                          {/* Like  */}
                          <span className="me-5 fw-semibold">25k</span>
                        </div>
                        <div className=" bd-highlight">
                          <img
                            width="22"
                            src="https://img.icons8.com/ios/50/topic--v1.png"
                            alt="topic--v1"
                          />
                          {/* Comments  */}
                          <span className="me-5 fw-semibold">24</span>
                        </div>
                        <div className=" bd-highlight">
                          <img
                            width="24"
                            src="https://img.icons8.com/fluency-systems-regular/48/forward-arrow.png"
                            alt="forward-arrow"
                          />
                          {/* Share  */}
                          <span className="fw-semibold">8</span>
                        </div>
                      </div>

                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd card  */}
              <div className="row pt-2">
                <div className="col-2"> </div>
                <div className="col-2"> </div>
                <div className="col-xxl-4 col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-xxl-1 col-lg-1 col-auto">
                        <img
                          className="rounded-pill ms-2 mt-2 "
                          src="https://yt3.googleusercontent.com/4F-yeAEe13w301lipg9c63oWgvg9BwbNpn3NILdtZKldTMTlnxgED2an5up86xUoL0bQx73LDQ=s176-c-k-c0x00ffffff-no-rj"
                          width="40"
                          alt=""
                        />
                      </div>
                      <div className="col mt-1 ms-3">
                        <div className="row fw-bold ">Saregama Tamil</div>
                        <span className="text-end position-absolute top-0  end-0 me-2 mt-2">
                          <a href="/mobilemenu" className="pe-1">
                            <i className="bi bi-three-dots link-dark"></i>
                          </a>
                        </span>
                        <div className="row small text-muted ">Sponsored .</div>
                      </div>
                    </div>
                    <div className="card-body position-relative">
                      En Rojaa Neeye - Video Song | Vijay Deverakonda,
                      Samantha Ruth Prabhu | Hesham Abdul Wahab
                      <p className="card-text">
                        <a href="#" className="text-decoration-none me-2">
                          #Kushi
                        </a>
                        <a href="" className="text-decoration-none me-2">
                          #Samantha
                        </a>
                        <a href="" className="text-decoration-none">
                          #VijayDeverakonda
                        </a>
                      </p>
                      <iframe
                        width="1275"
                        height="417"
                        className="card-img"
                        src="https://www.youtube.com/embed/2m9esh3PG98?autoplay=1&mute=1"
                        name="youtube embed"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                      ></iframe>
                      <div className="d-flex bd-highlight ">
                        <div className="me-auto bd-highlight">
                          <img src="" alt="" />
                        </div>
                      </div>
                      <div className="d-flex justify-content-evenly">
                        <div className=" bd-highlight">
                          <img
                            width="24"
                            src="https://img.icons8.com/windows/32/facebook-like.png"
                            alt="facebook-like"
                          />
                          {/* Like  */}
                          <span className="me-5 fw-semibold">25k</span>
                        </div>
                        <div className=" bd-highlight">
                          <img
                            width="22"
                            src="https://img.icons8.com/ios/50/topic--v1.png"
                            alt="topic--v1"
                          />
                          {/* Comments  */}
                          <span className="me-5 fw-semibold">24</span>
                        </div>
                        <div className=" bd-highlight">
                          <img
                            width="24"
                            src="https://img.icons8.com/fluency-systems-regular/48/forward-arrow.png"
                            alt="forward-arrow"
                          />
                          {/* Share  */}
                          <span className="fw-semibold">8</span>
                        </div>
                      </div>
                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3rd card */}
              <div className="row pt-2">
                <div className="col-2"> </div>
                <div className="col-2"> </div>
                <div className="col-xxl-4 col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-xxl-1 col-lg-1 col-auto">
                        <img
                          className="rounded-pill ms-2 mt-2 "
                          src="https://yt3.googleusercontent.com/l350nysbhW3iDxI5YoelK4c-bhNzoQ0Vpg6Qt1vZ0Cweu3PBiPsF0TBZ5ZQtI8dK1KspCMq7xA=s176-c-k-c0x00ffffff-no-rj"
                          width="40"
                          alt=""
                        />
                      </div>
                      <div className="col mt-1 ms-3">
                        <div className="row fw-bold ">TechWiser</div>
                        <span className="text-end position-absolute top-0  end-0 me-2 mt-2">
                          <a href="/mobilemenu" className="pe-1">
                            <i className="bi bi-three-dots link-dark"></i>
                          </a>
                        </span>
                        <div className="row small text-muted ">Sponsored .</div>
                      </div>
                    </div>
                    <div className="card-body position-relative ">
                      Forget All Your Passwords, This Is The New Google Feature!
                      <p className="card-text">
                        <a href="#" className="text-decoration-none me-2 ">
                          #TechWiser{" "}
                        </a>
                        <a href="" className="text-decoration-none">
                          #yt
                        </a>
                      </p>
                      <iframe
                        width="453"
                        height="805"
                        className="card-img"
                        src="https://www.youtube.com/embed/YiYsr0LC9Ec?autoplay=1&mute=1&controls=0"
                        allow="autoplay; encrypted-media"
                        name="youtube embed"
                        loading="lazy"
                      ></iframe>

                      <div className="d-flex bd-highlight ">
                        <div className="me-auto bd-highlight">
                          <img src="" alt="" />
                        </div>
                      </div>

                      <div className="d-flex justify-content-evenly">
                        <div className=" bd-highlight">
                          {/* Like  */}
                          <img
                            width="24"
                            src="https://img.icons8.com/windows/32/facebook-like.png"
                            alt="facebook-like"
                          />
                          <span className="me-5 fw-semibold">25k</span>
                        </div>
                        <div className=" bd-highlight">
                          <img
                            width="22"
                            src="https://img.icons8.com/ios/50/topic--v1.png"
                            alt="topic--v1"
                          />
                          {/* Comments  */}
                          <span className="me-5 fw-semibold">24</span>
                        </div>
                        <div className=" bd-highlight">
                          <img
                            width="24"
                            src="https://img.icons8.com/fluency-systems-regular/48/forward-arrow.png"
                            alt="forward-arrow"
                          />
                          {/* Share  */}
                          <span className="fw-semibold">8</span>
                        </div>
                      </div>

                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4th card */}
              <div className="row pt-2">
                <div className="col-2"> </div>
                <div className="col-2"> </div>
                <div className="col-xxl-4 col-xl-6 col-lg-10 col-md-12 col-sm-12 col-12">
                  <div className="card">
                    <div className="row">
                      <div className="col-xxl-1 col-lg-1 col-auto">
                        <img
                          className="rounded-pill ms-2 mt-2 "
                          src="https://yt3.ggpht.com/dLEOpt3o0c7rg7R1txAmNA-XNXqsOEKrSd7bD35dga98YYyV8-i4ASf9Ba2UM4XBEBD4U3s28o0=s48-c-k-c0x00ffffff-no-nd-rj"
                          width="40"
                          alt=""
                        />
                      </div>
                      <div className="col mt-1 ms-3">
                        <div className="row fw-bold ">Alan Walker</div>
                        <span className="text-end position-absolute top-0  end-0 me-2 mt-2">
                          <a href="/mobilemenu" className="pe-1">
                            <i className="bi bi-three-dots link-dark"></i>
                          </a>
                        </span>
                        <div className="row small text-muted ">Sponsored .</div>
                      </div>
                    </div>
                    <div className="card-body position-relative ">
                      <p className="card-text">
                        Alan Walker Mashup
                        <a href="#" className="text-decoration-none ms-1">
                          #alanwalker{" "}
                        </a>
                        <a href="" className="text-decoration-none">
                          #onmyway
                        </a>
                      </p>
                      <iframe
                        width="1280"
                        height="405"
                        className="card-img lazy"
                        src="https://www.youtube.com/embed/1B6DI_o-9G8?autoplay=1&mute=1&controls=0"
                        allow="autoplay; encrypted-media"
                        name="youtube embed"
                      ></iframe>

                      <div className="d-flex bd-highlight ">
                        <div className="me-auto bd-highlight">
                          <img src="" alt="" />
                        </div>
                      </div>

                      <div className="d-flex justify-content-evenly">
                        <div className=" bd-highlight">
                          {/* Like  */}
                          <img
                            width="24"
                            src="https://img.icons8.com/windows/32/facebook-like.png"
                            alt="facebook-like"
                          />
                          <span className="me-5 fw-semibold ">25B</span>
                        </div>
                        <div className=" bd-highlight">
                          {/* Comments  */}
                          <img
                            width="22"
                            src="https://img.icons8.com/ios/50/topic--v1.png"
                            alt="topic--v1"
                          />
                          <span className="me-5 fw-semibold">24</span>
                        </div>
                        <div className=" bd-highlight">
                          <img
                            width="24"
                            src="https://img.icons8.com/fluency-systems-regular/48/forward-arrow.png"
                            alt="forward-arrow"
                          />
                          {/* Share  */}
                          <span className="fw-semibold">8</span>
                        </div>
                      </div>

                      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
