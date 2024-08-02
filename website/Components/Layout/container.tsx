import { ReactNode } from 'react';

// For wrapping multiple elements
export default function Container(props: {children: ReactNode; styling: string;}) {
    const { children, styling } = props;
    
    return (
        <div className={styling}>
            {children}
        </div>
    );
};






