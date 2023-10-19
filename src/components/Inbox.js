import React from "react";

export const Inbox = () => {
  return (
    <div>
      <div class="container-fluid mt-5 pt-3   ">
        <div class="row flex-nowrap ">
          <div class="col-auto col-md-4 col-xl-2 px-sm-2 px-0 bg-white position-fixed">
            <div class=" d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 position-sticky">
              <a
                href="/"
                class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none"
              >
                <span class="fs-2 fw-semibold d-none d-sm-inline">
                  Marketplace
                </span>
              </a>
              <form className="d-flex " role="search">
                <input
                  className="form-control me-2 shadow-none rounded-pill text-dark bg-light shadow "
                  type="search"
                  placeholder="Search Marketplace"
                  aria-label="Search"
                />
              </form>

              <ul
                class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start  "
                id="menu"
              >
                <li class="nav-item ">
                  <a href="#" class="nav-link align-middle text-black px-0">
                  <img
                      width="24"
                      src="https://img.icons8.com/ios-glyphs/30/shop.png"
                      alt="shop"
                      className="me-1"
                    />
                    <span class="ms-1 d-none d-sm-inline">Browse all</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/requests"
                    class="nav-link px-0 align-middle text-black"
                  >
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-notification-basic-anggara-basic-outline-anggara-putra-2.png"
                      alt="external-notification"
                      className="me-1"
                    />
                    <span class="ms-1 d-none d-sm-inline">Notification</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="nav-link px-0 align-middle text-black"
                  >
                    <img
                      width="26"
                      src="https://img.icons8.com/pastel-glyph/64/inbox--v1.png"
                      alt="inbox--v1"
                      className="me-1"
                    />
                    <span class="ms-1 d-none d-sm-inline">Inbox</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle text-black">
                  <img
                      width="24"
                      src="https://img.icons8.com/fluency-systems-regular/48/shopping-bag--v1.png"
                      alt="shopping-bag--v1"
                      className="me-1"
                    />
                    <span class="ms-1 d-none d-sm-inline">Buying</span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link px-0 align-middle text-black">
                  <img
                      width="26"
                      src="https://img.icons8.com/external-simple-solid-edt.graphics/50/external-Tag-tags-simple-solid-edt.graphics-9.png"
                      alt="external-Tag-tags-simple-solid-edt.graphics-9"
                      className="me-1"
                    />
                    <span class="ms-1 d-none d-sm-inline">Selling</span>{" "}
                  </a>
                </li>
                
              </ul>
              <hr />
            </div>
          </div>
          <div className="container "  >
            <div className="row pt-3 ">
              <div className="col-4"></div>

              <div className="col">
                <div className="card">
                  <ul class="nav nav-underline">
                    <li class="nav-item">
                      <a
                        class="nav-link active text-secondary"
                        aria-current="page"
                        href="#"
                      >
                        Selling
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link text-secondary" href="#">
                        Buying
                      </a>
                    </li>
                  </ul>
                  <hr />
                  <span className="ms-3">Filter by label</span>
                  <div className="container-fluid mt-3 mb-3">
                    <div className="">
                      <a
                        class="btn rounded-pill ms-2 text-dark fw-bold" style={{ backgroundColor: "#e4e6eb" }}
                        href="#"
                        role="button"
                      >
                        All
                      </a>
                      <a
                        class="btn rounded-pill ms-2 text-dark fw-bold" style={{ backgroundColor: "#e4e6eb" }}
                        href="#"
                        role="button"
                      >
                        Pending Payment{" "}
                      </a>
                      <a
                        class="btn rounded-pill ms-2 text-dark fw-bold" style={{ backgroundColor: "#e4e6eb" }}
                        href="#"
                        role="button"
                      >
                        Paid
                      </a>
                      
                      <a
                        class="btn rounded-pill ms-2 text-dark fw-bold" style={{ backgroundColor: "#e4e6eb" }}
                        href="#"
                        role="button"
                      >
                        Dispatched
                      </a>
                      <a
                        class="btn rounded-pill ms-2 text-dark fw-bold" style={{ backgroundColor: "#e4e6eb" }}
                        href="#"
                        role="button"
                      >
                        Cash on delivery
                      </a>
                      <a
                        class="btn rounded-pill ms-2 text-dark fw-bold" style={{ backgroundColor: "#e4e6eb" }}
                        href="#"
                        role="button"
                      >
                        Completed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3"></div>
            </div>

            {/* 2nd card  */}
            <div className="row pt-3 ">
              <div className="col-4"></div>

              <div className="col">
                <div className="card pb-3" >
                 <div className="text-center">
                  <img src="https://www.facebook.com/images/comet/empty_states_icons/messages/null_states_messages_gray_wash.svg" width="120" alt="" />
                 </div>
                  <span className="  text-secondary fw-bold text-center fs-4">No chats</span>
                </div>
              </div>
              <div className="col-3"></div>
            </div>
            <div className="row py-5 my-5"></div>
            <div className="row py-5 my-5"></div>
            <div className="row py-4 my-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
