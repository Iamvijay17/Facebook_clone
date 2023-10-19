import React from "react";

export const Marketplace = () => {
  return (
    <div>
      <div class="container-fluid mt-5 pt-3   ">
        <div class="row flex-nowrap ">
          <div class="col-auto col-md-4 col-xl-2 px-sm-2 px-0 bg-white position-fixed">
            <div class=" d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 position-sticky fw-semibold">
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
                class="nav nav-pills flex-column mb-sm-auto pt-4 gap-3 mb-0 align-items-center align-items-sm-start  "
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
                    href="/notifications"
                    class="nav-link px-0 align-middle text-black"
                  >
                    <img
                      width="24"
                      height="24"
                      src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-notification-basic-anggara-basic-outline-anggara-putra-2.png"
                      alt="external-notification" className="me-1"
                    />
                    <span class="ms-1 d-none d-sm-inline">Notification</span>
                  </a>
                </li>
                <li>
                  <a href="inbox" class="nav-link px-0 align-middle text-black">
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
          <div className="container ">
            <div className="row">
              <div className="col-2"></div>

              <div className="col">
                <div className="fw-bold mb-4 mt-4">Today's picks</div>
                <div class="card-group gap-2">
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/384578761_24441695685421791_8576728465892712191_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=TwYiUNnz-NoAX8CN0la&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfDeIT5B_tEEoOLAEm_X4CRjyCVmahgGEZV4qM_Z6yx9qA&oe=653518CA"
                      class="card-img-top rounded "
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹28,500</h5>
                      <p class="card-text">
                        MacBook Air
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/368563095_6482496691818535_1381496980341794244_n.jpg?stp=c0.48.261.261a_dst-jpg_p261x260&_nc_cat=101&ccb=1-7&_nc_sid=247b10&_nc_ohc=GVLEgnAJalgAX8CtS0K&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAelvQoSLFHitiEgO43N63W_PMBs9U_ua37avlUKbNPiA&oe=65349FEE"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹28,500</h5>
                      <p class="card-text">
                        2018 DUKE 2018 & 2016 MODEL (EMI AVAILABLE ) �emi
                        available �
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/381622252_6625904580796426_1499965857193304292_n.jpg?stp=c0.0.260.260a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=vgHlI2_RKvcAX_Qu1zS&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAH4kj5D9EhG5EeMr5hgl-pWVemVh5tu4bs3HeDDchyPA&oe=653583B4"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹2,550</h5>
                      <p class="card-text">
                        Drone With Hd Camera
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                      <p class="card-text"></p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/356191001_5904921506206706_6396984957116137335_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=Pf4Qe4QOY_oAX80wm4m&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfC0XdJoAwEiE6B7NfJwzTJLp9P9OQHrpRNGlbO8LXd0xQ&oe=65341961"
                      class="card-img-top rounded "
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹950</h5>
                      <p class="card-text rounded">
                        TVS GOLD Mechanical Keyboard
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/385541626_6834751799945815_3921261229298226203_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=joImXnPNaK0AX-xl8W_&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAJmGI6zmLPLzz5eNb3DJ6P73VKB7WaGuy9AiwafeVqpw&oe=6533E624"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹460,000</h5>
                      <p class="card-text">
                        2008 Mercedes-Benz cla-class
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light ">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/386021354_7012449498834895_8545566631248270999_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=0IvbucYx7P0AX8Y8FFH&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfCCzY5TFmHHPDsOQkTTxMVJ8cNoqfzdh6u1SwQlWC3-bA&oe=65346883"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹16,500</h5>
                      <p class="card-text">
                        PS4 Slim 1Tb With Additional Controllers With Latest
                        Version
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                {/* 2nd line  */}
                <div class="card-group gap-2">
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/376990236_6516286248452210_4636079052523078910_n.jpg?stp=c56.0.258.258a_dst-jpg_p370x247&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=keLRK1h2GREAX_zpF-Z&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfCAihlKGrbpqSK7Ua1LyvRX6OC600nnuEUaa2pIVm6b2w&oe=6535090A"
                      class="card-img-top rounded "
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹14,500</h5>
                      <p class="card-text">
                        Hp i3 6th generation laptop with 8Gb Ram and 256Gb SSD.
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/393401965_6292948614143326_5007323470168011742_n.jpg?stp=c43.0.260.260a_dst-jpg_p261x260&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_ohc=HUSwcjH-gaAAX8J8MB-&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAHO7gOqXMabXtaRdWW1LqYsSW5Wra-df_JKkVHumTnsQ&oe=653436FC"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹8,500</h5>
                      <p class="card-text">
                        OnePlus Android TV for sale
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/387112642_5901053349998352_3468611102176573596_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=111&ccb=1-7&_nc_sid=247b10&_nc_ohc=Br7RMoVUIOkAX8vwh6l&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAkLKfgGgC30FHQmU7Tmj9leuM7TfE1rT2Nr2wtttONfQ&oe=653578AB"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹44,500</h5>
                      <p class="card-text">
                        Google pixel 7 pro
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                      <p class="card-text"></p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/371176727_7317542738273708_5252975802486880398_n.jpg?stp=c0.0.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=t7vVH4mOYoEAX-zCk53&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfCUn2mH-8kDC8AI_9mQNLqH-EKVrH61PCEsfVNzIWOLJw&oe=65356FE8"
                      class="card-img-top rounded "
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹450</h5>
                      <p class="card-text rounded">
                        YouTube working smart watch with sim
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/385849888_6704310719635833_4249139689907375291_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=gZ8Zki8-X-YAX9EWMwV&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfDa_LCM-j-KsPm-0_7zNSSE8Tpu8hGLrNRj81Q0e1fjng&oe=6535D9A8"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹18,000</h5>
                      <p class="card-text">
                        Sony Ps4 1tb Perfect working condition
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light ">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/362666122_6698751426880915_1072992449450912146_n.jpg?stp=c0.0.260.260a_dst-jpg_p261x260&_nc_cat=100&ccb=1-7&_nc_sid=247b10&_nc_ohc=9l78Xl3faIIAX-Rn1pr&_nc_oc=AQlMNUOuFp2tDNa3rt459uRBjaeDdpOgqFcj7zSV3whdark90-PMXlYu4Z5qVBKReoM&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfBN8A8oD7t03R8ELkYDJjAWcGblTcxA2qlmKOXWz7o_pw&oe=65343388"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹700</h5>
                      <p class="card-text">
                        Apple combo
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                {/* 3rd line  */}
                <div class="card-group gap-2">
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/356777986_6623549581031710_6344791173755776971_n.jpg?stp=c13.0.260.260a_dst-jpg_p261x260&_nc_cat=103&ccb=1-7&_nc_sid=247b10&_nc_ohc=sE2p3eiFPpEAX8ZtOnX&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfA1TgywVRAtqiKK6xTSEP_u_oLtyDj2ceeJ2JLRA05UxA&oe=65357F47"
                      class="card-img-top rounded "
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹27,499</h5>
                      <p class="card-text">
                        ONEPLUS 10T 5G 8/128
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/380607000_24299959336284168_1605636927246148622_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=106&ccb=1-7&_nc_sid=247b10&_nc_ohc=X8ADeYZJRA4AX8jDHjh&_nc_oc=AQn06kQ4YHXGpYx7oTpdOcY-hStUA84eXKsDwWj20L8G3gUlyeDRIL58CyP6HFyL2Lo&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfBkFBM4Ace-7W1W0Gsb9Fgk4SZHjBTpIiJ35mADURV9wg&oe=65350A2A"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹25,000</h5>
                      <p class="card-text">
                        Vivo v27pro 8/128
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/381622252_6625904580796426_1499965857193304292_n.jpg?stp=c0.0.260.260a_dst-jpg_p261x260&_nc_cat=102&ccb=1-7&_nc_sid=247b10&_nc_ohc=vgHlI2_RKvcAX_Qu1zS&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAH4kj5D9EhG5EeMr5hgl-pWVemVh5tu4bs3HeDDchyPA&oe=653583B4"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹27,999</h5>
                      <p class="card-text">
                        MacBook pro A1398 core i7 processor 16gb 256 original
                        apple SSD
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                      <p class="card-text"></p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/378084861_24080309211617713_3931582141424601408_n.jpg?stp=c3.0.260.260a_dst-jpg_p261x260&_nc_cat=108&ccb=1-7&_nc_sid=247b10&_nc_ohc=Hc-UDGhnapoAX-cluAV&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfAhtIsu5m-XJG59iER2fnMeXOz9fqcTFYqDpvglOwHQJQ&oe=65340E63"
                      class="card-img-top rounded "
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹5,700 </h5>
                      <p class="card-text rounded">
                        SONY 4K SMART ANDROID LED TV LOWEST PRICE
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/387427782_7357749750919084_2296793861169662396_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=109&ccb=1-7&_nc_sid=247b10&_nc_ohc=fkrh_aujJ7kAX_nMIkL&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfA5HLVd7fBhozYjlD2hohEUoof4aeeKTiIjwRQ59zGV7g&oe=65341422"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹16,500</h5>
                      <p class="card-text">
                        iPad 7th gen 128gb
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
                    </div>
                  </div>
                  <div class="card border-0 bg-light ">
                    <img
                      src="https://scontent.fmaa10-1.fna.fbcdn.net/v/t45.5328-4/386309961_7447648045262734_4078758041581507614_n.jpg?stp=c0.43.261.261a_dst-jpg_p261x260&_nc_cat=105&ccb=1-7&_nc_sid=247b10&_nc_ohc=Mu1rgWXSM10AX-BhFtj&_nc_ht=scontent.fmaa10-1.fna&cb_e2o_trans=t&oh=00_AfD6cw4Kvyu81s1Eb4bl2xlTkNmojn392KjcIhBZNU3xUw&oe=6535097F"
                      class="card-img-top rounded"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">₹400,000</h5>
                      <p class="card-text">
                        Mac studio M2 Ultra
                        <div>
                          <small class="text-muted">Chennai, TN</small>
                        </div>
                      </p>
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
