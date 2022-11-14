import React from 'react'
import Image from 'next/image';
import SingleContentLayout from '../../../section-layouts/single-content-layout';
import DoubleContentLayout from '../../../section-layouts/double-content-layout';
import PublicVariables from '../../../../pages/api/publicVariables.json';
import styles from './how-it-works.module.scss';

export default function HowItWorks() {
  return (
    <>
      <SingleContentLayout 
      title={PublicVariables.sectionTitles.title1}
      subtitle={PublicVariables.sectionSubtitles.subtitle1}>
        <Image className={styles.rotate} src={PublicVariables.sectionImages.astronaut} height={400} width={400} />
      </SingleContentLayout>
      
      <DoubleContentLayout
        title={PublicVariables.sectionTitles.title2}
        subtitle={PublicVariables.sectionSubtitles.subtitle2}
        item1={PublicVariables.sectionImages.discover}
        item2={PublicVariables.sectionImages.zoomCall}
        item2Width={400}
        item2Height={300}></DoubleContentLayout>
    </>
  )
}


