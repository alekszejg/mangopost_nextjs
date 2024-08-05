import AboutUsLayout from "../aboutLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Über uns - Mangopost Essenlieferung",
    description: "Wir beseitigen die Mühen des Essensbestellens an Ihren Arbeitsplatz, sodass Sie sich ganz darauf konzentrieren können, was und wo Sie bestellen möchten. Genießen Sie sowohl spontane als auch geplante Lieferungen direkt in Ihr Büro.",
    alternates: {
        canonical: "https://mangopost.app/ueber-uns",
        languages: {
            'en-US': 'https://mangopost.app/about-us',
            'de-DE': 'https://mangopost.app/ueber-uns',
          },
    },
    openGraph: {
        title: "Über uns - Mangopost",
        description: "Wir beseitigen die Mühen des Essensbestellens an Ihren Arbeitsplatz, sodass Sie sich ganz darauf konzentrieren können, was und wo Sie bestellen möchten. Genießen Sie sowohl spontane als auch geplante Lieferungen direkt in Ihr Büro.",
        url: "https://mangopost.app/ueber-uns",
        images: [
            {
                url: "https://mangopost.app/Images/whatsappImgMeta.png"
            },
        ]
    }
};


export default function AboutUsGerman() {
    return <AboutUsLayout language="de" />
}
