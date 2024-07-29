import HomepageLayout from "../homepageLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Welcome - Mangopost",
    description: "",
};

export default function HomepageEnglish() {
    return <HomepageLayout language="en"/>
}