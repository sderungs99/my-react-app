import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <HomePage />
            </div>
        );
    }
}

export default App;
