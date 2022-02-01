import React from 'react';
import './styles.css'
import Logo from '../../Assats/Images/decks-fences.png'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark navigation">
      <div class="container-fluid">
        <div className="navbar-between">
          <a class="navbar-brand" href="#">
            <img src={Logo} className="logo-png" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                BOOK NOW
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Contact us
              </a>
            </li>
          </ul>
          <form class="d-flex ">
            <input
              class="form-control me-2 search-box"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success search-box" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
