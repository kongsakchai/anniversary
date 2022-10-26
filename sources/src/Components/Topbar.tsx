import React, { useMemo } from "react";

interface Props {
    label?: string
}

const Topbar: React.FC<Props> = (props) => {

    const time = () => {
        const date = new Date();
        return date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
    }


    return (
        <React.Fragment>
            <div className='w-full my-5 p-2 flex justify-start bg-white border-border-black border-2 rounded-lg font-line font-bold text-xl text-black text-center z-10'>
                <div>⭐ {props.label}</div>
            </div>
        </React.Fragment>
    )
}

export default Topbar;