import React from "react";
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
