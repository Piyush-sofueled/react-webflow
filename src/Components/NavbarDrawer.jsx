import React,{useState} from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const NavbarDrawer = ({ open, onClose }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };
  return (
    
                  <div
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    data-w-id="51e18516-54b7-47d9-f48b-e9aafec796dc"
                    role="listitem"
                    className="w-dyn-item"
                  >
                    <div
                      data-w-id="5d8a33a9-b39c-9873-681f-f7960fca259c"
                      className="work-wrapper-first"
                    >
                      <div className="circle-center">
                        {/* Replace the anchor tag with a div */}
                        <div
                          className="project-circle-text w-inline-block"
                          style={{
                            transform: "translate3d(0.04px, 0.0264px, 0px) scale3d(0, 0, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        >
                          <div
                            style={{
                              left: cursorPos.x,
                              top: cursorPos.y,
                              display: isHovering ? 'block' : 'none',
                              color: 'white',
                              backgroundColor: 'black',
                            }}
                            className="view-project-icon"
                          >
                            <div>
                              View
                              <br />
                              Project
                            </div>
                          </div>
                        </div>
                        <img
                          src="https://assets-global.website-files.com/64ce265ad4540bc2024da2d5/64cf7adbd3768d39b729094d_work-1.jpg"
                          loading="eager"
                          alt=""
                          className="work-photo-first"
                          style={{
                            willChange: "transform",
                            transform: "translate3d(0px, 9.9216px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                            transformStyle: "preserve-3d",
                          }}
                        />
                      </div>
                      <div className="category-top-2"></div>
                      <div className="margin-20px">
                        <div className="vertical-flex">
                          <div className="title-line-wrapper w-inline-block">
                            <h3 className="work-title-first">Dreamy Visions</h3>
                            <div className="line-overlay">
                              <div
                                className="line-title"
                                style={{
                                  transform: "translate3d(-100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                  transformStyle: "preserve-3d",
                                }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <p className="category-title">Logo, User Interface</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
  );
}

export default NavbarDrawer;
