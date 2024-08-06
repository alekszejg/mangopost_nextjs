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
        imgWrapper: "w-12 fixed bottom-[110px] right-3 hover:scale-110 tablet:hidden"
    };

    const predefinedMessage = {
        en: "Hey Mangopost, we want the best pizza in Munich!", 
        de: "Hallo Mangopost, wir möchten die beste Pizza in München!"
    };

    const whatsappURL = `http://wa.me/4915560310903?text=${encodeURIComponent(predefinedMessage[language])}`

    return (
        <Link href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <div className={styling.imgWrapper}>
                <Image src={whatsappIcon} alt="whatsapp icon" />
            </div>
        </Link>  
    );
}

export function GoogleManager() {
    return (
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T87ZV483');`}} />
    );
}
