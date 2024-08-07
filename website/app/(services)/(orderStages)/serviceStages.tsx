import Container from "@/Components/Layout/container";
import ServiceStage from "./eachStage";

import { ServiceType } from "@/app/layout";

export type ServiceStageProps = {header: string; text: string; imgSrc: string; imgAlt: string;}


export default function ServiceStages(props: {service: ServiceType; header: string; stages: ServiceStageProps[];}) {

    const { service, header, stages } = props;

    const styling = { 
        header: "text-center font-jost-extrabold mb-6 text-lg tablet:text-xl",
        stagesWrapper: {
            general: "flex flex-col gap-y-14 min-800px:flex-row min-800px:justify-between min-800px:gap-y-0",
            catering: "min-800px:gap-x-14",
            cafe: "min-800px:gap-x-6"
        },
        stageContainer: {
            general: "flex flex-col items-center text-center",
            catering: "min-800px:w-1/3 min-800px:max-w-[310px]",
            cafe: "min-800px:w-1/4 min-800px:max-w-[250px]"
        }
    };

    return (
        <>
        <h2 className={styling.header}>{header}</h2>
        <Container styling={`${styling.stagesWrapper.general} ${styling.stagesWrapper[service]}`}>
            {stages.map((stage, index) => (
                <Container key={`stage${index + 1}`} styling={`${styling.stageContainer.general} ${styling.stageContainer[service]}`}>
                    <ServiceStage {...stage} />
                </Container>
            ))}
        </Container>
        </>  
    );
}

