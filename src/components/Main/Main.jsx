import React, { useEffect, useState } from 'react'
import MainCard from './MainCard'
import { FaRegLightbulb } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { BiImageAdd } from "react-icons/bi";
import { FaMicrophone } from "react-icons/fa";
import { TbArrowBigRightLinesFilled } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { addTask, getResponse } from '../../store/ResponseSlice';


function Main() {

    const dispatch = useDispatch();
    const { status, text } = useSelector((state) => state.response?.respose)
    const [search, setSearch] = useState('');
    const [prevSearch, setPrevSearch] = useState('');
    const [loading, setLoading] = useState(false);
    const [showresult, setShowResult] = useState(false);
    const [word,setWord] = useState('')

    const handleResponse = () => {
        
        setPrevSearch(search)
        dispatch(addTask(search))
        dispatch(getResponse(search))
    }

    const delayWords = (index,nextword) => {

        setTimeout(() => {
            setWord(prev => prev + nextword)
        },75 * index)
    }

    useEffect(() => {
        setWord("");

        if (status !== "started") {
            setLoading(true);
            setShowResult(true);
        }
        
        if (status === "completed") {

            const textArray = text.split(" ");

            for (let i = 0; i < textArray.length; i++) {
                delayWords(i,textArray[i]+" ")
            }
            setLoading(false);
            setSearch('')
        }
    }, [status])

    return (
        <div className='text-white p-5 w-full '>
            <header className='flex items-center justify-between w-full px-3'>
                <h1 className='text-2xl font-bold'>Gemini</h1>
                <img src="data:image/png;base64,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"></img>
            </header>
            <div className="flex justify-center  w-full h-full">
                <div className="flex flex-col justify-between h-full">
                    {!showresult ? <div>
                        <h1 class="text-gradient mt-6 text-5xl text-center md:text-left md:mt-0 md:text-7xl font-bold text-zinc-600 pl-3">
                            <span>Hello, adarsh</span>
                            <br />
                            How can I help you today?
                        </h1>

                        <div className="grid-cols-2 md:flex items-center justify-start gap-5 mt-16 space-y-3">
                            <MainCard text={'Compare the differences between pickleball and tennis'} Icon={FaRegLightbulb} />
                            <MainCard text={'I’m sick and need help crafting a text message for my boss'} Icon={BiSolidEdit} />
                            <MainCard text={'Settle a debate: how should you store bread?'} Icon={FaRegLightbulb} />
                            <MainCard text={"Plan a low-carb meal with what's available in my fridge"} Icon={BiSolidEdit} />
                        </div>
                    </div> :
                        <div className="space-y-10">
                            <div className="flex items-start gap-3 justify-start max-w-[800px]">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHbklEQVR4nO2ZfVRT5x3Hce/n7L/tH3E9p39uXd3QHrfWDXHdZG0V8d1F2m71yNhwwQnUQJAAClWUNwmp5S2Qe6MgIbSoEMTgG8VOIVHxdQXJTbQqIASZUE3uxe/OcxFOaAi5NwRP/+B3zvfcy3OfPL/f5/6et/sQEDBrszZrs/ZtsIGmwNcGjXPjBozzFr5Qx0Dqd8CU/4JlNGs4Ky3lbHQCLystJWXkGanjrZ1HxsB6AvHIGMgONgXikTHQOdA4b8HMBm8q+j5roVZxDK1jGbqPs9KYSqQOy1BVrE0bTn7rqd3BprnxBGJcxrlxMwNwXfcDzkrFsFb6jrfgPUJZaRvJ1mRAA8Z5C0kmxjJiP/WzIL9DOG3aJayVvukrgHuWqBtOGxXsBtM4b8GgcW6s3yEAzOEYaifLUJy/IFxgWI6h5cSHX4N2h9B9l2WoUn8DTAJUQny5+rYHrwuzh6wbtC/ZsGKaEJhDHAgOxkKhUb0DJ8tkOF+lgOVcLglQBAxNu2aGABCQ/pC1ywUHPfin1T/tC14X++iNDT8ZKyPdyZvzp10anNUmIS9+E9L/sRrvLf0t3nr1lXF9sGwxLujThGeHoRKn9fb7QzbE2UPWg8CMD2wvY+Lp7XLEbgydEPhkClswH7bzBwSPGaeV/p3PICQTA0vWbydXMsUKmZ1q8mOwImi+VxCiM7Rc1GyGKdYawUbWCW/OHF0aRL4VLAiCSJMRKQhi5N4xXhxDbZ3+ii1wsUuLXC0IYvmvX+Wv10/sFQzCWinrtLLCMvRqoV0gavkSQSBrFgXx11vGfeKmZCsVNg0Qqkqoo4iQ3/ABrl0UhA/X/nliFn71S/66beUfsW3lm/y9vb1QLEiFTxBkh8oy1EPBGXknBH/9wxtoK01G/Kpl+PuyYGxZ9nvU7pVi69tLId/wDgz7tkGbHImwoPmiILjnG00hu2Z3EIZ6RYwj2eaNkMkUMGiUKNyTioqDubikV8JSX4AjRQdQsm83GjT5UGZl4/2V4fyCKRYGFu3PRYM8/57w2vjgzWJQii34KHI9SrPS0d+kQkG0BF8UJaFMlY/iggPobixA4qpQfFWXi9OHlUh8dy10GdHoaMoSlxWbNnxGpl0iS3MuLqiTcUoZj1PafB6kp1GJPqMKpw8p0VKpRPdJFXoblfyzMxVKnD0og+1oFoxqmdis/Es8CKNNEtI4WUM+3S9Fa5kCnXUq/KdKics1BTzA3QYVek+q0FypxCV9AVp1BbhWW4C28hScL94peIXnxsTQcp9BRh4YMNJ/EZztsEcHNTkxaP5Ezr9xV3VWZ+JGRQb6jAUTyi+oFaB3R4keI5xPIOR7mwywkacgxsN4cPCksxyF8r/xXYoE2n1itIu5yrWsZOdm0dMv52vXGhvsz4YYHoZkZionPeaP0ZAfxwd633AA7drduFSeirZSBa5Qu2A9ms0/u16ZjotidsDWaQ52sdMv0Ul1Aq5VZLhlY0x363JxZF+0TxCcr9Ov0yxZ5LyVOsTdVolypt61BXu2rEFLYRLqsrbjsz1SXKtIB50ciZKUzfw3i0/ZsFI9oj+BHaaNrznNm1jWvAmsOQJc18einJYlvIvY8NGtCJF0+VLoFJv57udrNlhftihOkyR+FOK5/rtb0DTccjgNh/Yn4Ipahnv6NBxLj0S14gN8VZ2KrsoUUHt2oKlMjq87ynwA0Yr/Vne0ShY6zRIngXCaI55xXZ67V8epbOjz5agtycHtmyb09naj924nHlysxf26XNyvz+PvSRl5Zuu8imPl+dDlJeFq/V6h2bACZ74nGoSHuRyxwGmWxLJfZu4ljQ198eaExr/uUKMiOwGXzzdihBt4Ljvs/T2jMCToOzZeY3+TZ6TOWP2bpnOoVmXAfNQLEENHB0zXyJvgGOrqNxuvyonD0P/uuUCMyuGw80F393RDazCBqm9DT88Dvszh6HerT3RMo8TjW6WeIK775VOXGDkB5A/PXBx8VrR/0qCIHj9+iOHhflQazThiNPP3pMxT/Tu322GqzXDvUuTwgaEWB/jTyPZgzIHTokHdoU88BjYK04NtaSpe5H6quvaHFpw7lDJZRmQB/jbXA7q+9kI01+umDK7D8iWi5Hm8OpiOKes+Ge5GQ/HEkxWWoYtZU0SY0ywZZE2SFTNxZFpyv02FtrPHpwzu84ut4yAtra1T1uXHycHECRC8L5NkBQ/Stkn46aJwGMwxfbore+Js5S69oWkcRN/Q5BXkeKli9BB7JrqTJ1v68ss/ypFLj7ecqGZJEMND3W6BqSj9OIiKrnF77vobx5NeVCnldr8PbKG2NTz09cIM2Y1zDTXPHE8nzkqKnLJxkJTcsklBrJ2XUKvJcxambz8buebtl15Y4JMdbhNLeF+yMGtH1Ima0pyHjXo11956GlE7MsdBopPzMfz4AaydV/C5oQpHNbnOCmXKXSoz5iODIeaHAS/a+r9xuD2ZvRca+uPMf/4lIlP+b11Ocmzz/kRpG1HRLulxOlOa2lD44eIZ/0eOmMNtr5VnbdZmbdYCZsD+D4iPD6W18IuPAAAAAElFTkSuQmCC"></img>
                                <h1>{prevSearch}</h1>
                            </div>

                            <div className="flex items-start gap-3 justify-start max-w-[800px] result-div">
                                <img width="48" height="48" src="https://img.icons8.com/fluency/48/000000/hand-drawn-star.png" alt="hand-drawn-star" />
                                {
                                    loading ?
                                    <div className="w-full space-y-3">
                                        <div className="w-full h-4 rounded-sm animate-pulse bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-800"></div>
                                        <div className="w-full h-4 rounded-sm animate-pulse bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-800"></div>
                                        <div className="w-full h-4 rounded-sm animate-pulse bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-800"></div>
                                    </div> :
                                    <p dangerouslySetInnerHTML={{ __html: word }} className='text-base leading-7 transition-all duration-200'></p>}
                            </div>
                        </div>
                    }

                    <div className="">
                        <div className="w-full bg-zinc-800 h-16 rounded-full   relative">
                            <input
                                type="text"
                                placeholder='Enter a prompt here.'
                                className='w-full h-full bg-transparent text-gray-300 rounded-full px-4 font-semibold focus:outline-none'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <div className="flex h-full items-center gap-1 absolute right-3 top-0">
                                <BiImageAdd className='text-gray-300 cursor-pointer text-4xl p-2 rounded-full hover:bg-zinc-900' />
                                <FaMicrophone className='text-gray-300 cursor-pointer text-4xl p-2 rounded-full hover:bg-zinc-900' />
                                <TbArrowBigRightLinesFilled
                                    className='text-gray-300 cursor-pointer text-4xl p-2 rounded-full hover:bg-zinc-900'
                                    onClick={handleResponse}
                                />
                            </div>
                        </div>
                        <p className='text-center text-sm text-zinc-300 font-medium'>Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main