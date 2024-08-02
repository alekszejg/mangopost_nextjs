import PageWrapper from '@/Components/Layout/fullPage';
import Section from '@/Components/Layout/section'; 
import ServiceStages from "@/app/(services)/(sections)/(orderStages)/serviceStages";
import CompareServices from "@/app/(services)/(sections)/(comparison)/compareServices";
import ServiceFeatures from "@/app/(services)/(sections)/(features)/serviceFeatures";

import localization from "@/Localization/services.json";
import allRoutes from "@/Localization/routes.json";

import { LanguageType, ServiceType } from "@/app/layout";
import { ButtonCategory } from "@/Components/UI/buttons";

import browseStep1 from "@/public/Images/browseStep1.svg";
import orderStep2 from "@/public/Images/orderStep2.svg";
import enjoyStep3 from "@/public/Images/enjoyStep3.svg";

import foodDriver from "@/public/Images/foodDriver.svg";
import customerSupport from "@/public/Images/customerSupport.svg";


export default function OnDemandDeliveryLayout(props: {language: LanguageType}) {
    const { language } = props;

    const styling = {
        pageWrapper: {
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
        service: "onDemand" as ServiceType,
        header: localization.onDemand.headers.howItWorks[language],
        stages: [
            {
                header: localization.shared.stages.browse.header[language],
                text: localization.shared.stages.browse.text[language],
                imgSrc: browseStep1,
                imgAlt: "browse food image",
            },
            {
                header: localization.shared.stages.order.header[language],
                text: localization.shared.stages.order.text[language],
                imgSrc: orderStep2,
                imgAlt: "order food image"
            },
            {
                header: localization.shared.stages.enjoy.header[language],
                text: localization.shared.stages.enjoy.text[language],
                imgSrc: enjoyStep3,
                imgAlt: "enjoy the food image" 
            }
        ]
    };
    
    const compareServicesProps = {
        header:  localization.onDemand.headers.comparison[language],
        onDemand: {
            service: "onDemand" as ServiceType,
            header: localization.shared.comparison.onDemand.header[language],
            text: localization.shared.comparison.onDemand.text[language],
            features: localization.shared.comparison.onDemand.features[language],
            buttons: [
                {
                    category: "general" as ButtonCategory,
                    url: allRoutes.onDemandDelivery[language],
                    text: localization.onDemand.buttons.orderNow[language] 
                }
            ]
        },
        scheduled: {
            service: "scheduled" as ServiceType,
            header: localization.shared.comparison.scheduled.header[language],
            text: localization.shared.comparison.scheduled.text[language],
            features: localization.shared.comparison.scheduled.features[language],
            buttons: [
                {
                    category: "learnMore" as ButtonCategory,
                    url: allRoutes.scheduledDelivery[language],
                    text: localization.onDemand.buttons.learnMore[language]
                }
            ]
        }
    }

    const featuresSectionProps = {
        header: localization.onDemand.headers.features[language],
        text: localization.onDemand.text.features[language],
        features: [
            {
                textOrder: "min-700px:order-2",
                imgStyling: "w-[187px] min-700px:w-[237px] min-700px:order-1",
                imgSrc: foodDriver,
                imgAlt: "food delivery icon",
                header: localization.shared.features.drivers.header[language],
                text: localization.shared.features.drivers.text[language]
            },
            {
                textOrder: "min-700px:order-1",
                imgStyling: "w-[149px] min-700px:w-[200px] min-700px:order-2",
                imgSrc: customerSupport,
                imgAlt: "customer support icon",
                header: localization.shared.features.customerSupport.header[language],
                text: localization.shared.features.customerSupport.text[language]
            }
        ]
    }
    
    return (
        <PageWrapper language={language} margins={styling.pageWrapper[language]}>
            
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

