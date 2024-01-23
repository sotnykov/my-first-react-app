import React from 'react';

const Sidebar = () => {
  return (
    <div style={{ backgroundColor: 'lightgreen', width: '20%', padding: '10px', float: 'left' }}>
      <h2>Left navigation</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>
          <a href="#">Main</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
