import { useEffect, useState } from "react";
import Headers from "./Headers";

export default function Navigation({handleShow, handleClick}) {
    const [show, setShow] = useState('none');
    useEffect(() => {
        if (handleShow){
            setShow('flex');
        } else {
            setShow('none');
        }
    }, [handleShow])
    return (
        <div style={{display: show}} className="flex flex-col items-center navigation fixed bg-white w-full h-full z-10 easy-in-out duration-100">
            <div className="container w-10/12 h-full flex flex-col justify-center items-center">
                <Headers condition={''} handleClick={handleClick}/>
                <div className="font-medium flex flex-col justify-between items-center h-32">
                    <p>Tentang</p>
                    <p>Lokasi</p>
                    <p>Menu</p>
                </div>
            </div>
        </div>
    )
}