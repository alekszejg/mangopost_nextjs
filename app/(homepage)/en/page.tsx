import HomepageLayout from "../homepageLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Welcome - Mangopost Food Delivery",
    description: "We provide flexible food delivery services for companies and offer both on-demand and scheduled delivery options. Order food spontaneously within 2 hours or schedule regular delivery from your favourite and trusted places.",
    alternates: {
        canonical: "https://mangopost.app/en",
        languages: {
            'en-US': 'https://mangopost.app/en',
            'de-DE': 'https://mangopost.app/',
          },
    },
    openGraph: {
        title: "Welcome - Mangopost Food Delivery",
        description: "We provide flexible food delivery services for companies and offer both on-demand and scheduled delivery options. Order food spontaneously within 2 hours or schedule regular delivery from your favourite and trusted places.",
        url: "https://mangopost.app/en",
        images: [
            {
                url: "https://mangopost.app/whatsappImgMeta.png"
            },
        ]
    }
};

export default function HomepageEnglish() {
    return <HomepageLayout language="en"/>
}