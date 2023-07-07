
import Header from "../components/Header";
import DownHeader from "../components/DownHeader";
import Image from "../components/Image";
import MakeMe from "../components/MakeMe";
import Footer from "../components/Footer";

function Main({account,setAccount}){
    return(
        <div>
            <Header account={account} setAccount={setAccount} />
            <DownHeader/>
            <Image/>
            <MakeMe/>
            <Footer/>
        </div>
    );
}
export default Main