import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className = {`navbar navbar-expand-lg bg-${props.mode}`} >
        <div className="container-fluid">
            <Link className={`navbar-brand text-${(props.mode === 'light')?'dark':'light'}`} to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className={`nav-link active text-${(props.mode === 'light')?'dark':'light'}`} aria-current="page" to="/">{props.homeText}</Link>
                </li>
                 <li className="nav-item">
                <Link className={`nav-link text-${(props.mode === 'light')?'dark':'light'}`}  to="/about">{props.aboutText}</Link>
                </li>
            </ul>
            <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={()=>props.toogleMode('light')} style={{height:'30px',width:'30px'}}></div>
                <div className="bg-danger rounded mx-2" onClick={()=>props.toogleMode('danger')} style={{height:'30px',width:'30px'}}></div>
                <div className="bg-success rounded mx-2" onClick={()=>props.toogleMode('success')} style={{height:'30px',width:'30px'}}></div>
                <div className="bg-warning rounded mx-2" onClick={()=>props.toogleMode('warning')} style={{height:'30px',width:'30px'}}></div>
                <div className="bg-light rounded mx-2" onClick={()=>props.toogleMode('light')} style={{height:'30px',width:'30px'}}></div>
                <div className="bg-dark rounded mx-2" onClick={()=>props.toogleMode('dark')} style={{height:'30px',width:'30px'}}></div>
            </div>
            {/* <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            {/* <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" onClick={props.toogleMode} id="flexSwitchCheckDefault"/>
            <label className = {`form-check-label text-${(props.mode === 'light')?'dark':'light'}`} htmlFor="flexSwitchCheckDefault"> Enable {(props.mode === 'light')?'dark':'light'} mode </label>
            </div> */}
            </div>
        </div>
    </nav>
  )
}

Navbar.propTypes = {
                        title:PropTypes.string.isRequired,
                        aboutText:PropTypes.string.isRequired,
                        homeText:PropTypes.string.isRequired
                    }
Navbar.defaultProps = {
    title : 'TextUtils',
    aboutText : 'About Us',
    homeText : 'Home'
}