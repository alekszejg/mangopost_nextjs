import ScheduledDeliveryPage from "@/Components/Services/scheduledDelivery";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Scheduled Delivery - Mangopost",
    description: "Would you like your favorite food delivered reliably and punctually to your workplace? Schedule regular deliveries from trusted places that arrive precisely when you need them.",
};

export default function ScheduledDeliveryEnglish() {
    return <ScheduledDeliveryPage language="en" />
}
