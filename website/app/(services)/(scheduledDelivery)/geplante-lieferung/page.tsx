import ScheduledDeliveryLayout from "../scheduledLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Geplante Lieferung - Mangopost",
    description: "Möchten Sie Ihr Lieblingsessen zuverlässig und pünktlich an Ihren Arbeitsplatz geliefert bekommen? Planen Sie regelmäßige Lieferungen von vertrauenswürdigen Orten, die genau dann eintreffen, wenn Sie sie brauchen.",
    alternates: {
        canonical: "https://mangopost.app/geplante-lieferung",
        languages: {
            'en-US': 'https://nextjs.org/scheduled-delivery',
            'de-DE': 'https://mangopost.app/geplante-lieferung',
          },
    },
    openGraph: {
        title: "Geplante Lieferung - Mangopost",
        description: "Möchten Sie Ihr Lieblingsessen zuverlässig und pünktlich an Ihren Arbeitsplatz geliefert bekommen? Planen Sie regelmäßige Lieferungen von vertrauenswürdigen Orten, die genau dann eintreffen, wenn Sie sie brauchen.",
        url: "https://mangopost.app/geplante-lieferung",
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