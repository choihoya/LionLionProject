//"https://olbm.mypinata.cloud/ipfs/QmQNJ5rnuknD53yPgj5uQeXWwzVk7Svhox9g7Qx7CSYgBN/1.json"
import { useState } from 'react';
import axios from 'axios';

function Target(){
    const [fileImg, setFileImg] = useState(null);
    const [metadata, setMetadata] = useState();
    const [showImage, setShowImage] = useState(true);
    const [showInput, setShowInput] = useState(false);
    const [imagedata,setimagedata]=useState();
    const [jsondata,setjsondata]=useState();

    const handleImageClick = () => {
        setShowImage(false);
        setShowInput(true);
      };
  
      const handleShowImageButtonClick = () => {
        setShowImage(true);
        setShowInput(false);
      };

    const sendFileToIPFS = async (e) => {
        e.preventDefault();
        // console.log(process.env.REACT_APP_PINATA_API_JWT_KEY);

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
            console.log(resFile.data.IpfsHash);
            setimagedata(resFile.data.IpfsHash);
            console.log(imagedata);
            // const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
            // console.log(ImgHash); 

        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error)
        }
    }
    }
    
    const sendJsonToIPFS = async (e) => {
        e.preventDefault();
        try{
            const json = JSON.stringify({
              detail: metadata,
              image: `https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/QmeoRTivgKijbw8hk1gyCU6Ni9cd4BxzvqCDi7tjzU2vzo`,
                });
      
                const resJson = await axios.post(
                  'https://api.pinata.cloud/pinning/pinJSONToIPFS',
                  {
                    data: json,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${process.env.REACT_APP_PINATA_API_JWT_KEY}`,
                    },
                  }
                );
                // console.log(resJson.data.IpfsHash);
                setjsondata(resJson.data.IpfsHash);  ;
                console.log(jsondata);
  
        }catch(error){
            console.log(error)
        }
  
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const handleOpenModalimagedata = () => {
    const newWindow = window.open('', '_blank', 'width=400,height=300');
    newWindow.document.body.innerHTML = `
      <div style="background-color: white; border: 1px solid gray; padding: 20px;">
        <h2 style="margin-bottom: 10px;">ImagedataUri</h2>
        <p>  <input type="text" value="https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/${imagedata}" placeholder="Enter modal content..." style="margin-bottom: 10px;" /></p>
        <button style="background-color: #3f51b5; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px; ">Close Modal</button>
      </div>
    `;
    newWindow.document.body.style.margin = '0';
    newWindow.document.body.style.display = 'flex';
    newWindow.document.body.style.justifyContent = 'center';
    newWindow.document.body.style.alignItems = 'center';
    newWindow.document.body.querySelector('button').addEventListener('click', () => {
      newWindow.close();
    });
  };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const handleOpenModaljsondata = () => {
    const newWindow = window.open('', '_blank', 'width=400,height=300');
    newWindow.document.body.innerHTML = `
      <div style="background-color: white; border: 1px solid gray; padding: 20px;">
        <h2 style="margin-bottom: 10px;">JsondataUri</h2>
        <p>  <input type="text" value="https://scarlet-peculiar-llama-283.mypinata.cloud/ipfs/${jsondata}" placeholder="Enter modal content..." style="margin-bottom: 10px;" /></p>
        <button style="background-color: #3f51b5; color: white; padding: 10px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px; ">Close Modal</button>
      </div>
    `;
    newWindow.document.body.style.margin = '0';
    newWindow.document.body.style.display = 'flex';
    newWindow.document.body.style.justifyContent = 'center';
    newWindow.document.body.style.alignItems = 'center';
    newWindow.document.body.querySelector('button').addEventListener('click', () => {
      newWindow.close();
    });
  };
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const onClearjsondataUri=()=>{
    setjsondata("");
};
const onClearimagedataUri=()=>{
    setimagedata("");
};

    return(

        <div>
            
            <div className="max-w-screen-xl mx-auto h-[15px] flex mb-8 justify-between">
                <div className='mt-5 ml-8 font-semibold '>
                    2. 선정한 목표 & 달성한 목표 정보 업로드
                </div>
                <div className='mt-5 ml-8 font-semibold mr-8 '>
                ※ 자유로운 양식으로 작성해 주세요. 
                </div>
            </div>


            <div className="flex justify-center mt-2">
             <div className='mt-3'>
                
             <form className='mt-0.5'>
                <div className="flex">
                {/* <input type="text" placeholder="{ 세부목표 입력 양식}" className="pl-10 pr-3 py-2 rounded-lg border-2 border-black bg-white w-[600px] h-[300px] text-center"
                style={{ caretColor: 'transparent', outline: 'none' }}/> */}
                  <div className="rounded-lg border border-gray-300 p-5 w-[600px] h-[380px] ml-5 mr-2 flex justify-center items-center">
                  <img className="py-2 rounded-lg border-2 border-gray-300 bg-white w-[580px] h-[370px]" src="images/Upload.png" alt="main image" />
                      </div>
                {/* <img className="pl-1.5 pr-1.5 py-2 rounded-lg border-2 border-gray-300 bg-white w-[600px] h-[380px]" src="images/Upload.png" alt="main image" /> */}
                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////     */}
                {/* <input className="ml-3 w-[600px] rounded-lg border-2 text-center" type="text" onChange={(e) => setMetadata(e.target.value)} placeholder="Metadata를 입력해주세요" style={{ wordWrap: 'break-word' }} /> */}
                {showImage && 
                          (
                            <div onClick={handleImageClick} className=" rounded-lg border border-gray-300  p-5 w-[600px] h-[380px] ml-3">
                            {/* Content */}
                            <div className='mt-7'>
                            <div className='mb-5 ml-1 text-center font-semibold'>※폴리곤 블록체인에 작성된 내용이 기록됩니다. 신상정보는 기재하지 마세요</div>
                            <div className='mb-3 text-center'>1.SBT 발급받기 위해 이뤄야 할 목표를 입력해 주세요</div>                               
                            <div className='mb-3 text-center'>2.목표를 이루기 위해 어떤 노력을 기울였는지 입력해 주세요</div>    
                            <div className='mb-3 ml-3 text-center'>3. 목표를 달성하는 과정에서 배운 내용을 기록 해주세요</div>    
                            <div className='mb-3 ml-3 text-center'>4. 내용 입력이 완료되면 세부목표 Json파일 옆 업로드 버튼을 눌러 주세요</div>
                            <div className='mb-3 ml-3 text-center'>5. 달성한 목표 정보를 파일을 선택 후 업로드 버튼을 눌러 주세요</div>       
                            <div className='mb-3 ml-3 text-center'>6. ImageUri버튼을 클릭 후, Uri를 복사하여 3. ImageUri에 입력해 주세요</div> 
                            <div className='mb-3 ml-3 text-center'>7. JsonUri버튼을 클릭 후, Uri를 복사하여 3. JsonUri에 입력해 주세요</div>                            
                            </div>
                          </div>
                         
                          )
                          }

                          {showInput && 
                          (
                          <div>
                             <input className="ml-3  w-[600px] h-[380px] rounded-lg border-2 text-center" type="text" onChange={(e) => setMetadata(e.target.value)} placeholder="자유로운 양식으로 입력해 주세요" style={{ wordWrap: 'break-word' }} />
                          </div>
                          )
                          }
                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                </div>
                </form>
              {imagedata&&jsondata ? 
              (
               <div>

                <div className='flex justify-end mr-3 mt-2 mb-3'>
                    <button className='mr-0 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-bold ' onClick={handleShowImageButtonClick}>
                                입력 방법
                    </button> 
                    <button className='mr-0 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-bold'onClick={ handleOpenModalimagedata } >
                                ImageUri
                    </button> 
                    <button className='mr-0 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-bold 'onClick={  handleOpenModaljsondata }>
                                JsonUri
                    </button> 
                    <button className='mr-0 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-bold 'onClick={  onClearjsondataUri }>
                                JsonDataUri 제거하기
                    </button> 
                    <button className='mr-0 hover:bg-gray-300 bg-gray-100 m-2 pl-5 pr-5 pt-3 pb-3 rounded-lg font-bold 'onClick={  onClearimagedataUri }>
                                ImageDataUri 제거하기
                    </button> 
                </div>
                </div> 
              )
              :(
                //////////////////////////////////////////////////////////////////////////////////////////////////////////
                <div>

                <div className='flex justify-end'>
                    <button className='mt-2 pr-1 pl-1 mr-16 hover:bg-gray-300 bg-gray-100 rounded-lg' onClick={handleShowImageButtonClick}>
                                입력 방법
                    </button> 

                    <div className=' mt-2 mr-1 pr-2 flex  '>
                        <div className='mt-2'>
                        세부목표 Json파일
                        </div>
                        <form onSubmit={sendJsonToIPFS}>
                        <button  type='submit' className=" hover:bg-gray-300 ml-2  pr-2 pl-2 br-   rounded-lg mt-2 mb-2 ">
                            업로드
                        </button>
                        </form>
                   </div>
                </div>


                <div className='mb-3 mr-3' >
                <form onSubmit={sendFileToIPFS} className='mt-2' >
                <div className='flex justify-end '>
                <input type="file" onChange={(e) =>setFileImg(e.target.files[0])} required />
                <button type='submit' className='mr-1.5'>업로드</button>  
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
export default Target

