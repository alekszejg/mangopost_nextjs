import Container  from '@/Components/Layout/container';
import { Button, ButtonGroup } from '@/Components/UI/buttons';

import { ServiceType } from '@/app/layout';
import { ButtonType } from '@/Components/UI/buttons';

type ServiceSummary = {service: ServiceType; header: string; text: string; features: string[]; buttons: ButtonType[];}


export default function CompareServices(props: {header: string, onDemand: ServiceSummary, scheduled: ServiceSummary}) {
    const { header, onDemand, scheduled } = props;

    const styling = {
        header: "text-center font-jost-extrabold mx-6 text-xl tablet:mx-0 tablet:text-2xl",
        container: "flex flex-col items-center tablet:gap-y-12 min-800px:flex-row min-800px:justify-center min-800px:items-stretch min-800px:gap-x-12 min-800px:gap-y-0",
    }

    return (
        <>
        <h1 className={styling.header}>{header}</h1>
        <Container styling={styling.container}>
            <ServiceSummary {...onDemand} />
            <ServiceSummary {...scheduled} />
        </Container>
        </>
    );
}


function ServiceSummary(props: ServiceSummary) {
    const { service, header, text, features, buttons } = props;
    const totalButtons = buttons.length;
    const styling = {
        container: {
            general: "flex flex-col pb-8 rounded-2xl shadow-[0px_0px_20px] shadow-gray-400 max-w-[560px] mobile:w-full mobile:pt-8 min-800px:max-w-[510px] min-800px:pt-6",
            onDemand: "bg-[#FFB200]",
            scheduled: "bg-[#FFB200] bg-opacity-20"
        },
        header: "font-jost-bold text-center text-xl tablet:text-2xl",
        text: "text-lg font-jost-medium pl-8 mt-0.5 tablet:text-xl",
        featureList: "px-8 my-4 text-lg tablet:text-xl",
        buttonGroup: "flex flex-col items-center gap-y-5 mt-auto",
        button: {
            general: "block h-14 w-[calc(100%-4rem)] rounded-xl text-lg font-jost-extrabold bg-[#FAFAFA] hover:scale-[1.01] active:scale-[1.01] shadow-[0px_0px_8px] shadow-gray-400 tablet:w-1/2",
            learnMore: "block h-14 text-lg font-jost-extrabold hover:scale-110 active:scale-110 text-center"
        }
    }


    return (
        <Container styling={`${styling.container.general} ${styling.container[service]}`}>
                
            <h2 className={styling.header}>{header}</h2>
            <p className={styling.text}>{text}</p>
            
            <ul className={styling.featureList}>
                {features.map((feature, index) => (
                    <li key={index} className={`${index !== 0 ? "mt-5" : "mt-0"}`}>
                        {feature}
                    </li>
                ))}
            </ul>

            {totalButtons == 1 && <Button {...{...buttons[0], buttonStyling: `mt-auto ${styling.button[buttons[0].category]}`}} />}
            {totalButtons == 2 &&
                <ButtonGroup styling={styling.buttonGroup}>
                    <Button {...{...buttons[0], buttonStyling: styling.button[buttons[0].category]}} />
                    <Button {...{...buttons[1], buttonStyling: styling.button[buttons[1].category]}} />
                </ButtonGroup>
            }

        </Container>
    );
}





            


