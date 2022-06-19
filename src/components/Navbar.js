import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
    <nav className="navbar fixed-top navbar-dark bg-dark ">
<div className="container-fluid" >
<a className="navbar-brand" href="#">ReePzz Newzz</a>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Business">Business</a></li>
    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Entertainment">Entertainment </a></li>
    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/General">General</a></li>
    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Health">Health</a></li>
    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Science">Science</a></li>
    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Sports">Sports</a></li>
    <li className="nav-item"><a className="nav-link active" aria-current="page" href="/Technology">Technology</a></li>
    </ul>
</div>
</div>
</nav>
  </div>
  );
}
