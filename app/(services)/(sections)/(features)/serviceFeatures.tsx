import Container from "@/Components/Layout/container";
import ServiceFeature from "./feature";

export type FeatureProps = {
    textOrder: string;
    imgStyling: string;
    imgSrc: string;
    imgAlt: string;
    header: string;
    text: string;
};


export default function ServiceFeatures(props: {header: string; text: string; features: FeatureProps[]}) {
    const { header, text, features } = props;

    const styling = {
        header: "mb-3 text-center font-jost-extrabold text-lg tablet:text-xl",
        text: "mb-8 text-base tablet:mb-0 tablet:text-center",
        featuresWrapper: "flex flex-col mt-12 gap-y-12",
        featureContainer: "flex flex-col items-center min-700px:flex-row min-700px:justify-center min-700px:gap-x-20"
    };

    return (
        <>
        <h2 className={styling.header}>{header}</h2>
        <p className={styling.text}>{text}</p>
        <Container styling={styling.featuresWrapper}>
            {features.map((feature, index) => (
                <Container key={`feature${index + 1}`} styling={styling.featureContainer}>
                    <ServiceFeature {...feature} />
                </Container>
            ))}
        </Container>
        </>
    );
};

