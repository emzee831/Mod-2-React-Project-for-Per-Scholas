import React from "react";
import {Link} from "react-router-dom";
import '../containers/Nav.css'

const Headernav = () => {
    return (
        <div className="pagenav">
            <nav>
              <Link to="/">
              <div className="home">            
                <h2>Fake Stock/Crypto App</h2>
              </div>  
              </Link>
              <ul className="navlinks">
                  <ul>
                      <Link to="/">Home</Link>
                  </ul>
                  <ul>
                      <Link to="/Crypto">Crypto</Link>
                  </ul>
                  <ul>
                      <Link to="/Bigchart">Bigchart</Link>
                  </ul>
              </ul>
            </nav>
        </div>
    )
};

export default Headernav;