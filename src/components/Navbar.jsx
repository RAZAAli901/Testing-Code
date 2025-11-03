// src/components/Navbar.jsx
import React from 'react';
// 1. Correct CSS Module import syntax:
import styles from './Navbar.module.css'; 

function Navbar() {
 return (
    // 2. Apply classes using the 'styles' object: styles.className
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#home">R.A.M.</a>
      </div>
      <ul className={styles['nav-links']}> {/* Use brackets for names with a hyphen */}
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;