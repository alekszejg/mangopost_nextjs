import { ReactNode } from 'react';


export default function Section(props: {children: ReactNode; styling: string;}) {
    const { children, styling } = props;
    
    return (
        <section className={styling}>
            {children}
        </section>
    );
};