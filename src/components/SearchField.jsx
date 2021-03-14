import React from 'react';

class SearchField extends React.Component {
  render () {
    return (
      <div className="search-field">
            <input 
              type="text"
              name="search"
              placeholder="Search"/>
      </div>
    )
  }
}

export default SearchField;
