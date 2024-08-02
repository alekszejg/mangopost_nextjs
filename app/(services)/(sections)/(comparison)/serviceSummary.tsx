import { ButtonGroup, Button } from "@/Components/UI/buttons";

import { ServiceSummaryProps } from "./compareServices";


export default function ServiceSummary(props: ServiceSummaryProps) {
    const { header, text, features, buttons } = props;

    const styling = {
        header: "mb-0.5 font-jost-bold text-center text-base tablet:text-lg",
        text: "text-base font-jost-medium-italic px-8",
        featureList: "px-8 pt-4 pb-6 text-base",
        buttonGroup: "flex flex-col items-center gap-y-5 mt-auto",
        button: {
            general: "block h-14 w-[calc(100%-4rem)] self-center rounded-xl text-base font-jost-extrabold bg-[#FAFAFA] hover:scale-[1.01] active:scale-[1.01] shadow-[0px_0px_8px] shadow-gray-400 tablet:w-1/2",
            learnMore: "block h-14 text-base font-jost-extrabold hover:scale-110 active:scale-110 text-center"
        }
    };

    const totalButtons = buttons.length;

    return (
        <> 
        <h3 className={styling.header}>{header}</h3>
        <p className={styling.text}>{text}</p>
        
        <ul className={styling.featureList}>
            {features.map((feature, index) => (
                <li key={index} className={index !== 0 ? "mt-5" : undefined}>
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
        </>
    );
}