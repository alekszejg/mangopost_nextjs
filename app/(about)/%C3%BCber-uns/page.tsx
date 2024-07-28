import AboutUsPage from "@/Components/AboutUsPage/aboutUs";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Über uns - Mangopost",
    description: "",
    openGraph: {
        title: "Über uns - Mangopost",
        description: "",
        url: "https://mangopost.app/über-uns",
        images: [
            {
                url: "https://mangopost.app/whatsappImgMeta.png"
            },
        ]
    }
};


export default function AboutUsGerman() {
    return <AboutUsPage language="de" />
}
