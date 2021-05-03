import React, { useEffect } from "react";
import { ViewHeadline, Copyright, FiberManualRecord } from "@material-ui/icons";
import { Button } from "../Button/Button";
import { Sidebar } from "../Sidebar/Sidebar";
import "./Layout.scss";

export const Layout = ({ children }) => {
  const date = new Date();

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.add("bgBody");
  }, []);

  const changeSidebar = () => {
    const body = document.querySelector("body");
    body.classList.toggle("sidebarMini");
  };

  return (
    <>
      <nav
        className={
          "navbar navbar-expand-lg main-navbar position-absolute bg-primary "
        }
      >
        <ViewHeadline
          style={{ color: "#fff", marginRight: "auto" }}
          onClick={changeSidebar}
        />
        <div className="navbar-nav navbar-right">
          <Button className="btn btn-danger" value="Log Out" style={{}} />
        </div>
      </nav>
      <Sidebar />
      <div className={"mainContent"}>
        <section className={"section"}>{children}</section>
      </div>
      <div className={"mainFooter"}>
        <div className="d-flex flex-wrap align-items-center">
          Copyright
          <Copyright style={{ fontSize: "12px", margin: "0 0 0 5px" }} />
          {date.getFullYear()}
          <FiberManualRecord style={{ fontSize: "6px", margin: "0 5px" }} />
          <span>Witsudi Anasrullah</span>
        </div>
      </div>
    </>
  );
};
