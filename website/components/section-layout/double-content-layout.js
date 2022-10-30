import Image from 'next/image'
import styles from '../../styles/Home.module.css';

export default function DoubleContentLayout({ item1, item2, title, subtitle }) {
  return (
    <>
    <div className={styles.container}>
        <h1>{title}</h1>
     
      <p className={styles.grid}>{subtitle}</p>
      <Image
        src={item1}
        width={400}
        height={300}
        alt={title}
      />
      <Image
        src={item2}
        width={500}
        height={300}
        alt={title}
      />
      </div>
    </>
  )
}