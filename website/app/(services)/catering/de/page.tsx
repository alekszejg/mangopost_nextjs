import OnDemandDeliveryLayout from "../cateringLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Auf Anruf Lieferung - Mangopost",
    description: "Ob Sie sich plötzlich während eines Geschäftstreffens hungrig fühlen oder eine bevorstehende Veranstaltung planen, gönnen Sie sich und Ihren Kollegen eine Bestellung für die Lieferung von Speisen direkt an Ihren Arbeitsplatz.",
    alternates: {
        canonical: "https://mangopost.app/auf-anruf-lieferung",
        languages: {
            'en-US': 'https://nextjs.org/on-demand-delivery',
            'de-DE': 'https://mangopost.app/auf-anruf-lieferung',
          },
    },
    openGraph: {
        title: "Auf Anruf Lieferung - Mangopost",
        description: "Ob Sie sich plötzlich während eines Geschäftstreffens hungrig fühlen oder eine bevorstehende Veranstaltung planen, gönnen Sie sich und Ihren Kollegen eine Bestellung für die Lieferung von Speisen direkt an Ihren Arbeitsplatz.",
        url: "https://mangopost.app/auf-anruf-lieferung",
        images: [
            {
                url: "https://mangopost.app/whatsappImgMeta.png"
            },
        ]
    }
};


export default function onDemandDeliveryGerman(){
    return <OnDemandDeliveryLayout language="de" />
}