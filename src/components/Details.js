import Lokasi from "./Lokasi";
import Menu from "./Menu";
import Tentang from "./Tentang";

export default function Details ({type, handleDetails}) {
    if (type === 'tentang'){
        return <Tentang handleDetails={handleDetails}/>
    } else if (type === 'lokasi') {
        return <Lokasi handleDetails={handleDetails} />
    } else if (type === 'menu') {
        return <Menu handleDetails={handleDetails}/>
    } else if (type === 'none'){
        return;
    }
}