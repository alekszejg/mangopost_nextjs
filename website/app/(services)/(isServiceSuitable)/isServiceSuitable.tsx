import Container  from '@/Components/Layout/container';
import ServiceSummary from './serviceSummary';

import { ServiceType } from '@/app/layout';
import { ButtonType } from '@/Components/UI/buttons';


export type ServiceSummaryProps = {serviceType: ServiceType; header: string; text: string; features: string[]; buttons: ButtonType[];}


export default function IsServiceSuitable(props: {header: string, service: ServiceSummaryProps}) {
    const { header, service } = props;

    const styling = {
        header: "text-lg font-jost-extrabold mx-6 mb-5 text-lg tablet:text-servicesMainHeader min-800px:mx-0",
        container: {
            general: "w-full py-8 rounded-2xl shadow-[0px_0px_20px] shadow-gray-400 tablet:max-w-[800px] min-800px:pt-6",
            catering: "bg-[#FFB200]",
            cafe: "bg-[#FFB200] bg-opacity-20"
        }
    }

    return (
        <>
        <h2 className={styling.header}>{header}</h2>
        <Container styling={`${styling.container.general} ${styling.container[service.serviceType]}`}>
            <ServiceSummary {...service} />
        </Container>
        </>
    );
};





            


