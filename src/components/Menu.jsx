import React from 'react'
import { NavLink } from 'react-router-dom';


const Menu = () => {
  return (
    <div className="navbar navbar-expand-md navbar-dark bg-success">
        <div className="container">
            <NavLink to={''} className='navbar-brand'>OPERATORS</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to={"/Basic"} className="nav-link">Arithmetic Operators</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/Comparison"} className="nav-link">Comparison Operators</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/Logical"} className="nav-link">Logical Operators</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={"/Bitwise"} className="nav-link">Bitwise Operators</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>  
    )
}

export default Menu