import { ReactNode } from 'react';


export default function MainSection(props: {children: ReactNode; styling: string}) {
    const { children, styling } = props;
    
    return (
        <div className={styling}>
            {children}
        </div>  
    );
}