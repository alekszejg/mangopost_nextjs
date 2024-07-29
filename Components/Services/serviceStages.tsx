import Image from "next/image";

import Container from "@/Components/Layout/container";

import { ServiceType } from "@/app/layout";

type ServiceStage = {header: string; text: string; imgSrc: string; imgAlt: string;}


export default function ServiceStages(props: {service: ServiceType; header: string; stages: ServiceStage[];}) {

    const { service, header, stages } = props;

    const styling = { 
        header: "text-center font-jost-extrabold mt-12 mx-6 text-xl tablet:mx-0 tablet:text-2xl",
        container: "flex flex-col min-800px:flex-row min-800px:justify-center min-800px:items-start min-800px:gap-x-4",
        stage: {
            container: "flex flex-col items-center text-center",
            imgWrapper: "w-[130px] min-800px:w-[91px]",
            img: "w-full h-full",
            header: "font-jost-bold mt-5 text-lg text-nowrap tablet:text-xl",
            text: {
                general: "text-base w-3/4 mt-2 tablet:text-lg",
                onDemand: "tablet:w-[350px] min-800px:w-[250px]",
                scheduled: "tablet:w-[350px] min-800px:w-[180px]"
            }
        }
    }

    return (
        <>
        <h1 className={styling.header}>{header}</h1>
        <Container styling={styling.container}>
            {stages.map((stage, index) => (
                <div key={`stage${index + 1}`} className={styling.stage.container}>
                    <div className={styling.stage.imgWrapper}>
                        <Image className={styling.stage.img} src={stage.imgSrc} alt={stage.imgAlt} />
                    </div>
                    
                    <h2 className={styling.stage.header}>{stage.header}</h2>
                    <p className={`${styling.stage.text.general} ${styling.stage.text[service]}`}>
                        {stage.text}
                    </p>
                </div>
            ))}
        </Container>

        </>  
    );
}

