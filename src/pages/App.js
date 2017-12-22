import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar is-tab has-shadow">
                    <div className="navbar-brand">
                        <a href="#" className="navbar-item">Home</a>
                        <a href="#" className="navbar-item">Cursos</a>
                        <a href="#" className="navbar-item">Sobre</a>
                    </div>
                </nav>

                <section className="section">
                    <div className="container">
                        {this.props.children}
                    </div>
                </section>
            </div>
        )
    }
}