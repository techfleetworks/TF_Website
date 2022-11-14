//import the css styling from the scss file. reference next.js module documentation 
// import the styling sheet
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className
//note that some things might not work (rare)and might need to use the react bootstrap components
//use image and link element from next.js framework, refer to documentation.
import React from 'react'
import Image from 'next/image';
import SingleContentLayout from '../../../section-layouts/single-content-layout';
import DoubleContentLayout from '../../../section-layouts/double-content-layout';
import PublicVariables from '../../../../pages/api/publicVariables.json';

export default function HowItWorks() {
  return (
    <>
      <SingleContentLayout 
      title={PublicVariables.sectionTitles.title1}
      subtitle={PublicVariables.sectionSubtitles.subtitle1}>
        <Image src={PublicVariables.sectionImages.astronaut} height={400} width={400} />
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


