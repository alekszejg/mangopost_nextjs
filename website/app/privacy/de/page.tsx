import PrivacyLayout from "@/app/privacy/privacyLayout";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz - Mangopost",
    description: "Unser Datenschutz",
    alternates: {
        canonical: "https://mangopost.app/privacy/de",
        languages: {
            'en-US': 'https://nextjs.org/privacy/en',
            'de-DE': 'https://mangopost.app/privacy/de',
          },
    },
}

export default function PrivacyPolicyDe() {
    return <PrivacyLayout language="de"/>;
}
