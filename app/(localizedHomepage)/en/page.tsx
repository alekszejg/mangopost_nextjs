import Homepage from "@/Components/Homepage";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Welcome - Mangopost",
    description: "",
};

export default function HomepageEnglish() {
    return <Homepage language="en"/>
}