import React from "react";

import Slider from "react-slick";

const Testimonials = ({ classicHeader, darkTheme }) => {
  const reviews = [
    {
      name: "Jonathan Campos",
      position: "Chief Technology Officer & Vice President at Alto",
      src: "images/testimonial/client-sm-1.jpg",
      desc: "At Alto Candace worked on our driver experience team, focusing on how to make the lives of our operators and drivers easier every day. I was always impressed by her growth and focus on the quality of her work. What impressed me the most was how, even as a newer developer, she was able to transfer between different languages and projects so smoothly to make a singular amazing product. It is a true skill she has and something that will be an asset anywhere she works.",
      rating: 5,
    },
    {
      name: "Caitlin Elliot",
      position: "Application Engineer at Alto",
      src: "images/testimonial/client-sm-3.jpg",
      desc: "Candace was such a joy to work with! Her attention to detail and commitment to quality user experience was always an asset at Alto and will be an asset to her in any future endeavors. Candace and I worked on the same team at Alto, and we spent many afternoons pair coding and solving problems together. She is a complex thinker, and I always appreciate her perspective.",
      rating: 5,
    },
    {
      name: "Anonymous",
      position: "Former Alto Coworker Review Feedback",
      src: "images/testimonial/client-sm-2.jpg",
      desc: "Candace has done a great job growing into her position at Alto with the driver experience team. She's thoughtful in her work, keeps to her commitments, and always keeps her users in mind when building experiences. She's always focused on the solution and how she can continue to bring value to the team",
      rating: 5,
    },
    {
      name: "Anonymous",
      position: "Former Alto Coworker Review Feedback",
      src: "images/testimonial/client-sm-4.jpg",
      desc: "Candace jumped right in to the driver team and has been an asset from day 1. Despite being thrown into a project in the middle, Candace did a great job digging into the work and advocating for herself when she needed support. Since her initial days at Alto, I have seen Candace grow in her confidence as a developer and continue to take initiative in proposing enhancements for our applications, both at the code level and philosophically. Candace is a dedicated, hard worker, and I've enjoyed having her at the company.",
      rating: 5,
    },
  ];

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <section
      id="testimonial"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Testimonial
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            The Buzz
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}

        <Slider {...settings}>
          {reviews.length > 0 &&
            reviews.map((value, index) => (
              <div className="item" key={index}>
                <div
                  className={
                    " rounded p-5 " + (darkTheme ? "bg-dark" : "bg-light")
                  }
                >
                  <div className="d-flex align-items-center mt-auto mb-4">
                    {/* <img
                      className="img-fluid rounded-circle border d-inline-block w-auto"
                      src={value.src}
                      alt=""
                    /> */}
                    <p className="ms-3 mb-0">
                      <strong
                        className={
                          "d-block fw-600 " +
                          (darkTheme ? "text-white" : "text-dark")
                        }
                      >
                        {value.name}
                      </strong>
                      <span className="text-muted fw-500">
                        {" "}
                        {value.position}{" "}
                      </span>
                    </p>
                  </div>
                  <p
                    className={
                      " fw-500 mb-4 " + (darkTheme ? "text-white" : "text-dark")
                    }
                  >
                    “{value.desc}”
                  </p>
                  <span className="text-2">
                    {[...Array(value.rating)].map((value, i) => (
                      <i className="fas fa-star text-warning" key={i} />
                    ))}
                  </span>
                </div>
              </div>
            ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
