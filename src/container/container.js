import React from 'react';
import NavbarComponent from '../component/NavbarComponent';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../component/pages/AboutComponent';
import Home from '../component/pages/HomeComponent';
import Service from '../component/pages/ServiceComponent';
import Work from '../component/pages/WorkComponent';

class Container extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavbarComponent />

                    <Route path="/" exact component={Home} />
                    <Route path="/service" exact component={Service} />
                    <Route path="/work" exact component={Work} />
                    <Route path="/about" exact component={About} />

                </div >
            </Router>
        );
    }
}

export default Container;