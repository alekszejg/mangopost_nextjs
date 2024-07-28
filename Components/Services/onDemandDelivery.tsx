import PageWrapper from '@/Components/Layout/fullPage';
import Section from '@/Components/Layout/section'; 
import ServiceStages from "@/Components/Services/sections/serviceStages";
import CompareServices from "@/Components/Services/sections/compareServices";
import ServiceFeatures from "@/Components/Services/sections/serviceFeatures";

import localization from "@/Localization/services.json";
import allRoutes from "@/Localization/routes.json";

import { LanguageType, ServiceType } from "@/app/layout";
import { ButtonCategory } from "@/Components/UI/buttons";

import browseStep1 from "@/public/Images/browseStep1.svg";
import orderStep2 from "@/public/Images/orderStep2.svg";
import enjoyStep3 from "@/public/Images/enjoyStep3.svg";

import foodDriver from "@/public/Images/foodDriver.svg";
import customerSupport from "@/public/Images/customerSupport.svg";


export default function OnDemandDeliveryPage(props: {language: LanguageType}) {
    const { language } = props;

    const styling = {
        pageWrapper: {
            en: "min-750px:mx-20 ultrawide:mx-0", 
            de:"min-800px:mx-20 ultrawide:mx-0"
        },
        sections: {
            stages: "py-12",
            comparison: "py-12",
            features: "flex flex-col items-center pb-16 mx-6"
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
                imgOrder: "tablet:order-1",
                textOrder: "tablet:order-2",
                imgStyling: "mobile:w-[187px] min-800px:w-[237px]",
                imgSrc: foodDriver,
                imgAlt: "food delivery icon",
                header: localization.shared.features.drivers.header[language],
                text: localization.shared.features.drivers.text[language]
            },
            {
                imgOrder: "tablet:order-2",
                textOrder: "tablet:order-1",
                imgStyling: "w-[149px] min-800px:w-[200px]",
                imgSrc: customerSupport,
                imgAlt: "customer support icon",
                header: localization.shared.features.customerSupport.header[language],
                text: localization.shared.features.customerSupport.text[language]
            }
        ]
    }
    
    return (
        <PageWrapper language={language} margins={styling.pageWrapper[language]}>
            
            <Section styling={styling.sections.stages}>
                <ServiceStages {...serviceStageProps} />
            </Section>
            
            <Section styling={styling.sections.comparison}>
                <CompareServices {...compareServicesProps} />
            </Section>

            <Section styling={styling.sections.features}>
                <ServiceFeatures {...featuresSectionProps} />
            </Section>

        </PageWrapper>
    );
}

