import Link from "next/link";
import { LanguageType, LocalizedValues } from "@/app/layout";
import localization from "@/Localization/navbarFooter.json";
import Container from "../section";


// Types related URL localization 
type URL = {name: LocalizedValues; route: LocalizedValues};
interface URLGroup {header: LocalizedValues; urls: URL[];}


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
            phone: "text-lg font-jost-medium",
            rights: "text-base"
        }
    };

    
    const urlGroupProps = {
        orderWays: {
            language: language,
            urlGroup: localization.footer.urlBlocks["orderWays"] as URLGroup,
            header: localization.footer.urlBlocks.orderWays.header[language]
        },
        company: {
            language: language,
            urlGroup: localization.footer.urlBlocks["company"] as URLGroup,
            header: localization.footer.urlBlocks.company.header[language]
        }
    };
    
    
    return (
        <footer className={styling.wrappers.footer}>
            
            <Container styling={`${styling.wrappers.links.general} ${styling.wrappers.links[language]}`}>
                <URLGroup {...urlGroupProps.orderWays} />
                <URLGroup {...urlGroupProps.company} />
            </Container>

            <Container styling={styling.wrappers.extraInfo}>
                <p className={styling.text.phone}>{localization.footer.extras.phone[language]}</p>
                <p className={styling.text.rights}>{localization.footer.extras.rights[language]}</p>
            </Container>

        </footer>
    ) ;
}


function URLGroup(props: {language: LanguageType, urlGroup: URLGroup, header: string}) {
    const { language, urlGroup, header } = props;
    
    const styling = {
        wrapper: "text-center",
        header: "mb-1 text-lg font-jost-medium tracking-wide",
        link: "block w-full h-full hover:underline"
    };

    return (
        <Container styling={styling.wrapper}>
            <h2 className={styling.header}>{header}</h2>
            <ul>
                {urlGroup.urls.map((url, index) => (
                    <li key={index} className={index !== 0 ? "mt-1.5" : undefined}>
                        <Link className={styling.link} href={url.route[language]}>
                            {url.name[language]}
                        </Link>
                    </li>
                ))}
            </ul>

        </Container>
    );
}


