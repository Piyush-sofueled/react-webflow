import React, { useState, useEffect,useRef ,useLayoutEffect} from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import { useInView } from 'react-intersection-observer';
import { Fade } from 'react-awesome-reveal';
import NavbarDrawer from "./NavbarDrawer";

const LandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef();

  
    const [ref, inView] = useInView({
      triggerOnce: false, // Change it to true if you want the observer to trigger only once
      threshold: 0,
    });
  
    useEffect(() => {
      console.log(`Footer is ${inView ? 'visible' : 'not visible'}`);
      setIsFooterVisible(inView)
    }, [inView]);
  
  
  

  useEffect(() => {
    // Simulate a delay to showcase the loader
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed

    // Clear the timer on component unmount
    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="page-loading">
          <div className="numbers on-preloader">
            <div className="all-numbers _1">
              {[...Array(10)].map((_, index) => (
                <div key={index} className="number-digit other-color">
                  {index}
                </div>
              ))}
            </div>
            <div className="all-numbers _2">
              {[...Array(11)].map(
                (
                  _,
                  index // Changed the array length to 11
                ) => (
                  <div key={index} className="number-digit other-color">
                    {index % 10}{" "}
                    {/* Modulo operation ensures it cycles from 0 to 9 */}
                  </div>
                )
              )}
            </div>
            <div className="all-numbers _3">
              {[...Array(11)].map(
                (
                  _,
                  index // Changed the array length to 11
                ) => (
                  <div key={index} className="number-digit other-color">
                    {index % 10}{" "}
                    {/* Modulo operation ensures it cycles from 0 to 9 */}
                  </div>
                )
              )}
            </div>

            <div className="all-numbers">
              <div className="number-digit other-color light">%</div>
            </div>
          </div>
          
          <div className="loading-overlay"></div>
        </div>
      ) : (
        <>
        <div style={{backgroundColor:"black"}}>
        <div className={`page-wrapper ${isFooterVisible ? 'page-wrapper-anim' : ''}`} style={{backgroundColor:"white"}}>
          <Navbar />
          <HeroSection />
          <AboutSection />
          {/* <NavbarDrawer /> */}
          <WorkSection />
          <ContactSection />
          </div>

          <div ref={ref}>
        <Footer />
      </div>
          </div>
        </>
      )}
    </div>
  );
};

export default LandingPage;
