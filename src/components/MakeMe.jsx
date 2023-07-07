import React from 'react';

const MakeMe = () => {
  return (
    <div className=" text-black py-6  mb-1 max-w-screen-xl mx-auto font-semibold text-xl h-[510px]">
    <div className='ml-6'>
      ※ SBT 변경 권한을 위임받기 위해서는 MAKEME 홈페이지로 연락주세요
    </div>
    <div className=" text-black py-6 mb-1 max-w-screen-xl mx-auto h-[380px] flex">
          <div className='bg-yellow-100 w-[300px] ml-2 mr-2 rounded-lg'>
            <div className=' ml-5 mt-5'>
             1. 목표설정
            </div>
             <div className='ml-8 font-bold text-lg mb-3'>SBT 민팅하기</div>
             <img className="rounded-lg h-[300px]" src="images/Goal.png" alt="main image" />
          </div>
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className='bg-purple-100 w-[300px] ml-2 mr-2 rounded-lg'>
            <div className=' ml-5 mt-5 text-lg'>
             2. 목표달성
            </div>
             <div className=' ml-8 font-bold text-lg mb-3'>목표 정보 pinata업로드</div>
             <img className="rounded-lg h-[300px]" src="images/goalfinsh.png" alt="main image" />
          </div>
            {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className='bg-orange-100 w-[300px] ml-2 mr-2 rounded-lg'>
            <div className=' ml-5 mt-5 text-lg'>
             3. 정보저장
            </div>
             <div className='ml-8 font-bold text-lg mb-3 '>폴리곤 체인에 정보 저장</div>
             <img className="rounded-lg h-[300px]" src="images/polygon.png" alt="main image" />
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
          </div>
          <div className='bg-blue-100 w-[300px] ml-2 mr-2 rounded-lg'>
            <div className=' ml-5 mt-5 text-lg '>
            4. 정보확인
            </div>
             <div className='ml-8 font-bold text-lg mb-3'>선생님이 학생 정보 확인</div>
             <img className="rounded-lg h-[300px] " src="images/teacher.png" alt="main image" />
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}

          </div>
          <div className='bg-blue-200 w-[300px] ml-2 mr-2 rounded-lg'>
            <div className=' ml-5 mt-5 text-lg'>
             5. 정보 변경
            </div>
             <div className=' ml-8  text-lg mb-3'>SBT MataData 변경</div>
             <img className="rounded-lg h-[300px]" src="images/metadata.png" alt="main image" />
          </div>
    </div>
    </div>
  );
};
export default MakeMe;
