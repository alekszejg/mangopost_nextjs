import OnDemandDeliveryLayout from "../onDemandLayout";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "On-demand Delivery - Mangopost",
    description: "Whether you find yourself unexpectedly hungry during a business meeting or are planning an upcoming event, treat yourself and your colleagues by ordering food delivery straight to your workplace.",
};

export default function onDemandDeliveryEnglish(){
    return <OnDemandDeliveryLayout language="en" />
}
