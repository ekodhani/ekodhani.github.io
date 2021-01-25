import React from 'react';
import NavbarComponent from '../NavbarComponent';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';

const style = {
    fontSize: "24px",
    color: "white"
}

class About extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <HeaderComponent />
                    <div className="content">
                        <div className="textBox">
                            <h2 id="h2t">My
                                <span> Work</span>
                            </h2>
                            <p id="p1">My work on github</p>
                            <a href="https://github.com/ekodhani" className="button shadow"><i className="fab fa-github" style={style}></i> View My Github</a>
                        </div>
                        <div className="imgBox">
                            {/* <img src="#" className="me"></img> */}
                            <div className="infinite">
                                <div className="shadow-road"></div>
                            </div>
                        </div>
                    </div>
                    <NavbarComponent />
                    <FooterComponent />
                </section>

            </div >
        );
    }
}

export default About;