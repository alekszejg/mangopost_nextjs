import PageWrapper from '@/Components/Layout/fullPage'; 
import Section from '@/Components/Layout/section';
import Hero from './sections/hero/hero';
import ServiceCard from './sections/serviceCards/serviceCard';

import { LanguageType, ServiceType } from '@/app/layout';
import { ButtonCategory } from "@/Components/UI/buttons";

import localization from "@/Localization/homepage.json";
import allRoutes from "@/Localization/routes.json";


import officeLunch from "@/public/Images/officeLunch.jpg";
import onDemandApp from "@/public/Images/onDemandApp.jpg";


export default function Homepage(props: {language: LanguageType}) {
    const { language } = props;

    const styling = {
        pageWrapper: {
            en: "mx-6 tablet:mx-0 min-750px:mx-20 ultrawide:mx-0", 
            de: "mx-6 tablet:mx-0 min-750px:mx-20 ultrawide:mx-0"
        },
        sections: {
            hero: {
                general: "flex flex-col items-center max-w-[calc(1400px-10rem)] py-7 ultrawide:justify-center ultrawide:gap-x-10 ultrawide:mx-auto",
                en: "min-750px:flex-row min-750px:items-stretch min-750px:gap-x-8 min-750px:py-14 min-750px:mt-4",
                de: "min-800px:flex-row min-800px:items-stretch min-800px:gap-x-8 min-800px:py-14 min-800px:mt-4"
            },
            serviceCard: {
                general: "flex flex-col py-12 mb-12 shadow-[0_2px_8px_-3px] shadow-black max-w-[calc(1400px-10rem)] ultrawide:mx-auto",
                en: "min-800px:flex-row min-800px:justify-center min-800px:items-center min-800px:imgTextGap min-800px:py-28 min-800px:rounded-3xl",
                de: "desktop:flex-row desktop:justify-center desktop:items-center desktop:imgTextGap desktop:py-28 desktop:rounded-3xl"
            },
        }    
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
        <PageWrapper language={language} margins={styling.pageWrapper[language]}>
            
            <Section styling={`${styling.sections.hero.general} ${styling.sections.hero[language]}`}>
                <Hero language={language} />
            </Section>

            <Section styling={`${styling.sections.serviceCard.general} ${styling.sections.serviceCard[language]}`}>
                <ServiceCard {...serviceCardProps.onDemand} />
            </Section>

            <Section styling={`${styling.sections.serviceCard.general} ${styling.sections.serviceCard[language]}`}>
                <ServiceCard {...serviceCardProps.scheduled} />
            </Section>
    
        </PageWrapper>
    );
}


