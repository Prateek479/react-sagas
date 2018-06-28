import React, { Component } from 'react';
import './styles.css';
import logo from '../../Assets/logo.svg'

class Header extends Component {
  render() {
    return (
        <div>
           <header className="header-container">
                
                <div className="logo">
                    <a href="index.html" title="Henne home page">
                        <img src={logo} width="180" />
                    </a>
                 </div>
                 <nav>
                    <ul>
                        <li><a title="Home">Home</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
  }
}

export default Header;
