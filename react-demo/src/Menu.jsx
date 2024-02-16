import React from 'react'
import im1 from './assets/images1.jpg'

function Menu() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning">
  <div className="container-fluid">
    <a className="navbar-brand" to="#">
    <img src={im1} alt="" style={{width:'45px',height:'50px'}} className='rounded-circle'/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="/about">About</a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link active" aria-current="page" to="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="#">Sign</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" to="#">SignUs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" to="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Subject
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#">Java</a></li>
            <li><a className="dropdown-item" to="#">Aws</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#">Devops</a></li>
          </ul>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success bg-info" type="submit" >Search</button>
      </form>
    </div>
  </div>
</nav>
<outlet/>
    </div>

  )
}

export default Menu
