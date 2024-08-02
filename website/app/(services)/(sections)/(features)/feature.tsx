import Image from "next/image";
import Container from "@/Components/Layout/container";
import { FeatureProps } from "./serviceFeatures";

export default function ServiceFeature(props: FeatureProps) {
    const { imgStyling, imgSrc, imgAlt, textOrder, header, text } = props;
    
    const styling = {
        imgContainer: imgStyling,
        image: "w-full h-full",
        textContainer: `block min-700px:w-3/5 ${textOrder}`,
        header: "text-lg text-center font-jost-medium mt-6 mb-2 min-700px:mt-0 min-700px:text-start",
        text: "text-base"
    }

    return (
        <>
        <Container styling={styling.imgContainer}>
            <Image className={styling.image} src={imgSrc} alt={imgAlt} />
        </Container>

        <Container styling={styling.textContainer}>
            <h2 className={styling.header}>{header}</h2>
            <p className={styling.text}>{text}</p>
        </Container>        
        </>
    );
}