import React, { useMemo, useState } from "react";
import LockIcon from '@mui/icons-material/LockRounded'
import { read } from "fs";

interface Props {
    onSubmit: (value: boolean) => void;
}

const Lock: React.FC<Props> = (props) => {

    const [pass, setPass] = useState("");

    const onCheck = () => {

        const salt = ['A', '5', 'z', '3', '@', '.', '#', 'C']
        let result = "";
        for (let i = 0; i < pass.length; i++) {
            let saltId = i;
            while (saltId >= salt.length) saltId = saltId % 3
            result = result + pass[i] + salt[saltId] + result + pass[i] + salt[saltId];
        }
        if (result == '1A1A951A1A950z1A1A951A1A950z731A1A951A1A950z1A1A951A1A950z732@1A1A951A1A950z1A1A951A1A950z731A1A951A1A950z1A1A951A1A950z732@2.1A1A951A1A950z1A1A951A1A950z731A1A951A1A950z1A1A951A1A950z732@1A1A951A1A950z1A1A951A1A950z731A1A951A1A950z1A1A951A1A950z732@2.') {
            props.onSubmit?.(true);
        }

    }


    return (
        <React.Fragment>
            <div className=' absolute w-[300px] h-[300px] my-5 px-2 py-5 flex flex-col justify-between items-center bg-white border-border-black border-2 rounded-lg font-line font-bold text-xl text-black text-center z-20'>
                <div><LockIcon className='text-black' sx={{ fontSize: 100 }} /></div>
                <div>ใส่รหัสครับ</div>
                <input value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Password" className="w-full h-[40px] bg-white border-border-black border-2 rounded-lg font-line font-normal text-base text-black text-center outline-none" />
                <div onClick={() => onCheck()} className=" w-full flex justify-center items-center h-[40px] bg-white border-border-black border-2 rounded-lg font-line font-bold text-base text-black text-center outline-none">
                    Unlock
                </div>
            </div>
        </React.Fragment>
    )
}

export default Lock;