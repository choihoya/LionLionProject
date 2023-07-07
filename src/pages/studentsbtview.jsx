
import Header from "../components/Header";
import DownHeader from "../components/DownHeader";
import Footer from "../components/Footer";
import Sbtview from "../sbtcomponents/sbtview";
import Sbtview2 from "../sbtcomponents/sbtview2";
import Line from "../sbtcomponents/Line";


function Studentsbtview({account,setAccount}){
    
    return(
        <div>
            <Header account={account} setAccount={setAccount} />
            <DownHeader/>
            <Line/>
            <Sbtview account={account} setAccount={setAccount}/>
            <Line/>
            <Sbtview2 account={account} setAccount={setAccount}/>     
            <Footer/>
        </div>
    );
}
export default Studentsbtview