import React, { JSXElementConstructor, useEffect, useMemo, useRef, useState } from "react"
import ImageIcon from '@mui/icons-material/ImageRounded';
import VideoIcon from '@mui/icons-material/SmartDisplayRounded';
import ReactPlayer from 'react-player'

function CollectionPage() {

    const [images, setImages] = useState<string[]>([])
    const [videos, setVideos] = useState<string[]>([])
    const [select, setSelect] = useState(0);

    useEffect(() => {

        fetch('./gallery.json').then(result => result.json()).then(json => {
            setImages(json.images);
            setVideos(json.videos);
        })

        return () => { }
    }, [])

    useEffect(() => {

    }, [])

    return (
        <div className={`w-full min-h-full flex flex-col justify-start items-center font-line text-black`}>
            <div className="mb-3 w-full h-12 flex flex-row justify-between bg-white border-border-black border-2 rounded-xl z-10 overflow-hidden">
                <div className="h-full w-1/2 bg-white border-border-black border-r flex justify-center items-center text-xl" onClick={() => setSelect(0)}>
                    <ImageIcon className="text-black text-xl mr-2" /><p>รูปภาพ</p>
                </div>
                <div className="h-full w-1/2 bg-white border-border-black border-l flex justify-center items-center text-xl" onClick={() => setSelect(1)}>
                    <VideoIcon className="text-black text-xl mr-2" /><p>วีดีโอ</p>
                </div>
            </div>
            <div className={`mb-3 w-full grid ${(select == 0) ? 'grid-cols-3' : 'grid-cols-1'} gap-2`}>
                {
                    (select == 0) ? images.map((v, i) => {

                        const full = (i % 7 == 0)

                        return (
                            <div key={i} className={`w-full h-full ${full && 'col-span-3'}`}>
                                <img src={v} className='h-full object-cover rounded-xl' loading="lazy" />
                            </div>
                        )
                    }) :
                        videos.map((v, i) =>
                            <div key={i} className={`w-full h-full border-border-black border-2 rounded-xl overflow-hidden`} >
                                <iframe className={`w-full`} src={v}></iframe>
                            </div>
                        )
                }
            </div>
            <div className="w-full h-[100px]"></div>
        </div>
    )

}

export default CollectionPage