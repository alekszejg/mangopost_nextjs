import Image from "next/image"
import Link from "next/link";
import { ReactNode } from 'react';

import { StaticImageData } from "next/image";

export type ButtonCategory = "general" | "learnMore";
export type ButtonType = {category: ButtonCategory; url: string; text: string};


// A SINGLE BUTTON
interface ButtonProps {
    buttonStyling: string; 
    url: string; 
    text: string; 
    imgSrc?: StaticImageData; 
    imgAlt?: string;
    imgStyling?: string;
    category?: ButtonCategory;
}

export function Button(props: ButtonProps) {
    const { buttonStyling, url, text, imgSrc, imgAlt, imgStyling } = props;
    
    const styling = {
        button: buttonStyling,
        link: "flex justify-center items-center w-full h-full"
    };

    return (
        <button className={styling.button}>
            <Link className={styling.link} href={url} target="_blank" rel="noopener noreferrer">
                {imgSrc && imgAlt && imgStyling && <Image className={imgStyling} src={imgSrc} alt={imgAlt} />}
                {text}
            </Link>
        </button>
    );
};


// MULTIPLE BUTTONS
export function ButtonGroup(props: {children: ReactNode, styling: string}) {
    const { children, styling } = props;
    
    return (
        <div className={styling}>
            {children}
        </div>
    );
} 