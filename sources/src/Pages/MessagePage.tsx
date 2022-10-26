import { useMemo } from "react"

function MessagePage() {

    return (
        <div className={`w-full min-h-full flex flex-col justify-start items-center font-line text-black`}>
            <div className="mt-4 mb-4 w-full font-bold text-xl text-center">เค้าอยากบอกว่า</div>
            <div className="mt-4 mb-4 w-full font-normal text-base text-center">"เค้าขอโทษที่เค้าทำให้เธอไม่สบายใจบ่อย ๆ"</div>
            <div className="mb-4 w-full font-normal text-base text-center">"เค้าจะเป็นแฟนที่ดีขึ้นสำหรับเธอ"</div>
            <div className="mb-3 w-full font-normal text-base text-center">.</div>
            <div className="mb-3 w-full font-normal text-base text-center">.</div>
            <div className="mb-3 w-full font-normal text-base text-center">.</div>
            <div className="mb-4 w-full font-normal text-base text-center">"เค้าขอบคุณทุกอย่างที่เธอทำให้เค้า"</div>
            <div className="mb-4 w-full font-normal text-base text-center">"ขอบคุณสำหรับโอกาสที่เธอมอบให้"</div>
            <div className="mb-3 w-full font-normal text-base text-center">.</div>
            <div className="mb-3 w-full font-normal text-base text-center">.</div>
            <div className="mb-3 w-full font-normal text-base text-center">.</div>
            <div className="mb-4 w-full font-normal text-base text-center">"เค้ารักเธอนะครับ"</div>
        </div>
    )

}

export default MessagePage