import Link from "next/link";
import { ReactNode } from 'react';


// BUTTON TYPES
export type ButtonCategory = "general" | "learnMore";
export type ButtonType = {category: ButtonCategory; url: string; text: string};


// A SINGLE BUTTON
interface ButtonProps {buttonStyling: string; category?: ButtonCategory; url: string; text: string}
export function Button(props: ButtonProps) {
    const { buttonStyling, url, text } = props;
    
    const styling = {
        button: buttonStyling,
        link: "flex justify-center items-center w-full h-full"
    };

    return (
        <button className={styling.button}>
            <Link className={styling.link} href={url} target="_blank" rel="noopener noreferrer">
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