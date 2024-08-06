import Link from "next/link";

type NavService = {title: string, route: string};


export default function ServicesDropdown(props: {onDemand: NavService; scheduled: NavService}) {
    const { onDemand, scheduled } = props;
    
    const styling = {
        links: "text-base text-center hover:text-[#FFB200] hover:opacity-90 font-jost-extrabold tracking-wider"
    };

    return (
        <>
            <Link className={styling.links} href={onDemand.route}>
                {onDemand.title}
            </Link>

            <Link className={styling.links} href={scheduled.route}>
                {scheduled.title}
            </Link>  
        </>
    )
}


