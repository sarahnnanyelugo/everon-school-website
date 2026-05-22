import "./top-nav.scss";
import Logo from "../../assets/images/logo2.jpeg";
import TopMenu from "./TopMenu/TopMenu";
const TopNav = () => {
  return (
    <>
      <div className="top-nav-container">
        <div className="d-flex">
          {" "}
          <div className="col-md-1 col-3">
            <img src={Logo} alt="school logo" width="80%" />
          </div>
          <div style={{ flexGrow: 1 }} />
          <TopMenu />
        </div>
      </div>
    </>
  );
};
export default TopNav;
