import React from 'react'

import logo2 from '../img/pngegg.png';

export const Header = () => {
  return (
    <div>

        <nav className="navbar navbar-light bg-light">
          <div className="container justify-content-center">
            <a className="navbar-brand" href=" ">
              <img style={{height:"150px"}} src={logo2} alt="logo" />
            </a>
          </div>
        </nav>
    
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <hr  />
              <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
             
                <li class="nav-item">
                  <a class="nav-link" href=" ">Seccion1</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Seccion2</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Seccion3</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Seccion4</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href=" ">Seccion5</a>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>

    </div>
  )
}
