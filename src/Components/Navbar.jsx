import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import MagneticFramer from "./FramerMagnetic"


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (

<div className="navigation-wrapper">
      <div className="navigation-main">
        <div className="hide-social">
          <div className="social-wrapper">
            
            <a href="https://twitter.com/" target="_blank" className={`social-icon w-inline-block circle-outer ${isMenuOpen ? "hover-circle-white" : "hover-circle"}`}>
            <MagneticFramer>
              <img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce34713a5c03dcf22f9572_62bfacebook.png" loading="lazy" width="20" alt="" className="animation-image circle-center" />
              
              <div className="social-circle circle-inner"></div>
              </MagneticFramer>
            </a>
            
            <a href="https://twitter.com/" target="_blank" className={`social-icon w-inline-block circle-outer ${isMenuOpen ? "hover-circle-white" : "hover-circle"}`}>
            <MagneticFramer>
              <img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce347108e71a74f9f0678a_instagram.png" loading="lazy" width="20" alt="" className="animation-image circle-center" />
              <div className="social-circle circle-inner"></div>
              </MagneticFramer>
            </a>
            <a href="https://twitter.com/" target="_blank" className={`social-icon w-inline-block circle-outer ${isMenuOpen ? "hover-circle-white" : "hover-circle"}`}>
            <MagneticFramer>
              <img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce3471885579ba1beb4bd1_linkedin.png" loading="lazy" width="20" alt="" className="animation-image circle-center" />
              <div className="social-circle circle-inner"></div>
              </MagneticFramer>
            </a>
            <a href="https://twitter.com/" target="_blank" className={`social-icon w-inline-block circle-outer ${isMenuOpen ? "hover-circle-white" : "hover-circle"}`}>
            <MagneticFramer>
              <img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce347208e71a74f9f067eb_dribbble.png" loading="lazy" width="20" alt="" className="animation-image circle-center" />
              <div className="social-circle circle-inner"></div>
              </MagneticFramer>
            </a>
          </div>
        </div>
        <a id='logoId' href="#" className="w-inline-block">
          <img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce2fd0f05e28519a58cc67_logo.png" loading="lazy" alt="" className="logo" />
        </a>
        <div id='hamburgId'  onClick={toggleMenu} className={`hamburger-circle ${isMenuOpen ? "hover-circle-white" : "hover-circle"}`}
>
<MagneticFramer>
        {isMenuOpen ? (
            <div  className="menu-square" style={{ transform: 'translate3d(0.00108px, -0.00108px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
              <div className="hamburger-line first" style={{ transform: 'translate3d(0px, 8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(45deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}></div>
              <div className="hamburger-line second" style={{ transform: 'translate3d(0px, -8px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}></div>
            </div>
          ) : (
            <div className="menu-square">
              <div className="hamburger-line first"></div>
              <div className="hamburger-line second"></div>
            </div>
          )}
          <div className="circle-absolute hide"></div>
          </MagneticFramer>
        </div>
      </div>
      {isMenuOpen && (
      <div style={{display:"flex"}} className="menu-big">
        <div className="menu-content">
          <div>
            <div className="navigation-items">
              <a href="/" aria-current="page" className="navigation-link-move w-inline-block w--current">
                <Fade direction="up" triggerOnce delay={500}>
                <div className="text-gray">01</div>
                
                <div className="nav-text-wrapper _1">
                  <div className="text-full move-top">Home</div>
                  <div className="text-line move-top">Home</div>
                </div></Fade>
              </a>
              <a href="#" className="navigation-link-move w-inline-block">
                <Fade direction="up" triggerOnce delay={500}>
                <div className="text-gray">02</div>
                
                <div className="nav-text-wrapper _2">
                  <div className="text-full">Work</div>
                  <div className="text-line">work</div>
                </div></Fade>
              </a>
              <a href="/blog-1" className="navigation-link-move w-inline-block">
                <Fade direction="up" triggerOnce delay={500}>
                <div className="text-gray">03</div>
                
                <div className="nav-text-wrapper _3">
                  <div className="text-full">News</div>
                  <div className="text-line">News</div>
                </div></Fade>
              </a>
              <a href="/contact-1" className="navigation-link-move w-inline-block">
                <Fade direction="up" triggerOnce  delay={500}>
                <div className="text-gray">04</div>
                
                <div className="nav-text-wrapper _4">
                  <div className="text-full">Contact</div>
                  <div className="text-line">Contact</div>
                </div></Fade>
              </a>
            </div>
          </div>
        </div>
        
        <div className={`menu-background background-anime ${!isMenuOpen ? 'closeMenu' : ''}`}>
  {/* ... existing code ... */}
</div>

      </div>
      )}
    </div>
  );
}

export default Navbar;
