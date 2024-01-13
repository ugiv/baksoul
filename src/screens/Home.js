import React from "react"
import hero from '../image/Hero.png';
import bowl from '../image/Soup Plate.png'
import baksoStandar from '../image/bakso-standar.png';
import wagyuBomb from '../image/wagyu-bomb.png';
import tomYum from '../image/tom-yum.png';
import baksoUrat from '../image/bakso-urat.png';
import dotMaps from '../image/dot-maps.png';


export default function Home(){
    return (
        <div className="home w-full h-full items-center">
            <div style={{backgroundColor: "#E4D52E"}} className="w-full h-full min-h-750 max-h-950 flex flex-col justify-center items-center relative">
                <div className="header flex flex-row justify-center items-center w-10/12 h-24 absolute top-0">
                    <div className="menu flex flex-row justify-between w-1/5 absolute left-0 font-bold hidden lg:flex">
                        <p>Tentang</p>
                        <p>Menu</p>
                        <p>Lokasi</p>
                    </div>
                    <div className="burger absolute left-0 flex flex-col h-4 justify-between items-start lg:hidden">
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
                <div className="content w-10/12 h-10/12 flex flex-col justify-between items-center md:justify-center md:pt-16 md:flex-wrap-reverse md:h-5/6">
                    <img className="w-11/12 max-w-md md:max-w-none my-6 md:w-6/12" src={hero} alt="hero" />
                    <div className="flex flex-col justify-center items-start w-full max-w-md md:max-w-none md:w-6/12">
                        <h1 className="font-figtree text-3xl sm:text-5xl lg:text-6xl text-left font-bold md:leading-relaxed">Bakso bulat seperti tekad kamu.</h1>
                        <p className="text-left mt-4 w-11/12 md:w-8/12 leading-relaxed text-sm md:text-lg">Terbuat dari daging sapi premium Australia yang dipadukan dengan bahan-bahan lokal berkualitas tinggi. </p>
                        <button className="px-4 py-2 bg-black text-white font-bold rounded-lg mt-8">Temukan</button>
                    </div>
                </div>
                <div className="bottom-6 lg:mt-0 w-10/12 flex flex-col items-center absolute lg:items-start">
                    <p className="text-center lg:text-left">Tersedia:</p>
                    <div className="temukan flex flex-row w-10/12 md:w-5/12 justify-between items-center font-bold">
                        <p>Gofood</p>
                        <p>GrabFood</p>
                        <p>ShopeeFood</p>
                    </div>
                </div>
            </div>
            <div className="menu w-full h-auto pb-14 bg-white flex flex-col justify-center items-center">
                <h3 className="py-10 mt-10 text-2xl font-bold">Menu Populer</h3>
                <div className="list-menu w-10/12 flex flex-row justify-start items-center flex-wrap">
                    <div className="menu-items flex flex-col justify-center items-center w-2/4 md:w-1/4">
                        <img className="w-full" src={baksoStandar} alt="bakso-standar" />
                        <p>Bakso Standar</p>
                        <p className="text-red-500 font-medium">Rp 40k</p>
                    </div>
                    <div className="menu-items flex flex-col justify-center items-center w-2/4 md:w-1/4">
                        <img className="w-full" src={wagyuBomb} alt="bakso-standar" />
                        <p>Wagyu Bomb</p>
                        <p className="text-red-500 font-medium">Rp 40k</p>
                    </div>
                    <div className="menu-items flex flex-col justify-center items-center w-2/4 md:w-1/4">
                        <img className="w-full" src={tomYum} alt="bakso-standar" />
                        <p>Tom Yum</p>
                        <p className="text-red-500 font-medium">Rp 40k</p>
                    </div>
                    <div className="menu-items flex flex-col justify-center items-center w-2/4 md:w-1/4">
                        <img className="w-full" src={baksoUrat} alt="bakso-standar" />
                        <p>Bakso Urat</p>
                        <p className="text-red-500 font-medium">Rp 40k</p>
                    </div>
                </div>
            </div>
            <div className="location w-full h-auto pb-10 flex flex-col items-center" style={{backgroundImage: 'linear-gradient(180deg, #F5F5F5, white)'}}>
                <h3 className="text-2xl font-bold py-4">Lokasi</h3>
                <img className="w-2/6 mt-4" src={dotMaps} alt="maps" />
                <div className="scroll-page w-full overflow-x-scroll md:w-10/12 xl:overflow-x-visible">
                    <div className="flex flex-row justify-between w-1050 xl:w-full mt-4 px-1 py-10">
                        <div className="w-300 bg-white text-left p-4 rounded-xl shadow-lg">
                            <h4 className="text-2xl font-bold py-2">Mall of Indonesia</h4>
                            <p>Jl. Boulevard Bar. Raya No.12, RT.18/RW.19, Klp. Gading Bar., Kec. Klp. Gading, Jkt Utara, Daerah Khusus Ibukota Jakarta 14240</p>
                            <p className="text-red-600 font-bold py-2">Lantai 1</p>
                        </div>
                        <div className="w-300 bg-white text-left p-4 rounded-xl shadow-lg">
                            <h4 className="text-2xl font-bold py-2">Pakuwon City Mall</h4>
                            <p>Jl. Raya Laguna KJW Putih Tambak No.2, Kejawaan Putih Tamba, Kec. Mulyorejo, Surabaya, Jawa Timur 60112</p>
                            <p className="text-red-600 font-bold py-2">Lantai 2</p>
                        </div>
                        <div className="w-300 bg-white text-left p-4 rounded-xl shadow-lg">
                            <h4 className="text-2xl font-bold py-2">Lampung City Mall</h4>
                            <p>Jl. Yos Sudarso No.80, Bumi Waras, Kec. Bumi Waras, Kota Bandar Lampung, Lampung 35225</p>
                            <p className="text-red-600 font-bold py-2">Lantai 2</p>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="p-6 text-sm md:text-2xl">©Copyright 2023 PT. Bakso Prima Nusantara. All rights reserved.</footer>
        </div>
    )
}