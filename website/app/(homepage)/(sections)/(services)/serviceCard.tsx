import Image, { StaticImageData } from "next/image";

import Container from "@/Components/Layout/container";
import ServiceCardText from "./serviceCardText";
import { ButtonType } from "@/Components/UI/buttons";

import { LanguageType, ServiceType } from "@/app/layout";


export interface ServiceCardProps {
    language: LanguageType;
    serviceType: ServiceType; 
    header: string;
    text: string;
    buttons: ButtonType[];
    features: string[];
    imgSrc: StaticImageData;
}

export default function ServiceCard(props: ServiceCardProps) {
    const { language, serviceType, imgSrc } = props;
    
    const styling = {
        wrapper: {
            general: "flex flex-col py-12 shadow-[0_2px_8px_-3px] shadow-black rounded-3xl",
            en: "min-800px:flex-row min-800px:justify-center min-800px:items-center min-800px:imgTextGap min-800px:py-28",
            de: "desktop:flex-row desktop:justify-center desktop:items-center desktop:imgTextGap desktop:py-28"
        },
        imgContainer: {
            general: "aspect-[5/4] tablet:self-center tablet:w-[350px] min-800px:w-[280px]",
            onDemand: {en: "min-800px:order-1", de: "desktop:order-1"},
            scheduled: {en: "min-800px:order-2", de: "desktop:order-2"}
        },
        textContainer: {
            general: "flex flex-col items-start mx-6 tablet:mx-0 tablet:self-center tablet:mt-2",
            onDemand: {
                    en: "min-800px:w-[380px] min-800px:order-2 min-800px:text-left",
                    de: "desktop:w-[380px] desktop:order-2 desktop:text-left"
            },
            scheduled: {
                    en: "min-800px:w-[380px] min-800px:order-1 min-800px:text-left",
                    de: "desktop:w-[420px] desktop:order-1 desktop:text-left"
            },
        },
    };

    return (
        <Container styling={`${styling.wrapper.general} ${styling.wrapper[language]}`}>
            
            <Container styling={`${styling.imgContainer.general} ${styling.imgContainer[serviceType][language]}`}>
                <Image className="w-full h-full tablet:rounded-3xl" src={imgSrc} alt="" />
            </Container>

            <Container styling={`${styling.textContainer.general} ${styling.textContainer[serviceType][language]}`}>
                <ServiceCardText {...props} />
            </Container>

        </Container>
    );
}