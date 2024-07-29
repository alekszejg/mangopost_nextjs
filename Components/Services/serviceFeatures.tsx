import Image from "next/image";

type Feature = {
    imgOrder: string;
    textOrder: string;
    imgStyling: string;
    imgSrc: string;
    imgAlt: string;
    header: string;
    text: string;
};


export default function ServiceFeatures(props: {header: string; text: string; features: Feature[]}) {
    const { header, text, features } = props;

    const styling = {
        header: "text-center font-jost-extrabold text-xl tablet:mx-0 tablet:text-2xl",
        text: "mt-3 mb-8 text-base tablet:max-w-[750px] tablet:mb-0 tablet:text-lg tablet:text-center",
        features: {
            mainContainer: "flex flex-col items-center py-12 tablet:flex-row tablet:justify-between tablet:max-w-[750px]",
            textContainer: "flex flex-col items-center tablet:block tablet:w-3/5",
            header: "text-lg font-jost-medium mt-6 tablet:mt-0 tablet:text-xl",
            text: "mt-3 text-base tablet:text-lg tablet:mt-2"
        }
    };

    return (
        <>
        <h1 className={styling.header}>{header}</h1>
        <p className={styling.text}>{text}</p>
        {features.map((feature, index) => (
            <div key={`feature${index + 1}`} className={styling.features.mainContainer}>
                <div className={`tablet:w-2/5 ${feature.imgOrder}`}>
                    <Image className={`tablet:h-full ${feature.imgStyling}`} src={feature.imgSrc} alt={feature.imgAlt} />
                </div>

                <div className={`${styling.features.textContainer} ${feature.textOrder}`}>
                    <h2 className={styling.features.header}>{feature.header}</h2>
                    <p className={styling.features.text}>{feature.text}</p>
                </div>
            </div>
        ))}
        </>
    );
};

