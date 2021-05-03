import React, { useEffect } from "react";
import "../Layouts/Layout.scss";
import { Home, Pages, Info } from "@material-ui/icons";
import { Link } from "gatsby";
import JQuery from "jquery/dist/jquery";

export const Sidebar = () => {
  useEffect(() => {
    JQuery(".dropdown").each(function () {
      JQuery(this).on("click", function () {
        JQuery(".dropdown-menu", this).slideToggle();
        JQuery(this).toggleClass("show");
      });
    });
  }, []);
  return (
    <div className={"mainSidebar"}>
      <aside id={"sidebarWrapper"}>
        <div className={"sidebarBrand"}>Wisata</div>
        <div className={"sidebarBrand sidebarBrandSm"}>W</div>
        <ul className={"sidebarMenu"}>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <Home />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle">
              <Pages />
              <span>Postingan</span>
            </Link>
            <ul className="dropdown-menu border-0">
              <li>
                <Link to="/postingan/baru" className="nav-link">
                  Postingan Baru
                </Link>
              </li>
              <li>
                <Link to="/postingan" className="nav-link">
                  Semua Postingan
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link">
              <Info />
              About
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};
