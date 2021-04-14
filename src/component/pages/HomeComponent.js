import React from 'react';
import NavbarComponent from '../NavbarComponent';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';

const style = {
    fontSize: "24px",
    color: "white"
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <section>
                    <HeaderComponent />
                    <div className="content">
                        <div className="imgBox">
                            <img src={"/assets/me.png"} className="me"></img>
                        </div>
                        <div className="textBox">
                            <h2 id="h2t">Hi I'm <br />
                                <span>Eko Nur Ramadhani</span>
                            </h2>
                            {/* <p id="p1">Web Developer | Web Designer</p> */}
                            <a href={"/assets/cv/cv-ekonurramadhani-terbaru.pdf"} className="button shadow" download><i className="fa fa-download" style={style}></i> Download CV</a>
                        </div>
                    </div>
                    <NavbarComponent />
                    <FooterComponent />
                </section>

            </div>
        );
    }
}

export default Home;