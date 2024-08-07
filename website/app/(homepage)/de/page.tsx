import HomepageLayout from "../homepageLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Willkommen - Mangopost Essenlieferung",
    description: "Wir bieten flexible Essenslieferdienste für Unternehmen an und offerieren sowohl auf Anruf als auch geplante Lieferoptionen. Bestellen Sie Essen spontan innerhalb von 2 Stunden oder planen Sie regelmäßige Lieferungen von Ihren bevorzugten und vertrauenswürdigen Orten.",
    alternates: {
        canonical: "https://mangopost.app/de",
        languages: {
            'en-US': 'https://mangopost.app/en',
            'de-DE': 'https://mangopost.app/de',
          },
    },
    openGraph: {
        title: "Willkommen - Mangopost Essenlieferung",
        description: "Wir bieten flexible Essenslieferdienste für Unternehmen an und offerieren sowohl auf Anruf als auch geplante Lieferoptionen. Bestellen Sie Essen spontan innerhalb von 2 Stunden oder planen Sie regelmäßige Lieferungen von Ihren bevorzugten und vertrauenswürdigen Orten.",
        url: "https://mangopost.app/de",
        images: [
            {
                url: "https://mangopost.app/Images/whatsappImgMeta.png"
            },
        ]
    }
};

export default function HomepageGerman() {
    return <HomepageLayout language="de" />
}