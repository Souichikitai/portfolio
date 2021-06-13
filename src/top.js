import React, { Component } from 'react';
import './App.css';
import {
    Jumbotron, Button
  } from 'reactstrap';
  import {
    Link
  } from 'react-router-dom'
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
                    <h1 className="display-3">ポートフォリオ</h1>
                    <h3 className="my-1">Souichi Kitai</h3>
                    <div>
                    {/* <img className="ore-picture" src={require('./images/ore.jpg')}></img> */}

                    <h4 className="my-1">自己紹介</h4>
                    <hr className="my-2" />
                    <li>22才</li>
                    <li>コンピューターサイエンス専攻</li>
                    <li>C#, ASP.NET Entity Framework, Javascript(React, jquery)</li>
                    </div>        
                    <hr className="my-2" />        
                    <div className="button_top">
                    {/* <p className="lead">
                    <Button color="primary"><Link to={'/resume'} style={{color: 'black'}}>Look my resume</Link></Button>
                    </p> */}
                    </div>
                    <h5>My email: souichi.kitai@gmail.com</h5>
                    <h5>click here : <a href="https://www.facebook.com/profile.php?id=100005599240163">facebook</a></h5>
                </Jumbotron>
            </div>
        )
    }
}