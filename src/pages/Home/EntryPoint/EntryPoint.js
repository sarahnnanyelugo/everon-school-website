import "./entry-point.scss";
import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";

export const EntryPoint = (props) => {
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
      <div
        className="level col"
        ref={textRef}
        style={{
          transform: inViewText ? "scale(1)" : "scale(0.1)",
          opacity: inViewText ? 1 : 0,
          transition:
            "background 0.5s ease, transform 2s ease, opacity 2s ease",
        }}
      >
        <div class="contained">
          <img src={props.img} alt="Avatar" class="image" />
          <div class="overlayed">
            <div class="text">
              <h3>{props.level}</h3>

              <p>
                {props.summary} <Link to={props.page}>Learn More</Link>
              </p>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
