import Image from "next/image";

import Container from "@/Components/Layout/container";
import { LanguageType, LocalizedValues } from "@/app/layout";

// Header images in english and german. Mobile version - centered, tablet version - left aligned
type LocalizedHeaderImage = {mobile: LocalizedValues; desktop: LocalizedValues;}


export default function HeroIntro(props: {language: LanguageType; imgSrc: LocalizedHeaderImage, text:string}) {
    const { language, imgSrc, text } = props;
    
    const styling = {
        imgContainer: "w-full",
        imgMobile: {
            en: "block w-full min-750px:hidden",
            de: "block w-full min-800px:hidden" 
        },
        imgDesktop: {
            en: "hidden w-full h-full min-750px:block",
            de: "hidden w-full h-full min-800px:block"
        },
        text: "pt-6 text-lg tablet:text-center min-750px:text-left",
    };

    const imageAlt = {
        en: "The best way to order food at work",
        de: "Die Beste Art, am Arbeitsplatz Essen zu bestellen"
    }

    return (
        <>
        <Container styling={styling.imgContainer}>
            <Image className={styling.imgMobile[language]} src={imgSrc.mobile[language]} alt={imageAlt[language]}/>
            <Image className={styling.imgDesktop[language]} src={imgSrc.desktop[language]} alt={imageAlt[language]} />
        </Container>
        <p className={styling.text}>{text}</p>
        </> 
    );
}