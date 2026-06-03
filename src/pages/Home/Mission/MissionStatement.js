import "./mission.scss";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../../../assets/images/logo3.png";

export const MissionStatement = () => {
  const [inViewText, setInViewText] = useState(false);

  const textRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          setInViewText(true);
        } else {
          setInViewText(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load to check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="mission-div" ref={textRef}>
        {" "}
        <center>
          <div className="col-md-7 col-12">
            {" "}
            <img src={Logo} alt="Avatar" className="" width="100%" />
          </div>
        </center>
        <div class="overlay">
          <div class="text col-md-6 ">
            <h1>
              We Have One <span>Mission</span>
              <p
                style={{
                  transform: inViewText ? "scale(1)" : "scale(0.1)",
                  opacity: inViewText ? 1 : 0,
                  transition:
                    "background 0.5s ease, transform 2s ease, opacity 2s ease",
                }}
              >
                School does not discriminate on the errrrasis of race, color,
                religion, sex, gender, sexual orientation, national origin,
                ancestry, age, marital status
              </p>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
