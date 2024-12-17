import React from 'react';
import { Home, Search, RotateCw, Clock, User } from 'lucide-react';
import './index.less';

const TabBar: React.FC = () => {
  return (
    <nav className="tab-bar">
      <a href="#" className="tab-item">
        <Home className="tab-icon" />
        <span className="tab-label">Home</span>
      </a>
      
      <a href="#" className="tab-item">
        <Search className="tab-icon" />
        <span className="tab-label">Search</span>
      </a>
      
      <a href="#" className="tab-item center-tab">
        <div className="center-button">
          <RotateCw className="center-icon" />
        </div>
      </a>
      
      <a href="#" className="tab-item active">
        <Clock className="tab-icon" />
        <span className="tab-label">History</span>
      </a>
      
      <a href="#" className="tab-item">
        <User className="tab-icon" />
        <span className="tab-label">Profile</span>
      </a>
    </nav>
  );
};

export default TabBar;

