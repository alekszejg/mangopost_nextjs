import ScheduledDeliveryLayout from "../scheduledLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Scheduled Delivery - Mangopost",
    description: "Would you like your favorite food delivered reliably and punctually to your workplace? Schedule regular deliveries from trusted places that arrive precisely when you need them.",
    alternates: {
        canonical: "https://mangopost.app/scheduled-delivery",
        languages: {
            'en-US': 'https://nextjs.org/scheduled-delivery',
            'de-DE': 'https://mangopost.app/geplante-lieferung',
          },
    },
    openGraph: {
        title: "Scheduled Delivery - Mangopost",
        description: "Would you like your favorite food delivered reliably and punctually to your workplace? Schedule regular deliveries from trusted places that arrive precisely when you need them.",
        url: "https://mangopost.app/scheduled-delivery",
        images: [
            {
                url: "https://mangopost.app/Images/whatsappImgMeta.png"
            },
        ]
    }
};

export default function ScheduledDeliveryEnglish() {
    return <ScheduledDeliveryLayout language="en" />
}
