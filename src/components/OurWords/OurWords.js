import React, { useEffect } from "react";
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";
import "./our-words.scss";
export const OurWords = () => {
  const count = 6; // Define count to prevent errors
  const modelData = [
    {
      modelName: "Leadership",
      description:
        "Our goal is to reach out to all students and help them discover and develop their emerging leadership skills.",
    },
    {
      modelName: "Academic Rigor",
      description: "Demanding academic subjects are the heart of our program.",
    },
    {
      modelName: "Respect for All",
      description:
        "We foster an environment where students learn the valuable social skills of cooperation and mutual respect.",
    },
    {
      modelName: "Individual Potential",
      description:
        "Our extremely devoted educators are able to see the individual potential of each child and guide hem to full bloom.",
    },
    {
      modelName: "Honesty Always",
      description:
        "Each child who enrolls at Canterbury must sign, and live by, the Canterbury Honor Code.",
    },
    {
      modelName: "Character Matters",
      description:
        "We believe that each student's moral and ethical strengths lie in their intentions and actions.",
    },
  ];
  // console.log(modelData);

  useEffect(() => {
    document.documentElement.style.setProperty("--count", count);
  }, [count]);
  return (
    <>
      {" "}
      <div className="mission-words d-md-flex col-md-12">
        <div className="col-md-7">
          <div className="void" id="void">
            <div className="crop">
              <ul id="card-list">
                {modelData.map((model, index) => (
                  <li key={index}>
                    <div className="card">
                      <span className="model-name">
                        <h5>{model.modelName}</h5>
                      </span>
                      <span>
                        <p>{model.description}</p>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="last-circle"></div>
              <div className="second-circle"></div>
            </div>
            <div className="mask"></div>
            <div className="center-circle">
              <h3>
                Our Core <br />
                VALUES
              </h3>
            </div>
          </div>
        </div>
        <div className="col-md-4 honour-div">
          {/* <img src={Honour} width="100%" /> */}
        </div>
      </div>
    </>
  );
};
