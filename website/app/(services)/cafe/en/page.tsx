import CafeLayout from "../cafeLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Cafe - Mangopost",
    description: "Would you like your favorite food delivered reliably and punctually to your workplace? Schedule regular deliveries from trusted places that arrive precisely when you need them.",
    alternates: {
        canonical: "https://mangopost.app/cafe/en",
        languages: {
            'en-US': 'https://mangopost.app/cafe/en',
            'de-DE': 'https://mangopost.app/cafe/de',
          },
    },
    openGraph: {
        title: "Cafe - Mangopost",
        description: "Would you like your favorite food delivered reliably and punctually to your workplace? Schedule regular deliveries from trusted places that arrive precisely when you need them.",
        url: "https://mangopost.app/cafe/en",
        images: [
            {
                url: "https://mangopost.app/Images/whatsappImgMeta.png"
            },
        ]
    }
};

export default function CafeEnglish() {
    return <CafeLayout language="en" />
}
