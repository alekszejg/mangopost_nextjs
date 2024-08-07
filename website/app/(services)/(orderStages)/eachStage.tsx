import Image from "next/image";
import Container from "@/Components/Layout/container";

import { ServiceStageProps } from "./serviceStages";

export default function ServiceStage(props: ServiceStageProps) {
    const { imgSrc, imgAlt, header, text } = props;
    
    const styling = {
        imgWrapper: "w-[91px] tablet:w-[130px] min-800px:w-[91px]",
        header: "font-jost-bold mt-3 mb-1 text-base text-nowrap tablet:text-lg min-800px:text-base",
        text: "text-base tablet:text-lg min-800px:text-base", 
    };

    return (
        <>
        <Container styling={styling.imgWrapper}>
            <Image className="w-full h-full" src={imgSrc} alt={imgAlt} />
        </Container>
        <h3 className={styling.header}>{header}</h3>
        <p className={styling.text}>{text}</p>
        </>
    );
}