import PageWrapper from '@/Components/Layout/fullPage';
import Section from '@/Components/Layout/section'; 
import ServiceStages from "@/app/(services)/(orderStages)/serviceStages";
import IsServiceSuitable from "@/app/(services)/(isServiceSuitable)/isServiceSuitable";
import ServiceFeatures from "@/app/(services)/(features)/serviceFeatures";

import localization from "@/Localization/services.json";
import allRoutes from "@/Localization/routes.json";

import { LanguageType, ServiceType } from "@/app/layout";
import { ButtonCategory } from "@/Components/UI/buttons";

import browseStep1 from "@/public/Images/browseStep1.svg";
import orderStep2 from "@/public/Images/orderStep2.svg";
import enjoyStep3 from "@/public/Images/enjoyStep3.svg";

import foodDriver from "@/public/Images/foodDriver.svg";
import customerSupport from "@/public/Images/customerSupport.svg";


export default function CateringLayout(props: {language: LanguageType}) {
    const { language } = props;

    const styling = {
        pageBody: {
            en: "min-750px:mx-20 ultrawide:mx-0", 
            de:"min-800px:mx-20 ultrawide:mx-0"
        },
        stagesSection: {
            general: "flex flex-col items-center py-7 mx-6 min-800px:mx-0",
            en: "min-750px:py-12",
            de: "min-800px:py-12" 
        },
        isServiceSuitableSection: {
            general: "flex flex-col items-center my-7 tablet:mx-[5vw]",
            en: "min-750px:mx-0 min-750px:mt-4 min-750px:mb-12",
            de: "min-800px:mx-0 min-800px:mt-4 min-800px:mb-12"
        },
        featuresSection: {
            general: "flex flex-col items-center pb-16 mx-6",
            en: "max-w-[750px] min-750px:mx-auto",
            de: "max-w-[800px] min-800px:mx-auto"
        }
    };

    const serviceStageProps = {
        service: "catering" as ServiceType,
        header: localization.catering.headers.howItWorks[language],
        stages: [
            {
                header: localization.stages.browse.header[language],
                text: localization.stages.browse.text[language],
                imgSrc: browseStep1,
                imgAlt: language === "en" ? "Step 1: BROWSE" : "Schritt 1: WÄHLEN" 
            },
            {
                header: localization.stages.order.header[language],
                text: localization.stages.order.text[language],
                imgSrc: orderStep2,
                imgAlt: language === "en" ? "Step 2: ORDER" : "Schritt 2: BESTELLEN" 
            },
            {
                header: localization.stages.enjoy.header[language],
                text: localization.stages.enjoy.text[language],
                imgSrc: enjoyStep3,
                imgAlt: language === "en" ? "Step 3: ENJOY" : "Schritt 3: GENIEßEN" 
            }
        ]
    };
    
    const isServiceSuitableProps = {
        header:  localization.catering.headers.suitable[language],
        service: {
            serviceType: "catering" as ServiceType,
            header: localization.comparison.catering.header,
            text: localization.comparison.catering.text[language],
            features: localization.comparison.catering.features[language],
            buttons: [
                {
                    category: "general" as ButtonCategory,
                    url: "https://shop.mangopost.app/menu",
                    text: localization.buttons.orderNow[language] 
                },
                {
                    category: "learnMore" as ButtonCategory,
                    url: allRoutes.cafe[language],
                    text: localization.buttons.learnMore.cafe[language] 
                },
            ]
        },
    }

    const featuresSectionProps = {
        header: localization.catering.headers.features[language],
        text: localization.catering.text.features[language],
        features: [
            {
                textOrder: "min-700px:order-2",
                imgStyling: "w-[187px] min-700px:w-[237px] min-700px:order-1",
                imgSrc: foodDriver,
                imgAlt: "",
                header: localization.features.drivers.header[language],
                text: localization.features.drivers.text[language]
            },
            {
                textOrder: "min-700px:order-1",
                imgStyling: "w-[149px] min-700px:w-[200px] min-700px:order-2",
                imgSrc: customerSupport,
                imgAlt: "",
                header: localization.features.support.header[language],
                text: localization.features.support.text[language]
            }
        ]
    }
    
    return (
        <PageWrapper language={language} margins={styling.pageBody[language]}>
            
            <Section styling={`${styling.stagesSection.general} ${styling.stagesSection[language]}`}>
                <ServiceStages {...serviceStageProps} />
            </Section>
            
            <Section styling={`${styling.isServiceSuitableSection.general} ${styling.isServiceSuitableSection[language]}`}>
                <IsServiceSuitable {...isServiceSuitableProps} />
            </Section>

            <Section styling={`${styling.featuresSection.general} ${styling.featuresSection[language]}`}>
                <ServiceFeatures {...featuresSectionProps} />
            </Section>

        </PageWrapper>
    );
}

