import HomepageLayout from "./(localizedHomepage)/homepageLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Willkommen - Mangopost Deutschland",
    description: "",
};

export default function HomepageGerman() {
    return <HomepageLayout language="de" />
}




