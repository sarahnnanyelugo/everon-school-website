import "./core-values.scss";
import Primary from "../../../assets/images/primary.jpg";
import { useEffect, useRef, useState } from "react";

const coreValues = [
  {
    title: "CULTURE OF SCHOLARSHIP",
    description: "At Everon, scholarship is not confined to the classroom",
    image: Primary,
  },
  {
    title: "INNOVATIVE CURRICULUM",
    description: "At Everon, scholarship is not confined to the classroom",
    image: Primary,
  },
  {
    title: "GIVING BACK",
    description: "At Everon, scholarship is not confined to the classroom",
    image: Primary,
  },
  {
    title: "HOLISTIC DEVELOPMENT",
    description: "At Everon, scholarship is not confined to the classroom",
    image: Primary,
  },
  {
    title: "RESEARCH-LED LEARNING",
    description: "At Everon, scholarship is not confined to the classroom",
    image: Primary,
  },
  {
    title: "GOD CENTERED",
    description: "At Everon, scholarship is not confined to the classroom",
    image: Primary,
  },
];

export const CoreValues = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);

          setVisibleItems((prev) => {
            if (entry.isIntersecting) {
              return prev.includes(index) ? prev : [...prev, index];
            }

            return prev.filter((item) => item !== index);
          });
        });
      },
      {
        threshold: 0.3,
      },
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
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
        {coreValues.map((value, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={index}>
              <div
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className="d-flex value-item"
                style={{
                  transform: visibleItems.includes(index)
                    ? "translateX(0)"
                    : isEven
                      ? "translateX(-100px)"
                      : "translateX(100px)",

                  opacity: visibleItems.includes(index) ? 1 : 0,

                  transition: "transform 1.2s ease, opacity 1.2s ease",
                }}
              >
                {isEven ? (
                  <>
                    <div className="col-md-3 col-3">
                      <img src={value.image} alt={value.title} width="90%" />
                    </div>

                    <div className="col-md-4 col-4">
                      <h2>{value.title}</h2>
                    </div>

                    <div className="col-md-4 col-5">
                      <p>{value.description}</p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-md-4 col-4">
                      <h2>{value.title}</h2>
                    </div>

                    <div className="col-md-4 col-5">
                      <p>{value.description}</p>
                    </div>

                    <div className="col-md-3 col-3">
                      <img src={value.image} alt={value.title} width="90%" />
                    </div>
                  </>
                )}
              </div>

              <hr />
            </div>
          );
        })}
      </div>
    </>
  );
};
