import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
            <main>
                <section className="intro">
                    <h2>About Us</h2>
                    <div>
                        <p>Fugiat fugiat et veniam laborum commodo ea occaecat. Duis velit et qui ut ipsum excepteur ex do duis aliqua. Tempor ullamco consectetur reprehenderit elit aute velit velit excepteur. Aute cillum elit ullamco in pariatur enim. Adipisicing ut reprehenderit ex laborum sint aliqua eu.</p>
                    </div>
                </section>

                <div>
                    <div className="services">
                        <div className="service-one">
                            <p className="service-icon"><i className="far fa-calendar-alt"></i></p>
                            <p className="service-title">Planning</p>
                            <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                        </div>

                        <div className="service-two">
                            <p className="service-icon"><i className="fas fa-crop"></i></p>
                            <p className="service-title">UI </p>
                            <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                        </div>

                        <div className="service-three">
                            <p className="service-icon"><i className="fas fa-code"></i></p>
                            <p className="service-title">Develop</p>
                            <p>Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.</p>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main;