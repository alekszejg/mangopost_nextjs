import PageWrapper from '@/Components/Layout/fullPage'; 
import Section from '@/Components/Layout/section';
import ServiceStages from "@/app/(services)/(sections)/(orderStages)/serviceStages";
import CompareServices from "@/app/(services)/(sections)/(comparison)/compareServices";
import ServiceFeatures from "@/app/(services)/(sections)/(features)/serviceFeatures";

import localization from "@/Localization/services.json";
import allRoutes from "@/Localization/routes.json";

import { LanguageType, ServiceType } from "@/app/layout";
import { ButtonCategory } from "@/Components/UI/buttons";

import joinStep1 from "@/public/Images/joinStep1.svg";
import browseStep2 from "@/public/Images/browseStep2.svg";
import orderStep3 from "@/public/Images/orderStep3.svg";
import enjoyStep4 from "@/public/Images/enjoyStep4.svg";

import favouriteFood from "@/public/Images/favouriteFood.svg";
import foodDriver from "@/public/Images/foodDriver.svg";
import customerSupport from "@/public/Images/customerSupport.svg";


export default function ScheduledDeliveryLayout(props: {language: LanguageType}) {
    const { language } = props;

    const styling = {
        pageBody: {
            en: "min-750px:mx-20 ultrawide:mx-0", 
            de:"min-800px:mx-20 ultrawide:mx-0"
        },
        stagesSection: {
            general: "flex flex-col items-center py-7 mx-6 min-800px:mx-0 ",
            en: "min-750px:py-12",
            de: "min-800px:py-12"
        },
        comparisonSection: "py-7 min-800px:py-12",
        featuresSection: {
            general: "flex flex-col items-center pb-16 mx-6",
            en: "max-w-[750px] min-750px:mx-auto",
            de: "max-w-[800px] min-800px:mx-auto"
        } 
    };

    const serviceStageProps = {
        service: "scheduled" as ServiceType,
        header: localization.scheduled.headers.howItWorks[language],
        stages: [
            {
                header: localization.shared.stages.join.header[language],
                text: localization.shared.stages.join.text[language],
                imgSrc: joinStep1,
                imgAlt: language === "en" ? "Step 1: JOIN" : "Schritt 1: MITGLIED WERDEN"  
            },
            {
                header: localization.shared.stages.browse.header[language],
                text: localization.shared.stages.browse.text[language],
                imgSrc: browseStep2,
                imgAlt: language === "en" ? "Step 2: BROWSE" : "Schritt 2: WÄHLEN"
            },
            {
                header: localization.shared.stages.order.header[language],
                text: localization.shared.stages.order.text[language],
                imgSrc: orderStep3,
                imgAlt: language === "en" ? "Step 3: ORDER" : "Schritt 3: BESTELLEN" 
            },
            {
                header: localization.shared.stages.enjoy.header[language],
                text: localization.shared.stages.enjoy.text[language],
                imgSrc: enjoyStep4,
                imgAlt: language === "en" ? "Step 4: ENJOY" : "Schritt 4: GENIEßEN" 
            }
        ]
    };
    
    const compareServicesProps = {
        header: localization.scheduled.headers.comparison[language],
        onDemand: {
            service: "onDemand" as ServiceType,
            header: localization.shared.comparison.onDemand.header[language],
            text: localization.shared.comparison.onDemand.text[language],
            features: localization.shared.comparison.onDemand.features[language],
            buttons: [
                {
                    category: "general" as ButtonCategory,
                    url: "https://shop.mangopost.app/menu",
                    text: localization.onDemand.buttons.orderNow[language]
                },
                {
                    category: "learnMore" as ButtonCategory,
                    url: allRoutes.onDemandDelivery[language],
                    text: localization.onDemand.buttons.learnMore[language] 
                }
            ]
        },
        scheduled: {
            service: "scheduled" as "onDemand" | "scheduled",
            header: localization.shared.comparison.scheduled.header[language],
            text: localization.shared.comparison.scheduled.text[language],
            features: localization.shared.comparison.scheduled.features[language],
            buttons: [
                {
                    category: "general" as ButtonCategory,
                    url: "https://shop.mangopost.app/customerdata/registration",
                    text: localization.scheduled.buttons.signup[language]
                },
                {
                    category: "general" as ButtonCategory,
                    url: "https://shop.mangopost.app/menu",
                    text: localization.scheduled.buttons.login[language]
                }
            ]
        } 
    }

    const featuresProps = {
        header: localization.scheduled.headers.features[language],
        text: localization.scheduled.text.features[language],
        features: [
            {
                textOrder: "min-700px:order-2",
                imgStyling: "w-[203px] min-700px:w-[253px] min-700px:order-1",
                imgSrc: favouriteFood,
                header: localization.shared.features.favouriteFood.header[language],
                text: localization.shared.features.favouriteFood.text[language]
            },
            {
                textOrder: "min-700px:order-1",
                imgStyling: "w-[187px] min-700px:w-[237px] min-700px:order-2",
                imgSrc: foodDriver,
                header: localization.shared.features.drivers.header[language],
                text: localization.shared.features.drivers.text[language]
            },
            {
                textOrder: "min-700px:order-2",
                imgStyling: "w-[149px] min-700px:w-[200px] min-700px:order-1",
                imgSrc: customerSupport,
                header: localization.shared.features.customerSupport.header[language],
                text: localization.shared.features.customerSupport.text[language]
            }
        ]
    };

    return (
        <PageWrapper language={language} margins={styling.pageBody[language]}>
            
            <Section styling={`${styling.stagesSection.general} ${styling.stagesSection[language]}`}>
                <ServiceStages {...serviceStageProps} />
            </Section>

            <Section styling={styling.comparisonSection}>
                <CompareServices {...compareServicesProps} />
            </Section>

            <Section styling={`${styling.featuresSection.general} ${styling.featuresSection[language]}`}>
                <ServiceFeatures {...featuresProps} />
            </Section>
            
        </PageWrapper>
    );
}
