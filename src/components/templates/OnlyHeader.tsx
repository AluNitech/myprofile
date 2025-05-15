import { Header } from "../organisms/header/Header";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export const OnlyHeader = (props: Props) => {
    const { children } = props;
    return (
        <>
            <Header />
            {children}
        </>
    )
}