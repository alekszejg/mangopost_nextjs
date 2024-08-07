import AboutUsLayout from "@/app/about/aboutLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Über uns - Mangopost Essenlieferung",
    description: "Wir beseitigen die Mühen des Essensbestellens an Ihren Arbeitsplatz, sodass Sie sich ganz darauf konzentrieren können, was und wo Sie bestellen möchten. Genießen Sie sowohl spontane als auch geplante Lieferungen direkt in Ihr Büro.",
    alternates: {
        canonical: "https://mangopost.app/about/de",
        languages: {
            'en-US': 'https://mangopost.app/about/en',
            'de-DE': 'https://mangopost.app/about/de',
          },
    },
    openGraph: {
        title: "Über uns - Mangopost",
        description: "Wir beseitigen die Mühen des Essensbestellens an Ihren Arbeitsplatz, sodass Sie sich ganz darauf konzentrieren können, was und wo Sie bestellen möchten. Genießen Sie sowohl spontane als auch geplante Lieferungen direkt in Ihr Büro.",
        url: "https://mangopost.app/about/de",
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
