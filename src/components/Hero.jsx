// src/components/Hero.jsx
import React from 'react';
// 1. Correct CSS Module import syntax:
import styles from './Hero.module.css'; 

function Hero() {
  return (
    // 2. Apply classes using the 'styles' object:
    <section className={styles['hero-section']}>
      <div className={styles['hero-content']}> 
        <h1>Raza Ali Murtaza</h1>
        <p>A passionate developer specializing in modern web solutions. 
          I build experiences that are clean, fast, and beautiful.</p>
        <button>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;