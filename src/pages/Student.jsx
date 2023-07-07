import Header from "../components/Header";
import DownHeader from "../components/DownHeader";
import Attainment from "../scompontents/Attainment";
import Target from "../scompontents/Target";
import Line from "../scompontents/Line";
import Footer from "../components/Footer";
import MakeNft from "../scompontents/MakeNft";
;


function Student({account,setAccount}){
    return(
        <div>
            <Header account={account} setAccount={setAccount} />
            <DownHeader/>
            <Line/>
            <MakeNft account={account} setAccount={setAccount}/>
            <Line/>
            <Target/>
            <Line/>            
            <Attainment account={account} setAccount={setAccount}/>
            <Footer/>
        </div>
    );
}
export default Student