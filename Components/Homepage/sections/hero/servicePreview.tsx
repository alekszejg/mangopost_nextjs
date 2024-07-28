import Image, { StaticImageData } from "next/image";

import { Button } from "@/Components/UI/buttons";
import { LanguageType } from "@/app/layout";

interface ServicePreviewProps {
    language: LanguageType;
    imgSrc: StaticImageData;
    imgAlt: string;
    header: string;
    text: string;
    button: {url: string, text: string}
};

export default function ServicePreview(props: ServicePreviewProps) {
    const { imgSrc, imgAlt, header, text, button } = props;

    const styling = {
        image: {
            wrapper: "aspect-[16/9]",
            img: "w-full h-full aspect-[16/9]"
        },
        header: "mt-2 font-jost-bold text-xl text-center min-750px:mt-0 min-750px:text-base",
        text: "text-lg pt-1 pb-4 mx-6 text-left tablet:mx-0 tablet:text-center min-750px:text-base",
        button: "block w-full h-14 mt-auto mb-8 rounded-xl text-lg font-jost-extrabold bg-gradient-to-r from-[#FFBB00] to-[#FFD000] buttonHover tablet:w-3/5 tablet:mx-auto tablet:mb-0 min-750px:w-full min-750px:mx-0"
    }


    const buttonProps = {buttonStyling: styling.button, url: button.url, text: button.text}
   
    return (
        <>
            <div className={styling.image.wrapper}>
                <Image className={styling.image.img} src={imgSrc} alt={imgAlt} />
            </div>
            
            <div>
                <h2 className={styling.header}>{header}</h2>
                <p className={styling.text}>{text}</p>
            </div>

            <Button {...buttonProps} />
        </>
    );
}