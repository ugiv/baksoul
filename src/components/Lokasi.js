import HeadersLogo from "./HeadersLogo";

export default function Lokasi({handleDetails}) {
    return (
        <div className="Menu w-full h-full bg-white z-20 flex flex-col items-center justify-center fixed">
            <div className="container w-10/12">
                <HeadersLogo handleClick={handleDetails}/>
                <div className="main flex flex-col items-center">
                    <h3 className="font-bold text-lg md:text-xl my-6">Menu</h3>
                    <div className="flex flex-row justify-between w-4/5 lg:w-3/6 font-medium">
                        <p>Mall of Indonesia</p>
                        <p>Pakuwon City Mall</p>
                        <p>Lampung City Mall</p>
                    </div>
                </div>
            </div>
        </div>
    )
}