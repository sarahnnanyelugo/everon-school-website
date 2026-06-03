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
      <div class="mission-div" ref={textRef}>
        <div className="col-md-6 offset-md-3">
          {" "}
          <img src={Logo} alt="Avatar" class="image" width="50%" />
        </div>
        <div class="overlay">
          <div class="text">
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
                School does not discriminate on the basis of race, color,
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
