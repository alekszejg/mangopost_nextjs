import Link from "next/link";

import Container from "../container";
import { LanguageType, LocalizedValues } from "@/app/layout";

type URL = {name: LocalizedValues; route: LocalizedValues};
interface URLGroup {header: LocalizedValues; urls: URL[];}


export default function URLGroup(props: {language: LanguageType, urlGroup: URLGroup, header: string}) {
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