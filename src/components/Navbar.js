import React from 'react'
import { Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div>
        <nav className="Top navbar navbar-expand-lg shadow"  style={{ height: '100px' }}>
        <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src="/default.png" className="navbar-logo" style={{width:"300px"}} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: "white" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2">
              
              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link text-white active"
                    aria-current="page"
                    to="/profile"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className="btn bg-white mx-2 text-black" style={{borderRadius:"20px"}} to="/login">
                  Login
                </Link>
                <Link className="btn bg-white mx-2 text-black" style={{borderRadius:"20px"}} to="/signup">
                  Sign up
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white mx-2 text-danger"
                  
                >
                 
                 
                </div>
               
                <div className="btn bg-white mx-2 text-danger">
                  Log out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}
