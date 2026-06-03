import MainVid from "../../assets/images/home-vid.mp4";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../../assets/images/logo3.png";
import Queue from "../../assets/images/queue.jpg";
import Primary from "../../assets/images/primary.jpg";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { OurWords } from "../../components/OurWords/OurWords";
import FBSocials from "./FBSocials";
import TwitterHandle from "./TwitterHandle/TwitterHandle";
import YouTube from "./Youtube";
import { MdGroups } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbRulerMeasure } from "react-icons/tb";
import { FaChalkboardTeacher } from "react-icons/fa";
import "./home.scss";
import PageLink from "./pageLink/PageLink";
import News from "../../components/News/News";
import { MissionStatement } from "./Mission/MissionStatement";
import { CoreValues } from "./CoreValues/CoreValues";
import { EntryPoint } from "./EntryPoint/EntryPoint";
import { FaArrowRightLong } from "react-icons/fa6";

const colors = [
  "rgba(0, 0, 0, 0.8)",
  "rgba(128, 128, 128, 0.9)",
  "rgba(43,52,97,1)",
  "rgb(31,39,28)",
  "rgba(2, 16, 112, 0.5)",
];
export const Home = () => {
  const [bgColor, setBgColor] = useState(colors[0]);
  const [index, setIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [inViewParagraph, setInViewParagraph] = useState(false); // Track if the paragraph inside heading-container is in view
  const paragraphRef = useRef(null); // Reference for the paragraph
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("color-section");
      if (!section) return;

      const { top, height } = section.getBoundingClientRect();
      const scrollPercentage = Math.min(
        Math.max((window.innerHeight - top) / height, 0),
        1,
      );

      // Change color more frequently
      const threshold = 0.2; // Faster color change interval
      const newIndex = Math.min(
        Math.floor(scrollPercentage / threshold),
        colors.length - 1,
      );

      if (newIndex !== index) {
        setIndex(newIndex);
        setBgColor(colors[newIndex]);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [index]);

  useEffect(() => {
    const handleScroll = () => {
      // if (textRef.current) {
      //   const rect = textRef.current.getBoundingClientRect();
      //   const windowHeight = window.innerHeight;
      //   if (rect.top <= windowHeight && rect.bottom >= 0) {
      //     setInViewText(true);
      //   } else {
      //     setInViewText(false);
      //   }
      // }
      if (paragraphRef.current) {
        const rect = paragraphRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewParagraph(true);
        } else {
          setInViewParagraph(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="home-page vid-home-div">
        <section className="hero-section home-outer">
          <video
            className="video"
            width="100%"
            autoPlay
            loop
            muted
            playsInline
            controls
            src={MainVid}
          />
        </section>

        {/* REAL ELEMENT */}
        <section className={`mission-section ${scrolled ? "slide-down" : ""}`}>
          <h1>
            A SCHOOL <br />
            LIKE <span>NO OTHER</span>
          </h1>
        </section>
        <div className="welcome-div">
          <div className="col-md-10 offset-md-1 d-md-flex">
            <div className="col-md-6">
              <h1>
                Wel<span>come</span> to Everon School
              </h1>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
              <Link to={"/"}>
                Read More <FaArrowRightLong />
              </Link>{" "}
              <Link to={"/"}>
                Apply <FaArrowRightLong />
              </Link>
            </div>
            <div className="col-md-5 offset-md-1">
              <img src={Queue} alt="Avatar" class="image" width="50%" />
            </div>
          </div>
        </div>

        <MissionStatement />
        <div className="who-we-are " ref={paragraphRef}>
          <h1 className="offset-md-2">WHO WE ARE</h1>

          <div
            className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3 col-md-12"
            style={{
              transform: inViewParagraph
                ? "translateY(0)"
                : "translateY(100px)",
              opacity: inViewParagraph ? 1 : 0,
              transition: "transform 1s ease, opacity 1s ease",
            }}
          >
            {" "}
            <div className="col">
              <PageLink
                title="About Us"
                img={Queue}
                pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
              />
            </div>{" "}
            <div className="col">
              <PageLink
                title="School Policies"
                img={Queue}
                pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
              />
            </div>{" "}
            <div className="col">
              <PageLink
                title="Our History"
                img={Queue}
                pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
              />
            </div>{" "}
            <div className="col">
              <PageLink
                title="Why Everon Schools?"
                img={Queue}
                pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
              />
            </div>{" "}
            <div className="col">
              <PageLink
                title="Important Dates"
                img={Queue}
                pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rest-of-the-contents ">
        <div
          className="contents h-screen"
          id="color-section"
          style={{
            backgroundColor: bgColor,
            transition: "background-color 2s ease-in-out", // Slower fade transition
          }}
        >
          <h1 className="offset-md-2 entry">
            Our En<span>try</span> Points
          </h1>
          <div className="entry col-md-8 offset-md-2 d-md-flex row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
            <EntryPoint
              img={Primary}
              level="EYFS"
              summary=" School does not discriminate on the basis of race, color,
                      religion, sex, gender, sexual orientation, national
                      origin, ancestry, age, marital status"
            />{" "}
            <EntryPoint
              img={Primary}
              level="PRIMARY"
              summary=" School does not discriminate on the basis of race, color,
                      religion, sex, gender, sexual orientation, national
                      origin, ancestry, age, marital status"
            />{" "}
            <EntryPoint
              img={Primary}
              level="SECONDARY"
              summary=" School does not discriminate on the basis of race, color,
                      religion, sex, gender, sexual orientation, national
                      origin, ancestry, age, marital status"
            />
          </div>

          <CoreValues />
          <div className="stats-container">
            <div className="statistics-div"></div>
            <div className="stats-overlay">
              <center>
                <h2>At a Glance</h2>
              </center>
              <div className="col-md-12 offset-md row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div className="col">
                  <center>
                    <div className=" stats">
                      <span className="icon">
                        {" "}
                        <MdGroups />
                      </span>

                      <h1>
                        <CountUp
                          start={0}
                          end={10}
                          duration={2}
                          decimal=""
                          prefix=" "
                          suffix="+"
                          enableScrollSpy={true}
                        />
                      </h1>
                      <p>School Clubs</p>
                    </div>{" "}
                  </center>
                </div>{" "}
                <div className="col">
                  <center>
                    <div className=" stats">
                      <span className="icon">
                        <PiStudentBold />
                      </span>
                      <h1>
                        <CountUp
                          start={0}
                          end={5000}
                          duration={2}
                          decimal=""
                          prefix=" "
                          suffix="+"
                          enableScrollSpy={true}
                        />
                      </h1>
                      <p>Students </p>
                    </div>
                  </center>
                </div>
                <div className="col">
                  <center>
                    <div className=" stats">
                      <span className="icon">
                        <TbRulerMeasure />
                      </span>
                      <h1>
                        {" "}
                        <CountUp
                          start={0}
                          end={10}
                          duration={2}
                          decimal=""
                          prefix=" "
                          suffix=":1"
                          enableScrollSpy={true}
                        />
                      </h1>
                      <p>Student-Teacher Ratio</p>
                    </div>
                  </center>
                </div>{" "}
                <div className="col">
                  <center>
                    <div className=" stats">
                      <span className="icon">
                        <HiBuildingOffice2 />
                      </span>
                      <h1>
                        {" "}
                        <CountUp
                          start={0}
                          end={15}
                          duration={2}
                          decimal=""
                          prefix=" "
                          suffix="+"
                          enableScrollSpy={true}
                        />
                      </h1>
                      <p>School Facilities</p>
                    </div>
                  </center>
                </div>
                <div className="col">
                  <center>
                    <div className="stats">
                      <span className="icon">
                        <FaChalkboardTeacher />
                      </span>
                      <h1>
                        {" "}
                        <CountUp
                          start={0}
                          end={50}
                          duration={2}
                          decimal=""
                          prefix=" "
                          suffix="+"
                          enableScrollSpy={true}
                        />
                      </h1>
                      <p>Staff Members</p>
                    </div>{" "}
                  </center>
                </div>
              </div>
              <div className="d-flex col-md-10 offset-md-1 see-div">
                <h6>See for yourself</h6>
                <div className="col-md-8 col-0">
                  <hr />
                </div>
                <button>INQUIRE</button>
                <button>TAKE A TOUR</button>
              </div>
            </div>
          </div>

          <div className="our-words">
            <OurWords />
          </div>
          <div className="col-md-8 offset-md-2 story-section">
            <center>
              <h1>
                Latest <span>Upda</span>tes
              </h1>
            </center>
            <div className="testimonials">
              <News />
            </div>
          </div>

          <div
            style={{ background: "#d4d6e3" }}
            className="social-media-div mobile-pad"
          >
            <center>
              {" "}
              <h1>
                Our Social <span>Media Pages</span>
              </h1>
            </center>
            <div className="col-md-10 offset-md-1 d-md-flex">
              <div className="col-md-4">
                <FBSocials />
              </div>
              <div className="col-md-4">
                <TwitterHandle />
              </div>{" "}
              <div className="col-md-4">
                <YouTube />
              </div>
            </div>
          </div>

          <center>
            <div className="cta-section col-md-5">
              <h1>
                Are you ready to see how <span>your story</span> unfolds?
              </h1>
              <p>LET'S MAKE IT HAPPEN'</p>
              <Link>Take a Tour</Link>
              <Link>Contact Us</Link>
              <Link>Apply</Link>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};
