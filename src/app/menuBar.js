import React, {Component} from 'react';

export class MenuBar extends Component {
  render() {
    return (
      <div className="kg-menubar">
        <Logo/>
        <Nav/>
      </div>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <img src="images/logo.png"/>
    );
  }
}
class Nav extends Component {
  render() {
    return (
      <div className="kg-nav">
        <img src="images/btn_profile.png" className="kg-btn kg-btn--profile"/>
        <img src="images/btn_login.png" className="kg-btn kg-btn--login"/>
      </div>
    );
  }
}
