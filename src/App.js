/** @format */

import React, { Component } from 'react';
import CardContainer from './components/CardContainer';

class App extends Component {
    constructor(props) {
        super(props);
        this.swap = this.swap.bind(this);
    }
    state = {
        info: [
            { title: '1', details: 'One' },
            { title: '2', details: 'Two' },
            { title: '3', details: 'Three' },
            { title: '4', details: 'Four' },
            { title: '5', details: 'Five' },
            { title: '6', details: 'Six' },
        ],
    };

    drag = (event) => {
        event.preventDefault();
    };

    swap = (title1, title2) => {
        let pos2 = this.state.info.findIndex((object) => {
            return object.title === title2;
        });
        let pos1 = this.state.info.findIndex((object) => {
            return object.title === title1;
        });
        let samplearray = this.state.info;
        let temp = this.state.info[pos1];
        samplearray[pos1] = this.state.info[pos2];
        samplearray[pos2] = temp;
        this.setState({ info: samplearray });
    };

    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Drag and Drop Containers Over Each Other to Swap Places</h1>
                <CardContainer swap={this.swap} info={this.state.info} />{' '}
            </div>
        );
    }
}

export default App;
