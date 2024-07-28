import AboutUsPage from "@/Components/AboutUsPage/aboutUs";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About us - Mangopost",
    description: "",
};

export default function AboutUsEnglish() {
    return <AboutUsPage language="en" />
}