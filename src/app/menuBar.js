import React, {Component} from 'react';

const Isvg = require('react-inlinesvg');

export class MenuBar extends Component {
  render() {
    return (
      <div className="kg-menubar">
        <div className="kg-menubar--logo">
          <Logo/>
        </div>
        <div className="kg-menubar--nav">
          <Nav/>
        </div>
      </div>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <div className="kg-logo ">
        <div className="kg-logo--medium">
          <Isvg src="images/svg/logo--medium.svg"/>
        </div>
      </div>
    );
  }
}
class Nav extends Component {
  render() {
    return (
      <div className="kg-nav">
        <div className="kg-btn">
          <Isvg src="images/svg/icn-user--white.svg" className="kg-btn--profile"/>
        </div>
        <div className="kg-btn">
          <Isvg src="images/svg/icn-logout--white.svg" className="kg-btn--profile"/>
        </div>
      </div>
    );
  }
}
