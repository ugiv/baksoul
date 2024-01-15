import HeadersLogo from "./HeadersLogo";

export default function Tentang({handleDetails}) {
    return (
        <div className="tentang w-full h-full bg-white z-20 flex flex-col items-center justify-center fixed">
            <div className="container w-10/12">
                <HeadersLogo handleClick={handleDetails}/>
                <div className="main flex flex-col">
                    <h3 className="font-bold text-lg md:text-xl my-6">Tentang Kami</h3>
                    <p className="text-sm md:text-lg">Baksoul rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, 
                    sit amet feugiat lectus. Class aptent taciti elementum tellus.</p>
                </div>
            </div>
        </div>
    )
}