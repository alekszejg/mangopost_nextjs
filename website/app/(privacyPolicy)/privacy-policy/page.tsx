import PrivacyPolicyLayout from "../privacyPolicyLayout";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy - Mangopost",
    description: "Our Privacy Policy",
    alternates: {
        canonical: "https://mangopost.app/privacy-policy",
        languages: {
            'en-US': 'https://nextjs.org/privacy-policy',
            'de-DE': 'https://mangopost.app/datenschutz',
          },
    },
}


// CURRENTLY ONLY GERMAN VERSION AVAILABLE
export default function PrivacyPolicyEn() {
    return <PrivacyPolicyLayout language="en" />;
}
