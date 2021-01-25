import React from 'react';
import '../css/style.css';

class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="circle"></div>
                <header>
                    <a href="/" className="navbrand">
                        Dhaniflw
                        </a>
                </header>
            </div >
        );
    }
}

export default HeaderComponent;