import React from 'react';
import NavbarComponent from '../NavbarComponent';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';

class Service extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <HeaderComponent />
                    <div className="content">
                        <div className="textBox">
                            <h2 id="h2t">My
                                <span> Service</span>
                            </h2>
                            <p id="p1">I design a web and also develop it</p>
                            {/* <a href="#" class="button shadow">Vie</a> */}
                        </div>
                        <div className="imgBox">
                            <img src={"/assets/design-web.jpg"} className="me shadow"></img>
                        </div>
                    </div>
                    <NavbarComponent />
                    <FooterComponent />
                </section>

            </div>
        );
    }
}

export default Service;