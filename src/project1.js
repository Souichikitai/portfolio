import React, { Component } from 'react';
import './App.css';

export default class project1 extends Component{

    constructor(props){
        super(props)

        this.state = {
            isopen: false,
        };
    }

    render(){

        return(
            <div>
                <div className="">
                <embed src={require('./images/n10140981CAB230.pdf')} type="application/pdf" width="100%" height="950px" />
                </div>
            </div>
        )
    }
}