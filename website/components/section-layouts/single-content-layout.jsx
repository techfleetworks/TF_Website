import React from "react";
import Image from 'next/image';
// import styles from './layout.module.scss';

export default function SingleContentLayout({ title, subtitle, img, width, height }) {
  return (
    <>
      <div className={styles.container}>
        <h1>{title}</h1>
     
      <p className={styles.grid}>{subtitle}</p>
      {/* JS for if img is passed */}
      <Image
        src={img}
        width={800}
        height={400}
        alt={title}
      />
      </div>
    </>
  )
}
