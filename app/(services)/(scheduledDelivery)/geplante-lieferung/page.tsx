import ScheduledDeliveryPage from "@/Components/Services/scheduledDelivery";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Geplante Lieferung - Mangopost",
    description: "Möchten Sie Ihr Lieblingsessen zuverlässig und pünktlich an Ihren Arbeitsplatz geliefert bekommen? Planen Sie regelmäßige Lieferungen von vertrauenswürdigen Orten, die genau dann eintreffen, wenn Sie sie brauchen.",
};


export default function ScheduledDeliveryGerman() {
    return <ScheduledDeliveryPage language="de" />
}