
export default function HeadersLogo({handleClick}) {
    return (
        <div className="header flex flex-row justify-center items-center w-10/12 h-24 absolute top-0">
            <div className="burger absolute left-2 flex flex-col h-6 w-6 justify-center items-center cursor-pointer" onClick={() => handleClick('none')}>
                <div className="line w-6 border border-black rounded rotate-45 absolute"></div>
                <div className="line w-6 border border-black rounded -rotate-45 absolute" ></div>
            </div>
            <h2 className="font-lato text-2xl md:text-4xl font-extrabold tracking-widest">BAKSOUL</h2>
        </div>
    )
}