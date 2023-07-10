import {contract} from '../web3.config'
import { useEffect, useState } from "react";
import axios from 'axios';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button, useDisclosure,Lorem} from '@chakra-ui/react'

function MakeNft({account}){
    const [metadata, setMetadata] = useState();
    const [jsondata,setJsondata]=useState();
    const [showImage, setShowImage] = useState(true);
    const [showInput, setShowInput] = useState(false);
    
    const handleImageClick = () => {
      setShowImage(false);
      setShowInput(true);
    };

    const handleShowImageButtonClick = () => {
      setShowImage(true);
      setShowInput(false);
    };

    const sendJsonToIPFS = async (e) => {
      e.preventDefault();
      try{
              const resJson = await axios.post(
                'https://api.pinata.cloud/pinning/pinJSONToIPFS',
                {
                  data: metadata,
                  image : `https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/QmeoRTivgKijbw8hk1gyCU6Ni9cd4BxzvqCDi7tjzU2vzo`
                },
                {
                  headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_PINATA_API_JWT_KEY}`,
                  },
                }
              );
              // console.log(resJson.data.IpfsHash);
              setJsondata(resJson.data.IpfsHash);
              // console.log(jsondata);

      }catch(error){
          console.error(error)
      }

  }
    
    useEffect(()=>{
        // console.log(jsondata);
    },[jsondata])
    ////////////////////////////////////////////////////////////
    // const handleOpenModal = () => {
    //   const newWindow = window.open('', '_blank', 'width=400,height=300');
    //   newWindow.document.body.innerHTML = `
    //     <div style="background-color: white; border: 1px solid gray; padding: 20px;">
    //       <h2 style="margin-bottom: 10px;">메타마스크주소</h2>
    //       <p>  <input type="text" value="https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/${jsondata}" placeholder="Enter modal content..." style="margin-bottom: 10px;" /></p>
    //       <button style="background-color: #3f51b5; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px; ">Close Modal</button>
    //     </div>
    //   `;
    //   newWindow.document.body.style.margin = '0';
    //   newWindow.document.body.style.display = 'flex';
    //   newWindow.document.body.style.justifyContent = 'center';
    //   newWindow.document.body.style.alignItems = 'center';
    //   newWindow.document.body.querySelector('button').addEventListener('click', () => {
    //     newWindow.close();
    //   });
    // };
    ////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////
    const[teacheraddress,setteacheraddress]=useState();
    const[nftmatadatauri,setnftmatadatauri]=useState();
    const[tokinid,settokinid]=useState();
    const studentmintnft= async ()=>{
      try {
      //  if(!account) return;
       const response = await contract.methods.mintNft(teacheraddress,nftmatadatauri).send(
        {
          from : account
        }
       )
      //  console.log(response);
       settokinid(response);
      //  console.log(tokinid);
    
      } catch (error) {
       console.error(error)
      }
    }
    ////////////////////////////////////////////////////////////
    const[studentchecktokenid,setstudentchecktokenid]=useState(); 
    const studentchecktokenidfunction= async ()=>{
      try {
      //  if(!account) return;
       const response = await contract.methods.checktokenidfunction(studentchecktokenid).call(
       )
      //  console.log(response);
       const numberresponse = Number(response);
       setstudentchecktokenid(numberresponse);
      //  console.log(studentchecktokenid);
    
      } catch (error) {
       console.error(error)

      }
    }
    ////////////////////////////////////////////////////////////

    const { isOpen, onOpen, onClose } = useDisclosure()
    ////////////////////////////////////////////////////////////

    return(
      <div className=" max-w-screen-xl mx-auto h-[335px] ">
            <div className="">
              <div className='ml-8 font-semibold mt-3'>
              1. SBT 토큰 신청 
              </div>
           </div>

            <div className="flex justify-center mt-2">
              <div>
                  <form onSubmit={sendJsonToIPFS} className='mt-0.5'>
                      <div className="flex">
                          
                      <div className="rounded-lg border border-gray-300 p-5 w-[600px] h-[230px] mr-2 ml-5 flex justify-center items-center">
                       <img className='w-[600px] h-[220px] pt-0 mt-3 pl-10 pr-3 py-2 rounded-lg border-2' src="images/SBTLogo.png" alt="image1"/>
                      </div>


                          {/* <img className="pl-10 pr-3 py-2 rounded-lg border-2 border-gray-300 bg-white w-[600px] h-[230px]" src="images/SBTLogo.png" alt="main image" /> */}
                          {/* /////////////////////////////////////////// */}
                          {showImage && 
                          (
                            <div onClick={handleImageClick} className=" rounded-lg border border-gray-300  p-5 w-[600px] h-[230px] ml-3">
                            {/* Content */}
                            <div className='mt-1'>
                            <div className='mb-5 ml-3 text-center font-semibold'>※SBT를 신청하기 위해서는 선생님의 메타마스크 주소가 필요합니다.</div>
                            <div className='mb-1 ml-3 text-center'>1. SBT 신청합니다. 입력 후 업로드 버튼을 눌러 주세요</div>    
                            <div className='mb-1 ml-3 text-center'>2. NftMataDataUri 버튼을 클릭하여 Uri를 복사해 주세요</div>
                            <div className='mb-1 ml-3 text-center'>3. 선생님 메타마스크 주소와 Uri를 입력 후 MintSBT버튼을 눌러주세요</div>       
                            <div className='mb-1 ml-3 text-center'>4. Uri를 입력 후 TokenId 버튼을 눌러 주세요</div> 
                            <div className='mb-1 ml-3 text-center'>5. TokenId 버튼의 값을 선생님께 말해 주세요</div>                            
                            </div>
                          </div>
                         
                          )
                          }

                          {showInput && 
                          (
                          <div>
                             <input className="ml-3 w-[600px] h-[230px] rounded-lg border-2 text-center" type="text" onChange={(e) => setMetadata(e.target.value)} placeholder="SBT토큰을 신청합니다. 입력" style={{ wordWrap: 'break-word' }} />
                          </div>
                          )
                          }
                          {/* /////////////////////////////////////////// */}
                          {/* <input className="ml-3 w-[600px] rounded-lg border-2 text-center" type="text" onChange={(e) => setMetadata(e.target.value)} placeholder="SBT토큰을 신청합니다. 입력 후 업로드 버튼을 누르세요" style={{ wordWrap: 'break-word' }} /> */}
                      </div>
                      <div className='flex justify-center'>

                          <div className=' mt-2 mr-5 '>

                          {/* ////////////////////////////////////////// */}
                          {/* ///////////// */} {/*tokenId 확인 하기*/}  {/* ///////////// */}

                            <div>
                            <button type='submit' className=" hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-1 mr-2 pb-1 rounded-lg">
                            업로드
                            </button>
  

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            {/* <button onClick={onOpen} className="mr-0 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-bold ">
                                주소확인
                            </button> */}

                            <button onClick={onOpen} type='submit' className=" hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-1 mr-3 pb-1 rounded-lg ">
                            NftMataDataUri확인
                            </button>


                            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                              <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>NftMataDataUri확인</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  {/* <Lorem count={2} /> */}
                                  <div>
                                  https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/${jsondata}
                                  </div>
                                </ModalBody>
                                <ModalFooter>
                                  <Button onClick={onClose}>Close</Button>
                                </ModalFooter>
                              </ModalContent>
                            </Modal>

                            {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <input value={teacheraddress} onChange={(e)=>{setteacheraddress(e.target.value)}} placeholder="선생님 메타마스크 주소" className="text-center ml-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                            <input value={nftmatadatauri} onChange={(e)=>{setnftmatadatauri(e.target.value)}} placeholder="NftMataDataUri" className="text-center mr-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />          
                            <button className='mr-5 hover:bg-gray-300 bg-gray-200' onClick={studentmintnft}>MintSBT</button>   
  
                            <input value={studentchecktokenid} onChange={(e)=>{setstudentchecktokenid(e.target.value)}} placeholder="NftMataDataUri" className="text-center mr-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />           
                            <button className='mr-5 hover:bg-gray-300 bg-gray-200' onClick={studentchecktokenidfunction}>
                              TokenId
                            </button>
                            {/* {studentchecktokenid && <p>TokenId : {studentchecktokenid}</p>}        */}

                            <button className='ml-3 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-1 mr-2 pb-1 rounded-lg' onClick={handleShowImageButtonClick}>
                              입력 방법
                            </button>   
                            </div>

                          {/* ////////////////////////////////////////// */}
                          </div>
                      </div>
                   </form>
                </div>
              </div>
        </div>
    );
}
export default MakeNft









