"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

import Container from "../container";
import ServicesDropdown from "./servicesDropdown";

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

    const router = useRouter();
    const currentPath = usePathname();

    // Making navbar language client-sided and depend on user interaction
    const [clientLanguage, setClientLanguage] = useState<LanguageType>(language);
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

    // Making navbar visible during scroll up
    const [navbarSticky, setNavbarSticky] = useState(false);
    const isResizing = useRef(false);
    useEffect(() => {
        if (!navRef.current) return;
        let lastScrollUp = 0;
        
        //let scrollTimeout: NodeJS.Timeout | undefined;
        const handleScroll = () => {
            //if (scrollTimeout) clearTimeout(scrollTimeout);
            if (isResizing.current) return;

            const currentScroll = window.scrollY;
            // Sticky only during scroll up, during scrolldown currentScroll > lastScrollUp
            (currentScroll > 0 && currentScroll < lastScrollUp) ? setNavbarSticky(true) : setNavbarSticky(false);
            // Ensure lastScrollUp is === or > 0 
            lastScrollUp = Math.max(currentScroll, 0);
        };  

        // on resize navbar must be static to avoid flickering
        const handleResize = () => {
            isResizing.current = true;
            navbarSticky && setNavbarSticky(false);
            setTimeout(() => {
                isResizing.current = false;
            }, 300);
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }

    }, []);

  
    const langButtons = {en: ukFlagIcon, de: germanFlagIcon};
   
    const styling = {
        nav: `${navbarSticky ? "sticky" : "static"} flex h-24 top-0 bg-white shadow-[0_1px_12px] shadow-gray-400 ultrawide:justify-center`,
        wrapper: "flex relative justify-between w-full max-w-[1400px]",
        navLogo: {
            wrapper: "shrink-0 h-full pl-10 pr-12 box-content tablet:pl-16",
            logo: "self-center object-cover w-auto h-14 tablet:h-16 navMin-1125px:h-20"
        },
        navList: {
            wrapper: `${burgerMenuClicked ? "block" : "hidden"} w-full pb-8 bg-white absolute top-full left-0 shadow-[0_2px_2px] shadow-gray-400 navMin-960px:flex navMin-960px:items-center navMin-960px:pb-0 navMin-960px:shadow-none navMin-960px:static`,
            list: "flex flex-col w-full bg-white navMin-960px:flex navMin-960px:flex-row",
            items: {
                aboutUs: "mt-5 navMin-960px:mt-0",
                orderNow: "flex flex-col items-center relative list-none mt-5 navMin-960px:mt-0"
            },
            links: {
                aboutUs: "flex justify-center items-center h-full font-jost-extrabold tracking-wider linkHover text-lg",
                orderNow: "flex justify-center items-center h-12 px-4 rounded-xl bg-gradient-to-r from-[#FFBB00] to-[#FFD900] font-jost-extrabold tracking-wider text-lg navMin-960px:ml-3"
            },
            arrowDownIcon: "w-4 h-3 relative left-1.5 transition-all duration-75",
        },
        dropdownContainer: "flex flex-col gap-y-4 py-6 w-full bg-white absolute top-12 shadow-[0_2px_2px] shadow-gray-400 navMin-960px:w-[260px] navMin-960px:gap-y-3 navMin-960px:py-4 navMin-960px:shadow-[0_1px_8px_-3px] navMin-960px:shadow-black navMin-960px:px-5 navMin-960px:rounded-lg",
        langButton: "w-8 mr-4 tablet:mr-3 navMin-960px:ml-3 navMin-960px:mr-0",
        burgerMenu: "block h-1/4 pr-4 self-center navMin-960px:hidden",
    }

    const servicesDropdownProps = {
        dropdownStatus: isDropdownVisible,
        onDemand: {
            title: localization.navbar.titles.dropdown.onDemand[language],
            route: allRoutes.onDemandDelivery[language],
        },
        scheduled: {
            title: localization.navbar.titles.dropdown.scheduled[language],
            route: allRoutes.scheduledDelivery[language]
        }
    };

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
                                
                                <Container styling={isDropdownVisible ? styling.dropdownContainer : "hidden"}>
                                    <ServicesDropdown {...servicesDropdownProps} />
                                </Container>

                            </li>
                        </ul>

                    </div>
                    
                    <button className={styling.langButton} onClick={changeCurrentRouteLanguage}>
                        <Image className="w-full h-full" src={clientLanguage === "de" ? langButtons["en"] : langButtons["de"]} alt={clientLanguage === "de" ? "Change to english" : "Change to german"} />
                    </button>

                    <div className={styling.burgerMenu}>
                        <Image ref={burgerMenuIconRef} className="w-auto h-full" src={burgerMenuIcon} alt="" onClick={toggleBurgerMenu} />
                    </div>

                </div>
            </div>
        </nav>  
    )   
}




