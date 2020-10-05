import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";


function Navbar() {
    document.addEventListener("DOMContentLoaded", function () {
        var elems = document.querySelectorAll(".sidenav");
        M.Sidenav.init(elems, {});
      });

  return (
    <React.Fragment>
      {/* Turn Navbar into Sticky */}
      <div className="navbar-fixed">
        {/* Navbar */}
        <nav className="light-blue lighten-4">
          <div className="nav-wrapper">
            <a href="/search" className="brand-logo center">
                Google Books
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <a href="/search">
                  <i className="material-icons">search</i>
                  Search
                </a>
              </li>
              <li>
                <a href="/saved">
                  <i className="material-icons">note</i>
                  Saved
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* Navbar End */}
      </div>
      {/* Responsive Sidenav (activate when screen is too small) */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/search">
            <i className="material-icons">search</i>
            Search
          </a>
        </li>
        <li>
          <a href="/saved">
            <i className="material-icons">note</i>
            Saved
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Navbar;
