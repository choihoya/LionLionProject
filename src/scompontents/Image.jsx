import { useState } from "react";
import axios from 'axios';

function Image({ImgHash,setImgHash}) {
const [fileImg, setFileImg] = useState(null);

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
          console.log(resFile);
  

          ImgHash = `ipfs://${resFile.data.IpfsHash}`;
          setImgHash=ImgHash;
        //   console.log(ImgHash); 
        //   console.log(setImgHash)


      } catch (error) {
          console.log("Error sending File to IPFS: ")
          console.log(error)
      }
  }
}

return(
  <div className=" mt-2">
  <form onSubmit={sendFileToIPFS} >
  <input type="file" onChange={(e) =>setFileImg(e.target.files[0])} required />
  <button type='submit' >업로드</button>            
  </form>
  </div>
  );
}

export default Image;
