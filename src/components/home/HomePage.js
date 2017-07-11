import React, { Component } from 'react';
import './HomePage.css';
import Button from '../common/Button';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clickCounter: 0
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clickCounter: this.state.clickCounter + 1
        });
    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p><Button onClick={this.handleClick} buttonLabel="Test Button" /></p>
                <p>Click Counter: {this.state.clickCounter}</p>
            </div>
        );
    }
}

export default HomePage;