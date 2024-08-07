import ScheduledDeliveryLayout from "../cafeLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Geplante Lieferung - Mangopost",
    description: "Möchten Sie Ihr Lieblingsessen zuverlässig und pünktlich an Ihren Arbeitsplatz geliefert bekommen? Planen Sie regelmäßige Lieferungen von vertrauenswürdigen Orten, die genau dann eintreffen, wenn Sie sie brauchen.",
    alternates: {
        canonical: "https://mangopost.app/cafe/de",
        languages: {
            'en-US': 'https://nextjs.org/cafe/en',
            'de-DE': 'https://mangopost.app/cafe/de',
          },
    },
    openGraph: {
        title: "Geplante Lieferung - Mangopost",
        description: "Möchten Sie Ihr Lieblingsessen zuverlässig und pünktlich an Ihren Arbeitsplatz geliefert bekommen? Planen Sie regelmäßige Lieferungen von vertrauenswürdigen Orten, die genau dann eintreffen, wenn Sie sie brauchen.",
        url: "https://mangopost.app/cafe/de",
        images: [
            {
                url: "https://mangopost.app/Images/whatsappImgMeta.png"
            },
        ]
    }
};


export default function ScheduledDeliveryGerman() {
    return <ScheduledDeliveryLayout language="de" />
}