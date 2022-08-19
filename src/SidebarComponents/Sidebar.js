import React from 'react';
import { slide as Menu } from 'react-burger-menu';

function SideBar() {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/about">
        About
      </a>

      <a className="menu-item" href="/inventory">
        Inventory
      </a>

      <a className="menu-item" href="/more">
        More
      </a>

      <a className="menu-item" href="/checkout">
        Checkout
      </a>

    </Menu>
  );
};

export default SideBar;