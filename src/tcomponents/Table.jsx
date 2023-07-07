import React from 'react';

const Table = ({studentdata}) => {
    return (
        <div className=' max-w-screen-xl mx-auto h-[230px]'>
        <div className=" bg-white mt-3 ml-7 ">
          <div className="flex">
            <div className=" bg-gray-200 rounded-lg mr-2 p-5">
              {/* Header */}
              <div className='mb-2'>학생의 메타마스크 지갑주소</div>
              <div className='mb-2'>달성한 목표 정보</div>
              <div className='mb-2'>SBT 획득을 위해 선정한 목표 정보</div>
              <div className='mb-2'>목표선정</div>
              <div className='mb-2'>목표달성</div>            
            </div>
            <div className="  flex-1 rounded-lg border border-gray-300  p-5 mr-6">
              {/* Content */}
              <div>

              <div className='mb-2 ml-3'>{studentdata[0]}</div>
              <div className='mb-2 ml-3'>{studentdata[1]}</div>    
              <div className='mb-2 ml-3'>{studentdata[2]}</div>
              {Number(studentdata[3])?
              (
                <div className='mb-2 ml-3'>{Number(studentdata[3])}</div>       
              )
              :
              (
                <div></div>
              )}

              {Number(studentdata[4])?
              (
                <div className='mb-2 ml-3'>{Number(studentdata[4])}</div>   
              )
              :
              (
                <div></div>
              )}
              </div>
            </div>
          </div>
        </div>
        </div>
      );
};

export default Table;