// NEXT.JS AND REACT FUNCTIONALITY
import { headers } from 'next/headers';
import { ReactNode } from 'react';

// METADATA
import type { Metadata } from "next";

// STYLING
import "@/index.css";


// COMMON CUSTOM TYPES
export type LanguageType = "en" | "de";
export type LocalizedValues = {[key in LanguageType]: string};
export type ServiceType = "onDemand" | "scheduled";


export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico' }, 
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },  
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },  
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }, 
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' }, 
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ffbb00' },  
    ],
  },
};


// FOR FINDING LANGUAGE ASSOCIATED WITH SPECIFIC PATH
const allRoutes: { [key: string]: string } = {
  "/": "de",
  "/en": "en",
  "/%C3%BCber-uns": "de",
  "/about-us": "en",
  "/auf-anruf-lieferung": "de",
  "/on-demand-delivery": "en",
  "/geplante-lieferung": "de",
  "/scheduled-delivery": "en"
} 



export default function RootLayout(props: Readonly<{children: ReactNode;}>) {
  const { children } = props;
  
  const urlpath = headers().get("urlpath") || "en"; // fallback
  const htmlLanguage = allRoutes[urlpath]
  
  return (
    <html lang={htmlLanguage as LanguageType}>
      <body>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T87ZV483" height="0" width="0" className="none hidden">
          </iframe>
        </noscript>

        {children}

      </body>
    </html>
  );
}

