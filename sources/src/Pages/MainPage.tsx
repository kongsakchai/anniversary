import { useMemo } from "react"

const data: TimelineProps[] = [
    {
        date: '26-10-2022',
        label: 'ครบรอบ 100 วัน'
    },
    {
        date: '19-10-2022',
        label: 'ครบรอบ 3 เดือน'
    },
    {
        date: '19-09-2022',
        label: 'ครบรอบ 2 เดือน'
    },
    {
        date: '19-08-2022',
        label: 'ครบรอบ 1 เดือน'
    },
    {
        date: '6-08-2022',
        label: 'เดทแรก'
    },
    {
        date: '19-07-2022',
        label: 'คบเป็นแฟนกัน'
    },
    {
        date: '22-06-2022',
        label: 'เจอหน้ากันครั้งแรก'
    }
]

function MainPage() {

    const day = useMemo(() => {

        const start = new Date('2022-07-19');
        const time = Date.now() - start.getTime();
        return Math.ceil(time / 1000 / 60 / 60 / 24);

    }, [])

    return (
        <div className={`w-full min-h-full flex flex-col justify-start items-center font-line text-black`}>
            <div className="mb-3 font-bold text-4xl">เราเป็นแฟนกันมา</div>
            <div className="mb-3 w-full font-bold text-9xl text-center">{day} วัน</div>
            <div className="relative w-full flex flex-col justify-start items-center ">
                {
                    data.map((v, i) => <TimelineBlock key={i} date={v.date} label={v.label} />)
                }
            </div>
            <div className="w-full h-[100px]"></div>
        </div>
    )

}

export default MainPage


interface TimelineProps {
    date?: string,
    label?: string
}

const TimelineBlock: React.FC<TimelineProps> = (props) => {
    return (
        <div className={`w-full my-2 p-1 flex flex-col items-start justify-start bg-white border-border-black border-2 rounded-lg font-line text-black text-center`}>
            <div className="font-normal text-base">{props.label}</div>
            <div className="font-normal text-sm">{props.date}</div>
        </div>
    )
}