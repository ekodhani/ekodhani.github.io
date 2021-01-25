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
                            <h2>About
                                <span> Me</span>
                            </h2>
                            <p>I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I am able to work well under pressure and adhere to strict deadlines.</p>
                            <a href={"/assets/cv/cv-ekonurramadhani.pdf"} className="button shadow" download><i className="fa fa-download" style={style}></i> Download CV</a>
                        </div>
                        <div className="imgBox">
                            <img src={"/assets/me2.png"} className="me shadow-me"></img>
                        </div>
                    </div>
                    <NavbarComponent />
                    <FooterComponent />
                </section>

            </div>
        );
    }
}

export default About;