import CateringLayout from "../cateringLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Catering - Mangopost",
    description: "Ob Sie sich plötzlich während eines Geschäftstreffens hungrig fühlen oder eine bevorstehende Veranstaltung planen, gönnen Sie sich und Ihren Kollegen eine Bestellung für die Lieferung von Speisen direkt an Ihren Arbeitsplatz.",
    alternates: {
        canonical: "https://mangopost.app/catering/de",
        languages: {
            'en-US': 'https://mangopost.app/catering/en',
            'de-DE': 'https://mangopost.app/catering/de',
          },
    },
    openGraph: {
        title: "Catering - Mangopost",
        description: "Ob Sie sich plötzlich während eines Geschäftstreffens hungrig fühlen oder eine bevorstehende Veranstaltung planen, gönnen Sie sich und Ihren Kollegen eine Bestellung für die Lieferung von Speisen direkt an Ihren Arbeitsplatz.",
        url: "https://mangopost.app/catering/de",
        images: [
            {
                url: "https://mangopost.app/whatsappImgMeta.png"
            },
        ]
    }
};


export default function CateringGerman(){
    return <CateringLayout language="de" />
}