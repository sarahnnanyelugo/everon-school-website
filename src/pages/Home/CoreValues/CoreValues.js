import "./core-values.scss";

export const CoreValues = () => {
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
    </>
  );
};
