import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <div className="container" id="top">
      <nav class="navbar navbar-expand-lg ">
        <div class="container my_nav  fixed-top">
          <a class="navbar-brand" href="#">
            Ruhul Amin
          </a>
          <button
            class="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i
                class="fas fa-bars"
                style={{ color: "#fff", fontSize: "2rem" }}
              ></i>
            </span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  class="nav-link active bottom-border"
                  aria-current="page"
                  href="#top"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active bottom-border "
                  aria-current="page"
                  href="#aboutme"
                >
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active bottom-border "
                  aria-current="page"
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              {/* <li class="nav-item">
                <a
                  class="nav-link active bottom-border"
                  aria-current="page"
                  href="#"
                >
                  BLOGS
                </a>
              </li> */}
              <li class="nav-item">
                <a
                  class="nav-link active bottom-border"
                  aria-current="page"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <button className="resume">
        <a href="https://drive.google.com/file/d/1m9HXfGZ4CAqrXnZkrSxWe_bOsQbvVRgK/view?usp=sharing" target="_blank"><i class="fas fa-download"></i> Resume</a>
        
      </button>
    </div>
  );
}

export default Navigation;
