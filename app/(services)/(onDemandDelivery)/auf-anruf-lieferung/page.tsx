import OnDemandDeliveryPage from "@/Components/Services/onDemandDelivery";
import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Auf Anruf Lieferung - Mangopost",
    description: "Ob Sie sich plötzlich während eines Geschäftstreffens hungrig fühlen oder eine bevorstehende Veranstaltung planen, gönnen Sie sich und Ihren Kollegen eine Bestellung für die Lieferung von Speisen direkt an Ihren Arbeitsplatz.",
};


export default function onDemandDeliveryGerman(){
    return <OnDemandDeliveryPage language="de" />
}