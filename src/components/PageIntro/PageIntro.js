import "./page-intro.scss";
import Book from "../../assets/images/book2.gif";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";

export const PageIntro = ({
  pageTitle,
  pageSummary,
  menuItems,
  pageBanner,
}) => {
  return (
    <>
      <div className="col-md-12 page-banner-img">
        <img src={pageBanner} alt="splash image of students" width="100%" />
      </div>
      <div className="d-md-flex col-md-10 offset-md-1 page-intro">
        <div className="col-md-10">
          <div className="page-menu">
            {" "}
            <nav className="menu   ">
              <div className="">
                {" "}
                <Link to={"/"} className="home-icon ">
                  <IoMdHome />
                </Link>
              </div>
              {menuItems.map((item, index) => (
                <div key={index} className="menu-item">
                  <Link to={item.link} className="menu-link">
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
          <small>HEY THERE!</small>
          <h1>{pageTitle}</h1>
          <p>{pageSummary}</p>

          <button class="button-86" role="button">
            Explore our Curriculum
          </button>
        </div>
        <div className="col-md-1 offset-md-1">
          <img src={Book} alt="penguine reading a book" width="100%" />
        </div>
      </div>
    </>
  );
};
