import "./page-links.scss";
import { Link } from "react-router-dom";

const PageLink = (prop) => {
  return (
    <>
      <div className="page-link-div">
        <h5>{prop.title}</h5>
        <img src={prop.img} width="100%" />
        <p>{prop.pageSummary}</p>
        <Link to={"prop.pageUrl"}>Learn More</Link>
      </div>
    </>
  );
};
export default PageLink;
