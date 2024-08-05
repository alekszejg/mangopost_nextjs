import Container from '@/Components/Layout/container';
import HeroIntro from './heroIntro';
import ServicePreview from './servicePreview';

import localization from "@/Localization/homepage.json";
import allRoutes from "@/Localization/routes.json";

import { LanguageType } from '@/app/layout';

import pizzaImage from "@/public/Images/pizzaImage.jpg";
import foodDelivery from "@/public/Images/foodDelivery.png";

// Header images in english and german. Mobile version - centered, tablet version - left aligned
import heroHeaderImgEnLeft from "@/public/Images/homepageHeaderEnLeftAligned.svg";
import heroHeaderImgEnCentered from "@/public/Images/homepageHeaderEnCentered.svg";
import heroHeaderImgDeLeft from "@/public/Images/homepageHeaderDeLeftAligned.svg";
import heroHeaderImgDeCentered from "@/public/Images/homepageHeaderDeCentered.svg";


export default function Hero(props: {language: LanguageType}) {
    const { language } = props;

    const styling = {
        introContainer: {
            general: "flex flex-col items-center mx-6 tablet:mx-12",
            en: "min-750px:w-1/3 min-750px:mx-0",
            de: "min-800px:w-1/3 min-800px:max-w-[350px] min-800px:mx-0"
        },
        servicePreviewContainer: {
            general: "w-full py-5",
            en: "min-750px:flex min-750px:flex-col min-750px:w-1/3 min-750px:max-w-[420px] min-750px:py-0",
            de: "min-800px:flex min-800px:flex-col min-800px:w-1/3 min-800px:max-w-[420px] min-800px:py-0"
        },
    };

    const introProps = {
        language: language, 
        imgSrc: {
            mobile: {en: heroHeaderImgEnCentered, de: heroHeaderImgDeCentered},
            desktop: {en: heroHeaderImgEnLeft, de: heroHeaderImgDeLeft}
        },
        text: localization.hero.text[language]
    };

    const servicePreviewProps = {
        onDemand: {
            language: language,
            imgSrc: pizzaImage,
            header: localization.hero.servicePreviews.onDemand.header[language],
            text: localization.hero.servicePreviews.onDemand.text[language],
            button: {
                url: "https://shop.mangopost.app/menu",
                text: localization.hero.servicePreviews.onDemand.button[language]
            }
        },
        scheduled: {
            language: language,
            imgSrc: foodDelivery,
            header: localization.hero.servicePreviews.scheduled.header[language],
            text: localization.hero.servicePreviews.scheduled.text[language], 
            button: {
                url: allRoutes.scheduledDelivery[language],
                text: localization.hero.servicePreviews.scheduled.button[language]
            }
        } 
    };

    return (
        <>
        <Container styling={`${styling.introContainer.general} ${styling.introContainer[language]}`}>
            <HeroIntro {...introProps} />
        </Container>
        
        <Container styling={`${styling.servicePreviewContainer.general} ${styling.servicePreviewContainer[language]}`}>
            <ServicePreview {...servicePreviewProps.onDemand} />
        </Container>

        <Container styling={`${styling.servicePreviewContainer.general} ${styling.servicePreviewContainer[language]}`}>
            <ServicePreview {...servicePreviewProps.scheduled} />
        </Container>
        </>      
    )
}