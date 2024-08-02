import Image from "next/image";

import Container from "@/Components/Layout/container";
import { Button, ButtonGroup } from "@/Components/UI/buttons";

import { ServiceCardProps } from "./serviceCard";

import checkmarkIcon from "@/public/Icons/checkmarkIcon.svg";


export default function ServiceCardText(props: ServiceCardProps) {
    const { language, header, text, features, buttons } = props;
    
    const styling = {
        header: {
            general: "w-full mt-2 text-center font-jost-extrabold tracking-wide text-lg tablet:mt-0",
            en: "min-800px:text-start",
            de: "desktop:text-start"
        },
        description: "text-base",
        featureList: "mt-3",
        featureItem: "flex items-center text-base font-jost-medium",
        checkmarkIcon: "w-8 pr-3",
        buttonGroup: {
            general: "flex flex-col items-center w-full mt-6 font-jost-bold tablet:gap-x-10",
            en: "min-800px:flex-row min-800px:justify-between",
            de: "desktop:flex-row desktop:justify-between"
        },
        button: {
            default: "block w-full h-14 rounded-xl bg-gradient-to-r from-[#FFBB00] to-[#FFD900] buttonHover tablet:w-1/2",
            learnMore: {
                general: " w-full mt-6 text-center linkHover hover:scale-110 tablet:w-1/2",
                en: "min-800px:mt-0",
                de: "desktop:mt-0"
            } 
        }
    };

    const button1Props = {
        buttonStyling: styling.button.default,
        url: buttons[0].url,
        text: buttons[0].text
    };

    const button2Props = {
        buttonStyling: `${styling.button.learnMore.general} ${styling.button.learnMore[language]}`,
        url: buttons[1].url,
        text: buttons[1].text
    };
    
    return (
        <>
        <h2 className={`${styling.header.general} ${styling.header[language]}`}>{header}</h2>
        <p className={styling.description}>{text}</p>
        <ul className={styling.featureList}>
            {features.map((feature, index) => (
                <li key={index} className={index !== 0 ? `mt-3 ${styling.featureItem}` : `${styling.featureItem}`}>
                    <Image className={styling.checkmarkIcon} src={checkmarkIcon} alt="checkmark" /> 
                    {feature}
                </li>
            ))}
        </ul>
        <ButtonGroup styling={`${styling.buttonGroup.general} ${styling.buttonGroup[language]}`}>
            <Button {...button1Props} />
            <Button {...button2Props} />
        </ButtonGroup>
        </>
    );
}