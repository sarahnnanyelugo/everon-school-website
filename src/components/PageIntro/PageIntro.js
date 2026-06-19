import "./page-intro.scss";
import Book from "../../assets/images/book2.gif";
import { MdHome } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { Desktop, TabletAndBelow } from "../../Utils/mediaQueries";
import Accordion from "react-bootstrap/Accordion";
import { CiMenuKebab } from "react-icons/ci";
import { MdFindInPage } from "react-icons/md";

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
      <div className="col-md-10 offset-md-1 page-intro">
        <div className="d-md-flex">
          {" "}
          <div className="col-md-10">
            <Desktop>
              {" "}
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
                      {" "}
                      <span>
                        {" "}
                        <MdFindInPage />
                      </span>
                      <Link to={item.link} className="menu-link">
                        {item.label}
                      </Link>
                    </div>
                  ))}
                </nav>
              </div>
            </Desktop>

            <TabletAndBelow>
              {" "}
              <div className="mobile-menu col-10 offset-1">
                {" "}
                <Accordion defaultActiveKey="">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="d-flex">
                      <h6 style={{ flexGrow: 1 }}> MENU </h6>
                      <span>
                        <CiMenuKebab />
                      </span>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="menu  list-unstyled">
                        <div className="">
                          {" "}
                          <Link to={"/"} className="home-icon ">
                            <MdHome />
                          </Link>
                        </div>

                        {menuItems.map((item, index) => (
                          <li key={index} className="menu-item">
                            {" "}
                            <span>
                              {" "}
                              <MdFindInPage />
                            </span>
                            <Link to={item.link} className="menu-link">
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </TabletAndBelow>
          </div>{" "}
          <Desktop>
            {" "}
            <div className="col-md-1 offset-md-1 ">
              <img src={Book} alt="penguine reading a book" width="100%" />
            </div>
          </Desktop>
        </div>
        <div>
          {" "}
          <small>HEY THERE!</small>
          <h1>{pageTitle}</h1>
          <p>{pageSummary}</p>
          <div className="d-flex">
            <button class="curriculum-btn" role="button">
              Explore our Curriculum
            </button>
            <div style={{ flexGrow: 1 }} />
            <TabletAndBelow>
              {" "}
              <div className="col-md-1 offset-md-1 col-3">
                <img src={Book} alt="penguine reading a book" width="100%" />
              </div>
            </TabletAndBelow>
          </div>
        </div>
      </div>
    </>
  );
};
