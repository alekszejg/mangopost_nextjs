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
    imgAlt: string;
}

export default function ServiceCard(props: ServiceCardProps) {
    const { language, serviceType, imgSrc, imgAlt} = props;
    
    const styling = {
        wrapper: {
            general: "flex flex-col py-12 mb-12 shadow-[0_2px_8px_-3px] shadow-black max-w-[calc(1400px-10rem)] ultrawide:mx-auto",
            en: "min-800px:flex-row min-800px:justify-center min-800px:items-center min-800px:imgTextGap min-800px:py-28 min-800px:rounded-3xl",
            de: "desktop:flex-row desktop:justify-center desktop:items-center desktop:imgTextGap desktop:py-28 desktop:rounded-3xl"
        },
        imageContainer: {
            general: "aspect-[5/4] tablet:self-center tablet:w-[200px] min-800px:w-[350px]",
            onDemand: {
                en: "min-800px:order-1",
                de: "desktop:order-1"
            },
            scheduled: {
                en: "min-800px:order-2",
                de: "desktop:order-2"
            }
        },
        textContainer: {
            general: "flex flex-col items-start tablet:mt-2",
            onDemand: {
                    en: "min-800px:w-[380px] min-800px:order-2",
                    de: "desktop:w-[540px] desktop:order-2"
            },
            scheduled: {
                    en: "min-800px:w-[380px] min-800px:order-1",
                    de: "desktop:w-[540px] desktop:order-1"
            },
        },
        image: "w-full h-full" 
    };

    return (
        <>
        <Container styling={`${styling.imageContainer.general} ${styling.imageContainer[serviceType][language]}`}>
            <Image className={styling.image} src={imgSrc} alt={imgAlt} />
        </Container>

        <Container styling={`${styling.textContainer.general} ${styling.textContainer[serviceType][language]}`}>
            <ServiceCardText {...props} />
        </Container>
        </>
    );
}