import React from "react";
import Header from "../Header";
function DesktopLayout({ children }) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}

export default DesktopLayout;
