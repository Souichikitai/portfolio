import React, { Component } from 'react';
import './App.css';
export default class resume extends Component{

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
                <embed src={require('./images/my_profile_en.pdf')} type="application/pdf" width="100%" height="950px" />
                </div>
            </div>
        )
    }
}