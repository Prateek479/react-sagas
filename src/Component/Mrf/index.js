import React, { Component } from 'react';

class Header extends Component {
  componentDidMount() {
    this.props.createMrf()
  }
  render() {

    if(this.props.isLoading){
      return (
        <div>
            <div> <p> Hey Mrf Form Loading</p></div>
        </div>
      );      
    }else {
      return (
        <div>
            <div> <p> Hey Mrf Form Loaded</p></div>
        </div>
      );
    }

  }
}

export default Header;
