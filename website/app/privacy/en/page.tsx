import PrivacyLayout from "@/app/privacy/privacyLayout";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Mangopost",
    description: "Our Privacy Policy",
    alternates: {
        canonical: "https://mangopost.app/privacy/en",
        languages: {
            'en-US': 'https://mangopost.app/privacy/en',
            'de-DE': 'https://mangopost.app/privacy/de',
          },
    },
}


// CURRENTLY ONLY GERMAN VERSION AVAILABLE
export default function PrivacyPolicyEn() {
    return <PrivacyLayout language="en" />;
}
