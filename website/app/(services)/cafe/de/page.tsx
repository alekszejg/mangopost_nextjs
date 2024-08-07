import CafeLayout from "../cafeLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Cafe - Mangopost",
    description: "Möchten Sie Ihr Lieblingsessen zuverlässig und pünktlich an Ihren Arbeitsplatz geliefert bekommen? Planen Sie regelmäßige Lieferungen von vertrauenswürdigen Orten, die genau dann eintreffen, wenn Sie sie brauchen.",
    alternates: {
        canonical: "https://mangopost.app/cafe/de",
        languages: {
            'en-US': 'https://mangopost.app/cafe/en',
            'de-DE': 'https://mangopost.app/cafe/de',
          },
    },
    openGraph: {
        title: "Cafe - Mangopost",
        description: "Möchten Sie Ihr Lieblingsessen zuverlässig und pünktlich an Ihren Arbeitsplatz geliefert bekommen? Planen Sie regelmäßige Lieferungen von vertrauenswürdigen Orten, die genau dann eintreffen, wenn Sie sie brauchen.",
        url: "https://mangopost.app/cafe/de",
        images: [
            {
                url: "https://mangopost.app/Images/whatsappImgMeta.png"
            },
        ]
    }
};


export default function CafeGerman() {
    return <CafeLayout language="de" />
}