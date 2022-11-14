import React from "react";
import Image from 'next/image';
import styles from './layout.module.scss';

export default function SingleContentLayout({ title, subtitle, children }) {
  return (
    <>
      <div className={styles.main}>
        <h1>{title}</h1>
     
      <p className={styles.subtitle}>{subtitle}</p>
      {children}
      </div>
    </>
  )
}


// FIX RENDERING ISSUE IN SECTIONS LAYOUT AS THEY'RE IMPORTED 
// DOUBLE CHECK STYLYING 
