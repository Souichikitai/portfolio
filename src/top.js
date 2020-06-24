import React, { Component } from 'react';
import './App.css';
import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText,Jumbotron, Button
  } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class top extends Component{

    constructor(props){
        super(props)

        this.state = {
            isopen: false,
        };
    }

    render(){

        return(
            <div className="App">
                <Jumbotron className="jb">
                    <h1 className="display-3">Hello, Welcome to my portfolio</h1>
                    <h3 className="my-1">Sohichi Kitai</h3>
                    <div>
                    <img className="ore-picture" src={require('./images/ore.jpg')}></img>

                    <h4 className="my-1">Quick introduction</h4>
                    <hr className="my-2" />
                    <li>22 years old -  Male</li>
                    <li>Japanese</li>
                    <li>Born in Japane, currently in Australia</li>
                    <li>3 years experiences of Programing</li>
                    <li>Intested in web development, Network administration, Cyber security</li>
                    </div>        
                    <hr className="my-2" />        
                    <div className="button_top">
                    <p className="lead">
                    <Button color="primary" href="/resume">Look my resume</Button>
                    </p>
                    </div>
                    <h5>My email: souichi.kitai@gmail.com</h5>
                    <h5>click here : <a href="https://www.facebook.com/profile.php?id=100005599240163">facebook</a></h5>
                </Jumbotron>
            </div>
        )
    }
}