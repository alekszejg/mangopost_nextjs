import PrivacyPolicyLayout from "../privacyPolicyLayout";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz - Mangopost",
    description: "Unser Datenschutz",
    alternates: {
        canonical: "https://mangopost.app/datenschutz",
        languages: {
            'en-US': 'https://nextjs.org/privacy-policy',
            'de-DE': 'https://mangopost.app/datenschutz',
          },
    },
}

export default function PrivacyPolicyDe() {
    return <PrivacyPolicyLayout language="de"/>;
}
