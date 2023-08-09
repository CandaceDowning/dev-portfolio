import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            Get To Know Me
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Candace Downing,</span> a Web
              Developer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              With a Bachelor's of Fine Arts, an Associates of Science, and an
              American Board Of Opticianry certification, it is safe to say that I
              love to learn! My fine arts background leads me to be enthusiastic
              about front-end and design work, but I will always jump on the
              opportunity to learn and do new things.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              I am currently seeking full time employment as a front end developer in React, Angular, Vue, or Wordpress.
              I consider myself a designers developer, and I love collaborating with design teams to ensure their vision is 
              met without breaking the developer budget. I am passionate about ensuring that the end product is user friendly 
              and a joy to use. Valued for my attention to detail, commitment to company values, collaborative and inquisitive 
              nature, and empathy with the end user.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              I am also currently taking on contract projects to create budget friendly websites for small business using Wordpress CMS. 
              I enjoy working one on one with clients from design to launch to help them see their passion come to life and find their customer base.
              From one page portfolio sites, to integrated ecommerce, I can help you determine the features you need to boost your online presence.

            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Candace Downing
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:chat@simone.com">candacedowning@gmail.com</a>
                </li>
                <li>
                  <span className="fw-600 me-2">Age:</span>Is just a number
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Denton,
                  Texas
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download Resume
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
        {/* projects rewards counting start */}
        <div
          className={
            "brands-grid separator-border mt-5 " +
            (darkTheme ? "separator-border-light" : "")
          }
        >
          {/* added style to account for mobile centering */}
          <div className="row justify-content-center">
            <div className="col-6 col-md-4">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>4</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Years Experiance
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>5</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Happy Clients
                </p>
              </div>
            </div>
            <div className="col-6 col-md-4">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>20</span>+
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Projects Done
                </p>
              </div>
            </div>
            {/* <div className="col-6 col-md-3">
              <div className="featured-box text-center">
                <h4
                  className={
                    "text-12  mb-0 " +
                    (darkTheme ? "text-white-50" : "text-muted")
                  }
                >
                  <span>38</span>
                </h4>
                <p className={"mb-0 " + (darkTheme ? "text-light" : "")}>
                  Get Awards
                </p>
              </div>
            </div> */}
          </div>
        </div>
        {/* projects rewards counting end */}
      </div>
    </section>
  );
};

export default AboutUs;
