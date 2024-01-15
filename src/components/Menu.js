import HeadersLogo from "./HeadersLogo";

export default function Menu({handleDetails}) {
    return (
        <div className="Menu w-full h-full bg-white z-20 flex flex-col items-center justify-center fixed">
            <div className="container w-10/12">
                <HeadersLogo handleClick={handleDetails}/>
                <div className="main flex flex-col items-center">
                    <h3 className="font-bold text-lg md:text-xl my-6">Menu</h3>
                    <div className="flex flex-col md:flex-row items-center justify-between md:justify-center md:flex-wrap w-4/5 md:w-3/6 text-sm font-medium">
                        <p className="w-auto p-2 ">Bakso Standar</p>
                        <p className="w-auto p-2 ">Wagyu Bomb</p>
                        <p className="w-auto p-2 ">Tom Yum</p>
                        <p className="w-auto p-2 ">Bakso Urat</p>
                        <p className="w-auto p-2 ">Bakso Kangkung</p>
                        <p className="w-auto p-2 ">Bakso Beranak</p>
                        <p className="w-auto p-2 ">Bakso Bakar</p>
                        <p className="w-auto p-2 ">Bakso Kikil</p>
                    </div>
                </div>
            </div>
        </div>
    )
}