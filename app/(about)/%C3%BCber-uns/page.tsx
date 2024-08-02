import AboutUsPage from "@/app/(about)/aboutUs";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Über uns - Mangopost Essenlieferung",
    description: "Wir beseitigen die Mühen des Essensbestellens an Ihren Arbeitsplatz, sodass Sie sich ganz darauf konzentrieren können, was und wo Sie bestellen möchten. Genießen Sie sowohl spontane als auch geplante Lieferungen direkt in Ihr Büro.",
    alternates: {
        canonical: "https://mangopost.app/über-uns",
        languages: {
            'en-US': 'https://nextjs.org/about-us',
            'de-DE': 'https://mangopost.app/über-uns',
          },
    },
    openGraph: {
        title: "Über uns - Mangopost",
        description: "Wir beseitigen die Mühen des Essensbestellens an Ihren Arbeitsplatz, sodass Sie sich ganz darauf konzentrieren können, was und wo Sie bestellen möchten. Genießen Sie sowohl spontane als auch geplante Lieferungen direkt in Ihr Büro.",
        url: "https://mangopost.app/über-uns",
        images: [
            {
                url: "https://mangopost.app/whatsappImgMeta.png"
            },
        ]
    }
};


export default function AboutUsGerman() {
    return <AboutUsPage language="de" />
}
