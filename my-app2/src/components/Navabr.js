import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export class Navabr extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">My News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/home">Home</Link></li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">News Categorys</Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item"><Link className="nav-link text-dark" to="/business">Business</Link></li>
                    <li><hr className='my-1' style={{}}/></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/entertainment">Entertainment</Link></li>
                    <li><hr className='my-1' style={{}}/></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/general">General</Link></li>
                    <li><hr className='my-1' style={{}}/></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/health">Healths</Link></li>
                    <li><hr className='my-1' style={{}}/></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/science">Science</Link></li>
                    <li><hr className='my-1' style={{}}/></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/sports">Sports</Link></li>
                    <li><hr className='my-1' style={{}}/></li>
                    <li className="nav-item"><Link className="nav-link text-dark" to="/technology">Technology</Link></li>
                  </ul>
                </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Country
                    </Link>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/us">United State</Link></li>
                    <li><Link className="dropdown-item" to="/in">India</Link></li>
                    <li><Link className="dropdown-item" to="/ae">United Arab Emirates</Link></li>
                    </ul>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
    </div>
    )
  }
}

export default Navabr