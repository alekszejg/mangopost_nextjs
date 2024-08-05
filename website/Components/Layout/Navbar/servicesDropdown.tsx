import Link from "next/link";

type NavService = {title: string, route: string};


export default function ServicesDropdown(props: {onDemand: NavService; scheduled: NavService}) {
    const { onDemand, scheduled } = props;
    const styling = {
        wrapper: "flex flex-col gap-y-4 pt-2 pb-8 w-full bg-white absolute top-12 shadow-[0_1px_2px] shadow-gray-400 navMin-960px:w-[260px] navMin-960px:gap-y-3 navMin-960px:py-4 navMin-960px:shadow-[0_1px_8px_-3px] navMin-960px:shadow-black navMin-960px:px-5 navMin-960px:rounded-lg",
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


