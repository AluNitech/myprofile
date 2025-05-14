import type { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

export const Card = (props: Props) => {
    const { children } = props;
return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
        {children}
    </div>
)
}