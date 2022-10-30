import Image from 'next/image'
import styles from '../../styles/Home.module.css';

export default function SectionLayout({ title, subtitle, img }) {
  return (
    <>
      <div className={styles.container}>
        <h1>{title}</h1>
     
      <p className={styles.grid}>{subtitle}</p>
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