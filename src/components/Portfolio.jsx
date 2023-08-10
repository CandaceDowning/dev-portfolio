import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Desing",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "DFM Driveways and Renovations",
      projectInfo:
        "DFM Driveways and Remodels was created for a new construction company here in North Texas. After consulting with the clients, I developed a strategy to create a cost effective solution that would get a site up and running as quickly as possible without looking like a budget product. After some research I found a prebuilt Wordpress theme that was in their cost range, and began digging into the default elements of the theme. Taking screenshots from the demo site, I pulled every section into Figma and arranged them to suit our needs. Three layout options were presented, and a selection was made in the first round. While the theme came with many assets, the client still needed the creation of a logo, and some management and touching up of provided images. Copy was created from the client provided mission and vision statements they had previously drafted, and modified to maximize SEO potential and meet layout demands. This product has not yet launched, and is a work in progress, with just the final touches on copy and selection of a logo left to go. The site currently has a ‘coming soon’ splash page active, but depending on client participation the site should launch Sept 2023. Beyond launch the client has expressed interest in expanding the site to include a service area map, a portfolio of previous projects, integrated estimate generator, ecommerce, social media integration, and a homeowner educational blog.",
      client: "DFM Driveways and Remodels",
      technologies: "Wordpress, Php, HTML, CSS, WPBakery",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "dfmdrivewaysandremodels.com/",
        link: "https://dfmdrivewaysandremodels.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/dfm/dfm-logo.png",
      sliderImages: [
        "images/projects/dfm/dfm-hero.png",
        "images/projects/dfm/dfm-services.png",
        "images/projects/dfm/dfm-about.png",
      ],
      categories: [filters.BRAND],
    },    
    {
      title: "Kephir Coffee Roasters",
      projectInfo:
        "Kephir coffee was designed to be a budget conscious  one page Wordpress and Woocommerce landing page to allow a small roastery in Ireland to sell their coffee online. In the initial stages of consulting the client stated that they wanted something clean and elegant and provided a logo they had already created. Using this logo I created a mood board to share with the client and ensure I was on the right track. Three final designs were presented via Figma, and the selection was made in the first round of presentations. Most assets were provided by the client, but I did some design work to create variations of the logo, and some decorative elements. The main challenge of this project was reappropriating the Woocommerce functionality to create product cards that could add items to the cart without refreshing the page. This required heavily customizing the Woocommerce functionality using JQuery and Ajax, and customization of the default Woocommerce theming. Bootstrap allowed for the quick development of a sleek layout, and reusable CSS class names were created for colors, and decorative elements. In addition to the one page shop/landing page, auxilliary pages were created to showcase the farms that provide the beans being roasted at Kephir using advanced custom fields so the client can edit and publish as they need.",
      client: "Kephir Coffee Roasters",
      technologies: "Wordpress, Woocommerce, Php, Javascript, JQuery, Bootstrap, css",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "kephircoffeeroasters.com/",
        link: "https://kephircoffeeroasters.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/kephir/kephir-logo.png",
      sliderImages: [
        "images/projects/kephir/kephir-hero.png",
        "images/projects/kephir/kephir-shop.png",
        "images/projects/kephir/kephir-footer.png",
        "images/projects/kephir/kephir-about.png",
        "images/projects/kephir/kephir-contact.png",
        "images/projects/kephir/kephir-cart.png",
        "images/projects/kephir/kephir-checkout.png",
      ],
      categories: [filters.BRAND],
    },

    {
      title: "Eatzis Market and Bakery",
      projectInfo:
      "A Square 205 product. This project entailed creating a revamped Wordpress marketing site using Woocommerce to create navigable menus that link to the integrated React based online ordering app. Eatzi's required a unique solution to fulfill their menu requirements behind the scenes. Special product types and custom metadata allow for the building of 'build your own' items by the customers, allowing for upcharges and modifications. Each of Eatzi's venues within the store were recreated as categories and a custom server with a Bixilon printing system was created to route tickets to print at the appropriate venues, in addition to a 'master' printout for the employees collecting the food from each venue to put orders together. To satisfy Eatzi's day to day business needs, custom dashboards were built to allow easy access to viewing orders (with time sensitive warnings), revenue reports, and a business logic dashboard that allows for updating hours of operation, triggering banners for announcements and specials, adjust peak hours and prep time estimates, set products as out of stock, disable delivery or pickup, and some settings related to their partnership with the Olo api. To achieve a seamless and easy ordering user experience, a React app was nested into the Wordpress installation, and the Wordpress and Woocommerce APIs were used to send information between the servers and the Wordpress installation. The Wordpress theme was custom built accoriding to the designers mockups with an eye toward a clean and reusable styling framework, while the React app utilizes styled components with a forward look to easy creation of a mobile app.",
      client: "Eatzi's",
      technologies: "Wordpress, Woocommerce, React, Wordpress API, Woocommerce API, HTML, Php, Javascript, JQuery, Bootstrap, Sass, styled components",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "eatzis.com/",
        link: "https://eatzis.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/eatzis/eatzis-logo.png",
      sliderImages: [
        "images/projects/eatzis/eatzis-hero.png",
        "images/projects/eatzis/eatzis-nav.png",
        "images/projects/eatzis/eatzis-location.png",
        "images/projects/eatzis/eatzis-type.png",
        "images/projects/eatzis/eatzis-menu.png",
        "images/projects/eatzis/eatzis-byo.png",
        "images/projects/eatzis/eatzis-cart.png",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Lily of the Desert",
      projectInfo:
        "A Square 205 product. A much needed update to Lily of the Desert's marketing strategy, this site was designed and developed on a very strict and accelerated timeline at the clients request. Its aim was to bring all of their previous marketing efforts under one roof to attain consistency of look and voice. The custom Wordpress theme was built to the designers mockups, with many adjustments after client feedback, and an organized styling framework using Bootstrap and Sass was created to allow for easy and quick updates to keep the site fresh. Email marketing, social media sharing, and advanced coupons flesh out the majority of the marketing efforts the site provides, with the ability to schedule and deploy flash sales and long term deals. Woocommerce and shipping plugins were integrated to allow sales through the site and make custom shipping calculations due to the weight of their products. ",
      client: "Lily of the Desert",
      technologies: "Wordpress, Woocommerce, Express, digital ocean, Olo Api, Worldpay Api, HTML, Php, Javascript, JQuery, Bootstrap, Sass",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "lilyofthedesert.com/",
        link: "https://lilyofthedesert.com/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/lily/lily-logo.png",
      sliderImages: [
        "images/projects/lily/lily-hero.png",
        "images/projects/lily/lily-shop.png",
        "images/projects/lily/lily-footer.png",
        "images/projects/lily/lily-aloesorb.png",
        "images/projects/lily/lily-certs.png",
        "images/projects/lily/lily-history.png",
        "images/projects/lily/lily-studies.png",
      ],
      categories: [filters.PHOTOS],
    },
    {
      title: "Chroma Glow",
      projectInfo:
        "A student solo project. Chroma-Glow is an educational arcade simulator with a science fiction theme that was personally developed over three weeks. It includes mini games and storyline elements to encourage continued learning and maintain interest in the subject matter. Won 'Best UI' in my DevMountain cohort.",
      client: "Student Solo Project",
      technologies: "React, Express, Heroku, Node, SCSS, Redux, bcrypt, Postgress, Redux, HTML, CSS, Javascript",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "Github",
        link: "https://github.com/CandaceDowning/chroma-glow",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/chromaglow/chroma-logo.jpg",
      sliderImages: [
        "images/projects/chromaglow/landing.jpg",
        "images/projects/chromaglow/command-console.jpg",
        "images/projects/chromaglow/chart.jpg",
        "images/projects/chromaglow/email-body.jpg",
        "images/projects/chromaglow/quiz.jpg",
        "images/projects/chromaglow/self-destruct.jpg",
      ],
      categories: [filters.BRAND, filters.PHOTOS],
    },
    {
      title: "Flavor Savor",
      projectInfo:
        "A student grop project. Flavor-Savors is a full stack application used to build meal plans from a database of user input recipes, as well as a forum for cooking related topics. Firebase auth was used for access to registered user restricted features such as inputing recipes, maintaining favorites list, and posting to the forum. Data flow system included planning of 7 days of meals, four meals per day, and supports multiple recipes for each meal. The majority of my work was managing the workflow and styling the site, however, all members worked on all elements to some extent.",
      client: "Student Group Project",
      technologies: "React, Express, Heroku, Node, SCSS, Redux, bcrypt, PostgreSQL, Redux, HTML, CSS, Javascript",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "Github",
        link: "https://github.com/flavor-savors/flavor-savors",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/flavor/flavor-savor-logo.jpg",
      sliderImages: [
        "images/projects/flavor/landing-page.jpg",
        "images/projects/flavor/browse.png",
        "images/projects/flavor/forum.png",
        "images/projects/flavor/large-recipe.png",
        "images/projects/flavor/plan.png",
        "images/projects/flavor/profile.png",
      ],
      categories: [filters.DESIGN],
    },
    {
      title: "Rainbow Gallery",
      projectInfo:
        "A student solo project. Rainbow-Gallery is a simple web application that utilizes the Unsplash.com API, and was my first student project. It was created in order to learn full CRUD functionality, and therefore does not utilize a database. The temporary nature of the information was utilized in concept development to make a comparison to the end product and the ephemeral nature of naturally occuring rainbows. The user can click colored buttons and a call is made to unsplash and a randomizing algorithm pulls one image from the results to display. Users can then save the current image by clicking the rainbow button. The images are then tagged with the color used for the query and stored in the server. In the gallery view the user has the ability to edit the color tag and delete the images.",
      client: "Student Solo Project",
      technologies: "iReact, Axios, Express, HTML, Javascript, CSS",
      industry: "Art & Design",
      date: "July 16, 2019",
      url: {
        name: "Github",
        link: "https://github.com/CandaceDowning/rainbow-gallery",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/rainbow/rainbow-logo.png",
      sliderImages: [
        "images/projects/rainbow/gallery.png",
        "images/projects/rainbow/red.png",
        "images/projects/rainbow/orange.png",
        "images/projects/rainbow/yellow.png",
        "images/projects/rainbow/blue.png",
        "images/projects/rainbow/green.png",
        "images/projects/rainbow/purple.png",
        
      ],
      categories: [filters.BRAND],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          {/* <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul> */}
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            {/* <span className="text-light">Category</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
