import "./core-values.scss";
import Primary from "../../../assets/images/primary.jpg";
import { useEffect, useRef, useState } from "react";

export const CoreValues = () => {
  const [inViewHeading, setInViewHeading] = useState(false); // Track if the heading is in view
  const headingRef = useRef(null); // Reference for the heading

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
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {" "}
      <div className="col-md-8 offset-md-2 values">
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
            // width: "100%",
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
          // ref={headingRef}
          // style={{
          //   width: "100%",

          //   transform: inViewHeading ? "translateX(0)" : "translateX(100px)",
          //   opacity: inViewHeading ? 1 : 0,
          //   transition: "transform 2s ease, opacity 2s ease",
          // }}
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
        <div className="d-flex value-item">
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
        <div className="d-flex value-item">
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
        <div className="d-flex value-item">
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
        <div className="d-flex value-item">
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
