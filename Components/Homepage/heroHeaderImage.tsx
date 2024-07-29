import Image from "next/image";

import Container from "@/Components/Layout/container";
import { LanguageType, LocalizedValues } from "@/app/layout";

// Header images in english and german. Mobile version - centered, tablet version - left aligned
type LocalizedHeaderImage = {mobile: LocalizedValues; desktop: LocalizedValues;}


export default function HeroHeaderImage(props: {language: LanguageType; imgSrc: LocalizedHeaderImage}) {
    const { language, imgSrc } = props;
    
    const styling = {
        container: "w-full",
        mobile: {
            en: "block w-full min-750px:hidden",
            de: "block w-full min-800px:hidden" 
        },
        desktop: {
            en: "hidden w-full h-full min-750px:block",
            de: "hidden w-full h-full min-800px:block"
        }   
    };

    return (
        <Container styling={styling.container}>
            <Image className={styling.mobile[language]} src={imgSrc.mobile[language]} alt="a homepage header"/>
            <Image className={styling.desktop[language]} src={imgSrc.desktop[language]} alt="a homepage header" />
        </Container> 
    );
}