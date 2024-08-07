import AboutUsLayout from "@/app/about/aboutLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About us - Mangopost",
    description: "We eliminate the hassles of ordering food to your workplace, letting you focus solely on what and where you want to order. Enjoy both spontaneous and scheduled deliveries right to your office.",
    alternates: {
        canonical: "https://mangopost.app/about/en",
        languages: {
            'en-US': 'https://mangopost.app/about/en',
            'de-DE': 'https://mangopost.app/about/de',
          },
    },
    openGraph: {
        title: "About us - Mangopost",
        description: "We eliminate the hassles of ordering food to your workplace, letting you focus solely on what and where you want to order. Enjoy both spontaneous and scheduled deliveries right to your office.",
        url: "https://mangopost.app/about/en",
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