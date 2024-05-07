import React from 'react';
import { Fade } from 'react-awesome-reveal';

const AboutSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="statistics-grid">
          {/* Statistics Blocks */}
          <Fade direction="up" triggerOnce duration={2000} delay={100}>
            <div className="statistics-block third aboutCard">
              <div className="statistic-number">100+<br /></div>
              <p className="paragraph-white">Happy clients<br /></p>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce duration={2000} delay={100}>
            <div className="statistics-block  aboutCard" style={{ opacity: 1 }}>
              <div className="statistic-number">14<br /></div>
              <p className="paragraph-white">Hero's member</p>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce duration={2000} delay={100}>
            <div className="statistics-block second  aboutCard">
              <div className="statistic-number">340+<br /></div>
              <p className="paragraph-white">Project done</p>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce duration={2000} delay={100}>
            <div className="statistics-block fourth  aboutCard">
              <div className="statistic-number">8<br /></div>
              <p className="paragraph-white">Years experience</p>
            </div>
          </Fade>
        </div>

        {/* About Us */}
        <div className="margin-150px">
      <div className="main-grid">
        <Fade direction="up" triggerOnce duration={2000} delay={100}>
          <div>
            <div className="flex-tag aboutCardOne">
              <div className="title-tag big">About us</div>
            </div>
          </div>
        </Fade>
        <Fade direction="up" triggerOnce duration={2000} delay={100}>
          <div>
            <p className="subhead right aboutCardOne">
              Doana and John Smith, the visionary founders behind Agencē, were struck by a realization — the world was lacking creativity; an absence of design aesthetics, a play — it — safe approach by brands, and a dire need for innovation and beauty. <br /><br />
              Thankfully, armed with their experience from the world of independent film, they were ready to take on this challenge with a tenacious, can — do mindset, celebrating and amplifying the uniqueness of each narrative. This ethos now propels Agencē forward as a design studio dedicated to creativity and individuality in a world craving its presence.
            </p>
          </div>
        </Fade>
      </div>
    </div>

        {/* We Help Startups Section */}
        <div className="margin-100px">
      <div>
        <Fade direction="left"   triggerOnce duration={2000} delay={100}>
          <h2 className="title-tag big workOne">We help startup's build their websites</h2>
        </Fade>
        <div className="margin-40px">
          <Fade direction="right"  triggerOnce duration={2000} delay={100}>
            <div className="grid-3-columns workTwo">
              {/* Service Blocks */}
              <div className="block-gray">
                <div className="service-circle"><img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce5a1c6fdedd41e7bc0654_icons8-sign-up-256%20(3).png" loading="lazy" width="45" alt="" className="image-invert" /></div>
                <div><p><span className="make-gray">Beautifully Designed.</span> Discover our exceptional services, where creativity meets expertise.</p></div>
              </div>
              <div className="block-gray">
                <div className="service-circle"><img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce5a1c6fdedd41e7bc0658_icons8-smartphone-tablet-256%20(1).png" loading="lazy" width="41" alt="" className="image-invert" /></div>
                <div><p><span className="make-gray">Fully Responsive.</span> Whether on desktop, tablet, or mobile, we ensure your website adapts flawlessly.</p></div>
              </div>
              <div className="block-gray">
                <div className="service-circle"><img src="https://assets-global.website-files.com/64ce265ad4540bc2024da2cf/64ce5a1c6fdedd41e7bc0656_icons8-user-male-256.png" loading="lazy" width="50" alt="" className="image-invert" /></div>
                <div><p><span className="make-gray">Friendly Support.</span> Our dedicated team is always here to assist you with a warm and welcoming approach.</p></div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
      </div>
    </section>
  )
}
 
export default AboutSection