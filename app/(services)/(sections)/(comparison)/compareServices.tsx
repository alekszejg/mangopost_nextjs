import Container  from '@/Components/Layout/container';
import ServiceSummary from './serviceSummary';

import { ServiceType } from '@/app/layout';
import { ButtonType } from '@/Components/UI/buttons';

export type ServiceSummaryProps = {service: ServiceType; header: string; text: string; features: string[]; buttons: ButtonType[];}


export default function CompareServices(props: {header: string, onDemand: ServiceSummaryProps, scheduled: ServiceSummaryProps}) {
    const { header, onDemand, scheduled } = props;

    const styling = {
        header: "text-center font-jost-extrabold mx-6 mb-5 text-lg tablet:text-xl min-800px:mx-0",
        summariesWrapper: "flex flex-col items-center tablet:gap-y-12 min-800px:flex-row min-800px:justify-center min-800px:items-stretch min-800px:gap-x-12 min-800px:gap-y-0",
        summaryContainer: {
            general: "flex flex-col w-full max-w-[560px] py-8 rounded-2xl shadow-[0px_0px_20px] shadow-gray-400 min-800px:max-w-[510px] min-800px:pt-6",
            onDemand: "bg-[#FFB200]",
            scheduled: "bg-[#FFB200] bg-opacity-20"
        }
    }

    return (
        <>
        <h2 className={styling.header}>{header}</h2>
        <Container styling={styling.summariesWrapper}>
            
            <Container styling={`${styling.summaryContainer.general} ${styling.summaryContainer.onDemand}`}>
                <ServiceSummary {...onDemand} />
            </Container>

            <Container styling={`${styling.summaryContainer.general} ${styling.summaryContainer.scheduled}`}>
                <ServiceSummary {...scheduled} />
            </Container>

        </Container>
        </>
    );
};





            


