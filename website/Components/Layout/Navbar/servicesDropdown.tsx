import Link from "next/link";

type NavService = {title: string, route: string};


export default function ServicesDropdown(props: {catering: NavService; cafe: NavService}) {
    const { catering, cafe } = props;
    
    const styling = {
        links: "text-base text-center hover:text-[#FFB200] hover:opacity-90 font-jost-extrabold tracking-wider"
    };

    return (
        <>
            <Link className={styling.links} href={catering.route}>
                {catering.title}
            </Link>

            <Link className={styling.links} href={cafe.route}>
                {cafe.title}
            </Link>  
        </>
    )
}


