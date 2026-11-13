import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const { pathname } = useLocation();

  // scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
