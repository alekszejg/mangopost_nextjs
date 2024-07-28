// NEXT.JS AND REACT.JS FUNCTIONALITY
import Script from 'next/script'
import Link from "next/link";
import Image from "next/image";
import React from "react";

// TYPES: LANGUAGES
import { LanguageType } from "@/app/layout";

// ICONS
import whatsappIcon from "@/public/Icons/whatsappIcon.png";


export function ChatWidget() {
    return <Script src="//eu.fw-cdn.com/12838927/814009.js" />;
}


export function WhatsappWidget(props : {language: LanguageType}) {
    const { language } = props;
    
    const styling = {
        imgWrapper: "w-14 fixed bottom-[130px] right-3 hover:scale-110 tablet:hidden"
    };

    const predefinedMessage = {
        en: "Hey Mangopost, we want the best pizza in Munich!", 
        de: "Hallo Mangopost, wir möchten die beste Pizza in München!"
    };

    const whatsappURL = `http://wa.me/4915730022160?text=${encodeURIComponent(predefinedMessage[language])}`

    return (
        <Link href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <div className={styling.imgWrapper}>
                <Image src={whatsappIcon} alt="whatsapp icon" />
            </div>
        </Link>  
    );
}
