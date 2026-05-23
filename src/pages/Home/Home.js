import MainVid from "../../assets/images/home-vid.mp4";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/logo2.jpeg";
import Queue from "../../assets/images/queue.jpg";
import Primary from "../../assets/images/primary.jpg";
import { Link } from "react-router-dom";

import "./home.scss";
import PageLink from "./pageLink/PageLink";
import News from "../../components/News/News";
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
              <h1>Welcome to Everon School</h1>
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
              <Link to={"/"}>Read More</Link> <Link to={"/"}>Apply</Link>
            </div>
            <div className="col-md-5 offset-md-1">
              <img src={Queue} alt="Avatar" class="image" width="50%" />
            </div>
          </div>
        </div>

        <div class="mission-div">
          <div className="col-md-6 offset-md-3">
            {" "}
            <img src={Logo} alt="Avatar" class="image" width="50%" />
          </div>
          <div class="overlay">
            <div class="text">
              <h1>
                We Have One <span>Mission</span>
                <p>
                  School does not discriminate on the basis of race, color,
                  religion, sex, gender, sexual orientation, national origin,
                  ancestry, age, marital status
                </p>
              </h1>
            </div>
          </div>
        </div>
        <div className="who-we-are row row-cols-2 row-cols-lg-5 g-2 g-lg-3 col-md-12">
          <div className="col">
            <PageLink
              title="About Us"
              img={Queue}
              pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
            />
          </div>{" "}
          <div className="col">
            <PageLink
              title="About Us"
              img={Queue}
              pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
            />
          </div>{" "}
          <div className="col">
            <PageLink
              title="About Us"
              img={Queue}
              pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
            />
          </div>{" "}
          <div className="col">
            <PageLink
              title="About Us"
              img={Queue}
              pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
            />
          </div>{" "}
          <div className="col">
            <PageLink
              title="About Us"
              img={Queue}
              pageSummary="When learning is fueled by each child’s innate creativity and capacity for wonder, education becomes a life-changing experience. Children who are encouraged to chart their own learning journeys as they explore the world around them grow into dynamic thinkers, creative collaborators, and motivated learners who follow "
            />
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
          <h1 className="offset-md-2">Our Entry Points</h1>
          <div className="entry col-md-8 offset-md-2 d-md-flex row row-cols-1 row-cols-lg-3 g-2 g-lg-3">
            <div className="level col">
              <div class="contained">
                <img src={Primary} alt="Avatar" class="image" />
                <div class="overlayed">
                  <div class="text">
                    <h3>EYFS</h3>

                    <p>
                      School does not discriminate on the basis of race, color,
                      religion, sex, gender, sexual orientation, national
                      origin, ancestry, age, marital status{" "}
                      <Link>Learn More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="level col">
              <div class="contained">
                <img src={Primary} alt="Avatar" class="image" />
                <div class="overlayed">
                  <div class="text">
                    <h3>PRIMARY</h3>

                    <p>
                      School does not discriminate on the basis of race, color,
                      religion, sex, gender, sexual orientation, national
                      origin, ancestry, age, marital status{" "}
                      <Link>Learn More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="level col">
              <div class="contained">
                <img src={Primary} alt="Avatar" class="image" />
                <div class="overlayed">
                  <div class="text">
                    <h3>SECONDARY</h3>

                    <p>
                      School does not discriminate on the basis of race, color,
                      religion, sex, gender, sexual orientation, national
                      origin, ancestry, age, marital status.
                      <Link>Learn More</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 offset-md-2 values">
            {" "}
            <center>
              <h1>DIFFERENTLY.</h1>
            </center>
            <hr />
            <div className="d-md-flex value-item">
              <div className="col-md-3 ">
                <img src={Primary} alt="Avatar" width="90%" />
              </div>
              <div className="col-md-4">
                <h2>CULTURE OF SCHOLARSHIP</h2>
              </div>
              <div className="col-md-4">
                <p>At Everon,scholarship is not confined to the classroom</p>
              </div>
            </div>
            <hr />
            <div className="d-md-flex value-item">
              <div className="col-md-4">
                <h2>INNOVATIVE CURRICULUM</h2>
              </div>
              <div className="col-md-4">
                <p>At Everon,scholarship is not confined to the classroom</p>
              </div>{" "}
              <div className="col-md-3 ">
                <img src={Primary} alt="Avatar" width="90%" />
              </div>
            </div>
            <hr />
            <div className="d-md-flex value-item">
              <div className="col-md-3 ">
                <img src={Primary} alt="Avatar" width="90%" />
              </div>
              <div className="col-md-4">
                <h2>
                  GIVING <br /> BACK
                </h2>
              </div>
              <div className="col-md-4">
                <p>At Everon,scholarship is not confined to the classroom</p>
              </div>
            </div>
            <hr />
            <div className="d-md-flex value-item">
              <div className="col-md-4">
                <h2>HOLISTIC DEVELOPMENT</h2>
              </div>
              <div className="col-md-4">
                <p>At Everon,scholarship is not confined to the classroom</p>
              </div>{" "}
              <div className="col-md-3 ">
                <img src={Primary} alt="Avatar" width="90%" />
              </div>
            </div>
            <hr />
            <div className="d-md-flex value-item">
              <div className="col-md-3 ">
                <img src={Primary} alt="Avatar" width="90%" />
              </div>
              <div className="col-md-4">
                <h2>RESEARCH-LED LEARNING</h2>
              </div>
              <div className="col-md-4">
                <p>At Everon,scholarship is not confined to the classroom</p>
              </div>
            </div>
            <hr />
            <div className="d-md-flex value-item">
              <div className="col-md-4">
                <h2>GOD CENTERED</h2>
              </div>
              <div className="col-md-4">
                <p>At Everon,scholarship is not confined to the classroom</p>
              </div>{" "}
              <div className="col-md-3 ">
                <img src={Primary} alt="Avatar" width="90%" />
              </div>
            </div>
            <hr />
          </div>

          <div className="col-md-8 offset-md-2 ">
            <div className="testimonials">
              <center>
                <h2>Latest Updates</h2>
              </center>
              <News />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
