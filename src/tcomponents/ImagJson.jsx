import { useState } from "react";
import axios from 'axios';
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,Button, useDisclosure,Lorem} from '@chakra-ui/react'
import {contract} from '../web3.config'

function ImagJson({account}){
const [fileImg, setFileImg] = useState(null);
const [metadata, setMetadata] = useState();
//
const [PinataData,setPinataData] = useState();

const sendFileToIPFS = async (e) => {
    e.preventDefault();

  if (fileImg) {
      try {

          const formData = new FormData();
          formData.append("file", fileImg);

          const resFile = await axios({
              method: "post",
              url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
              data : formData,
              headers: {
                  "Authorization" : `Bearer ${process.env.REACT_APP_PINATA_API_JWT_KEY}`,
                  "Content-Type": "multipart/form-data"
              },
          });
  
          const ImgHash = `${resFile.data.IpfsHash}`;

          const resJson = await axios.post(
            'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            {
              detail: metadata,
              image: `https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/${ImgHash}`,
            },
            {
              headers: {
                Authorization: `Bearer ${process.env.REACT_APP_PINATA_API_JWT_KEY}`,
              },
            }
          );

          // console.log(resJson.data);    
          setPinataData(resJson.data.IpfsHash);
          console.log(PinataData);

      } catch (error) {
          console.log("Error sending File & Json to IPFS: ")
          console.log(error)
      }
  }
}

  const PinataDataDelete=()=>{
    setPinataData("");
  }

const [showImage, setShowImage] = useState(true);
const [showInput, setShowInput] = useState(false);
const [jsondata,setjsondata]=useState();

const handleImageClick = () => {
  setShowImage(false);
  setShowInput(true);
};

const handleShowImageButtonClick = () => {
  setShowImage(true);
  setShowInput(false);
};

//////////////////////////////////////////////////////////////////////////////////
const[tokinid,settokinid]=useState();
const[nftmatadatauri,setnftmatadatauri]=useState();
const[rchangemetadata,setrchangemetadata]=useState();
const rrchangemetadata= async ()=>{
  try {
  //  if(!account) return;
   const response = await contract.methods.changemetadata(tokinid,nftmatadatauri).send(
    {
      from : account
    }
   )
  //  console.log(response);
  setrchangemetadata(response);
   console.log(rchangemetadata);

  } catch (error) {
   console.error(error)
  }
}
//////////////////////////////////////////////////////////////////////////////////

const { isOpen, onOpen, onClose } = useDisclosure()
return(
        
        <div className="  mb-1 max-w-screen-xl mx-auto h-[530px] ">
            <div className="   ">
            <div className=' ml-8 font-semibold mt-3 mb-1'>
            2. 학생이 보유한 SBT 메타데이터 정보 수정
            </div>
        </div>
  
  
              <div className="flex justify-center mt-2">
               <div className=''>
                  
               <form className='mt-0.5'>
                  <div className="flex mb-3 ">
                  {/* <input type="text" placeholder="{ 세부목표 입력 양식}" className="pl-10 pr-3 py-2 rounded-lg border-2 border-black bg-white w-[600px] h-[300px] text-center"
                  style={{ caretColor: 'transparent', outline: 'none' }}/> */}
                                    <div className="rounded-lg border border-gray-300 w-[600px] h-[380px] mr-1 flex justify-center items-center">
                                    <img className="w-[600px] h-[350px] pl-10 pr-3 py-2 rounded-lg border-2 border-black bg-white " src="images/complete.png" alt="main image" />
                      </div>
                  {/* <img className="w-[600px] h-[380px] pl-10 pr-3 py-2 rounded-lg border-2 border-black bg-white " src="images/complete.png" alt="main image" /> */}
                  {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     */}
                  {/* <input className="ml-3 w-[600px] rounded-lg border-2 text-center" type="text" onChange={(e) => setMetadata(e.target.value)} placeholder="Metadata를 입력해주세요" style={{ wordWrap: 'break-word' }} /> */}
                  {showImage && 
                            (
                              <div onClick={handleImageClick} className=" rounded-lg border border-gray-300  p-5 w-[600px] h-[380px] ml-3">
                              {/* Content */}
                              <div className='mt-7'>
                              <div className='mb-5 ml-1 text-center font-semibold'>※작성된 내용은 학생이 발급한 SBT 메타데이터를 변경시킵니다.</div>
                              <div className='mb-3 text-center'>1.학생이 원하는 이미지를 업로드 해주세요</div>                               
                              <div className='mb-3 text-center'>2.폴리곤 체인에 저장된 정보와 사실을 기반으로 작성해 주세요</div>    
                              <div className='mb-3 ml-3 text-center'>3. 목표를 선정한 이유, 첨삭내용은 반드시 기재해 주세요</div>
                              <div className='mb-3 ml-3 text-center'>4. 목표를 달성하는 과정에서 기울인 노력& 배운내용은 반드시 기재해 주세요</div>    
                              <div className='mb-3 ml-3 text-center'>5. 옆에서 지켜보며 느낀점을 기재해 주세요</div>       
                              <div className='mb-3 ml-3 text-center'>6. pinataUri클릭하여 Uri를 복사해 주세요</div> 
                              <div className='mb-3 ml-3 text-center'>7. tokenid와 복사한 Uri를 입력 후 MetaData변경을 클릭해 주세요</div>                            
                              </div>
                            </div>
                           
                            )
                            }
  
                            {showInput && 
                            (
                            <div>
                               <input className="ml-3  w-[600px] h-[380px] rounded-lg border-2 text-center" type="text" onChange={(e) => setMetadata(e.target.value)} placeholder="♥아이들에게 따뜻한 격려의 한마다 부탁드려요.♥" style={{ wordWrap: 'break-word' }} />
                            </div>
                            )
                            }
                  {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                  </div>
                  </form>
                {PinataData ? 
                (
                 <div className=" ml-24 mt-3">
                  <button className=' hover:bg-blue-300 bg-blue-100 m-2 pl-3 pr-3 pt-2 pb-2 mr-2 rounded-lg ' onClick={handleShowImageButtonClick}>
                                  입력 방법
                      </button> 
                      
                      <button onClick={onOpen} className='mr-5 hover:bg-blue-300 bg-blue-100 ml-2 pl-3 pr-3 pt-2 pb-2 rounded-lg' >
                                 PinataUri
                      </button> 

                    <Modal onClose={onClose} isOpen={isOpen} isCentered>
                      <ModalOverlay />
                      <ModalContent>
                        <ModalHeader>PinataUri</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                          <div>
                          https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/{PinataData}
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button onClick={onClose}>Close</Button>
                        </ModalFooter>
                      </ModalContent>
                    </Modal>

                    {/* /////////////////////////////////// */}
                    <input value={tokinid} onChange={(e)=>{settokinid(e.target.value)}} placeholder="tokenId" className="text-center ml-2 pl-2 pr-2"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />
                    <input value={nftmatadatauri} onChange={(e)=>{setnftmatadatauri(e.target.value)}} placeholder="NftMataDataUri" className="text-center mr-2 pl-16 pr-16"style={{ marginLeft: '2px',border: '1px solid black', borderRadius: '0.5rem' }} />          
                    <button className='mr-5 hover:bg-blue-300 bg-blue-200 font-semibold' onClick={rrchangemetadata}>MetaData변경</button>   
                    {/* /////////////////////////////////// */}


                    <button className='mr-2 hover:bg-blue-300 bg-blue-100 m-2 pl-3 pr-3 pt-2 pb-2 rounded-lg'onClick={PinataDataDelete}>
                            PinataUri 제거
                    </button> 

                  </div> 
                  
                )
                :(
                  //////////////////////////////////////////////////////////////////////////////////////////////////////////
                  <div className="">
  
                  <div className=" flex justify-end ">
                  <button onClick={handleShowImageButtonClick} className="hover:bg-blue-200 : bg-blue-100 mr-3 rounded-lg p-2" type='submit'> 입력 방법 </button>  

                  <form onSubmit={sendFileToIPFS} className="">
                    <div className="" style={{ display: 'flex', justifyContent: 'flex-end' }}>

                        <input className="p-2" type="file" onChange={(e) => setFileImg(e.target.files[0])} required />
                        <button className="hover:bg-blue-200 mr-5 rounded-lg p-2" type='submit'>업로드</button>
                   
                    </div>
                 </form>
                  </div>
                    </div>
                  //////////////////////////////////////////////////////////////////////////////////////////////////////////
                )}
                  </div> 
              </div>
            </div>
  );
}

export default ImagJson

