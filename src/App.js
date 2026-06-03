import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";
import { Home } from "./pages/Home/Home";
import Footer from "./components/Footer/Footet";
function App() {
  return (
    <>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
