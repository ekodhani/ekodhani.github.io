import React from 'react';
import '../css/style.css';
import { Link } from 'react-router-dom';

const sty = {
    color: "#333",
    textDecoration: "none",
    listStyle: "none"
}

class NavbarComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            menus: [
                { label: 'Home', path: "/" },
                { label: 'Service', path: "/service" },
                { label: 'Work', path: "/work" },
                { label: 'About', path: "/about" }
            ]
        }

    }

    render() {
        return (
            <div>
                <ul className="thumb">
                    {this.state.menus.map((menu) => (
                        <li key={menu.label} style={sty}>
                            <Link to={menu.path} style={sty}>{menu.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default NavbarComponent;