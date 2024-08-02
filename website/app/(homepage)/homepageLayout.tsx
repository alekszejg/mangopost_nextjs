import PageWrapper from '@/Components/Layout/fullPage'; 
import Section from '@/Components/Layout/section';
import Hero from '@/app/(homepage)/(sections)/(hero)/hero';
import ServiceCard from '@/app/(homepage)/(sections)/(services)/serviceCard'

import { LanguageType, ServiceType } from '@/app/layout';
import { ButtonCategory } from "@/Components/UI/buttons";

import localization from "@/Localization/homepage.json";
import allRoutes from "@/Localization/routes.json";


import officeLunch from "@/public/Images/officeLunch.jpg";
import onDemandApp from "@/public/Images/onDemandApp.jpg";


export default function HomepageLayout(props: {language: LanguageType}) {
    const { language } = props;

    const styling = {
        // 10rem to account for horizontal margins (mx-20)
        pageWrapper: {
            general: "max-w-[calc(1400px-10rem)] ultrawide:mx-auto", 
            en: "min-750px:mx-20", 
            de: "min-750px:mx-20"
        },
        heroSection: {
            general: "flex flex-col items-center py-7 ultrawide:gap-x-10",
            en: "min-750px:flex-row min-750px:items-stretch min-750px:gap-x-8 min-750px:py-16",
            de: "min-800px:flex-row min-800px:items-stretch min-800px:gap-x-8 min-800px:py-16"
        },
        serviceCardsSection: "flex flex-col gap-y-14 pt-7 pb-20",
        servicesHeader: "text-center font-jost-extrabold tracking-wide text-xl",
        servicesDescription: "text-center text-base"
    };
    
    const serviceCardProps = {
        onDemand: {
            language: language,
            serviceType: "onDemand" as ServiceType,
            header: localization.serviceCards.onDemand.header[language],
            text: localization.serviceCards.onDemand.text[language],
            features: localization.serviceCards.onDemand.features[language],
            buttons: [
                {
                    category: "general" as ButtonCategory,
                    url: "https://shop.mangopost.app/menu",
                    text: localization.serviceCards.onDemand.buttons.orderNow[language]
                },
                {
                    category: "learnMore" as ButtonCategory,
                    url: allRoutes.onDemandDelivery[language],
                    text: localization.serviceCards.onDemand.buttons.learnMore[language]
                }
            ],
            imgSrc: officeLunch,
            imgAlt: "an image with multiple employees",
        },
        scheduled: {
            language: language,
            serviceType: "scheduled" as ServiceType,
            header: localization.serviceCards.scheduled.header[language],
            text: localization.serviceCards.scheduled.text[language],
            features: localization.serviceCards.scheduled.features[language],
            buttons: [
                {
                    category: "general" as ButtonCategory,
                    url: "https://shop.mangopost.app/customerdata/registration",
                    text: localization.serviceCards.scheduled.buttons.registerNow[language]
                },
                {
                    category: "learnMore" as ButtonCategory,
                    url: allRoutes.scheduledDelivery[language],
                    text: localization.serviceCards.scheduled.buttons.learnMore[language]
                }
            ],
            imgSrc: onDemandApp,
            imgAlt: "an image with multiple employees"
        }
    }

    
    return (
        <PageWrapper language={language} margins={`${styling.pageWrapper.general} ${styling.pageWrapper[language]}`}>
            
            <Section styling={`${styling.heroSection.general} ${styling.heroSection[language]}`}>
                <Hero language={language} />
            </Section>

            <h2 className={styling.servicesHeader}>{localization.serviceCards.mainHeader[language]}</h2>
            <p className={styling.servicesDescription}>{localization.serviceCards.description[language]}</p>
            
            <Section styling={styling.serviceCardsSection}>
                <ServiceCard {...serviceCardProps.onDemand} />
                <ServiceCard {...serviceCardProps.scheduled} />
            </Section>

        </PageWrapper>
    );
}


