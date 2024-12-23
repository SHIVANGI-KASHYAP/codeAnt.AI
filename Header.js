import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>Repositories</h1>
      <div className="header-actions">
        <button className="refresh-btn">Refresh All</button>
        <button className="add-repo-btn">+ Add Repository</button>
      </div>
    </div>
  );
};

export default Header;
