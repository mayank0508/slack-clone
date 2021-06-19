import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>AbhasRizio Romano</h2>
        <h3>
          <FiberManualRecordIcon />
          Mayank 🐐
        </h3>
      </div>
    </div>
  );
}

export default Sidebar;
