import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const WorkSection = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  

  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringOne, setIsHoveringOne] = useState(false);
  const [isHoveringTwo, setIsHoveringTwo] = useState(false);
  const [isHoveringThree, setIsHoveringThree] = useState(false);
  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setCursorPos({
      x: offsetX - 200, // Subtract half the width of the text
      y: offsetY - 200, // Subtract half the height of the text
    });
  };

  return (
    <section className="section color">
      <div className="container">
        <div>
          <Fade direction="left" triggerOnce>
            <h2 className="title-tag big">Our Work</h2>
          </Fade>
          <div className="margin-40px">
            <div className="w-dyn-list">
              <div role="list" className="work-grid w-dyn-items">
                <Fade direction="up" triggerOnce>
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    data-w-id="51e18516-54b7-47d9-f48b-e9aafec796dc"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      opacity: 1,
                    }}
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="5d8a33a9-b39c-9873-681f-f7960fca259c"
                      className="work-wrapper-first"
                    >
                      <div className="circle-center">
                        <a
                          href="/project/dreamy-visions"
                          className="project-circle-text w-inline-block"
                        >
                          <div
                            style={{
                              left: cursorPos.x,
                              top: cursorPos.y,
                              position: "absolute",
                              display: isHovering ? "flex" : "none", // change here
                              color: "white", // change text color here
                              backgroundColor: "black", // change background color here
                            }}
                            className="view-project-icon"
                          >
                            <div>
                              View
                              <br />
                              Project
                            </div>
                          </div>
                        </a>
                        <img
                          src="https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7adbd3768d39b729094d_work-1.jpg"
                          loading="eager"
                          alt=""
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 44vw, (max-width: 1439px) 43vw, 575px"
                          srcSet="https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7adbd3768d39b729094d_work-1-p-500.jpg 500w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7adbd3768d39b729094d_work-1-p-800.jpg 800w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7adbd3768d39b729094d_work-1-p-1080.jpg 1080w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7adbd3768d39b729094d_work-1-p-1600.jpg 1600w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7adbd3768d39b729094d_work-1.jpg 2000w"
                          className="work-photo-first"
                         
                        />
                      </div>
                      <div className="category-top-2"></div>
                      <div className="margin-20px">
                        <div className="vertical-flex">
                          <a
                            href="/project/dreamy-visions"
                            className="title-line-wrapper w-inline-block"
                          >
                            <h3 className="work-title-first">Dreamy Visions</h3>
                            <div className="line-overlay">
                              <div
                                className={`line-title ${
                                  isHovering ? "firstHover" : ""
                                }`}
                                // style={{
                                //   transform:
                                //     "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                //   transformStyle: "preserve-3d",
                                // }}
                              ></div>
                            </div>
                          </a>
                          <div>
                            <p className="category-title">
                              Logo, User Interface
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>

                <Fade direction="up" triggerOnce>
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHoveringOne(true)}
                    onMouseLeave={() => setIsHoveringOne(false)}
                    data-w-id="51e18516-54b7-47d9-f48b-e9aafec796dc"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      opacity: 1,
                    }}
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="5d8a33a9-b39c-9873-681f-f7960fca259c"
                      className="work-wrapper-first"
                    >
                      <div className="circle-center">
                        <a
                          href="/project/whimsy-tales"
                          className="project-circle-text w-inline-block"
                        >
                          <div
                            style={{
                              left: cursorPos.x,
                              top: cursorPos.y,
                              position: "absolute",
                              display: isHoveringOne ? "flex" : "none", // change here
                              color: "white", // change text color here
                              backgroundColor: "black", // change background color here
                            }}
                            className="view-project-icon"
                          >
                            <div>
                              View
                              <br />
                              Project
                            </div>
                          </div>
                        </a>
                        <img
                          src="https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c747401a5fdab88a84d_work-3.jpg"
                          loading="eager"
                          alt=""
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 44vw, (max-width: 1439px) 43vw, 575px"
                          srcSet="https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c747401a5fdab88a84d_work-3-p-500.jpg 500w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c747401a5fdab88a84d_work-3-p-800.jpg 800w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c747401a5fdab88a84d_work-3-p-1080.jpg 1080w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c747401a5fdab88a84d_work-3-p-1600.jpg 1600w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c747401a5fdab88a84d_work-3.jpg 2000w"
                          className="work-photo-first"
                         
                        />
                      </div>
                      <div className="category-top-2"></div>
                      <div className="margin-20px">
                        <div className="vertical-flex">
                          <a
                            href="/project/whimsy-tales"
                            className="title-line-wrapper w-inline-block"
                          >
                            <h3 className="work-title-first">Whimsy Tales</h3>
                            <div className="line-overlay">
                              <div
                                className={`line-title ${
                                  isHoveringOne ? "twoHover" : ""
                                }`}
                                // style={{
                                //   transform:
                                //     "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                //   transformStyle: "preserve-3d",
                                // }}
                              ></div>
                            </div>
                          </a>
                          <div>
                            <p className="category-title">
                              UI, UX, Development
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>

                <Fade direction="up" triggerOnce>
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHoveringTwo(true)}
                    onMouseLeave={() => setIsHoveringTwo(false)}
                    data-w-id="51e18516-54b7-47d9-f48b-e9aafec796dc"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      opacity: 1,
                    }}
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="5d8a33a9-b39c-9873-681f-f7960fca259c"
                      className="work-wrapper-first"
                    >
                      <div className="circle-center">
                        <a
                          href="/project/colorful-journeys"
                          className="project-circle-text w-inline-block"
                        >
                          <div
                            style={{
                              left: cursorPos.x,
                              top: cursorPos.y,
                              position: "absolute",
                              display: isHoveringTwo ? "flex" : "none", // change here
                              color: "white", // change text color here
                              backgroundColor: "black", // change background color here
                            }}
                            className="view-project-icon"
                          >
                            <div>
                              View
                              <br />
                              Project
                            </div>
                          </div>
                        </a>
                        <img
                          src="https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c96af049d26cdc03c6f_work-2.jpg"
                          loading="eager"
                          alt=""
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 44vw, (max-width: 1439px) 43vw, 575px"
                          srcSet="https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c96af049d26cdc03c6f_work-2-p-500.jpg 500w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c96af049d26cdc03c6f_work-2-p-800.jpg 800w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c96af049d26cdc03c6f_work-2-p-1080.jpg 1080w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c96af049d26cdc03c6f_work-2-p-1600.jpg 1600w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7c96af049d26cdc03c6f_work-2.jpg 2000w"
                          className="work-photo-first"
                          
                        />
                      </div>
                      <div className="category-top-2"></div>
                      <div className="margin-20px">
                        <div className="vertical-flex">
                          <a
                            href="/project/colorful-journeys"
                            className="title-line-wrapper w-inline-block"
                          >
                            <h3 className="work-title-first">
                              Colorful Journeys
                            </h3>
                            <div className="line-overlay">
                              <div
                                className={`line-title ${
                                  isHoveringTwo ? "threeHover" : ""
                                }`}
                                // style={{
                                //   transform:
                                //     "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                //   transformStyle: "preserve-3d",
                                // }}
                              ></div>
                            </div>
                          </a>
                          <div>
                            <p className="category-title">
                              Font, User Interface
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>

                <Fade direction="up" triggerOnce>
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHoveringThree(true)}
                    onMouseLeave={() => setIsHoveringThree(false)}
                    data-w-id="51e18516-54b7-47d9-f48b-e9aafec796dc"
                    style={{
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      opacity: 1,
                    }}
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="5d8a33a9-b39c-9873-681f-f7960fca259c"
                      className="work-wrapper-first"
                    >
                      <div className="circle-center">
                        <a
                          href="/project/night-desert"
                          className="project-circle-text w-inline-block"
                        >
                          <div
                            style={{
                              left: cursorPos.x,
                              top: cursorPos.y,
                              position: "absolute",
                              display: isHoveringThree ? "flex" : "none", // change here
                              color: "white", // change text color here
                              backgroundColor: "black", // change background color here
                            }}
                            className="view-project-icon"
                          >
                            <div>
                              View
                              <br />
                              Project
                            </div>
                          </div>
                        </a>
                        <img
                          src="https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7e62d3768d39b72bc18c_work-2.jpg"
                          loading="eager"
                          alt=""
                          sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 44vw, (max-width: 1439px) 43vw, 575px"
                          srcSet="https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7e62d3768d39b72bc18c_work-2-p-500.jpg 500w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7e62d3768d39b72bc18c_work-2-p-800.jpg 800w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7e62d3768d39b72bc18c_work-2-p-1080.jpg 1080w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7e62d3768d39b72bc18c_work-2-p-1600.jpg 1600w, https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7e62d3768d39b72bc18c_work-2.jpg 2000w"
                          className="work-photo-first"
                          
                        />
                      </div>
                      <div className="category-top-2"></div>
                      <div className="margin-20px">
                        <div className="vertical-flex">
                          <a
                            href="/project/night-desert"
                            className="title-line-wrapper w-inline-block"
                          >
                            <h3 className="work-title-first">Night Desert</h3>
                            <div className="line-overlay">
                              <div
                                className={`line-title ${
                                  isHoveringThree ? "threeHover" : ""
                                }`}
                                // style={{
                                //   transform:
                                //     "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                //   transformStyle: "preserve-3d",
                                // }}
                              ></div>
                            </div>
                          </a>
                          <div>
                            <p className="category-title">
                              UI, UX, Development
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
        <div className="margin-150px">
          <Fade direction="left" triggerOnce>
            <h2
              data-w-id="2e7d3149-6175-a04d-9cec-33dcb6bfc247"
              className="title-tag big"
            >
              What they think
            </h2>
          </Fade>
          <div className="margin-40px">
            <Fade direction="up" triggerOnce>
              <div className="tesimonials-grid">
                <div
                  id="w-node-_2e7d3149-6175-a04d-9cec-33dcb6bfc24b-024da2b0"
                  data-w-id="2e7d3149-6175-a04d-9cec-33dcb6bfc24b"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                  className="step-box"
                >
                  <div className="testiomonials-photo"></div>
                  <div className="margin-20px">
                    <p>
                      "Agence is a groundbreaking Webflow template that
                      prioritizes fluid user interactions and enchanting website
                      aesthetics."
                    </p>
                  </div>
                  <div className="margin-20px">
                    <div className="role-name">
                      John Doe,{" "}
                      <span className="lighter-gray">CEO at Webflow</span>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_2e7d3149-6175-a04d-9cec-33dcb6bfc255-024da2b0"
                  data-w-id="2e7d3149-6175-a04d-9cec-33dcb6bfc255"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                  className="step-box"
                >
                  <div className="testiomonials-photo _2"></div>
                  <div className="margin-20px">
                    <p>
                      "Agence is a cutting-edge Webflow template focusing on
                      delivering frictionless user journeys and intriguing site
                      visuals."
                    </p>
                  </div>
                  <div className="margin-20px">
                    <div className="role-name">
                      John Doe,{" "}
                      <span className="lighter-gray">CEO at Webflow</span>
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_2e7d3149-6175-a04d-9cec-33dcb6bfc25f-024da2b0"
                  data-w-id="2e7d3149-6175-a04d-9cec-33dcb6bfc25f"
                  style={{
                    transform:
                      "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d",
                    opacity: 1,
                  }}
                  className="step-box"
                >
                  <div className="testiomonials-photo _3"></div>
                  <div className="margin-20px">
                    <p>
                      "Agence is an advanced Webflow template accentuating the
                      importance of seamless user navigation and alluring site
                      design."
                    </p>
                  </div>
                  <div className="margin-20px">
                    <div className="role-name">
                      John Doe,{" "}
                      <span className="lighter-gray">CEO at Webflow</span>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>

        <div className="margin-100px">
          <Fade direction="up" triggerOnce>
            <div className="max-w-width">
              <p>Let's make some magic together</p>
            </div>
            <div className="margin-30px">
              <div className="form-block w-form">
                <form
                  id="email-form"
                  name="email-form"
                  data-name="Email Form"
                  method="get"
                  className="form _2"
                  data-wf-page-id="64ce265ad4540bc2024da2b0"
                  data-wf-element-id="efdde3d1-bd95-54a7-3d50-d59b6fc7ed26"
                  aria-label="Email Form"
                >
                  <input
                    className="form-input w-input"
                    maxLength="256"
                    name="email"
                    data-name="Email"
                    placeholder="Enter your email..."
                    type="email"
                    id="email"
                    required
                  />
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button-subscribe subscribe w-button"
                    value="Get Started"
                  />
                  <label className="w-checkbox checkbox-field">
                    <div className="w-checkbox-input w-checkbox-input--inputType-custom spclCheck checkbox-email"></div>
                    <input
                      type="checkbox"
                      id="Checkbox"
                      name="Checkbox"
                      data-name="Checkbox"
                      required
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <p className="cookies-font check">
                      By signing up you agree to our{" "}
                      <a href="#" className="line-underline">
                        Terms <span className="other-font">&</span> Conditions
                      </a>
                      .
                    </p>
                  </label>
                </form>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="overlay-absolute top"></div>
      <div className="overlay-absolute"></div>
    </section>
  );
};

export default WorkSection;
