import React from "react";

export const Friend_requests = () => {
  return (
    <div>
      <div class="container-fluid mt-5 pt-3">
        <div class="row flex-nowrap">
          <div class="col-auto col-md-4 col-xl-2 px-sm-2 px-0 bg-white bg-opacity-75 	d-none d-sm-block">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <div class="row">
                <div class="col-2 py-3">
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
                  <div className="row">
                    <a
                      href="#"
                      class="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-dark text-decoration-none"
                    >
                      <span class="fs-4 fw-bold ">Friend requests</span>
                    </a>
                  </div>
                </div>
              </div>
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
                  <a href="#" class="nav-link px-0 align-middle text-black">
                    <i class="fs-4 bi-table"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Friend request</span>
                  </a>
                </li>
                <li>
                  <a
                    href="suggestions"
                    
                    class="nav-link px-0 align-middle text-black"
                  >
                    <i class="fs-4 bi-grid"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Suggestions</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle text-black">
                    <i class="fs-4 bi-people"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">All Friends</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle text-black">
                    <i class="fs-4 bi-people"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Birthday</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle text-black">
                    <i class="fs-4 bi-people"></i>{" "}
                    <span class="ms-1 d-none d-sm-inline">Custom lists</span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
              
            </div>
          </div>
          <div class="col py-3">
            <div className="text-center">
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
