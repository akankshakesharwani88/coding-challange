import React, { useState } from 'react';
import Path from '../assets/images/icons/Path.svg';

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <aside
        className={`sidebar-wrapper ${isSidebarOpen ? 'open' : ''} custom-scrollbar wow fadeInLeft`}
      >
        <div className="sidebar-content-wrapper">
          <ul className="sidebar-list">
            <li className={`sidebar-list-item has-subnav ${isSidebarOpen ? 'open' : ''}`} id="listTem">
              <button className="sidebar-link" id="pro_toggle" onClick={toggleSidebar}>
                <img src={Path} alt="Product List" />
                <span className="item-text">Ecommerce</span>
              </button>
              {isSidebarOpen && (
                <ul>
                  <li>
                    <a href="products.html" className="sidebar-link">Product List</a>
                  </li>
                  <li>
                    <a href="addproduct.html" className="sidebar-link active">Add Product</a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
