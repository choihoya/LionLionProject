import Header from "../components/Header";
import DownHeader from "../components/DownHeader";
import Footer from "../components/Footer";
import Line from "../tcomponents/Line";
import Block from "../tcomponents/Block";
import ImagJson from "../tcomponents/ImagJson";
import CheckStudentData from "../tcomponents/CheckStudentData";

function Teacher({account,setAccount}){
    return(
        <div>
            <Header account={account} setAccount={setAccount} />
            <DownHeader/>
            <Line/>
            <CheckStudentData account={account} setAccount={setAccount} />
            <Line/>
            <Block account={account} setAccount={setAccount}/>
            <Line/>
            <ImagJson account={account} setAccount={setAccount}/>
            <Footer/>
        </div>
    );
}
export default Teacher