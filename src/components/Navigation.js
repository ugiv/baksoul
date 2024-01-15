import { useEffect, useState } from "react";
import HeadersLogo from "./HeadersLogo";

export default function Navigation({handleShow, handleClick, handleDetails}) {
    const [show, setShow] = useState('none');
    useEffect(() => {
        if (handleShow === 'flex'){
            setShow('flex');
        } else if ('none') {
            setShow('none');
        }
    }, [handleShow])
    return (
        <div style={{display: show}} className="flex flex-col items-center navigation fixed bg-white w-full h-full z-10 easy-in-out duration-100 lg:hidden">
            <div className="container w-10/12 h-full flex flex-col justify-center items-center">
                <HeadersLogo condition={''} handleClick={handleClick} handleDetails={handleDetails}/>
                <div className="font-medium flex flex-col justify-between items-center h-60 md:text-lg">
                    <p className='cursor-pointer' onClick={() => handleDetails('tentang')}>Tentang</p>
                    <p className='cursor-pointer' onClick={() => handleDetails('lokasi')}>Lokasi</p>
                    <p className='cursor-pointer' onClick={() => handleDetails('menu')}>Menu</p>
                </div>
            </div>
        </div>
    )
}