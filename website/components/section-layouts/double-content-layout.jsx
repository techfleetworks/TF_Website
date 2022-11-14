import Image from 'next/image'
import styles from './layout.module.scss';

export default function DoubleContentLayout({ item1, item2, title, subtitle, item2Width, item2Height, children }) {
  return (
    <>
    <div className={styles.main}>
        <h1>{title}</h1>
     
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.grid}>
      <Image
        src={item1}
        width={400}
        height={300}
        alt={title}
      />
      <Image
        src={item2}
        width={item2Width}
        height={item2Height}
        alt={title}
      />
      {children}
      </div>
      </div>
    </>
  )
}