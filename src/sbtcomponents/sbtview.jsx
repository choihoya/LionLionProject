import {contract} from '../web3.config'
import axios from "axios";
import { useEffect, useState } from "react";

function Sbtview({account,setAccount}){

const [tokenId,settokenId]=useState("");
const[sbtdata,setsbtdata]=useState("");
const[image,setImage]=useState("");  
const[data,setIdata]=useState(""); 
const getsbt = async ()=>{
    try {
        if(!contract) return;
        const response = await contract.methods.tokenURI(tokenId).call()
        // console.log(response);
        let remixresponse = await axios.get(response)
        // console.log(remixresponse)
        setImage(remixresponse.data.image);
        // console.log(image);
        setIdata(remixresponse.data.data);
        // console.log(data);
     
    } catch (error) {
        
    }
}
useEffect(()=>{
    getsbt();
},[])

    return(
        <div className='mb-2.5'>
        <div className=' text-black mt-3.5 mb-2 max-w-screen-xl mx-auto flex'>
        <div className='ml-8'>1. TokenId를 입력하여 SBT 신청 완료 확인 : </div>
        <div className='text-white'>.</div>        
        <input value={tokenId} onChange={(e)=>{settokenId(e.target.value)}} placeholder="TokenId" className="text-center mr-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />           
                            <button className='mr-5 hover:bg-gray-300 bg-gray-200' onClick={getsbt}>
                              SBT 확인
                            </button>
        </div>
        {/* <div className='bg-red-300 text-black  max-w-screen-xl mx-auto'>
            <div>
                ss
            </div>

        </div> */}
        <div  className=' text-black  max-w-screen-xl mx-auto flex '>
        {image&&data?(
             <div >
            <div className='flex mb-5 ml-3'>
            <div className="rounded-lg border border-gray-300 p-5 w-[590px] h-[380px] ml-5 mr-5 flex justify-center items-center">
            <img className='w-[700px] h-[330px] pt-0 mt-0 pl-10 pr-3 py-2 rounded-lg border-2' src={image} alt="image1"/>
            </div>
            <div className=''>
            <div className="rounded-lg border border-gray-300 w-[590px] h-[380px] pl-3.5 pr-3.5 flex justify-center items-center">
            {data}
            </div>
            </div>
             </div>
             </div>
        ):(
            <div >
            <div className='flex mb-5 ml-3'>
            <div className="rounded-lg border border-gray-300 p-5 w-[590px] h-[380px] ml-5 mr-5 flex justify-center items-center">
                SBT토큰 신청합니다. && 기본 이미지 로고 확인
            {/* <img className='w-[700px] h-[330px] pt-0 mt-0 pl-10 pr-3 py-2 rounded-lg border-2'src="images/SBTLogo.png" alt="image1"/> */}
            </div>
            <div className=''>
            <div className="rounded-lg border border-gray-300 w-[590px] h-[380px] pr-3 flex justify-center items-center">
            <img className='w-[700px] h-[330px] pt-0 mt-0 pl-10 pr-3 py-2 rounded-lg border-2'src="images/SBTLogo.png" alt="image1"/>
            {/* {data}dd */}
            </div>
            </div>
             </div>
             </div>
        )}
        </div>

        </div>

    );
}
export default Sbtview
