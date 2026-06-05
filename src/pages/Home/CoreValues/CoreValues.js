import "./core-values.scss";
import Primary from "../../../assets/images/primary.jpg";
import { useEffect, useRef, useState } from "react";

export const CoreValues = () => {
  const [inViewHeading, setInViewHeading] = useState(false); // Track if the heading is in view
  const [inViewHeading2, setInViewHeading2] = useState(false); // Track if the heading is in view
  const [inViewHeading3, setInViewHeading3] = useState(false); // Track if the heading is in view
  const [inViewHeading4, setInViewHeading4] = useState(false); // Track if the heading is in view
  const [inViewHeading5, setInViewHeading5] = useState(false); // Track if the heading is in view
  const [inViewHeading6, setInViewHeading6] = useState(false); // Track if the heading is in view
  const headingRef = useRef(null); // Reference for the heading
  const headingRef2 = useRef(null); // Reference for the heading
  const headingRef3 = useRef(null); // Reference for the heading
  const headingRef4 = useRef(null); // Reference for the heading
  const headingRef5 = useRef(null); // Reference for the heading
  const headingRef6 = useRef(null); // Reference for the heading

  useEffect(() => {
    if (!window.FB) {
      const script = document.createElement("script");
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      script.crossOrigin = "anonymous";
      document.body.appendChild(script);
    } else {
      window.FB.XFBML.parse();
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Heading
      if (headingRef.current) {
        const rect = headingRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewHeading(true);
        } else {
          setInViewHeading(false);
        }
      }
      if (headingRef2.current) {
        const rect = headingRef2.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewHeading2(true);
        } else {
          setInViewHeading2(false);
        }
      }
      if (headingRef3.current) {
        const rect = headingRef3.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewHeading3(true);
        } else {
          setInViewHeading3(false);
        }
      }
      if (headingRef4.current) {
        const rect = headingRef3.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewHeading4(true);
        } else {
          setInViewHeading4(false);
        }
      }
      if (headingRef5.current) {
        const rect = headingRef5.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewHeading5(true);
        } else {
          setInViewHeading5(false);
        }
      }
      if (headingRef6.current) {
        const rect = headingRef6.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewHeading6(true);
        } else {
          setInViewHeading6(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {" "}
      <div className="col-md-8 offset-md-2 values mobile-pad">
        {" "}
        <center>
          <h1>
            Our <span className="highlight">Core</span> Values
          </h1>
        </center>
        <hr />
        <div
          ref={headingRef}
          className="d-flex value-item"
          style={{
            transform: inViewHeading ? "translateX(0)" : "translateX(-100px)",
            opacity: inViewHeading ? 1 : 0,
            transition: "transform 2s ease, opacity 2s ease",
          }}
        >
          <div className="col-md-3 col-3">
            <img src={Primary} alt="Avatar" width="90%" />
          </div>
          <div className="col-md-4 col-4">
            <h2>CULTURE OF SCHOLARSHIP</h2>
          </div>
          <div className="col-md-4 col-5">
            <p>At Everon, scholarship is not confined to the classroom</p>
          </div>
        </div>
        <hr />
        <div
          className="d-flex value-item"
          ref={headingRef2}
          style={{
            width: "100%",

            transform: inViewHeading2 ? "translateX(0)" : "translateX(100px)",
            opacity: inViewHeading2 ? 1 : 0,
            transition: "transform 2s ease, opacity 2s ease",
          }}
        >
          <div className="col-md-4 col-5">
            <h2>INNOVATIVE CURRICULUM</h2>
          </div>
          <div className="col-md-4 col-4">
            <p>At Everon,scholarship is not confined to the classroom</p>
          </div>{" "}
          <div className="col-md-3 col-3">
            <img src={Primary} alt="Avatar" width="90%" />
          </div>
        </div>
        <hr />
        <div
          className="d-flex value-item"
          ref={headingRef3}
          style={{
            width: "100%",

            transform: inViewHeading3 ? "translateX(0)" : "translateX(-100px)",
            opacity: inViewHeading3 ? 1 : 0,
            transition: "transform 2s ease, opacity 2s ease",
          }}
        >
          <div className="col-md-3 col-3">
            <img src={Primary} alt="Avatar" width="90%" />
          </div>
          <div className="col-md-4 col-4">
            <h2>
              GIVING <br /> BACK
            </h2>
          </div>
          <div className="col-md-4 col-5">
            <p>At Everon,scholarship is not confined to the classroom</p>
          </div>
        </div>
        <hr />
        <div
          className="d-flex value-item"
          ref={headingRef4}
          style={{
            width: "100%",

            transform: inViewHeading4 ? "translateX(0)" : "translateX(100px)",
            opacity: inViewHeading4 ? 1 : 0,
            transition: "transform 2s ease, opacity 2s ease",
          }}
        >
          <div className="col-md-4 col-4">
            <h2>HOLISTIC DEVELOPMENT</h2>
          </div>
          <div className="col-md-4 col-5">
            <p>At Everon,scholarship is not confined to the classroom</p>
          </div>{" "}
          <div className="col-md-3 col-3">
            <img src={Primary} alt="Avatar" width="90%" />
          </div>
        </div>
        <hr />
        <div
          className="d-flex value-item"
          ref={headingRef5}
          style={{
            width: "100%",

            transform: inViewHeading5 ? "translateX(0)" : "translateX(-100px)",
            opacity: inViewHeading5 ? 1 : 0,
            transition: "transform 2s ease, opacity 2s ease",
          }}
        >
          <div className="col-md-3 col-3">
            <img src={Primary} alt="Avatar" width="90%" />
          </div>
          <div className="col-md-4 col-4">
            <h2>RESEARCH-LED LEARNING</h2>
          </div>
          <div className="col-md-4 col-5">
            <p>At Everon,scholarship is not confined to the classroom</p>
          </div>
        </div>
        <hr />
        <div
          className="d-flex value-item"
          ref={headingRef6}
          style={{
            width: "100%",

            transform: inViewHeading6 ? "translateX(0)" : "translateX(100px)",
            opacity: inViewHeading6 ? 1 : 0,
            transition: "transform 2s ease, opacity 2s ease",
          }}
        >
          <div className="col-md-4 col-4">
            <h2>GOD CENTERED</h2>
          </div>
          <div className="col-md-4 col-5">
            <p>At Everon,scholarship is not confined to the classroom</p>
          </div>{" "}
          <div className="col-md-3 col-3">
            <img src={Primary} alt="Avatar" width="90%" />
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};
