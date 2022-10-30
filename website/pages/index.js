import Head from 'next/head';
import SectionLayout from '../components/section-layout/section-layout';
import styles from '../styles/Home.module.css';
import siteContent from '../public/PublicVariables';
import DoubleContentLayout from '../components/section-layout/double-content-layout';

export default function Home() {
  const Titles = siteContent.sectionTitles;
  const Subtitles = siteContent.sectionSubtitles;
  const SectionImg = siteContent.sectionImages;
  return (
    <>
    <Head>
         <title>TechFleet DAO</title>
         <meta name="description" content="TechFleet DAO" />
         <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className={styles.main}>
        {/* Navbar */}
        {/* Hero Banner */}
        <SectionLayout 
          title={Titles.title1} 
          subtitle={Subtitles.subtitle1}
          img={SectionImg.astronaut}
        ></SectionLayout>
        <DoubleContentLayout 
          title={Titles.title2}
          subtitle={Subtitles.subtitle2}
          item1={SectionImg.discover}
          item2={SectionImg.zoomCall}></DoubleContentLayout>
        <SectionLayout 
          title={Titles.title3}
          subtitle={Subtitles.subtitle3}
          img={SectionImg.path}></SectionLayout>
        <SectionLayout 
          title={Titles.title4}
          subtitle={Subtitles.subtitle4}></SectionLayout>
        <SectionLayout 
          title={Titles.title5}
          subtitle={Subtitles.subtitle5}></SectionLayout>
        <SectionLayout 
          title={Titles.title6}
          subtitle={Subtitles.subtitle6}></SectionLayout>
        <SectionLayout 
          title={Titles.title7}
          subtitle={Subtitles.subtitle7}></SectionLayout>
        <SectionLayout 
          title={Titles.title8}
          subtitle={Subtitles.subtitle8}></SectionLayout>
        <SectionLayout 
          title={Titles.title9}
          subtitle={Subtitles.subtitle9}></SectionLayout>
        <SectionLayout 
          title={Titles.title10}
          subtitle={Subtitles.subtitle10}></SectionLayout>
      </div>
      
    </>
  )
}
