import React from 'react'
import DoubleContentLayout from '../../../section-layouts/double-content-layout'
import PublicVariables from '../../../../pages/api/publicVariables.json'

export default function WorkForYou() {
  return (
    <>
      <DoubleContentLayout
        title={PublicVariables.sectionTitles.title6}
        item1={PublicVariables.sectionImages.eclipseGroup}
        //Item 2 image is a placeholder for now
        item2={PublicVariables.sectionImages.weCanHelp}
        item2Height={1200}
        item2Width={1200}>
      </DoubleContentLayout>
    </>
  )
}
