import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero-title-flex">
          <Fade direction="left" triggerOnce>
            <h1 className="display-1 animate-digital">Digital<br /></h1>
          </Fade>
          <Fade direction="right" triggerOnce>
            <h1 className="display-1 with-line animate-design">Design<br /></h1>
          </Fade>
          <Fade direction="left" triggerOnce>
            <h1 className="display-1 _3 animate-agence">Agencē<br /></h1>
          </Fade>
        </div>

        <div className="margin-40px">
          <div className="we-are-grid">
            <Fade direction="right" triggerOnce>
              <div>
                <p data-w-id="1bb98a3f-7440-0562-df9e-2f58af4151a5"  className="subhead  animate-subhead">
                  Optimize your digital brand with Agencē, a Webflow template that integrates sophisticated design.<strong><br /></strong>
                </p>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce>
              <div data-w-id="1bb98a3f-7440-0562-df9e-2f58af4151a9" className="margin-40px animate-margin">
                <a href="#" className="button-liner w-inline-block">
                  <div className="hover-div">
                    <div>Let's Talk</div>
                    <div className="button-line">
                      <div className="button-line-absolute animate-button-line" style={{ width: "0%",height:"1px" }}></div>
                    </div>
                  </div>
                </a>
              </div>
            </Fade>
          </div>
        </div>

      </div>
      <div data-w-id="da5d6b68-9653-3048-8928-3f71741844f8" style={{ opacity: 1, transform: "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)", transformStyle: "preserve-3d" }} className="contact-absolute">
        <a href="#" className="contact-link w-inline-block">
          <img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce2bfd9c11711e177424ee_play.png" loading="lazy" width="100" sizes="(max-width: 479px) 42vw, (max-width: 1279px) 82px, (max-width: 1439px) 6vw, 82px" alt="" className="rotate-image platBtn"  />
          <img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce2c467605dae74d7a5f62_play_arrow_FILL1_wght400_GRAD0_opsz48%20(1).svg" loading="lazy" alt="" className="play-icon" />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
