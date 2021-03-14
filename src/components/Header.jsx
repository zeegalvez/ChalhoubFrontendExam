import React from 'react';
import Logo from './Logo.jsx';
import Navigation from './Navigation.jsx';

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <Logo/>
        <Navigation/>
      </header>
      // TODO: Produt component
    );
  }
}

export default Header;