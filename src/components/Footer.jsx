function Footer() {

    return(
        <div className="bg-gray-200 text-black py-6  mb-1 max-w-screen-xl mx-auto h-[300px]">
        <div className="flex items-center ml-7 ">
          <img src="images/youtube-removebg-preview.png" alt="mainimag"className=" mr-2 h-10"/>
          <img src="images/kakao-removebg-preview.png" alt="mainimag"className=" mr-2 h-10"/>
          <img src="images/instagram-removebg-preview.png" alt="mainimag"className="mr-2 h-10"/>
          <img src="images/facebook-removebg-preview .png" alt="mainimag"className="mr-2 h-10"/>           
          {/* <span className="font-semibold text-lg">Techit</span> */}
        </div>
{/* 
        <div class="mt-5">
            상호명: 블록체인스쿨 | 대표: 블체스짱 | bsc@zzang.good | 사업자 번호 :
            777-77-77777 | 통신판매업 신고번호 : 2019-서울강남-00774
        </div> */}


<div className="  mt-5 text-lg ml-7 ">
<div>이용약관 · 개인정보처리방침 · 환불규정</div>
        <div className='mt-5 text-lg'>
        상호명: 블록체인스쿨 | 대표: 블체스짱 | bsc@zzang.good | 사업자 번호 :
            777-77-77777 | 통신판매업 신고번호 : 2019-서울강남-00774
        </div>



        <div className='mt-2 text-lg'>
            주소 : 블록체인 스쿨 99팀 팀장&팀원 마음 어딘가 | 
            Copyright는 없습니다.
        </div>

        <div className='flex mt-10 justify-end mr-3'>
        <button className=' flex text-xl mt-1'> 문의하기 </button>
        <img src="images/Logoimag-removebg-preview.png" alt="mainimag"className="h-10"/>
        
        </div>
        </div>
        </div>
    );
}
export default Footer;