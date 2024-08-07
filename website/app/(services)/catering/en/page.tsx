import CateringLayout from "../cateringLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Catering - Mangopost",
    description: "Whether you find yourself unexpectedly hungry during a business meeting or are planning an upcoming event, treat yourself and your colleagues by ordering food delivery straight to your workplace.",
    alternates: {
        canonical: "https://mangopost.app/catering/en",
        languages: {
            'en-US': 'https://mangopost.app/catering/en',
            'de-DE': 'https://mangopost.app/catering/de',
          },
    },
    openGraph: {
        title: "Catering - Mangopost",
        description: "Whether you find yourself unexpectedly hungry during a business meeting or are planning an upcoming event, treat yourself and your colleagues by ordering food delivery straight to your workplace.",
        url: "https://mangopost.app/catering/en",
        images: [
            {
                url: "https://mangopost.app/whatsappImgMeta.png"
            },
        ]
    }
};

export default function CateringEnglish(){
    return <CateringLayout language="en" />
}
