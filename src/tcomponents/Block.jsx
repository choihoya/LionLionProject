//npm install react-icons
import { useState } from 'react';
import {contract} from '../web3.config'
import Table from './Table';


function Block({account,setAccount}){
    // const [tokenid,setTokenid]=useState("");
    const [studentteacheraddress,setstudentteacheraddress]=useState("");
    const [studenttokenid,setstudentTokenid]=useState("");
    
    const [studentdata,setstudentdata]=useState([]);
    // const [teacheraddress,setteacheraddress]=useState("");

    // const checkteacher= async ()=>{
    //     try {
    //     //  if(!account) return;
    //      const response = await contract.methods.getTeacher(teacheraddress).call()
    //     //  console.log(response);
    //     // const reponseObject = Object.values(response);
    //     // console.log(response);
    //     // const bullvalue = Object.values(response);
    //     // console.log(bullvalue);
    //     setteacheraddress(response)
    //     // console.log(teacheraddress);

    //     } catch (error) {
    //      console.error(error)
    //     }
    //   }

      const setstudent= async ()=>{
        try {
        //  if(!account) return;
         const response = await contract.methods.setStudent(studentteacheraddress,studenttokenid).send(
            {
                from : account
            }
         )
         console.log(response);
        // const reponseObject = Object.values(response);
        // console.log(response);
        // const bullvalue = Object.values(response);
        // console.log(bullvalue)

        } catch (error) {
         console.error(error)
        }
      }


const [tokenid,setTokenid]=useState("");
const [checkteacheraddress,setcheckteacheraddress]=useState("");
    const checkdata= async ()=>{
        try {
        //  if(!account) return;
         const response = await contract.methods.getCheckGoalData(checkteacheraddress,tokenid).call()
        //  console.log(response);
        const reponseObject = Object.values(response);
        // console.log(reponseObject[0]);
        setstudentdata(reponseObject)
        // console.log(typeof(studentdata[3]));

        } catch (error) {
         console.error(error)
        }
      }

    return(
        <div>
        <div className="mb-1 max-w-screen-xl mx-auto h-[35px] flex  ">
            <div className='   ml-8 font-semibold text-center mt-2.5 '>
            2. 폴리곤체인에 저장된 학생 정보 확인
            </div>
            <div className='flex mt-2.5 ml-3 h-[30px]'>

            {/* <div>
            <input value={teacheraddress} onChange={(e)=>{setteacheraddress(e.target.value)}}  
            placeholder="선생님 메타마스크 주소" className="text-center mr-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
            <button onClick={checkteacher} className='mr-5'>권한확인</button>                
            </div> */}
            
            <div>
            <input value={studentteacheraddress} onChange={(e)=>{setstudentteacheraddress(e.target.value)}}   placeholder="선생님 메타마스크 주소" className="text-center ml-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
            <input value={studenttokenid} onChange={(e)=>{setstudentTokenid(e.target.value)}}  placeholder="TokenId" className="text-center mr-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />          
            <button onClick={setstudent}>학생등록</button>                
            </div>
            </div>
        </div>
        <div className='mb-1 max-w-screen-xl mx-auto h-[35px] '>
        <div className="flex mt-2 justify-between mr-6 ">
        <div className='ml-10 text-center mt-2.5'> 폴리곤 체인에 저장된 정보</div>

            <div className='flex mt-2.5 ml-3 h-[30px] mr-2 '>
              <div className='mr-2'>학생 정보 : </div>
            <div>
            <input value={checkteacheraddress} onChange={(e)=>{setcheckteacheraddress(e.target.value)}} placeholder="Teacheraddress" className="text-center mr-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
            <input value={tokenid} onChange={(e)=>{setTokenid(e.target.value)}} placeholder="TokenId" className="text-center mr-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
            <button onClick={checkdata}>확인</button>
            </div>
 
            </div>
        </div>
        </div>
            <Table studentdata={studentdata}/>
        </div>
    );
}
export default Block
