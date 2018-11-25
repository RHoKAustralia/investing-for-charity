import React from 'react';
import {
  Button,
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
  DropdownItem } from 'reactstrap';
  import Cookies from 'js-cookie';


export default class TopNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  logout(){
    Cookies.remove('id_token', { path: '' });
    window.location.reload()

  }
  render() {
 
  
    return (
      <div>
        <Navbar color="info" light expand="md" className="bg-primary">
          <NavbarBrand href="/"><span className="brand">Investing In Charity</span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button onClick={this.logout} color="info">Logout</Button>
                {/* <NavLink onClick={console.log('ok')} className="logout">Logout</NavLink> */}
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}