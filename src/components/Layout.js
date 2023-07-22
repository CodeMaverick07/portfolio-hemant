import React, { useEffect } from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Header />

      <div className="container font-mont">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
