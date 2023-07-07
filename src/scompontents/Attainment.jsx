import { useEffect, useState } from 'react';
import {contract} from '../web3.config'

function Attainment( {account, setAccount}){
  const [metadata,setMetadata]=useState("");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [tokenid,setTokenid]=useState("");
  // console.log(tokenid);
  const [studentaddress,setStudentaddress]=useState("");
  // console.log(studentaddress);
  const [imaguri,setImaguri]=useState("");
  // console.log(imaguri);
  const [jmaguri,setJmaguri]=useState("");
  // console.log(jmaguri);
  const [startday,setStartday]=useState("");
  // console.log(startday);
  const [endday,setEndday]=useState("");
  // console.log(endday);

  const getblock= async ()=>{
    try {
    //  if(!account ||!tokenid || !studentaddress || !imaguri ||jmaguri||startday||endday) return;
      const response = await contract.methods.setCheckGoalData(tokenid,studentaddress,imaguri,jmaguri,startday,endday
     ).send(
         {
             from : account
         }
     )
     console.log(response);
    } catch (error) {
     console.error(error)
    }
 }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const [tokenid2,setTokenid2]=useState("");
// console.log(tokenid);
const [studentaddress2,setStudentaddress2]=useState("");
// console.log(studentaddress);
const [imaguri2,setImaguri2]=useState("");
// console.log(imaguri);
const [jmaguri2,setJmaguri2]=useState("");
// console.log(jmaguri);
const [startday2,setStartday2]=useState("");
// console.log(startday);
const [endday2,setEndday2]=useState("");
// console.log(endday);

const getblock2= async ()=>{
  try {
  //  if(!account ||!tokenid || !studentaddress || !imaguri ||jmaguri||startday||endday) return;
    const response = await contract.methods.setCheckGoalData(tokenid2,studentaddress2,imaguri2,jmaguri2,startday2,endday2
   ).send(
       {
           from : account
       }
   )
   console.log(response);
  } catch (error) {
   console.error(error)
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const [tokenid3,setTokenid3]=useState("");
// console.log(tokenid);
const [studentaddress3,setStudentaddress3]=useState("");
// console.log(studentaddress);
const [imaguri3,setImaguri3]=useState("");
// console.log(imaguri);
const [jmaguri3,setJmaguri3]=useState("");
// console.log(jmaguri);
const [startday3,setStartday3]=useState("");
// console.log(startday);
const [endday3,setEndday3]=useState("");
// console.log(endday);

const getblock3= async ()=>{
  try {
  //  if(!account ||!tokenid || !studentaddress || !imaguri ||jmaguri||startday||endday) return;
    const response = await contract.methods.setCheckGoalData(tokenid3,studentaddress3,imaguri3,jmaguri3,startday3,endday3
   ).send(
       {
           from : account
       }
   )
   console.log(response);
  } catch (error) {
   console.error(error)
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const [tokenid4,setTokenid4]=useState("");
// console.log(tokenid);
const [studentaddress4,setStudentaddress4]=useState("");
// console.log(studentaddress);
const [imaguri4,setImaguri4]=useState("");
// console.log(imaguri);
const [jmaguri4,setJmaguri4]=useState("");
// console.log(jmaguri);
const [startday4,setStartday4]=useState("");
// console.log(startday);
const [endday4,setEndday4]=useState("");
// console.log(endday);

const getblock4= async ()=>{
  try {
  //  if(!account ||!tokenid || !studentaddress || !imaguri ||jmaguri||startday||endday) return;
    const response = await contract.methods.setCheckGoalData(tokenid4,studentaddress4,imaguri4,jmaguri4,startday4,endday4
   ).send(
       {
           from : account
       }
   )
   console.log(response);
  } catch (error) {
   console.error(error)
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const [tokenid5,setTokenid5]=useState("");
// console.log(tokenid);
const [studentaddress5,setStudentaddress5]=useState("");
// console.log(studentaddress);
const [imaguri5,setImaguri5]=useState("");
// console.log(imaguri);
const [jmaguri5,setJmaguri5]=useState("");
// console.log(jmaguri);
const [startday5,setStartday5]=useState("");
// console.log(startday);
const [endday5,setEndday5]=useState("");
// console.log(endday);

const getblock5= async ()=>{
  try {
  //  if(!account ||!tokenid || !studentaddress || !imaguri ||jmaguri||startday||endday) return;
    const response = await contract.methods.setCheckGoalData(tokenid5,studentaddress5,imaguri5,jmaguri5,startday5,endday5
   ).send(
       {
           from : account
       }
   )
   console.log(response);
  } catch (error) {
   console.error(error)
  }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return(
      <div className="mb-10">
      <div className="  mb- max-w-screen-xl mx-auto h-[15px] ">
          <div className='mt-5 ml-8 font-semibold'>
              3. 폴리곤 체인에 목표 정보 등록
          </div>
      </div>

  <div>
      <header className=" mt-6 mb-1 max-w-screen-xl mx-auto h-62">
      <div className=' ml-2.5'>

      <div className="max-w-[1220px] mb-2 pt-3 pb-3 rounded-xl bg-gray-200 mx-auto grid grid-cols-7 items-center font-semibold">
          <div className=" text-center ml-2 "style={{ marginLeft: '2px' }}>TokenId</div>
          <div className=" text-center ml-2 "style={{ marginLeft: '2px' }}>메타마스크주소</div>
          <div className=" text-center ml-2 "style={{ marginLeft: '2px' }}>ImageUri</div>
          <div className=" text-center ml-2"style={{ marginLeft: '2px' }}>JsonUri</div>
          <div className="text-center ml-2"style={{ marginLeft: '2px' }}>목표선정</div>
          <div className=" text-center ml-2"style={{ marginLeft: '2px' }}>목표달성</div>
          <div className="text-center ml-2"style={{ marginLeft: '2px' }}>등록</div>
      </div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="relative max-w-[1220px] h-60 rounded-lg border border-gray-300 flex items-center mx-auto">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="grid grid-cols-7 ">
                  <input value={tokenid} onChange={(e)=>{setTokenid(e.target.value)}} placeholder="1"className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={studentaddress} onChange={(e)=>{setStudentaddress(e.target.value)}} placeholder="0xE9D51e48860960c4bD32431EB5AF7943A286B5C6"className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={imaguri} onChange={(e)=>{setImaguri(e.target.value)}} placeholder="https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/QmQNhKJBAcK1kbUHzax16YWrMcYLyk6Tz3DBtWHMWbw5cu" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={jmaguri} onChange={(e)=>{setJmaguri(e.target.value)}} placeholder="https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/QmSGpzss3mDg7LRqzg9n1eki3nryi4raEzzMsLabNhVCKG" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={startday} onChange={(e)=>{setStartday(e.target.value)}} placeholder="20230313" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <input value={endday} onChange={(e)=>{setEndday(e.target.value)}} placeholder="20230714" className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <button onClick={getblock} className="mr-1 ml-1 hover:bg-gray-300 bg-gray-200  rounded-lg font-bold"  >
                                등록
                  </button>
              </div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              <div className="grid grid-cols-7 mt-5 ">
                  <input value={tokenid2} onChange={(e)=>{setTokenid2(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={studentaddress2} onChange={(e)=>{setStudentaddress2(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={imaguri2} onChange={(e)=>{setImaguri2(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={jmaguri2} onChange={(e)=>{setJmaguri2(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={startday2} onChange={(e)=>{setStartday2(e.target.value)}}  className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <input value={endday2} onChange={(e)=>{setEndday2(e.target.value)}}  className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <button onClick={getblock2} className="mr-1 ml-1 hover:bg-gray-300 bg-gray-200  rounded-lg font-bold"  >
                                등록
                  </button>
              </div>

              <div className="grid grid-cols-7 mt-5 ">
                  <input value={tokenid3} onChange={(e)=>{setTokenid3(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={studentaddress3} onChange={(e)=>{setStudentaddress3(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={imaguri3} onChange={(e)=>{setImaguri3(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={jmaguri3} onChange={(e)=>{setJmaguri3(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={startday3} onChange={(e)=>{setStartday3(e.target.value)}}  className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <input value={endday3} onChange={(e)=>{setEndday3(e.target.value)}}  className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <button onClick={getblock3} className="mr-1 ml-1 hover:bg-gray-300 bg-gray-200  rounded-lg font-bold"  >
                                등록
                  </button>
              </div>

              <div className="grid grid-cols-7 mt-5 ">
                  <input value={tokenid4} onChange={(e)=>{setTokenid4(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={studentaddress4} onChange={(e)=>{setStudentaddress4(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={imaguri4} onChange={(e)=>{setImaguri4(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={jmaguri4} onChange={(e)=>{setJmaguri4(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={startday4} onChange={(e)=>{setStartday4(e.target.value)}}  className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <input value={endday4} onChange={(e)=>{setEndday4(e.target.value)}}  className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <button onClick={getblock4} className="mr-1 ml-1 hover:bg-gray-300 bg-gray-200  rounded-lg font-bold"  >
                                등록
                  </button>
              </div>

              <div className="grid grid-cols-7 mt-5 ">
                  <input value={tokenid5} onChange={(e)=>{setTokenid5(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={studentaddress5} onChange={(e)=>{setStudentaddress5(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={imaguri5} onChange={(e)=>{setImaguri5(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={jmaguri5} onChange={(e)=>{setJmaguri5(e.target.value)}} className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }}/>
                  <input value={startday5} onChange={(e)=>{setStartday5(e.target.value)}}  className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <input value={endday5} onChange={(e)=>{setEndday5(e.target.value)}}  className="text-center"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                  <button onClick={getblock5} className="mr-1 ml-1 hover:bg-gray-300 bg-gray-200  rounded-lg font-bold"  >
                                등록
                  </button>
              </div>
              </div>
              </div>
      </div>
      </header>
      </div>
      </div>
    );
}
export default Attainment

