import PageWrapper from '@/Components/Layout/fullPage'; 
import Section from '@/Components/Layout/section';
import Hero from '@/app/(homepage)/(hero)/hero';
import ServiceCard from '@/app/(homepage)/(services)/serviceCard'

import { LanguageType, ServiceType } from '@/app/layout';
import { ButtonCategory } from "@/Components/UI/buttons";

import localization from "@/Localization/homepage.json";
import allRoutes from "@/Localization/routes.json";


import officeLunch from "@/public/Images/officeLunch.jpg";
import phoneApp from "@/public/Images/phoneApp.jpg";


export default function HomepageLayout(props: {language: LanguageType}) {
    const { language } = props;

    const styling = {
        // 10rem to account for horizontal margins (mx-20)
        pageBody: {
            general: "max-w-[calc(1400px-10rem)] ultrawide:mx-auto", 
            en: "min-750px:mx-20", 
            de: "min-800px:mx-20"
        },
        heroSection: {
            general: "flex flex-col items-center py-7 ultrawide:gap-x-10",
            en: "min-750px:flex-row min-750px:items-stretch min-750px:gap-x-8 min-750px:py-16",
            de: "min-800px:flex-row min-800px:items-stretch min-800px:gap-x-8 min-800px:py-16"
        },
        serviceCardsSection: "flex flex-col gap-y-14 pt-7 pb-20",
        servicesHeader: "text-center font-jost-extrabold tracking-wide text-xl",
        servicesDescription: "text-center w-4/5 mx-auto text-base min-900px:w-[600px]"
    };
    
    const serviceCardProps = {
        catering: {
            language: language,
            serviceType: "catering" as ServiceType,
            header: localization.serviceCards.catering.header,
            text: localization.serviceCards.catering.text[language],
            features: localization.serviceCards.catering.features[language],
            buttons: [
                {
                    category: "general" as ButtonCategory,
                    url: "https://shop.mangopost.app/menu",
                    text: localization.serviceCards.catering.buttons.orderNow[language]
                },
                {
                    category: "learnMore" as ButtonCategory,
                    url: allRoutes.catering[language],
                    text: localization.serviceCards.catering.buttons.learnMore[language]
                }
            ],
            imgSrc: officeLunch,
        },
        cafe: {
            language: language,
            serviceType: "cafe" as ServiceType,
            header: localization.serviceCards.cafe.header,
            text: localization.serviceCards.cafe.text[language],
            features: localization.serviceCards.cafe.features[language],
            buttons: [
                {
                    category: "general" as ButtonCategory,
                    url: "https://shop.mangopost.app/customerdata/registration",
                    text: localization.serviceCards.cafe.buttons.registerNow[language]
                },
                {
                    category: "learnMore" as ButtonCategory,
                    url: allRoutes.cafe[language],
                    text: localization.serviceCards.cafe.buttons.learnMore[language]
                }
            ],
            imgSrc: phoneApp,
        }
    }

    
    return (
        <PageWrapper language={language} margins={`${styling.pageBody.general} ${styling.pageBody[language]}`}>
            
            <Section styling={`${styling.heroSection.general} ${styling.heroSection[language]}`}>
                <Hero language={language} />
            </Section>

            <h2 className={styling.servicesHeader}>{localization.serviceCards.mainHeader[language]}</h2>
            <p className={styling.servicesDescription}>{localization.serviceCards.description[language]}</p>
            
            <Section styling={styling.serviceCardsSection}>
                <ServiceCard {...serviceCardProps.catering} />
                <ServiceCard {...serviceCardProps.cafe} />
            </Section>

        </PageWrapper>
    );
}


