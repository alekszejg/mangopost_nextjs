import PageWrapper from '@/Components/Layout/fullPage'; 
import Section from '@/Components/Layout/section';
import ServiceStages from "@/Components/Services/serviceStages";
import CompareServices from "@/Components/Services/compareServices";
import ServiceFeatures from "@/Components/Services/serviceFeatures";

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
        pageWrapper: {
            en: "min-750px:mx-20 ultrawide:mx-0", 
            de:"min-800px:mx-20 ultrawide:mx-0"
        },
        sections: {
            stages: "flex flex-col items-center py-12",
            comparison: "py-12",
            features: "flex flex-col items-center pb-16 mx-6"
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
                imgAlt: "create account icon", 
            },
            {
                header: localization.shared.stages.browse.header[language],
                text: localization.shared.stages.browse.text[language],
                imgSrc: browseStep2,
                imgAlt: "browse food image", 
            },
            {
                header: localization.shared.stages.order.header[language],
                text: localization.shared.stages.order.text[language],
                imgSrc: orderStep3,
                imgAlt: "order food image",
            },
            {
                header: localization.shared.stages.enjoy.header[language],
                text: localization.shared.stages.enjoy.text[language],
                imgSrc: enjoyStep4,
                imgAlt: "enjoy the food image" 
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
                    category: "orderNow" as ButtonCategory,
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
                    category: "signup" as ButtonCategory,
                    url: "https://shop.mangopost.app/customerdata/registration",
                    text: localization.scheduled.buttons.signup[language]
                },
                {
                    category: "login" as ButtonCategory,
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
                imgOrder: "tablet:order-1",
                textOrder: "tablet:order-2",
                imgStyling: "w-[203px] min-800px:w-[253px]",
                imgSrc: favouriteFood,
                imgAlt: "food plate icon",
                header: localization.shared.features.favouriteFood.header[language],
                text: localization.shared.features.favouriteFood.text[language]
            },
            {
                imgOrder: "tablet:order-2",
                textOrder: "tablet:order-1",
                imgStyling: "w-[187px] min-800px:w-[237px]",
                imgSrc: foodDriver,
                imgAlt: "food delivery icon",
                header: localization.shared.features.drivers.header[language],
                text: localization.shared.features.drivers.text[language]
            },
            {
                imgOrder: "tablet:order-1",
                textOrder: "tablet:order-2",
                imgStyling: "w-[149px] min-800px:w-[200px]",
                imgSrc: customerSupport,
                imgAlt: "customer support icon",
                header: localization.shared.features.customerSupport.header[language],
                text: localization.shared.features.customerSupport.text[language]
            }
        ]
    };

    return (
        <PageWrapper language={language} margins={styling.pageWrapper[language]}>
            
            <Section styling={styling.sections.stages}>
                <ServiceStages {...serviceStageProps} />
            </Section>

            <Section styling={styling.sections.comparison}>
                <CompareServices {...compareServicesProps} />
            </Section>

            <Section styling={styling.sections.features}>
                <ServiceFeatures {...featuresProps} />
            </Section>
            
        </PageWrapper>
    );
}
