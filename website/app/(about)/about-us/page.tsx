import AboutUsLayout from "../aboutLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About us - Mangopost Food Delivery",
    description: "We eliminate the hassles of ordering food to your workplace, letting you focus solely on what and where you want to order. Enjoy both spontaneous and scheduled deliveries right to your office.",
    alternates: {
        canonical: "https://mangopost.app/about-us",
        languages: {
            'en-US': 'https://nextjs.org/about-us',
            'de-DE': 'https://mangopost.app/ueber-uns',
          },
    },
    openGraph: {
        title: "About us - Mangopost Food Delivery",
        description: "We eliminate the hassles of ordering food to your workplace, letting you focus solely on what and where you want to order. Enjoy both spontaneous and scheduled deliveries right to your office.",
        url: "https://mangopost.app/about-us",
        images: [
            {
                url: "https://mangopost.app/Images/whatsappImgMeta.png"
            },
        ]
    }
};

export default function AboutUsEnglish() {
    return <AboutUsLayout language="en" />
}