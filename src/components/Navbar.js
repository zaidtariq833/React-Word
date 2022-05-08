import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  {props.Home}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.AboutUs}
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
                <div className= {`form-check form-switch text-${props.mode === 'light'? 'Dark' : 'Light'}`}>
                <input className="form-check-input"  onClick = {props.toggleMode}  type="checkbox" id="flexSwitchCheckDefault"/>
                <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// Navbar.propTypes = {peer : PropTypes.string.isRequired,
//                     AboutUs : PropTypes.string,
//                     Home : PropTypes.string}

Navbar.defaultProps = {
    Home: "Home",
    AboutUs: "About",
    title: "DevZaid"
}