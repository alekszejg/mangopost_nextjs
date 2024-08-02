"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

import mangopostLogo from "@/public/Images/mangopostLogo.svg";
import blackArrowDownIcon from "@/public/Icons/blackArrowDown.svg";
import burgerMenuIcon from "@/public/Icons/burgerMenu.svg";
import germanFlagIcon from "@/public/Icons/germanFlagIcon.svg";
import ukFlagIcon from "@/public/Icons/ukFlagIcon.svg";

import { LanguageType, LocalizedValues } from "@/app/layout";

import localization from "@/Localization/navbarFooter.json";
import allRoutes from "@/Localization/routes.json";


interface allRoutesTypes {
    homepage: LocalizedValues;
    aboutUs: LocalizedValues;
    onDemandDelivery: LocalizedValues;
    scheduledDelivery: LocalizedValues;
    privacyPolicy: LocalizedValues;
}


export default function Navbar(props: {language: LanguageType;}) {
    const { language } = props;

    // Making navbar language client-sided and depend on user interaction
    const [clientLanguage, setClientLanguage] = useState<LanguageType>(language);
    const router = useRouter();
    const currentPath = usePathname();

    const changeCurrentRouteLanguage = () => {
        let newLanguage: LanguageType  = clientLanguage; // FALLBACK
        for (const routeCategory in allRoutes) {
            const category = routeCategory as keyof allRoutesTypes;
            
            if (allRoutes[category][clientLanguage] === currentPath) {
                newLanguage = clientLanguage === "en" ? "de" : "en";
                const newPath = allRoutes[category][newLanguage]; 
                router.push(newPath);
            }
        }
        setClientLanguage(newLanguage);
    }
    
    const navRef = useRef<HTMLElement>(null);
    

    const [isDropdownVisible, setDropdownVisible] = useState(false)
    const toggleDropdown = () => {isDropdownVisible ? setDropdownVisible(false) : setDropdownVisible(true)}
    const handleMouseLeave = () => {isDropdownVisible && setDropdownVisible(false)}


    const burgerMenuIconRef = useRef<HTMLImageElement>(null)
    const [burgerMenuClicked, setBurgerMenuClick] = useState(false);
    
    const toggleBurgerMenu = () => {burgerMenuClicked === false ? setBurgerMenuClick(true) : setBurgerMenuClick(false);};

    useEffect(() => {
        if (!burgerMenuClicked) return;
        
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)
            && burgerMenuIconRef.current && !burgerMenuIconRef.current.contains(event.target as Node)) {
                setBurgerMenuClick(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, [burgerMenuClicked]);

  
    const langButtons = {en: ukFlagIcon, de: germanFlagIcon};
   
    const styling = {
        nav: "flex h-24 relative shadow-[0_1px_12px] shadow-gray-400 ultrawide:justify-center",
        wrapper: "flex justify-between w-full max-w-[1400px]",
        navLogo: {
            wrapper: "shrink-0 h-full pl-10 pr-12 box-content tablet:pl-16",
            logo: "self-center object-cover w-auto h-14 tablet:h-16 navMin-1125px:h-20"
        },
        navList: {
            wrapper: `${burgerMenuClicked ? "block" : "hidden"} w-full pb-8 bg-white absolute top-full left-0 shadow-[0_1px_2px] shadow-gray-400 navMin-960px:flex navMin-960px:items-center navMin-960px:pb-0 navMin-960px:shadow-none navMin-960px:static`,
            list: "flex flex-col w-full bg-white navMin-960px:flex navMin-960px:flex-row",
            items: {
                aboutUs: "mt-5 navMin-960px:mt-0",
                orderNow: "flex flex-col items-center relative list-none mt-5 navMin-960px:mt-0"
            },
            links: {
                aboutUs: "flex justify-center items-center h-full font-jost-extrabold tracking-wider linkHover text-lg",
                orderNow: "flex justify-center items-center h-12 rounded-xl bg-gradient-to-r from-[#FFBB00] to-[#FFD900] font-jost-extrabold tracking-wider text-lg mobile:px-4 navMin-960px:px-4 navMin-960px:ml-3"
            },
            arrowDownIcon: "w-4 h-3 relative left-1.5 transition-all duration-75",
        },
        languageButton: {
            button: "w-11 mr-4 tablet:w-8 tablet:mr-3 navMin-960px:ml-3 navMin-960px:mr-0",
            icon: "w-full h-full"
        },
        burgerMenu: {
            wrapper: "block h-1/3 pr-4 mobile:self-center tablet:h-1/4 navMin-960px:hidden",
            icon: "w-auto h-full"
        } 
    }

    return (
        <nav ref={navRef} className={styling.nav} onMouseLeave={handleMouseLeave}>
            <div className={styling.wrapper}>
                <div className={styling.navLogo.wrapper}>
                    <Link className="flex w-full h-full" href={allRoutes.homepage[clientLanguage]}>
                        <Image className={styling.navLogo.logo} src={mangopostLogo} alt="Mangopost logo" />
                    </Link>
                </div>
                
                <div className="flex h-full navMin-960px:pr-5">
                    
                    <div className={styling.navList.wrapper}>

                        <ul className={styling.navList.list}>
                            <li className={styling.navList.items.aboutUs}>
                                <Link className={styling.navList.links.aboutUs} href={allRoutes.aboutUs[clientLanguage]}>
                                    {localization.navbar.titles.aboutUs[clientLanguage]}
                                </Link>
                            </li>

                            <li className={styling.navList.items.orderNow}>
                                <span className={styling.navList.links.orderNow} onMouseEnter={toggleDropdown} onClick={toggleDropdown}>
                                    {localization.navbar.titles.orderNow[clientLanguage]}
                                    <Image className={isDropdownVisible ? `rotate-[-180deg] ${styling.navList.arrowDownIcon}` : styling.navList.arrowDownIcon} src={blackArrowDownIcon} alt="" />
                                </span>
                                <ServicesDropdown {...{dropdownStatus: isDropdownVisible, language: clientLanguage}} />
                            </li>
                        </ul>

                    </div>
                    
                    <button className={styling.languageButton.button} onClick={changeCurrentRouteLanguage}>
                        <Image className={styling.languageButton.icon} src={clientLanguage === "de" ? langButtons["en"] : langButtons["de"]} alt="" />
                    </button>

                    <div className={styling.burgerMenu.wrapper}>
                        <Image ref={burgerMenuIconRef} className={styling.burgerMenu.icon} src={burgerMenuIcon} alt="" onClick={toggleBurgerMenu} />
                    </div>

                </div>
            </div>
        </nav>  
    )   
}


function ServicesDropdown(props: {dropdownStatus: boolean; language: LanguageType}) {
    const { dropdownStatus, language } = props;
    const styling = {
        wrapper: "flex flex-col gap-y-4 pt-2 pb-8 w-full bg-white absolute top-12 shadow-[0_1px_2px] shadow-gray-400 navMin-960px:w-[260px] navMin-960px:gap-y-3 navMin-960px:py-4 navMin-960px:shadow-[0_1px_8px_-3px] navMin-960px:shadow-black navMin-960px:px-5 navMin-960px:rounded-lg",
        links: "text-base text-center hover:text-[#FFB200] hover:opacity-90 font-jost-extrabold tracking-wider"
    };

    return (
        <div className={dropdownStatus ? styling.wrapper : "hidden"}>
            <Link className={styling.links} href={allRoutes.onDemandDelivery[language]}>
                {localization.navbar.titles.dropdown.onDemand[language]}
            </Link>

            <Link className={styling.links} href={allRoutes.scheduledDelivery[language]}>
                {localization.navbar.titles.dropdown.scheduled[language]}
            </Link>  
        </div>
    )
}
