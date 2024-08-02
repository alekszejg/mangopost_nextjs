import HomepageLayout from "./(homepage)/homepageLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Willkommen - Mangopost Essenlieferung",
    description: "Wir bieten flexible Essenslieferdienste für Unternehmen an und offerieren sowohl auf Anruf als auch geplante Lieferoptionen. Bestellen Sie Essen spontan innerhalb von 2 Stunden oder planen Sie regelmäßige Lieferungen von Ihren bevorzugten und vertrauenswürdigen Orten.",
    alternates: {
        canonical: "https://mangopost.app/",
        languages: {
            'en-US': 'https://mangopost.app/en',
            'de-DE': 'https://mangopost.app/',
          },
    },
    openGraph: {
        title: "Willkommen - Mangopost Essenlieferung",
        description: "Wir bieten flexible Essenslieferdienste für Unternehmen an und offerieren sowohl auf Anruf als auch geplante Lieferoptionen. Bestellen Sie Essen spontan innerhalb von 2 Stunden oder planen Sie regelmäßige Lieferungen von Ihren bevorzugten und vertrauenswürdigen Orten.",
        url: "https://mangopost.app/",
        images: [
            {
                url: "https://mangopost.app/whatsappImgMeta.png"
            },
        ]
    }
};

export default function HomepageGerman() {
    return <HomepageLayout language="de" />
}




