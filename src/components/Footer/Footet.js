import "./footer.scss";
import Logo from "../../assets/images/logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import Partners from "./Partners/Partners";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="col-md-8 offset-md-2 d-md-flex">
          <div className="col-md-6 first-prt">
            {" "}
            <img src={Logo} alt="school logo" width="60%" />
            <p>
              We create an environment where students are inspired to discover
              their potential, develop leadership skills, and grow into
              confident, responsible global citizens.
            </p>
            <h3>GET IN TOUCH</h3>
            <p>
              {" "}
              <span>
                <IoLocationSharp />
              </span>
              Visit Us
            </p>
            <p>
              {" "}
              <span>
                <MdCall />
              </span>
              080576788553
            </p>{" "}
            <p>
              {" "}
              <span>
                <IoMdMail />
              </span>
              evaronschools@gmail.com
            </p>
          </div>
          <div className="rule" />
          <div className="col-md-6 second-wing">
            <h1>A school that reflects all of you.</h1>
            <Link className="link-btns">
              INQUIRE <FaArrowRightLong />
            </Link>
            <Link className="link-btns">
              APPLY NOW <FaArrowRightLong />
            </Link>

            <h3>QUICK LINKS</h3>
            <ul className="list-inline list-unstyled">
              <li className="list-inline-item">
                <Link>
                  <span>
                    <FaLink />
                  </span>
                  About Us
                </Link>
              </li>{" "}
              <li className="list-inline-item">
                <Link>
                  {" "}
                  <span>
                    <FaLink />
                  </span>{" "}
                  History
                </Link>
              </li>{" "}
              <li className="list-inline-item">
                <Link>
                  {" "}
                  <span>
                    <FaLink />
                  </span>
                  Facility
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-8 offset-md-2">
          {" "}
          <Partners />
        </div>
      </footer>
    </>
  );
};
export default Footer;
