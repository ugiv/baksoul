import bowl from '../image/Soup Plate.png'

export default function HeadersMenu({handleClick, handleDetails}) {
    return (
        <div className="header flex flex-row justify-center items-center w-10/12 h-24 absolute top-0">
            <div className="menu flex flex-row justify-between w-1/5 absolute left-0 font-bold hidden lg:flex">
                <p className='cursor-pointer' onClick={() => handleDetails('tentang')}>Tentang</p>
                <p className='cursor-pointer' onClick={() => handleDetails('menu')}>Menu</p>
                <p className='cursor-pointer' onClick={() => handleDetails('lokasi')}>Lokasi</p>
            </div> 
            <div className="burger absolute left-0 flex flex-col h-4 justify-between items-start lg:hidden" onClick={() => handleClick('flex')}>
                <div className="line w-6 border border-black rounded"></div>
                <div className="line w-5 border border-black rounded"></div>
                <div className="line w-4 border border-black rounded"></div>
            </div>
            <h2 className="font-lato text-2xl md:text-4xl font-extrabold tracking-widest">BAKSOUL</h2>
            <div className="beli-bakso flex flex-row items-center border-2 md:border-4 border-black rounded px-1 md:px-3 absolute right-0 font-bold">
                <p className="hidden lg:block">Beli Bakso</p>
                <img className="w-8" src={bowl} alt="bowl" />
            </div>
        </div>
    )
}