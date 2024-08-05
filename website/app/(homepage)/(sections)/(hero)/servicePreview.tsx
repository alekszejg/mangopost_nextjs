import Image, { StaticImageData } from "next/image";

import Container from "@/Components/Layout/container";
import { Button } from "@/Components/UI/buttons";
import { LanguageType } from "@/app/layout";

type ServicePreviewProps = {
    language: LanguageType;
    imgSrc: StaticImageData;
    header: string;
    text: string;
    button: {url: string, text: string}
};

export default function HeroServicePreview(props: ServicePreviewProps) {
    const { imgSrc, header, text, button } = props;

    const styling = {
        imgContainer: "aspect-[16/9]",
        image: "w-full h-full",
        textContainer: "mx-6 min-750px:mx-0",
        header: "mt-2 mb-1 font-jost-bold text-xl text-center min-750px:text-base",
        text: "text-lg mb-4 text-left tablet:text-center min-750px:text-base",
        button: "block w-full h-14 mt-auto rounded-xl text-lg font-jost-extrabold bg-gradient-to-r from-[#FFBB00] to-[#FFD000] buttonHover tablet:w-3/5 tablet:mx-auto min-750px:w-full min-750px:mx-0"
    }


    const buttonProps = {buttonStyling: styling.button, url: button.url, text: button.text}
   
    return (
        <>
        <Container styling={styling.imgContainer}>
            <Image className={styling.image} src={imgSrc} alt="" />
        </Container>
        
        <Container styling={styling.textContainer}>
            <h2 className={styling.header}>{header}</h2>
            <p className={styling.text}>{text}</p>
        </Container>

        <Button {...buttonProps} />
        </>
    );
}