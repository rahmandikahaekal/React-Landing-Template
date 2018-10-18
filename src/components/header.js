import React, { Component } from 'react';

import Nav from './nav';

class Header extends Component {
    render() {
        return (
            <header>
                <Nav />
                <div className="head">
                    <h1>We are<br />Team Based on UI Web</h1>
                    <div>
                        <p>Deserunt incididunt ipsum eu cupidatat labore culpa voluptate elit voluptate velit elit dolor laborum amet. Qui sit magna incididunt ex sunt sit deserunt est est ex veniam proident. Et duis duis deserunt esse nulla amet nostrud adipisicing enim cupidatat. </p>
                        <div><a className="contact" href="/">Contact Me</a></div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;