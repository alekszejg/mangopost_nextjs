import React from 'react';
import localization from "@/Localization/aboutUs.json";
import { LanguageType } from "@/app/layout";

import PageWrapper from '../../Components/Layout/fullPage'; 
import Section from '../../Components/Layout/section';


export default function AboutUsPage(props: {language: LanguageType;}) {
    const { language } = props;
    
    const styling = {
        wrappers: {
            pageBody: "mx-6 tablet:mx-10 ultrawide:mx-0",
            about: "max-w-[700px] pt-12 pb-6 min-800px:mx-auto", 
            contact: "pt-6 pb-12"
        },
        headers: {
            about: "text-left font-jost-extrabold text-xl tablet:text-center tablet:text-2xl",
            contact: "text-center font-jost-extrabold text-lg tablet:text-xl"
        },
        text: {
            about: "text-base tablet:text-lg",
            contact: "text-center text-lg tablet:text-xl"
        },
    };

    
    return (
        <PageWrapper language={language} margins={styling.wrappers.pageBody}>
            
            <Section styling={styling.wrappers.about}>
                <h1 className={styling.headers.about}>{localization.about.header[language]}</h1>
                <p className={styling.text.about} dangerouslySetInnerHTML={{__html: localization.about.text[language]}} />
            </Section>

            <Section styling={styling.wrappers.contact}>
                <h1 className={styling.headers.contact}>{localization.contact.header[language]}</h1>
                <p className={styling.text.contact}>{localization.contact.text[language]}</p>
            </Section>

        </PageWrapper>
    );
}



