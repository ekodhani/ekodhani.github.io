import React from 'react';
import '../css/style.css';

const style = {
    fontSize: "36px",
    color: "white"
}

class FooterComponent extends React.Component {
    render() {
        return (
            <div>
                <ul className="sci">
                    <li>
                        <a href="https://www.facebook.com/eko.nuramadani/">
                            <i className="fab fa-facebook-f" style={style}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/dhaniflw/">
                            <i className="fab fa-instagram" style={style}></i>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:ekonurramadhani@gmail.com">
                            <i className="fas fa-envelope" style={style}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ekodhani">
                            <i className="fab fa-github" style={style}></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/ekodhani">
                            <i className="fab fa-behance" style={style}></i>
                        </a>
                    </li>
                </ul>
            </div >
        );
    }
}

export default FooterComponent;