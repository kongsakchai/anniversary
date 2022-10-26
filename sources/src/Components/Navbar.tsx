import React, { useEffect, useState } from "react";

interface Props {
    routers?: {
        path: string,
        page: JSX.Element,
        icon: JSX.Element
    }[],
    onChage?: (path: number) => void
}


const Navbar: React.FC<Props> = (props) => {

    const [select, setSelect] = useState<number>(0)

    useEffect(() => {
        props.onChage?.(select)
        return () => { }
    }, [select])

    return (
        <React.Fragment>
            <div className="fixed flex flex-row justify-between bottom-0 left-0 right-0 m-3 p-3 bg-white border-border-black border-2 rounded-xl z-10">
                {
                    props.routers?.map((v, i) =>
                        <ButtonMenu key={i} select={select == i} onClick={() => setSelect(i)}>
                            {v.icon}
                        </ButtonMenu>
                    )
                }
            </div>
        </React.Fragment>
    )
}

export default Navbar;

interface ButtonProps {
    children?: string | JSX.Element,
    select?: boolean,
    onClick?: () => void
}

const ButtonMenu: React.FC<ButtonProps> = (props) => {
    return (
        <div className={`px-5 py-2 bg-white border-2 border-border-black ${props.select ? 'border-opacity-100' : 'border-opacity-0'} rounded-xl transition-all delay-75`}
            onClick={() => props.onClick?.()}
        >
            {props.children}
        </div>
    )
}