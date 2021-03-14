import React from 'react';
import SearchField from './SearchField.jsx';

class Navigation extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="nav-bar">
          {/* TODO: load nav dynamically */}
          <nav>
            <ul className="navigation">
              <li><a href="" title=""><span>Men</span></a></li>
              <li><a href="" title=""><span>Women</span></a></li>
              <li><a href="" title=""><span>Kids</span></a></li>
              <li><a href="" title=""><span>FTW</span></a></li>
              <li><a href="" title=""><span>Accessories</span></a></li>
            </ul>
          </nav>
          <SearchField/>
        </div>
      </div>
    )
  }
}

export default Navigation;
