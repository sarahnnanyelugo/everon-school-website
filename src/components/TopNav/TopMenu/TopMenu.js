import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./top-menu.scss";
import MainVid from "../../../assets/images/home-vid.mp4";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { menuData } from "./MenuData";

function TopMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="menu-div">
        <button className="top-menu-btn" onClick={handleShow}>
          MENU
        </button>

        <Offcanvas show={show} onHide={handleClose}>
          {/* <Offcanvas.Header closeButton></Offcanvas.Header> */}
          <Offcanvas.Body>
            <div className="d-flex canvas-content">
              <div className="col-md-5 vid-div">
                <video
                  className="video mobile-view"
                  width="90%"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  src={MainVid}
                />
              </div>
              <div className="col-md-1 simple-design" />
              <div className="sidebar">
                <ul className="menu">
                  {menuData.map((item, index) => (
                    <li
                      key={index}
                      className={`menu-item ${item.submenu ? "has-submenu" : ""}`}
                    >
                      <Link to={item.path}>{item.title}</Link>{" "}
                      <FaChevronRight className="arrow-icon" />
                      {item.submenu && (
                        <ul className="submenu">
                          {item.submenu.map((sub, i) => (
                            <li key={i}>
                              <Link to={sub.path}>{sub.title}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ flexGrow: 1 }} />
              <button className="close-btn" onClick={handleClose}>
                CLOSE
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
}

export default TopMenu;
