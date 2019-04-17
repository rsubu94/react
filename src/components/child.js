import AppName, { names as programmers, test as Test, arrow } from '../services/first'
import React, { Component } from 'react';
import '../App.css';


export default class Child extends Component {
    render() {
        Test();
        let code = programmers.map((x) => <ol>{x}</ol>);
        return (
            <div style={{ backgroundColor: this.props.color, color: this.props.textcolor }}>
                <h1 className='child'>{AppName}</h1>
                <h2 style={{ color: "Red" }}>Second Header</h2>
                <hr />
                <h3>Child Class is working!!!!!!</h3>
                <h4><u>Programmers</u></h4>
                {code}
            </div>
        );
    }
}

