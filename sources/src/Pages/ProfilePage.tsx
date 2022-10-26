import { useMemo } from "react"

function ProfilePage() {

    const day = useMemo(() => {

        const start = new Date('2022-07-19');
        const time = Date.now() - start.getTime();
        return Math.ceil(time / 1000 / 60 / 60 / 24);

    }, [])

    return (
        <div className={`w-full min-h-full flex flex-col justify-start items-center font-line text-black`}>
            <div className="w-full font-bold text-xl text-left">Natsu & Kong</div>
            <img src={'./Artwork.png'} className='w-full object-cover rounded-xl' loading="lazy" />
            <div className="mb-3 w-full font-bold text-base text-left">ชื่อ นัทสึ</div>
            <div className="mb-3 w-full font-bold text-base text-left">สถานะปัจุบัน แฟนก๊องคับ</div>
            <div className="mb-3 w-full font-bold text-base text-left">ชื่อ ก๊อง</div>
            <div className="mb-3 w-full font-bold text-base text-left">สถานะปัจุบัน แฟนนัทสึ</div>
            <div className="mb-3 w-full font-bold text-base text-left">คบกันเมื่อวันที่ 19 กรกฎาคม พ.ศ.2565</div>
            <div className="mb-3 w-full font-bold text-base text-left">คบกันได้ {day} วัน</div>
            <div className="mb-3 w-full font-bold text-base text-left">ปัจจุบันรักกันมาก ♥</div>
        </div>
    )

}

export default ProfilePage