import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Jumbotron, Button
} from 'reactstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch,Link
} from 'react-router-dom'
import resume from './resume';
import top from './top';
import project1 from './project1'
import project2 from './project2'
import security_analysis from './security_analysis'
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
    <div className="App">
      <div>
      <Navbar className= "Navbar" color="light" light expand="md">
        <NavbarBrand >
        <Link to={'/portfolio'} style={{color: 'black'}}>Home</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/Souichikitai">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Projects
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                <Link to={'/project1'} style={{color: 'black'}}>Stock Administrator</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to={'/project2'} style={{color: 'black'}}>Library Administrator</Link>
                </DropdownItem>
                <DropdownItem>
                <Link to={'/security_analysis'} style={{color: 'black'}}>Security Analysis</Link>
                </DropdownItem>
                <DropdownItem>
                Coming soon...
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
      
    </div>

    </div>
    <Switch>
      {/* <Route exact path = "/" component={top} /> */}
      <Route path="/portfolio" component={top}/>
      <Route path = "/resume" component={resume} />
      <Route path = "/project1" component={project1} />
      <Route path = "/project2" component={project2}/>
      <Route path = "/security_analysis" component={security_analysis}/>
    </Switch>
    </Router>
  );
}

export default App;
