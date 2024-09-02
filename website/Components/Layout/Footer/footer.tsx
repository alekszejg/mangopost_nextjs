import Container from "../section";
import URLGroup, {} from "./urlGroup";

import { LanguageType } from "@/app/layout";
import localization from "@/Localization/navbarFooter.json";




export default function Footer(props: {language: LanguageType}) {
    const { language } = props; 

    const styling = {
        wrappers: {
            footer: "flex flex-col border-t-8 border-t-[#ffbb00]",
            links: {
                general: "flex flex-col py-8 gap-y-6 max-w-[1400px] ultrawide:self-center",
                en: "tablet:flex-row tablet:justify-center tablet:gap-y-0 tablet:gap-x-20 min-750px:gap-x-44",
                de: "min-650px:flex-row min-650px:justify-center min-650px:gap-y-0 min-650px:gap-x-20 desktop:gap-x-44"
            },
            extraInfo: "pb-8 text-center tracking-wide" 
        },
        text: {
            phone: "text-lg font-jost-medium hover:text-[#0000EE] underline decoration-solid underline-offset-4 hover:text-[#0000EE]",
            rights: "text-base"
        }
    };

    
    const urlGroupsProps = {
        orderWays: {
            language: language,
            urlGroup: localization.footer.urlGroups["orderWays"],
            header: localization.footer.urlGroups.orderWays.header[language]
        },
        company: {
            language: language,
            urlGroup: localization.footer.urlGroups["company"],
            header: localization.footer.urlGroups.company.header[language]
        }
    };
    
    
    return (
        <footer className={styling.wrappers.footer}>
            
            <Container styling={`${styling.wrappers.links.general} ${styling.wrappers.links[language]}`}>
                <URLGroup {...urlGroupsProps.orderWays} />
                <URLGroup {...urlGroupsProps.company} />
            </Container>

            <Container styling={styling.wrappers.extraInfo}>
                <a className={styling.text.phone} href="tel:+498945203680">{localization.footer.extras.phone[language]}</a>
                <p className={styling.text.rights}>{localization.footer.extras.rights[language]}</p>
            </Container>

        </footer>
    ) ;
}





