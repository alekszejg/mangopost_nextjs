"use client"

import Image from 'next/image';

import MainSection from '@/Components/Layout/mainSection';
import Container from '@/Components/Layout/container';
import { Button, ButtonGroup } from '@/Components/UI/buttons';

import error404 from "@/public/Images/404.svg";
import germanFlagIcon from "@/public/Icons/germanFlagIcon.svg";
import ukFlagIcon from "@/public/Icons/ukFlagIcon.svg";

export default function NotFound() {
  
  const styling = {
    pageBody: "h-[100vh]",
    mainContainer: "flex flex-col items-center w-3/4 mx-auto relative top-[7vh] min-650px:top-[20vh]",
    imgContainer: "w-[200px] mb-8 min-650px:w-[300px]",
    buttonGroup: "flex flex-col items-start gap-y-2 min-650px:flex-row min-650px:gap-y-0 min-650px:gap-x-button-clamp",
    button: "font-jost-bold text-xl tracking-wide linkHover hover:scale-110"
  };


  const buttonProps = {
    en: {
      buttonStyling: styling.button,
      url: "/en",
      text: "OUR HOMEPAGE",
      imgSrc: ukFlagIcon,
      imgAlt: "english flag",
      imgStyling: "w-6 mr-1.5"
    },
    de: {
      buttonStyling: styling.button,
      url: "/",
      text: "UNSERE STARTSEITE",
      imgSrc: germanFlagIcon,
      imgAlt: "german flag",
      imgStyling: "w-6 mr-1.5"
    }
  }

  return (
    <MainSection styling={styling.pageBody}>
      
      <Container styling={styling.mainContainer}>
        
        <Container styling={styling.imgContainer}>
          <Image className="w-full h-full" src={error404} alt="404 error" priority />
        </Container>

        <ButtonGroup styling={styling.buttonGroup}>
          <Button {...buttonProps.en} />
          <Button {...buttonProps.de} />
        </ButtonGroup>

      </Container>  
    
    </MainSection>
  );
}