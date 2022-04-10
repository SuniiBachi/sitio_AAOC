import React, { Component } from 'react'
import "../assets/css/navbar.scss"
import Logo from '../assets/img/navbar/logo.svg'
import tvIcon from '../assets/img/navbar/tv_navbar.svg'

class Navbar extends Component {
    render() {

        return (
            <>
                <header id="menuNav" className="container is-fluid">
                    <nav className="navbar py_5" role="navigation" aria-label="main navigation">
                        <div className="navbar-brand ml-2">
                            <a className="navbar-item" href="/">
                                <img src={Logo} />
                            </a>

                            <a role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className="navbar-menu mr-2" id="navMenu">

                            <div className="navbar-end py-5">

                                <a href="/" className="navbar-item">
                                    <span>Inicio</span>
                                </a>
                                <a href="/porfile" className="navbar-item">
                                    <span>Mi Perfil</span>
                                </a>
                                <a href="/activies" className="navbar-item">
                                    <span>Mis Actividades</span>
                                </a>
                                <a href="/certificates" className="navbar-item">
                                    <span>Certificados</span>
                                </a>
                                <a href="/#" className="navbar-item">
                                    <span>Facturación</span>
                                </a>

                                <a href="/certificates" id='tvItem' className="navbar-item">
                                    <span className="icon-text">
                                        <span className="icon mr-2">
                                            <img src={tvIcon} alt="" />
                                        </span>
                                        <span className='mb-1'>AAOC Tv</span>
                                    </span>
                                </a>

                                <div className="navbar-item">
                                    <div className="field">
                                        <p id='btn-navbar' className="control">
                                            <a path="/login" className="button bg-blue" href="">
                                                <span className="icon">
                                                <i className="fa-regular fa-circle-user"></i>
                                                </span>
                                                <span>Nombre Usuario</span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Navbar;