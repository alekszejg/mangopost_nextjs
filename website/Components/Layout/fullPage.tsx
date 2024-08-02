// REACT FUNCTIONALITY
import { ReactNode } from "react";

// TYPES: MARGINS AND LANGUAGES
import { LanguageType } from "@/app/layout";

// COMPONENTS
import Navbar from "./Navbar/navbar";
import MainSection from "./mainSection";
import Footer from "./Footer/footer";

// COMPONENTS: WIDGETS
import { ChatWidget, WhatsappWidget, GoogleManager } from "../UI/widgets";


export default function PageWrapper(props: {children: ReactNode; language: LanguageType; margins: string}) {
    const { children, language, margins } = props;

    return (
        <>
        <Navbar language={language} />
        
        <MainSection styling={margins}>
            {children}   
        </MainSection>
        
        <WhatsappWidget language={language} />
        <ChatWidget />
        <GoogleManager />

        <Footer language={language} />
        </>
    );
}

