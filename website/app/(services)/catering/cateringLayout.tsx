import PageWrapper from '@/Components/Layout/fullPage';
import Section from '@/Components/Layout/section'; 
import ServiceStages from "@/app/(services)/(orderStages)/serviceStages";
import CompareServices from "@/app/(services)/(comparison)/compareServices";
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
            en: "min-750px:py-16",
            de: "min-800px:py-16" 
        },
        comparisonSection: "py-7 min-800px:py-12",
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
    
    const compareServicesProps = {
        header:  localization.catering.headers.comparison[language],
        catering: {
            service: "catering" as ServiceType,
            header: localization.comparison.catering.header,
            text: localization.comparison.catering.text[language],
            features: localization.comparison.catering.features[language],
            buttons: [
                {
                    category: "general" as ButtonCategory,
                    url: allRoutes.catering[language],
                    text: localization.catering.buttons.orderNow[language] 
                }
            ]
        },
        cafe: {
            service: "cafe" as ServiceType,
            header: localization.comparison.cafe.header,
            text: localization.comparison.cafe.text[language],
            features: localization.comparison.cafe.features[language],
            buttons: [
                {
                    category: "learnMore" as ButtonCategory,
                    url: allRoutes.cafe[language],
                    text: localization.catering.buttons.learnMore[language]
                }
            ]
        }
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
            
            <Section styling={styling.comparisonSection}>
                <CompareServices {...compareServicesProps} />
            </Section>

            <Section styling={`${styling.featuresSection.general} ${styling.featuresSection[language]}`}>
                <ServiceFeatures {...featuresSectionProps} />
            </Section>

        </PageWrapper>
    );
}

