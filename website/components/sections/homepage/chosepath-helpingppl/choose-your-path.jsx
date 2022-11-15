import React from "react";
import Image from "next/image";
import SectionLayout from "../../../section-layouts/single-content-layout";
import PublicVariables from '../../../../pages/api/publicVariables.json';

export default function ChooseYourPath() {
    return (
        <>
            <SectionLayout 
                title={PublicVariables.sectionTitles.title3} 
                subtitle={PublicVariables.sectionSubtitles.subtitle5}>
                <Image src={PublicVariables.sectionImages.path} height={400} width={800} />
            </SectionLayout>
            <SectionLayout
                title={PublicVariables.sectionTitles.title4}>
                <Image src={PublicVariables.sectionImages.learningGrid} height={400} width={600} />
            </SectionLayout>
        </>
    )
}
